<section class="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
    <header class="mb-6">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {{ __('Borrar Cuenta') }}
        </h2>

        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {{ __('Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán de forma permanente. Antes de eliminar su cuenta, descargue todos los datos o la información que desee conservar.') }}
        </p>
    </header>

    <div class="space-y-6">
        <x-danger-button x-data="" x-on:click.prevent="$dispatch('open-modal', 'confirm-user-deletion')"
            class="w-full sm:w-auto">{{ __('Borrar') }}</x-danger-button>

        <x-modal name="confirm-user-deletion" :show="$errors->userDeletion->isNotEmpty()" focusable>
            <form method="post" action="{{ route('profile.destroy') }}"
                class="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg">
                @csrf
                @method('delete')

                <h2 class="text-lg font-medium text-gray-900 dark:text-gray-100">
                    {{ __('¿Estás seguro de querer eliminar tu cuenta?') }}
                </h2>

                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {{ __('Una vez que se elimine su cuenta, todos sus recursos y datos se eliminarán de forma permanente. Antes de eliminar su cuenta, descargue todos los datos o la información que desee conservar.') }}
                </p>

                <div class="mt-6">
                    <x-input-label for="password" value="{{ __('Password') }}" class="sr-only" />

                    <x-text-input id="password" name="password" type="password"
                        class="mt-1 block w-3/4 rounded-lg border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                        placeholder="{{ __('Password') }}" />

                    <x-input-error :messages="$errors->userDeletion->get('password')" class="mt-2" />
                </div>

                <div class="mt-6 flex justify-end gap-4">
                    <x-secondary-button x-on:click="$dispatch('close')" class="w-full sm:w-auto">
                        {{ __('Cancelar') }}
                    </x-secondary-button>

                    <x-danger-button class="ms-3 w-full sm:w-auto">
                        {{ __('Borrar') }}
                    </x-danger-button>
                </div>
            </form>
        </x-modal>
    </div>
</section>
