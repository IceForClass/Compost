<div class="space-y-6">

    <div>
        <x-input-label for="name" :value="__('Name')" />
        <x-text-input id="name" name="name" type="text" class="mt-1 block w-full" :value="old('name', $user?->name)"
            autocomplete="name" placeholder="Name" />
        <x-input-error class="mt-2" :messages="$errors->get('name')" />
    </div>
    <div>
        <x-input-label for="email" :value="__('Email')" />
        <x-text-input id="email" name="email" type="text" class="mt-1 block w-full" :value="old('email', $user?->email)"
            autocomplete="email" placeholder="Email" />
        <x-input-error class="mt-2" :messages="$errors->get('email')" />
    </div>
    <div>
        <x-input-label for="centre_id" :value="__('Centre Id')" />
        <x-text-input id="centre_id" name="centre_id" type="text" class="mt-1 block w-full" :value="old('centre_id', $user?->centre_id)"
            autocomplete="centre_id" placeholder="Centre Id" />
        <x-input-error class="mt-2" :messages="$errors->get('centre_id')" />
    </div>
    <div>
        <x-input-label for="admin" :value="__('Admin')" />
        <!-- idk el motivo por el que es necesario esto -->
        <input type="hidden" name="admin" value="0">
        <div class="flex items-center mt-1">
            <input id="admin" name="admin" type="checkbox"
                class="rounded border-gray-300 text-indigo-600 shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value="1" @checked(old('admin', $user?->admin)) />
        </div>
        <x-input-error class="mt-2" :messages="$errors->get('admin')" />
    </div>


</div>
