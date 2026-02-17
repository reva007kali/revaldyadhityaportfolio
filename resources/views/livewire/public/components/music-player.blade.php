<div x-data="musicPlayer()" x-init="initPlayer()" class="relative z-50" @click.outside="isOpen = false">

    {{-- Hidden Audio Player --}}
    <audio x-ref="audioPlayer" class="hidden" @ended="nextTrack()" @timeupdate="updateProgress()"
        @loadedmetadata="updateDuration()"></audio>

    {{-- Trigger Button (Navbar Style) --}}
    <button @click="togglePlayer()"
        class="relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 group">

        {{-- Icon --}}
        <div x-show="!isPlaying" x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 scale-50" x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-50" class="absolute inset-0 flex items-center justify-center">
            <svg class="w-4 h-4 text-white/70 group-hover:text-orange-500 transition-colors" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
        </div>

        {{-- Playing Animation (Equalizer) --}}
        <div x-show="isPlaying" x-transition:enter="transition ease-out duration-300"
            x-transition:enter-start="opacity-0 scale-50" x-transition:enter-end="opacity-100 scale-100"
            x-transition:leave="transition ease-in duration-300" x-transition:leave-start="opacity-100 scale-100"
            x-transition:leave-end="opacity-0 scale-50" class="absolute inset-0 flex items-center justify-center">
            <div class="flex items-end gap-[3px] h-3">
                <span class="w-0.5 h-2 bg-orange-500 animate-[bounce_1s_infinite]"></span>
                <span class="w-0.5 h-3 bg-orange-500 animate-[bounce_1.2s_infinite]"></span>
                <span class="w-0.5 h-1.5 bg-orange-500 animate-[bounce_0.8s_infinite]"></span>
            </div>
        </div>
    </button>

    {{-- Expanded Player Dropdown --}}
    <div x-show="isOpen" x-transition:enter="transition ease-out duration-200"
        x-transition:enter-start="opacity-0 translate-y-2 scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 scale-100"
        x-transition:leave="transition ease-in duration-150"
        x-transition:leave-start="opacity-100 translate-y-0 scale-100"
        x-transition:leave-end="opacity-0 translate-y-2 scale-95"
        class="absolute top-full right-0 mt-6 w-80 bg-[#161618] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
        style="display: none;">

        {{-- Header --}}
        <div class="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
            <span class="text-[10px] font-black text-orange-500 uppercase tracking-widest">Music Player</span>
            <button @click="togglePlaylist()" class="text-white/50 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        {{-- Track Info --}}
        <div class="p-5 text-center">
            <div class="w-24 h-24 mx-auto bg-black rounded-xl mb-4 overflow-hidden relative shadow-lg group">
                {{-- Cover Image --}}
                <template x-if="currentTrack && currentTrack.cover_path">
                    <img :src="'/storage/' + currentTrack.cover_path"
                        class="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500">
                </template>
                <template x-if="!currentTrack || !currentTrack.cover_path">
                    <div class="w-full h-full bg-white/10 flex items-center justify-center">
                        <svg class="w-8 h-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                    </div>
                </template>

                <div class="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div class="w-2 h-2 bg-orange-500 rounded-full animate-ping" x-show="isPlaying"></div>
                </div>
            </div>
            <h4 class="text-white font-bold text-sm truncate px-4"
                x-text="currentTrack ? currentTrack.title : 'Select a track'"></h4>
            <p class="text-white/40 text-xs mt-1 font-medium tracking-wide">Background Vibes</p>
        </div>

        {{-- Controls --}}
        <div class="px-5 pb-5">
            {{-- Progress Bar --}}
            <div class="mb-2 flex justify-between text-[10px] font-medium text-white/40">
                <span x-text="formatTime(currentTime)">0:00</span>
                <span x-text="formatTime(duration)">0:00</span>
            </div>
            <div class="w-full bg-white/10 h-1 rounded-full mb-6 overflow-hidden cursor-pointer" @click="seek($event)">
                <div class="h-full bg-orange-500 relative" :style="`width: ${(currentTime / duration) * 100}%`"></div>
            </div>

            <div class="flex items-center justify-center gap-6 mb-6">
                <button @click="prevTrack()" class="text-white/60 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
                    </svg>
                </button>

                <button @click="togglePlay()"
                    class="w-12 h-12 rounded-full bg-orange-500 text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
                    <svg x-show="!isPlaying" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                    </svg>
                    <svg x-show="isPlaying" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                    </svg>
                </button>

                <button @click="stopTrack()" class="text-white/60 hover:text-white transition-colors" title="Stop">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 6h12v12H6z" />
                    </svg>
                </button>

                <button @click="nextTrack()" class="text-white/60 hover:text-white transition-colors">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
                    </svg>
                </button>
            </div>

            {{-- Volume --}}
            <div class="flex items-center gap-3 group">
                <button @click="toggleMute()" class="text-white/40 hover:text-white transition-colors">
                    <svg x-show="volume > 0" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
                    </svg>
                    <svg x-show="volume == 0" class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                </button>
                <div
                    class="flex-1 relative h-1 bg-white/10 rounded-full cursor-pointer group-hover:h-1.5 transition-all">
                    <input type="range" min="0" max="100" x-model="volume" @input="setVolume()"
                        class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10">
                    <div class="h-full bg-orange-500 rounded-full relative" :style="`width: ${volume}%`">
                        <div
                            class="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow">
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {{-- Playlist Overlay --}}
        <div x-show="showPlaylist" x-transition:enter="transition ease-out duration-200"
            x-transition:enter-start="translate-x-full" x-transition:enter-end="translate-x-0"
            x-transition:leave="transition ease-in duration-200" x-transition:leave-start="translate-x-0"
            x-transition:leave-end="translate-x-full" class="absolute inset-0 bg-[#161618] z-10 flex flex-col">
            <div class="p-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                <span class="text-[10px] font-black text-white uppercase tracking-widest">Playlist</span>
                <button @click="togglePlaylist()" class="text-white/50 hover:text-white">✕</button>
            </div>
            <div class="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
                <template x-for="(track, index) in tracks" :key="track.id">
                    <button @click="playTrack(index)"
                        class="w-full p-2 rounded-lg flex items-center gap-3 hover:bg-white/5 transition-colors text-left group"
                        :class="{ 'bg-white/10': currentTrackIndex === index }">
                        <div class="w-8 h-8 rounded bg-black flex-shrink-0 overflow-hidden relative">
                            {{-- Playlist Item Cover --}}
                            <template x-if="track.cover_path">
                                <img :src="'/storage/' + track.cover_path" class="w-full h-full object-cover">
                            </template>
                            <template x-if="!track.cover_path">
                                <div class="w-full h-full bg-white/10 flex items-center justify-center">
                                    <svg class="w-4 h-4 text-white/20" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                                    </svg>
                                </div>
                            </template>

                            <div class="absolute inset-0 bg-black/50 flex items-center justify-center"
                                x-show="currentTrackIndex === index && isPlaying">
                                <div class="w-1 h-3 bg-orange-500 animate-pulse"></div>
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-xs font-bold text-white truncate group-hover:text-orange-400 transition-colors"
                                x-text="track.title"></p>
                        </div>
                    </button>
                </template>
            </div>
        </div>
    </div>

    <script>
        function musicPlayer() {
            return {
                isOpen: false,
                isPlaying: false,
                showPlaylist: false,
                tracks: @json($tracks),
                currentTrackIndex: 0,
                volume: 50,
                lastVolume: 50,
                duration: 0,
                currentTime: 0,
                audio: null,

                get currentTrack() {
                    return this.tracks[this.currentTrackIndex];
                },

                initPlayer() {
                    this.audio = this.$refs.audioPlayer;
                    if (this.tracks.length > 0) {
                        this.loadTrack(0);
                    }
                    this.audio.volume = this.volume / 100;
                },

                loadTrack(index) {
                    if (index >= 0 && index < this.tracks.length) {
                        this.currentTrackIndex = index;
                        this.audio.src = '/storage/' + this.tracks[index].audio_path;
                        this.audio.load();
                    }
                },

                togglePlayer() {
                    this.isOpen = !this.isOpen;
                },

                togglePlaylist() {
                    this.showPlaylist = !this.showPlaylist;
                },

                togglePlay() {
                    if (this.audio.paused) {
                        this.audio.play();
                        this.isPlaying = true;
                    } else {
                        this.audio.pause();
                        this.isPlaying = false;
                    }
                },

                playTrack(index) {
                    this.loadTrack(index);
                    this.audio.play();
                    this.isPlaying = true;
                },

                stopTrack() {
                    this.audio.pause();
                    this.audio.currentTime = 0;
                    this.isPlaying = false;
                },

                nextTrack() {
                    let nextIndex = this.currentTrackIndex + 1;
                    if (nextIndex >= this.tracks.length) nextIndex = 0;
                    this.playTrack(nextIndex);
                },

                prevTrack() {
                    let prevIndex = this.currentTrackIndex - 1;
                    if (prevIndex < 0) prevIndex = this.tracks.length - 1;
                    this.playTrack(prevIndex);
                },

                setVolume() {
                    this.audio.volume = this.volume / 100;
                    if (this.volume > 0) this.lastVolume = this.volume;
                },

                toggleMute() {
                    if (this.volume > 0) {
                        this.lastVolume = this.volume;
                        this.volume = 0;
                    } else {
                        this.volume = this.lastVolume || 50;
                    }
                    this.setVolume();
                },

                updateProgress() {
                    this.currentTime = this.audio.currentTime;
                },

                updateDuration() {
                    this.duration = this.audio.duration;
                },

                seek(event) {
                    if (!this.duration) return;
                    const rect = event.currentTarget.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const percent = x / rect.width;
                    const time = percent * this.duration;
                    this.audio.currentTime = time;
                },

                formatTime(seconds) {
                    if (!seconds || isNaN(seconds)) return '0:00';
                    const m = Math.floor(seconds / 60);
                    const s = Math.floor(seconds % 60);
                    return `${m}:${s < 10 ? '0' : ''}${s}`;
                }
            }
        }
    </script>
</div>
