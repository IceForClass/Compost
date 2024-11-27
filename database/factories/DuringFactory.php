<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\During>
 */
class DuringFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\During::class;

    public function definition(): array
    {
        return [
            'regist_id' => \App\Models\Regist::pluck('id')->random(),
            'watering_done' => $this->faker->boolean,
            'stirring_done' => $this->faker->boolean,
            'green_deposit' => $this->faker->boolean,
            'green_quantity' => $this->faker->numberBetween(1, 100),
            'green_type' => $this->faker->word,
            'dry_deposit' => $this->faker->boolean,
            'dry_quantity' => $this->faker->numberBetween(1, 100),
            'dry_type' => $this->faker->word,
            'photo' => $this->faker->optional()->url,
            'observations' => $this->faker->text,
        ];
    }
}
