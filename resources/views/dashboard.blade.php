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
                        <p id="NombreCentro" class="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200"></p>
                        <p id="DatosCentro"></p>
                    </div>
                    <div id="DatosCompostera" class="mt-4">
                        <!-- Aquí se agregarán las composteras dinámicamente -->
                    </div>
                    <img id="compostera-llena" class="invisible" src="{{ Vite::asset('resources/images/full.png') }}"
                        alt="Imagen estado de compostera llena">
                    <img id="compostera-vacia" class="invisible" src="{{ Vite::asset('resources/images/empty.png') }}"
                        alt="Imagen estado de compostera vacía">
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
