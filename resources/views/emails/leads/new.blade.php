<x-mail::message>
# New Lead Captured!

**Name:** {{ $lead->name }}  
**Contact:** {{ $lead->contact }}  
**Project Type:** {{ $lead->project_type }}  
**Budget:** {{ $lead->budget_range }}

**Description:**  
{{ $lead->project_description }}

**AI Notes:**  
{{ $lead->ai_notes }}

<x-mail::button :url="route('admin.leads')">
View in Admin Panel
</x-mail::button>

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
