<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\During;

class DuringSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        During::factory(100)->create();
    }
}
