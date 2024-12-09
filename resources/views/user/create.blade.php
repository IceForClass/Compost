<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {{ __('Create') }} User
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ __('Create') }} User</h1>
                        <p class="mt-2 text-sm text-gray-700 dark:text-gray-300">{{ __('Add a new User') }}.</p>
                    </div>
                    <div>
                        <a type="button" href="{{ route('users.index') }}"
                            class="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Back</a>
                    </div>
                </div>

                <div class="mt-6 overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
                    <div class="px-6 py-4">
                        <form method="POST" action="{{ route('users.store') }}" role="form"
                            enctype="multipart/form-data">
                            @csrf

                            <div class="space-y-6">
                                @include('user.form')

                                <div class="mt-6 flex justify-end">
                                    <button type="submit"
                                        class="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow hover:bg-green-500 focus:ring-2 focus:ring-green-400">
                                        {{ __('Create User') }}
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
