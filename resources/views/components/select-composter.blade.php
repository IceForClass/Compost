@php
    $composters = \App\Models\Composter::all();
@endphp
<div class="w-full">
    <label for="composter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ __('Seleccionar compostera') }}
    </label>
    <div class="mt-1">
        <select wire:model="composter" id="composter" name="composter"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @foreach ($composters as $composter)
                @php
                    $regists = \App\Models\Regist::where('composter_id', $composter->id)->get();
                @endphp
                <option value="{{ $composter->id }}">Compostera {{ $composter->id }}</option>
            @endforeach
        </select>
    </div>
</div>
{{-- <div>
    <label for="composter" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {{ __('Seleccionar registro') }}
    </label>
    <div class="mt-1">
        <select wire:model="regist" id="regist" name="regist"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
            @foreach ($regists as $regist)
                <option value="{{ $regist->id }}">Registo {{ $regist->id }}</option>
            @endforeach
        </select>
    </div>
</div> --}}
