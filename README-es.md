[![Deploy to vps](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml/badge.svg?branch=dev)](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml)
[![Deploy to vps (prod)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml/badge.svg)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml)

## Idioma
[English](README.md) | **Español**

# EcoBitácora

## Instalación

Para instalar la aplicación EcoBitácora, sigue estos pasos:

### Requisitos previos

* PHP 8.3+
* Laravel 11+
* MariaDB

### Configuración del servidor

1. Crea una base de datos y un usuario con permisos completos sobre la base de datos.
2. Anota el nombre de la base de datos, el usuario y la contraseña, ya que los necesitarás para configurar el archivo `.env`.

### Configuración del archivo `.env`

1. Crea un archivo `.env` en la raíz del proyecto.
2. Agrega las siguientes variables de entorno:
    * `DB_CONNECTION`: mariadb
	* `DB_DATABASE`: {nombre de la base de datos}
	* `DB_USERNAME`: {usuario de la base de datos}
	* `DB_PASSWORD`: {contraseña de la base de datos}
4. Genera la clave API ejecutando el comando `php artisan key:generate`.

### Instalación de dependencias

1. Ejecuta el comando `composer install` para instalar las dependencias de PHP.
2. Ejecuta el comando `npm install` para instalar las dependencias de Node.js.

### Configuración de la base de datos

1. Ejecuta el comando `php artisan migrate` para crear las tablas de la base de datos.
2. Ejecuta el comando `php artisan db:seed` para poblar la base de datos con datos iniciales.

En los siguientes despliegues, se puede utilizar el comando `php artisan migrate:fresh --seed` para combinar ambas acciones.

### Construcción del proyecto

Ejecuta el comando `npm run build` para construir el proyecto.

### Desarrollo

Durante el desarrollo, puedes utilizar el comando `npm run dev` para construir el proyecto y acceder mediante el explorador en la IP indicada. Es recomendable también el uso de Laragon.