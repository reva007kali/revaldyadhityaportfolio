<div class="bg-white text-swiss-dark">
    <!-- Hero Section -->
    <div class="relative w-full min-h-[90vh] flex items-center border-b border-gray-200">
        <div class="mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-2 items-center">
            <!-- Left: Typography -->
            <div class="space-y-8">
                <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
                    {{ $hero->title ?? 'DIGITAL' }}<br>
                    <span class="text-swiss-blue">{{ $hero->subtitle ?? 'EXPERIENCE.' }}</span>
                </h1>
                <p class="text-xl sm:text-2xl font-light text-gray-600 max-w-lg leading-relaxed">
                    We craft precise digital solutions with a focus on clarity, functionality, and timeless aesthetics.
                </p>
                @if(isset($hero->cta_text) && $hero->cta_text)
                    <div class="pt-8">
                        <a href="{{ $hero->cta_link ?? '#' }}"
                            class="inline-block bg-swiss-blue text-white text-lg font-bold py-4 px-10 hover:bg-black transition-colors duration-300">
                            {{ $hero->cta_text }}
                        </a>
                    </div>
                @endif
            </div>

            <!-- Right: Image/Graphic -->
            <div class="relative h-[600px] hidden lg:block border-l border-gray-200">
                @if(isset($hero->image) && $hero->image)
                    <img class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        src="{{ asset('storage/' . $hero->image) }}" alt="Hero Background">
                @else
                    <div class="w-full h-full bg-swiss-offwhite flex items-center justify-center">
                        <span class="text-9xl font-black text-gray-200">SWISS</span>
                    </div>
                @endif
            </div>
        </div>
    </div>

    <!-- About Section -->
    <div class="border-b border-gray-200" id="about">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="relative h-[500px] lg:h-auto">
                @if(isset($about->image) && $about->image)
                    <img class="absolute inset-0 w-full h-full object-cover" src="{{ asset('storage/' . $about->image) }}"
                        alt="About Us">
                @else
                    <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
                        <span class="text-gray-300 font-bold text-xl">NO IMAGE</span>
                    </div>
                @endif
            </div>
            <div class="p-12 lg:p-24 bg-swiss-blue text-white flex flex-col justify-center">
                <h2
                    class="text-4xl font-bold mb-8 uppercase tracking-widest border-b border-white/20 pb-4 inline-block w-full">
                    About</h2>
                <h3 class="text-3xl sm:text-4xl font-bold leading-tight mb-8">
                    {{ $about->title ?? 'We believe in the power of simplicity.' }}
                </h3>
                <p class="text-lg opacity-90 leading-relaxed mb-12">
                    {{ $about->description ?? 'Our approach is rooted in the principles of Swiss design: minimalism, precision, and objectivity. We strip away the non-essential to reveal the core message.' }}
                </p>
                @if(isset($about->button_text) && $about->button_text)
                    <a href="{{ $about->button_link ?? '#' }}"
                        class="inline-block border-2 border-white text-white font-bold py-3 px-8 hover:bg-white hover:text-swiss-blue transition-colors w-max">
                        {{ $about->button_text }}
                    </a>
                @endif
            </div>
        </div>
    </div>

    <!-- Services Section -->
    <div class="py-24 border-b border-gray-200 bg-swiss-offwhite" id="services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16">
                <h2 class="text-sm font-bold uppercase tracking-widest text-swiss-blue mb-2">Capabilities</h2>
                <h3 class="text-4xl font-black tracking-tight">OUR SERVICES</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-300">
                @foreach($services as $service)
                    <div
                        class="bg-white p-10 border-r border-b border-gray-300 hover:bg-swiss-blue hover:text-white group transition-colors duration-300">
                        <div class="mb-8 w-12 h-12 text-swiss-blue group-hover:text-white transition-colors">
                            @if($service->icon)
                                @if(Str::startsWith($service->icon, 'services/'))
                                    <img src="{{ asset('storage/' . $service->icon) }}"
                                        class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:invert">
                                @else
                                    <i class="{{ $service->icon }} text-4xl"></i>
                                @endif
                            @else
                                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="square" stroke-linejoin="miter" stroke-width="2"
                                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                </svg>
                            @endif
                        </div>
                        <h4 class="text-xl font-bold mb-4 uppercase">{{ $service->title }}</h4>
                        <p class="text-gray-500 group-hover:text-white/80 leading-relaxed">
                            {{ $service->description }}
                        </p>
                    </div>
                @endforeach
            </div>

            <div class="mt-16 text-center">
                <a href="{{ route('works') }}"
                    class="inline-block border-2 border-black bg-transparent text-black text-sm font-bold uppercase tracking-widest py-4 px-12 hover:bg-black hover:text-white transition-all duration-300"
                    wire:navigate>
                    View All Works
                </a>
            </div>
        </div>
    </div>

    <!-- Projects Section -->
    <div class="py-24 border-b border-gray-200" id="projects">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between items-end mb-16">
                <div>
                    <h2 class="text-sm font-bold uppercase tracking-widest text-swiss-blue mb-2">Portfolio</h2>
                    <h3 class="text-4xl font-black tracking-tight">SELECTED WORKS</h3>
                </div>
                <div class="hidden md:block w-1/3 h-px bg-gray-200 mb-4"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                @foreach($projects as $index => $project)
                    <div class="group {{ $index % 3 == 0 ? 'md:col-span-2' : '' }}">
                        <div class="relative w-full {{ $index % 3 == 0 ? 'aspect-[21/9]' : 'aspect-square' }} bg-gray-100 overflow-hidden mb-6"
                            x-data="{ activeSlide: 0, slides: {{ $project->media->count() }} }">

                            <!-- Media Display -->
                            @if($project->media->count() > 0)
                                @foreach($project->media as $mIndex => $media)
                                    <div x-show="activeSlide === {{ $mIndex }}"
                                        class="absolute inset-0 transition-opacity duration-500">
                                        @if($media->file_type === 'video')
                                            <video src="{{ asset('storage/' . $media->file_path) }}" class="w-full h-full object-cover"
                                                controls muted loop></video>
                                        @else
                                            <img src="{{ asset('storage/' . $media->file_path) }}"
                                                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                                        @endif
                                    </div>
                                @endforeach

                                <!-- Minimalist Controls -->
                                @if($project->media->count() > 1)
                                    <div class="absolute bottom-4 right-4 flex space-x-2">
                                        <button @click="activeSlide = (activeSlide === 0) ? slides - 1 : activeSlide - 1"
                                            class="w-8 h-8 bg-white text-black flex items-center justify-center hover:bg-swiss-blue hover:text-white transition-colors">
                                            &larr;
                                        </button>
                                        <button @click="activeSlide = (activeSlide === slides - 1) ? 0 : activeSlide + 1"
                                            class="w-8 h-8 bg-white text-black flex items-center justify-center hover:bg-swiss-blue hover:text-white transition-colors">
                                            &rarr;
                                        </button>
                                    </div>
                                @endif
                            @elseif($project->image)
                                <img src="{{ filter_var($project->image, FILTER_VALIDATE_URL) ? $project->image : asset('storage/' . $project->image) }}"
                                    class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700">
                            @else
                                <div class="w-full h-full flex items-center justify-center text-gray-300 font-bold text-2xl">NO
                                    MEDIA</div>
                            @endif
                        </div>

                        <div class="flex justify-between items-start border-t border-gray-200 pt-4">
                            <div>
                                <h4 class="text-2xl font-bold uppercase mb-1">
                                    <a href="{{ $project->link ?? '#' }}"
                                        class="hover:text-swiss-blue transition-colors">{{ $project->title }}</a>
                                </h4>
                                <p class="text-gray-500 max-w-md">{{ $project->description }}</p>
                            </div>
                            <span class="text-xs font-bold uppercase tracking-widest text-gray-400">0{{ $index + 1 }}</span>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Pricing Section -->
    <div class="py-24 border-b border-gray-200 bg-swiss-offwhite" id="pricing">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-20">
                <h2 class="text-sm font-bold uppercase tracking-widest text-swiss-blue mb-2">Investments</h2>
                <h3 class="text-4xl font-black tracking-tight mb-6">TRANSPARENT PRICING</h3>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 border border-gray-300 bg-white">
                @foreach($pricing_plans as $index => $plan)
                    <div
                        class="p-10 border-b md:border-b-0 {{ $index !== 2 ? 'md:border-r' : '' }} border-gray-300 flex flex-col hover:bg-gray-50 transition-colors">
                        <h4 class="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{{ $plan->name }}</h4>
                        <div class="text-5xl font-black mb-6 text-swiss-blue">{{ $plan->price }}</div>
                        <p class="text-gray-600 mb-10 flex-grow">{{ $plan->description }}</p>

                        <ul class="space-y-4 mb-10 border-t border-gray-100 pt-8">
                            @foreach($plan->features ?? [] as $feature)
                                <li class="flex items-start text-sm">
                                    <span class="text-swiss-blue mr-3 font-bold">+</span>
                                    {{ $feature }}
                                </li>
                            @endforeach
                        </ul>

                        <a href="{{ $plan->cta_link ?? '#' }}"
                            class="block w-full py-4 border-2 border-black text-center font-bold uppercase hover:bg-black hover:text-white transition-colors">
                            {{ $plan->cta_text ?? 'Select Plan' }}
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- Contact Section -->
    <div class="py-24 bg-white" id="contact">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 class="text-sm font-bold uppercase tracking-widest text-swiss-blue mb-2">Get in Touch</h2>
                    <h3 class="text-5xl font-black tracking-tight mb-8">LET'S WORK<br>TOGETHER.</h3>
                    <p class="text-xl text-gray-600 mb-12 max-w-md">
                        Have a project in mind? Fill out the form and we'll get back to you within 24 hours.
                    </p>

                    <div class="space-y-6">
                        <div class="flex items-center">
                            <span class="w-8 h-px bg-swiss-blue mr-4"></span>
                            <span class="font-bold">hello@revaldyadhitya.com</span>
                        </div>
                        <div class="flex items-center">
                            <span class="w-8 h-px bg-swiss-blue mr-4"></span>
                            <span class="font-bold">+62 812 3456 7890</span>
                        </div>
                    </div>
                </div>

                <div class="bg-swiss-offwhite p-10">
                    @if (session()->has('message'))
                        <div class="mb-8 p-4 bg-swiss-blue text-white font-bold text-sm uppercase tracking-wide">
                            {{ session('message') }}
                        </div>
                    @endif

                    <form wire:submit.prevent="sendMessage" class="space-y-8">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="group">
                                <label for="name"
                                    class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-swiss-blue">Name</label>
                                <input type="text" wire:model="name" id="name"
                                    class="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:outline-none focus:border-swiss-blue transition-colors rounded-none"
                                    placeholder="John Doe" required>
                                @error('name') <span class="text-red-500 text-xs mt-1">{{ $message }}</span> @enderror
                            </div>
                            <div class="group">
                                <label for="email"
                                    class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-swiss-blue">Email</label>
                                <input type="email" wire:model="email" id="email"
                                    class="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:outline-none focus:border-swiss-blue transition-colors rounded-none"
                                    placeholder="john@example.com" required>
                                @error('email') <span class="text-red-500 text-xs mt-1">{{ $message }}</span> @enderror
                            </div>
                        </div>

                        <div class="group">
                            <label for="subject"
                                class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-swiss-blue">Subject</label>
                            <input type="text" wire:model="subject" id="subject"
                                class="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:outline-none focus:border-swiss-blue transition-colors rounded-none"
                                placeholder="Project Inquiry">
                            @error('subject') <span class="text-red-500 text-xs mt-1">{{ $message }}</span> @enderror
                        </div>

                        <div class="group">
                            <label for="message"
                                class="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2 group-focus-within:text-swiss-blue">Message</label>
                            <textarea id="message" wire:model="message" rows="4"
                                class="w-full bg-transparent border-b-2 border-gray-300 py-3 focus:outline-none focus:border-swiss-blue transition-colors rounded-none resize-none"
                                placeholder="Tell us about your project..." required></textarea>
                            @error('message') <span class="text-red-500 text-xs mt-1">{{ $message }}</span> @enderror
                        </div>

                        <button type="submit"
                            class="w-full bg-black text-white font-bold uppercase py-5 tracking-widest hover:bg-swiss-blue transition-colors duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>