<?php
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PostFactory extends Factory {

    public function definition() {
        $status = [
            'publish',
            'draft',
            'pending',
        ];

        $title = $this->faker->text( rand( 55, 128 ) );

        return [
            'author_id' => 1,
            'category_id' => 1,
            'title' => $title,
            'slug' => Str::slug($title),
            'excerpt' => $this->faker->realText(255),
            'body' => $this->faker->realText(2048),
            'status' => $status[rand(0, 2)],
            'created_at' => $this->faker->dateTime(),
            'updated_at' => $this->faker->dateTime(),
            'featured' => rand(0, 2048) ? 1 : 0,
        ];
    }
}
