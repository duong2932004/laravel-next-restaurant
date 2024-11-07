<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class,
            OderStatusSeeder::class,
            ProductSeeder::class,
            RoleSeeder::class,
            UserSeeder::class,
            PeacockBoardSeeder::class,
            ImageSeeder::class,
            TableSeeder::class,
            OderSeeder::class,
            OderProductSeeder::class
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
