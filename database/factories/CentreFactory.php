<?php

namespace Database\Factories;

use App\Models\Centre;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Centre>
 */
class CentreFactory extends Factory
{

    protected $model = Centre::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            'code' => $this->faker->unique()->regexify('[A-Z0-9]{3}'),
            'name' => $this->faker->randomElement(['IES Puerto del Rosario', 'IES San Diego de Alcalá', 'CIFP Majada Marcial', 'IES Santo Tomás de Aquino', 'IES La Oliva', 'IES Puerto Cabras', 'IES Corralejo', 'IES Vigán', 'IES Gran Tarajal', 'IES Jandía']),
            'address' => $this->faker->address,
            'logo' => $this->faker->imageUrl,
        ];
    }
}
