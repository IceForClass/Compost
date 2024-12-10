<?php

namespace Database\Seeders;

use App\Models\Bolo;
use App\Models\Centre;
use App\Models\Cicle;
use App\Models\Composter;
use App\Models\Regist;
use App\Models\User;
use App\Models\Before;
use App\Models\After;
use App\Models\BoloComposter;
use App\Models\During;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            //CentreSeeder::class,
            //UserSeeder::class,
            //BoloSeeder::class,
            //ComposterSeeder::class,
            //CicleSeeder::class,
            //RegistSeeder::class,
            BeforeSeeder::class,
            AfterSeeder::class,
            DuringSeeder::class
        ]);
    }
}
