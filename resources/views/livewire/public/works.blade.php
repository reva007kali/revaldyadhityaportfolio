<div class="bg-white min-h-screen py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Header -->
        <div class="flex items-center justify-between mb-12 border-b border-gray-200 pb-8">
            <div class="flex items-center space-x-8">
                <div
                    class="w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-1">
                    <div class="w-full h-full bg-white rounded-full p-1">
                        <div
                            class="w-full h-full bg-swiss-blue rounded-full flex items-center justify-center text-white font-black text-2xl sm:text-4xl">
                            RA
                        </div>
                    </div>
                </div>
                <div>
                    <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center">
                        revaldyadhitya
                        <svg class="w-5 h-5 text-blue-500 ml-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd" />
                        </svg>
                    </h1>
                    <div class="flex space-x-6 mt-4 text-sm sm:text-base">
                        <span><span class="font-bold">{{ $projects->count() }}</span> posts</span>
                    </div>
                    <div class="mt-4">
                        <p class="font-bold">Revaldy Adhitya</p>
                        <p class="text-gray-600">Digital Designer & Developer based in Indonesia. Crafting minimal,
                            functional, and Swiss-inspired digital experiences.</p>
                        <a href="https://revaldyadhitya.com" class="text-blue-900 font-semibold">revaldyadhitya.com</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Grid Layout -->
        <div class="grid grid-cols-3 gap-1 sm:gap-8" x-data="{
            modalOpen: false,
            activeProject: null,
            activeMediaIndex: 0,
        
            openModal(project) {
                this.activeProject = project;
                this.activeMediaIndex = 0;
                this.modalOpen = true;
                document.body.style.overflow = 'hidden';
            },
        
            closeModal() {
                this.modalOpen = false;
                this.activeProject = null;
                document.body.style.overflow = 'auto';
            },
        
            nextMedia() {
                if (this.activeProject && this.activeProject.media.length > 0) {
                    this.activeMediaIndex = (this.activeMediaIndex + 1) % this.activeProject.media.length;
                }
            },
        
            prevMedia() {
                if (this.activeProject && this.activeProject.media.length > 0) {
                    this.activeMediaIndex = (this.activeMediaIndex - 1 + this.activeProject.media.length) % this.activeProject.media.length;
                }
            }
        }">
            @foreach ($projects as $project)
                <div class="relative group aspect-[3/4] bg-gray-100 cursor-pointer overflow-hidden"
                    @click="window.location.href = '{{ route('works.show', '') }}/' + '{{ $project->slug }}'">

                    @if ($project->media->count() > 0)
                        @php $firstMedia = $project->media->first(); @endphp
                        @if ($firstMedia->file_type === 'video')
                            <video src="{{ asset('storage/' . $firstMedia->file_path) }}"
                                class="w-full h-full object-cover"></video>
                            <div class="absolute top-2 right-2 text-white">
                                <svg class="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                                </svg>
                            </div>
                        @else
                            <img src="{{ asset('storage/' . $firstMedia->file_path) }}"
                                class="w-full h-full object-cover" alt="{{ $project->title }}">
                        @endif

                        @if ($project->media->count() > 1)
                            <div class="absolute top-2 right-2 text-white">
                                <svg class="w-6 h-6 drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                                </svg>
                            </div>
                        @endif
                    @elseif($project->image)
                        <img src="{{ filter_var($project->image, FILTER_VALIDATE_URL) ? $project->image : asset('storage/' . $project->image) }}"
                            class="w-full h-full object-cover" alt="{{ $project->title }}">
                    @else
                        <div class="w-full h-full flex items-center justify-center text-gray-400 bg-gray-200">
                            No Image
                        </div>
                    @endif

                    <!-- Hover Overlay -->
                    <div
                        class="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-6 text-white font-bold">

                    </div>
                </div>
            @endforeach

            <!-- Detail Modal -->
            <div x-show="modalOpen" class="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-0"
                style="display: none;">

                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black bg-opacity-80" @click="closeModal()"></div>

                <!-- Modal Content -->
                <div class="relative bg-white w-full max-w-6xl max-h-[90vh] sm:h-[85vh] flex flex-col sm:flex-row overflow-hidden rounded-sm shadow-2xl"
                    @click.stop>

                    <!-- Left: Media -->
                    <div class="w-full sm:w-[60%] bg-black flex items-center justify-center relative group">
                        <template x-if="activeProject && activeProject.media.length > 0">
                            <div class="w-full h-full flex items-center justify-center relative">
                                <template x-if="activeProject.media[activeMediaIndex].file_type === 'video'">
                                    <video :src="'/storage/' + activeProject.media[activeMediaIndex].file_path"
                                        class="max-w-full max-h-full object-contain" controls autoplay loop></video>
                                </template>
                                <template x-if="activeProject.media[activeMediaIndex].file_type !== 'video'">
                                    <img :src="'/storage/' + activeProject.media[activeMediaIndex].file_path"
                                        class="max-w-full max-h-full object-contain">
                                </template>

                                <!-- Navigation Arrows -->
                                <button x-show="activeProject.media.length > 1" @click="prevMedia()"
                                    class="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button x-show="activeProject.media.length > 1" @click="nextMedia()"
                                    class="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 focus:outline-none">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </template>
                        <template
                            x-if="activeProject && (!activeProject.media || activeProject.media.length === 0) && activeProject.image">
                            <img :src="activeProject.image.startsWith('http') ? activeProject.image : '/storage/' + activeProject
                                .image"
                                class="max-w-full max-h-full object-contain">
                        </template>
                    </div>

                    <!-- Right: Details -->
                    <div class="w-full sm:w-[40%] bg-white flex flex-col h-full border-l border-gray-200">
                        <!-- Header -->
                        <div class="p-4 border-b border-gray-200 flex items-center justify-between">
                            <div class="flex items-center space-x-3">
                                <div
                                    class="w-8 h-8 bg-swiss-blue rounded-full flex items-center justify-center text-white font-bold text-xs">
                                    RA</div>
                                <span class="font-bold text-sm">revaldyadhitya</span>
                                <span class="text-blue-500 text-xs font-semibold">• Follow</span>
                            </div>
                            <button @click="closeModal()" class="text-gray-900 hover:text-red-500">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <!-- Content (Scrollable) -->
                        <div class="flex-1 overflow-y-auto p-4 space-y-4">
                            <!-- Caption -->
                            <div class="flex space-x-3">
                                <div
                                    class="w-8 h-8 bg-swiss-blue rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xs">
                                    RA</div>
                                <div class="text-sm">
                                    <span class="font-bold mr-1">revaldyadhitya</span>
                                    <span x-text="activeProject?.description"></span>
                                    <div class="mt-2 text-blue-900 text-xs" x-show="activeProject?.link">
                                        <a :href="activeProject?.link" target="_blank" class="hover:underline">View
                                            Live
                                            Project ↗</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
