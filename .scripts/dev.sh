#!/bin/sh

    echo "Empieza el deploy"

    cd /var/www/html/compost

    git pull origin dev

    php artisan route:clear

    sudo service php8.3-fpm reload

    npm run build

    echo "Deploy terminado"