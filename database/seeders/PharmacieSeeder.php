<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\Pharmacie;

class PharmacieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pharmacie::create([
            'nom' => '',
            'prenom' => '',
            'adresse' => '',
            'tel' => '',
            'email' => '',
            'latitude' => '',
            'longitude' => '',
            'secteur_id' => 1,
        ]);
    }
}
