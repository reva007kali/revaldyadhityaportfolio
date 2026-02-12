<?php

namespace App\Livewire\Admin\Pricing;

use App\Models\PricingPlan;
use Livewire\Component;
use Livewire\Attributes\Layout;

#[Layout('layouts.app')]
class Index extends Component
{
    public $name;
    public $price;
    public $description;
    public $features = []; // This will be handled as a comma-separated string in the form
    public $featuresInput;
    public $cta_text;
    public $cta_link;
    public $planId;
    public $isEditing = false;

    public function render()
    {
        return view('livewire.admin.pricing.index', [
            'plans' => PricingPlan::latest()->get(),
        ]);
    }

    public function store()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|string',
            'description' => 'nullable|string',
            'featuresInput' => 'nullable|string',
            'cta_text' => 'nullable|string',
            'cta_link' => 'nullable|string',
        ]);

        $featuresArray = array_map('trim', explode(',', $this->featuresInput));

        PricingPlan::create([
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'features' => $featuresArray,
            'cta_text' => $this->cta_text,
            'cta_link' => $this->cta_link,
        ]);

        $this->reset(['name', 'price', 'description', 'featuresInput', 'cta_text', 'cta_link']);
        session()->flash('message', 'Pricing plan created successfully.');
    }

    public function edit($id)
    {
        $plan = PricingPlan::findOrFail($id);
        $this->planId = $id;
        $this->name = $plan->name;
        $this->price = $plan->price;
        $this->description = $plan->description;
        $this->featuresInput = implode(', ', $plan->features ?? []);
        $this->cta_text = $plan->cta_text;
        $this->cta_link = $plan->cta_link;
        $this->isEditing = true;
    }

    public function update()
    {
        $this->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|string',
            'description' => 'nullable|string',
            'featuresInput' => 'nullable|string',
            'cta_text' => 'nullable|string',
            'cta_link' => 'nullable|string',
        ]);

        $featuresArray = array_map('trim', explode(',', $this->featuresInput));

        $plan = PricingPlan::findOrFail($this->planId);
        $plan->update([
            'name' => $this->name,
            'price' => $this->price,
            'description' => $this->description,
            'features' => $featuresArray,
            'cta_text' => $this->cta_text,
            'cta_link' => $this->cta_link,
        ]);

        $this->reset(['name', 'price', 'description', 'featuresInput', 'cta_text', 'cta_link', 'planId', 'isEditing']);
        session()->flash('message', 'Pricing plan updated successfully.');
    }

    public function delete($id)
    {
        PricingPlan::findOrFail($id)->delete();
        session()->flash('message', 'Pricing plan deleted successfully.');
    }

    public function cancel()
    {
        $this->reset(['name', 'price', 'description', 'featuresInput', 'cta_text', 'cta_link', 'planId', 'isEditing']);
    }
}
