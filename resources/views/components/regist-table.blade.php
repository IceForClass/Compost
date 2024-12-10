<div id="datosRegistros" class="hidetable my-16 mx-2 lg:m-16 border border-gray-300 rounded-lg text-gray-100 bg-gray-500">
    <div class="flex justify-between">
        <h2 class="m-4 text-lg font-semibold">Registros de la compostera</h2>
        <a id="clearTableButton" class="my-3 mx-3 hover:bg-gray-600 border-0 rounded-lg p-3 flex items-center justify-center opacity-70" href="#">
            <i class="text-md text-gray-100 fa-solid fa-x"></i>
        </a>
    </div>
    <div class="overflow-x-auto">
        <table class="table p-2 text-center">
            <!-- head -->
            <thead>
                <tr class="text-gray-100">
                    <th></th>
                    <th>ID Registro</th>
                    <th>Usuario</th>
                    <th>Ciclo</th>
                    <th>Bolo</th>
                    <th>Descripción de bolo</th>
                    <th>Fecha</th>
                    <th>Comienzo de ciclo</th>
                </tr>
            </thead>
            <tbody>
                <!-- Aquí se agregarán los registros dinámicamente (printData.js) -->
            </tbody>
            <x-secondary-button id="verDetallesRegistro" class="m-5 cursor-not-allowed hidden" href="#">Ver detalles (no disponible)</x-secondary-button>
        </table>
    </div>
</div>