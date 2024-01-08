<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Faker\Factory as FakerFactory;

class NovelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create();
        $books = [];
        for ($i = 1; $i <= 18; $i++) {
            $books[] = [
                'title' => $faker->sentence,
                'author' => $faker->name,
                'description' => $faker->paragraph(2, true),
                'genre' => 'novel',
                'image' => '/e-book/e-book-' . $i . '.webp',
                'status' => 'published',
            ];
        }

        DB::table('novels')->insert($books);
    }
}
