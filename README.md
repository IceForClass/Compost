[![Deploy to vps](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml/badge.svg?branch=dev)](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml)
[![Deploy to vps (prod)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml/badge.svg)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml)

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

En los siguientes deploys, se puede utilizar el comando `php artisan migrate:fresh --seed` para combinar ambas acciones.

### Construcción del proyecto

Ejecuta el comando `npm run build` para construir el proyecto.

### Desarrollo

Durante el desarrollo, puedes utilizar el comando `npm run dev` para construir el proyecto y acceder mediante el explorador en la IP indicada. Es recomendable también el uso de Laragon.

=====================================================

# EcoBitácora

## Installation

To install the EcoBitácora application, follow these steps:

### Prerequisites

* PHP 8.3+
* Laravel 11+
* MariaDB

### Server Configuration

1. Create a database and a user with full permissions on the database.
2. Note the database name, user, and password, as you will need them to configure the `.env` file.

### .env File Configuration

1. Create a `.env` file in the root of the project.
2. Add the following environment variables:
	* `DB_CONNECTION`: mariadb
	* `DB_DATABASE`: {database name}
	* `DB_USERNAME`: {database user}
	* `DB_PASSWORD`: {database password}
3. Generate the API key by running the command `php artisan key:generate`.

### Dependency Installation

1. Run the command `composer install` to install PHP dependencies.
2. Run the command `npm install` to install Node.js dependencies.

### Database Configuration

1. Run the command `php artisan migrate` to create the database tables.
2. Run the command `php artisan db:seed` to populate the database with initial data.

Upon subsequent deploys, `php artisan migrate:fresh --seed` can be used.

### Project Build

During development, you can use the command `npm run dev` to build the project.

### Project Execution

1. Run the command `php artisan serve` to start the development server.
2. Access the application at `http://localhost:8000`.