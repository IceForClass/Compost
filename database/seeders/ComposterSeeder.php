<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Composter;

class ComposterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Composter::factory()->create(
            [
                'type' => '11',
                'centre_id' => '1',
                'ocupada' => '1',
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
    }
}
