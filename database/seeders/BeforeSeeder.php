<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Before;
use App\Models\Regist;

class BeforeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Genera un before para cada registro existente
        $regists = Regist::all();
        foreach ($regists as $regist) {
            Before::factory()->create(['regist_id' => $regist->id]);
        }
    }
}