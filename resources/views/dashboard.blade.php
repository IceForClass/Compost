<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        @if (session('token'))
            <!-- Pasamos el token para que js lo pueda usar -->
            <script>
                sessionStorage.setItem("apiToken", @json(session('token')));
            </script>
        @endif

        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-md sm:rounded-lg">
                <div class="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
                    <h3 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        {{ __("You're logged in!") }}
                    </h3>
                    <div class="mt-6">
                        <button id="fetchCentre" data-id="1"
                            class="px-5 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            Ver nombre del centro
                        </button>
                        <p id="NombreCentro" class="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200"></p>
                        <p id="DatosCentro"></p>
                    </div>
                    <div id="DatosCompostera" class="mt-4">
                        <!-- Aquí se agregarán las composteras dinámicamente -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
