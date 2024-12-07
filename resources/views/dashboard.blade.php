<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {{ __('Composteras') }}
        </h2>
    </x-slot>

    @if (session('token'))
        <!-- Pasamos el token para que js lo pueda usar -->
        <script>
            sessionStorage.setItem("idUser", {{ Auth::user()->id }});
            sessionStorage.setItem("apiToken", @json(session('token')));
        </script>
    @endif

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <div class="mt-6">
                <p id="nombre-centro" class="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200"></p>
                <p id="DatosCentro"></p>
            </div>
            <div id="nombreCentro" class="mt-4"></div>
            <div id="datosCompostera" class="mt-4">
                <!-- Aquí se agregarán las composteras dinámicamente -->
            </div>
        </div>
    </div>
</x-app-layout>
