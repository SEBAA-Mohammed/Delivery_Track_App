<?php

namespace Database\Seeders;

use App\Models\Secteur;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SecteurSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Secteur::create([
            'secteur' => 'Fes Sud',
        ]);

        Secteur::create([
            'secteur' => 'Atlas',
        ]);
    }
}
