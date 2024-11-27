<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900 dark:text-gray-100">
                    {{ __("You're logged in!") }}
                </div>
            </div>
        </div>
    </div>

    <button id="fetchCentre" data-id="1"
        class="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">Ver
        nombre del centro</button>
    <p id="NombreCentro"></p>

    <script>
        document.getElementById('fetchCentre').addEventListener('click', function() {
            const centreId = this.getAttribute('data-id'); // Obtener el ID del centro del atributo data-id

            // Llamada al API para obtener el centro por ID
            fetch(`/api/centres/${centreId}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al obtener el centro');
                    }
                    return response.json();
                })
                .then(data => {
                    // Mostrar el nombre del centro
                    document.getElementById('NombreCentro').textContent = data.data.name;
                })
                .catch(error => {
                    console.error('Error:', error);
                    document.getElementById('NombreCentro').textContent =
                        'Error al obtener el nombre del centro';
                });
        });
    </script>

</x-app-layout>
