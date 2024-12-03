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
        Centre::factory(10)->create();
        User::factory()->create(
            [
                'name' => 'admin',
                'email' => 'admin@test.com',
                'email_verified_at' => now(),
                'password' => bcrypt('123456789'),
                'remember_token' => Str::random(10),
                'admin' => '1',
                'centre_id' => \App\Models\Centre::pluck('id')->random(),
            ]
        );
        User::factory(10)->create();
        Bolo::factory(10)->create();
        Composter::factory(3)->create();
        Cicle::factory(30)->create();
        Regist::factory(100)->create();
        Before::factory(100)->create();
        After::factory(100)->create();
        During::factory(100)->create();
    }
}