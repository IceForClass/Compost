<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Regist;

class RegistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */

    public function run(): void
    {
        // $regists1 = Regist::factory(100)->create();
        // $regists2 = Regist::factory(8)->create();
        // $cicleId = 1;
        // foreach ($regists2 as $regist) {
        //     // Creates a cicle_start regist for each cicle
        //     $regist->cicle_id = $cicleId++;
        //     $regist->cicle_start = true;
        // }
        // $this->assignComposter($regists1);
        // $this->assignComposter($regists2);
    }
    function assignComposter($regists): void
    {
        /*
        This function assigns composters to regists based on the cicle.
        Every bolo should pass its cicles in subsequent composters 1, 2 and 3; hence:
            - Cicles 1, 4, 7    -> composter 1
            - Cicles 2, 5, 8    -> composter 2
            - Cicles 3, 6       -> composter 3
        
            Because:
            - Bolo 1 ->
                - Cicle 1 (Composter 1)
                - Cicle 2 (Composter 2)
                - Cicle 3 (Composter 3)
            - Bolo 2 ->
                - Cicle 4 (Composter 1)
                - Cicle 5 (Composter 2)
                - Cicle 6 (Composter 3)
            - Bolo 3 ->
                - Cicle 7 (Composter 1)
                - Cicle 8 (Composter 2)

        Bolos 1 and 2 are finished, but bolo 3 is still on phase 2 (cicle 8),
        and thus on composter 2, the only one occupied
        (check BoloSeeder and ComposterSeeder).

        Linking COMPOSTER to CICLE and not to REGIST on the database
        would have probably avoided this atrocity (I think).
        We might implement it either now or in the future if the APP continues to grow.

        Hi Elvis, sorry about this. Let me know what you think.
        Hi future Gastón, I made this for you. You're welcome.
        */

        foreach ($regists as $regist) {
            if ($regist->cicle_id == '1' || $regist->cicle_id == '4' || $regist->cicle_id == '7') {
                $regist->composter_id = '1';
                $regist->save();
            } elseif ($regist->cicle_id == '2' || $regist->cicle_id == '5' || $regist->cicle_id == '8') {
                $regist->composter_id = '2';
                $regist->save();
            } elseif ($regist->cicle_id == '3' || $regist->cicle_id == '6') {
                $regist->composter_id = '3';
                $regist->save();
            } else {
                $regist->save();
            }
        }
    }
}
