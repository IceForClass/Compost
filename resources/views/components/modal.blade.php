<!-- resources/views/components/modal.blade.php -->
<div
    x-data="{
        show: @js($show),
        title: '',
        body: '',
        openModal(data) {
            this.title = data.title || 'Default Title';
            this.body = data.body || 'Default Content';
            this.show = true;
        }
    }"
    x-on:open-modal.window="if ($event.detail.name == '{{ $name }}') openModal($event.detail.data)"
    x-on:close-modal.window="$event.detail == '{{ $name }}' ? show = false : null"
    x-show="show"
    class="fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50"
    style="display: none;">

    <!-- Backdrop -->
    <div class="fixed inset-0 bg-gray-500 dark:bg-gray-900 opacity-75" x-on:click="show = false"></div>

    <!-- Modal Content -->
    <div
        class="mb-6 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl sm:w-full {{ $maxWidth }} sm:mx-auto p-6"
        x-show="show"
        x-transition:enter="ease-out duration-300"
        x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave="ease-in duration-200"
        x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
        x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

        <h2 class="text-xl font-bold mb-4" x-text="title"></h2>
        <p x-text="body"></p>
    </div>
</div>