<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'category_id' => $this->faker->numberBetween(1, 10),
            'name' => $this->faker->name(),
            'avatar' => $this->faker->imageUrl(),
            'description' => $this->faker->text(),
            'price' => $this->faker->numberBetween(100000, 1000000),
            'status' => $this->faker->boolean(),
        ];
    }
}
