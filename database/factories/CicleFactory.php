<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Cicle>
 */
class CicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Cicle::class;

    public function definition(): array
    {
        return [
            'bolo_id' => \App\Models\Bolo::pluck('id')->random(),
            'start' => $this->faker->dateTimeThisYear,
            'end' => $this->faker->dateTimeThisYear->modify('+7 days'),
        ];
    }
}
