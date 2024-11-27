<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Before>
 */
class BeforeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    protected $model = \App\Models\Before::class;

    public function definition(): array
    {
        return [
            'regist_id' => \App\Models\Regist::pluck('id')->random(),
            'temp_ambient' => $this->faker->randomFloat(3, 1),
            'temp_compost' => $this->faker->randomFloat(3, 1),
            'fill_level' => $this->faker->randomElement([
                '0%',
                '12.5%',
                '25%',
                '37.5%',
                '50%',
                '62.5%',
                '75%',
                '87.5%',
                '100%',
            ]),
            'odor' => $this->faker->randomElement([
                '0' => 'No bad smell',
                '1' => 'Neutral',
                '2' => 'Rotten',
                '3' => 'Other',
            ]),
            'insect_status' => $this->faker->boolean,
            'insect_description' => $this->faker->optional()->text,
            'humidity' => $this->faker->randomElement([
                '0' => 'Deficient',
                '1' => 'Good',
                '2' => 'Excessive',
            ]),
            'initial_photos' => $this->faker->url,
            'initial_observations' => $this->faker->optional()->text,
        ];
    }
}