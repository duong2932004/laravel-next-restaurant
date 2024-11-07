<?php

namespace Database\Seeders;

use App\Models\PeacockBoard;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PeacockBoardSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        PeacockBoard::factory(100)->create();
    }
}
