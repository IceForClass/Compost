#!/bin/sh

    echo "Empieza el deploy"

    cd /var/www/html/Compost

    git pull origin production

    php artisan optimize:clear

    npm run build

    echo "Deploy terminado"
