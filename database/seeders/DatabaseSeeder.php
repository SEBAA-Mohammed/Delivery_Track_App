<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
            SecteurSeeder::class,
            PharmacieSeeder::class,
        ]);

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
