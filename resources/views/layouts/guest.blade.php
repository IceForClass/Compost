<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="light">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link rel="icon" href="{{ asset('favicon.ico') }}" type="image/x-icon">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/mode.js'])
</head>

<body class="font-sans text-gray-900 antialiased">
    <div class="flex flex-col-reverse lg:flex-row">
        <div class="lg:w-2/5 z-10 px-4 lg:p-8 min-h-screen flex flex-col justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
            <div class="text-4xl text-gray-800 dark:text-gray-200 text-center flex flex-col gap-10 my-10 items-center">
                <!-- Title and logo -->
                <div class="flex items-center gap-6">
                    <h1 class="font-title font-bold text-gray-700 dark:text-gray-300"><span class="text-green-800">Eco</span>Bitácora</h1>
                    <a href="/">
                        <x-application-logo class="w-20 h-20 fill-current text-gray-500" />
                    </a>
                </div>
                <p class="text-2xl">Accede a tu cuenta</p>
            </div>
            <!-- Login form -->
            <div
                class="w-full rounded sm:max-w-md mt-3 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {{ $slot }}
            </div>
        </div>
        <img class="invisible lg:visible absolute right-0 h-full filter" src="{{ Vite::asset('resources/images/login.webp') }}" alt="">
    </div>
</body>

</html>