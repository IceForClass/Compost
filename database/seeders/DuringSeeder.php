<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\During;
use App\Models\Regist;

class DuringSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        // Genera un during para cada registro existente
        $regists = Regist::all();
        foreach ($regists as $regist) {
            During::factory()->create(['regist_id' => $regist->id]);
        }
    }
}
