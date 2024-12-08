<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Cicle;

class CicleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cicles1 = Cicle::factory(3)->create();
        $cicles2 = Cicle::factory(3)->create();
        $cicles3 = Cicle::factory(2)->create();
        foreach ($cicles1 as $cicle) {
            $cicle->bolo_id = '1';
            $cicle->save();
        }
        foreach ($cicles2 as $cicle) {
            $cicle->bolo_id = '2';
            $cicle->save();
        }
        foreach ($cicles3 as $cicle) {
            $cicle->bolo_id = '3';
            $cicle->save();
        }
    }
}
