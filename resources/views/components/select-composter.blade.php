@php
    $composters = \App\Models\Composter::all();
@endphp

<div class="w-full">
    <table class="min-w-full table-auto border-collapse border border-gray-300">
        <thead>
            <tr>
                <th class="px-4 py-2 border-b text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    {{ __('ID de Compostera') }}
                </th>
                <th class="px-4 py-2 border-b text-left text-sm font-medium text-gray-700 dark:text-gray-300">
                    {{ __('Número de Registros') }}
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($composters as $composter)
                @php
                    $registsCount = \App\Models\Regist::where('composter_id', $composter->id)->count();
                @endphp
                <tr>
                    <td class="px-4 py-2 border-b text-sm text-gray-800 dark:text-gray-300">{{ $composter->id }}</td>
                    <td class="px-4 py-2 border-b text-sm text-gray-800 dark:text-gray-300">{{ $registsCount }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>
</div>
