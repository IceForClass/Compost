<img align="right" src="resources/images/logo.png" width="350" alt="EcoBitácora">


[![Deploy to vps](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml/badge.svg?branch=dev)](https://github.com/IceForClass/Compost/actions/workflows/deploy.dev.yml)
[![Deploy to vps (prod)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml/badge.svg)](https://github.com/IceForClass/Compost/actions/workflows/deploy.prod.yml)

## Choose your language
**English** | [Español](README-es.md)

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