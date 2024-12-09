<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\After;
use App\Models\Regist;

class AfterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Genera un after para cada registro existente
        $regists = Regist::all();
        foreach ($regists as $regist) {
            After::factory()->create(['regist_id' => $regist->id]);
        }
    }
}