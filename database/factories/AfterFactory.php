<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\After>
 */
class AfterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\After::class;

    public function definition(): array
    {
        return [
            'regist_id' => \App\Models\Regist::pluck('id')->random(),
            'fill_level' => $this->faker->randomElement(['0%', '12.5%', '25%', '37.5%', '50%', '62.5%', '75%', '87.5%', '100%']),
            'photo' => $this->faker->optional()->imageUrl(),
            'observations' => $this->faker->sentence(),
        ];
    }
}
