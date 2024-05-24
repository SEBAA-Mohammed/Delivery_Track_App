<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'is_admin' => true,
            'secteur_id' => 1
        ]);

        User::factory()->create([
            'name' => 'Courier',
            'email' => 'courier@example.com',
            'secteur_id' => 1

        ]);
    }
}
