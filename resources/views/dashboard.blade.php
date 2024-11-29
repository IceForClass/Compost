<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        @if (session('token'))
            <p class="text-white">Token: {{ session('token') }} (esto hay que comentarlo)</p>
        @endif
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ __("You're logged in!") }}
                </div>
                <x-select-composter />
                <div>
                    <button id="fetchCentre" data-id="1"
                        class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Ver
                        nombre del centro</button>
                    <p class="text-white" id="NombreCentro"></p>
                </div>
                <div id="DatosCentro">
                    <p class="primary text-light-text-primary dark:text-dark-text-primary">aisjda</p>
                </div>
            </div>
        </div>
</x-app-layout>
