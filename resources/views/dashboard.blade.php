<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {{ __('Composteras') }}
        </h2>
    </x-slot>

    @if (session('token'))
    <!-- Pasamos el token para que js lo pueda usar -->
    <script>
        sessionStorage.setItem("idUser", {
            {
                Auth::user() - > id
            }
        });
        sessionStorage.setItem("apiToken", @json(session('token')));
    </script>
    @endif

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="p-6 bg-gray-100 dark:bg-gray-900 rounded-lg">
            <div class="mt-6">
                <p id="nombre-centro" class="mt-4 text-sm font-medium text-gray-800 dark:text-gray-200"></p>
                <p id="DatosCentro"></p>
            </div>
            <div id="datosCompostera" class="mt-4">
                <!-- Aquí se agregarán las composteras dinámicamente -->
            </div>
            <div id="datosRegistros" class="mt-4">
                <div class="overflow-x-auto">
                    <table class="table">
                        <!-- head -->
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- row 1 -->
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                            </tr>
                            <!-- row 2 -->
                            <tr>
                                <th>2</th>
                                <td>Hart Hagerty</td>
                                <td>Desktop Support Technician</td>
                                <td>Purple</td>
                            </tr>
                            <!-- row 3 -->
                            <tr>
                                <th>3</th>
                                <td>Brice Swyre</td>
                                <td>Tax Accountant</td>
                                <td>Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>