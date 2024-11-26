<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Centre>
 */
class CentreFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->randomLetter . $this->faker->randomLetter . $this->faker->randomLetter,
            'name' => $this->faker->company,
            'address' => $this->faker->address,
            'logo' => $this->faker->imageUrl,
        ];
    }
}
