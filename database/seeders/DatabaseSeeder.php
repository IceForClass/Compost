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
        Centre::factory()->create(
            [
                'id' => '1',          
                'code' => 'ABC',
                'name' => 'Centro prueba',
                'address' => 'Dirección prueba',
                'logo' => "https://avatars.githubusercontent.com/u/146034810?v=4",
            ]
        );
        Centre::factory(9)->create();
        User::factory()->create(
            [
                'name' => 'admin',
                'email' => 'admin@test.com',
                'email_verified_at' => now(),
                'password' => bcrypt('123456789'),
                'remember_token' => Str::random(10),
                'admin' => '1',
                'centre_id' => '1',
            ]
        );
        User::factory(10)->create();

        Bolo::create([
            'name' => 'Bolo A',
            'description' => 'Descripción del Bolo A',
            'cicle1' => true,
            'cicle2' => false,
            'cicle3' => false,
            'finish' => false,
        ]);

        Bolo::create([
            'name' => 'Bolo B',
            'description' => 'Descripción del Bolo B',
            'cicle1' => true,
            'cicle2' => true,
            'cicle3' => false,
            'finish' => false,
        ]);

        Composter::factory()->create(
            [
                'type' => '11',
                'centre_id' => '1',
                'ocupada' => '0',
            ]
        );
        Composter::factory()->create(
            [
                'type' => '22',
                'centre_id' => '1',
                'ocupada' => '0',
            ]
        );
        Composter::factory()->create(
            [
                'type' => '33',
                'centre_id' => '1',
                'ocupada' => '0',
            ]
        );
        //Cicle::factory(30)->create();
        //Regist::factory(100)->create();
        //Before::factory(100)->create();
        //After::factory(100)->create();
        //During::factory(100)->create();
    }
}