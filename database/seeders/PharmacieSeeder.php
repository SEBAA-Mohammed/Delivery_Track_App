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
            'nom' => 'Pharmacie Ghizlane',
            // 'adresse' => '',
            // 'tel' => '',
            // 'email' => '',
            'latitude' => '34.00573426969602',
            'longitude' => '-4.968765377998352',
            'secteur_id' => 1,
        ]);
        Pharmacie::create([
            'nom' => 'Pharmacie Fes Shore',
            // 'adresse' => '',
            // 'tel' => '',
            // 'email' => '',
            'latitude' => '34.00936294731844',
            'longitude' => '-4.961668252944946',
            'secteur_id' => 1,
        ]);
        Pharmacie::create([
            'nom' => 'Pharmacie Saiss',
            // 'adresse' => '',
            // 'tel' => '',
            // 'email' => '',
            'latitude' => '34.03266994564075',
            'longitude' => '-4.997014403343201',
            'secteur_id' => 2,
        ]);
        Pharmacie::create([
            'nom' => 'Pharmacie Boulvard de Joulane',
            // 'adresse' => '',
            // 'tel' => '',
            // 'email' => '',
            'latitude' => '34.031429616146895',
            'longitude' => '-4.992578029632568',
            'secteur_id' => 2,
        ]);
    }
}
