<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\App;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Composter>
 */
class ComposterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Composter::class;

    public function definition(): array
    {
        return [
            'type' => $this->faker->randomElement(['11', '22', '33']),
            'centre_id' => ("1"),
        ];
    }
}