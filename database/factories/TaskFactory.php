<?php

namespace Database\Factories;

use App\Enums\TaskPriority;
use App\Enums\TaskStatus;
use App\Models\Client;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
          'title' => fake()->sentence(4),
          'description' => fake()->optional(0.8)->paragraph(),
          'status' => fake()->randomElement(collect(TaskStatus::cases())->pluck('value')->toArray()),
          'priority' => fake()->randomElement(collect(TaskPriority::cases())->pluck('value')->toArray()),
          'price' => fake()->optional(0.6)->randomFloat(2, 10, 1000),
          'due_date' => fake()->optional(0.7)->dateTimeBetween('now', '+3 months'),
          'start_date' => fake()->optional(0.6)->dateTimeBetween('-1 month', '+1 month'),
          'completed_at' => fake()->optional(0.3)->dateTimeBetween('-1 month', 'now'),
          'client_id' => Client::factory(),
          'user_id' => 1,
          'position' => fake()->numberBetween(0, 100),
          'estimated_minutes' => fake()->optional(0.8)->numberBetween(15, 480),
          'progress_percent' => fake()->numberBetween(0, 100),
        ];
    }
}
