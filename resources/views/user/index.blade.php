<x-app-layout>
    <x-slot name="header">
        <h2 class="text-2xl font-bold text-center text-gray-800 dark:text-gray-100">
            {{ __('Gestión de usuarios') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
            <div class="p-6 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 class="text-lg font-semibold text-gray-900 dark:text-gray-100">{{ __('Lista de usuarios') }}</h1>
                    </div>
                    <div>
                        <a href="{{ route('users.create') }}"
                            class="flex items-center justify-center gap-2 rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-green-500 focus:ring-2 focus:ring-green-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            {{ __('Añadir nuevo') }}
                        </a>
                    </div>
                </div>

                <div class="mt-6 overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700">
                    <table class="hidden sm:table min-w-full divide-y divide-gray-300 dark:divide-gray-700">
                        <thead class="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th scope="col"
                                    class="py-3 pl-4 pr-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    ID</th>
                                <th scope="col"
                                    class="py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Nombre</th>
                                <th scope="col"
                                    class="py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Correo electrónico</th>
                                <th scope="col"
                                    class="py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Centro</th>
                                <th scope="col"
                                    class="py-3 px-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                    Admin</th>
                                <th scope="col"
                                    class="py-3 px-3 text-center text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-800">
                            @foreach ($users as $user)
                            <tr class="hover:bg-gray-50 dark:hover:bg-gray-700">
                                <td
                                    class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 dark:text-gray-100">
                                    {{ ++$i }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                                    {{ $user->name }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                                    {{ $user->email }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                                    {{ $user->centre_id }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-700 dark:text-gray-300">
                                    {{ $user->admin ? 'Yes' : 'No' }}
                                </td>
                                <td class="whitespace-nowrap px-3 py-4 text-sm text-center">
                                    <form action="{{ route('users.destroy', $user->id) }}" method="POST"
                                        class="inline">
                                        <a href="{{ route('users.show', $user->id) }}"
                                            class="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600">
                                            <i class="fa-regular fa-eye"></i>
                                            {{ __('Ver más') }}
                                        </a>
                                        <a href="{{ route('users.edit', $user->id) }}"
                                            class="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded hover:bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-600">
                                            <i class="fa-regular fa-pen-to-square"></i>
                                            {{ __('Editar') }}
                                        </a>
                                        @csrf
                                        @method('DELETE')
                                        <button type="button"
                                            onclick="if(confirm('Are you sure to delete?')) { this.closest('form').submit(); }"
                                            class="inline-flex items-center gap-1 px-2 py-1 text-sm font-medium text-red-700 bg-red-100 rounded hover:bg-red-200 dark:text-red-300 dark:bg-red-700 dark:hover:bg-red-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                class="w-4 h-4">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                            {{ __('Eliminar') }}
                                        </button>
                                    </form>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>

                    <!-- Mobile View -->
                    <div class="sm:hidden">
                        @foreach ($users as $user)
                        <div
                            class="p-4 mb-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                            <p class="text-sm font-semibold text-gray-700 dark:text-gray-300">{{ __('Name') }}:
                                {{ $user->name }}
                            </p>
                            <p class="text-sm text-gray-700 dark:text-gray-300">{{ __('Email') }}:
                                {{ $user->email }}
                            </p>
                            <p class="text-sm text-gray-700 dark:text-gray-300">{{ __('Centre ID') }}:
                                {{ $user->centre_id }}
                            </p>
                            <p class="text-sm text-gray-700 dark:text-gray-300">{{ __('Admin') }}:
                                {{ $user->admin ? 'Yes' : 'No' }}
                            </p>
                            <div class="mt-2 flex items-center gap-2">
                                <a href="{{ route('users.show', $user->id) }}"
                                    class="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 12h7.5m0 0l-3-3m3 3l-3 3m-7.5-3H3m0 0l3-3m-3 3l3 3" />
                                    </svg>
                                    {{ __('Show') }}
                                </a>
                                <a href="{{ route('users.edit', $user->id) }}"
                                    class="text-sm font-medium text-indigo-700 bg-indigo-100 px-3 py-1 rounded hover:bg-indigo-200 dark:text-indigo-300 dark:bg-indigo-700 dark:hover:bg-indigo-600 flex items-center gap-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12.75l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3m0 0l-4.5 4.5m4.5-4.5v9m0 0-4.5 4.5M7.5 21V9l-4.5-4.5" />
                                    </svg>
                                    {{ __('Edit') }}
                                </a>
                                <form action="{{ route('users.destroy', $user->id) }}" method="POST"
                                    class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="button"
                                        onclick="if(confirm('Are you sure to delete?')) { this.closest('form').submit(); }"
                                        class="text-sm font-medium text-red-700 bg-red-100 px-3 py-1 rounded hover:bg-red-200 dark:text-red-300 dark:bg-red-700 dark:hover:bg-red-600 flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                            class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        {{ __('Delete') }}
                                    </button>
                                </form>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>

                <div class="mt-4">
                    {{ $users->links() }}
                </div>
            </div>
        </div>
    </div>
</x-app-layout>