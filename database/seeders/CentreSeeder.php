<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Centre;

class CentreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Centre::factory()->create(
            [
                'id' => '1',
                'code' => 'CMM',
                'name' => 'CIFP Majada Marcial',
                'address' => 'Camelleros, s/n',
                'logo' => "https://avatars.githubusercontent.com/u/146034810?v=4",
            ]
        );
        // Centre::factory(9)->create();
    }
}
