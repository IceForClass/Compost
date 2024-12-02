<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\BoloComposter>
 */
class BoloComposterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'bolo_id' => \App\Models\Bolo::pluck('id')->random(),
            'composter_id' => \App\Models\Composter::pluck('id')->random(),
        ];
    }
}
