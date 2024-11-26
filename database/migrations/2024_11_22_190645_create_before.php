<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('before', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('regist_id')->unsigned()->index();
            $table->foreign('regist_id')->references('id')->on('regists');
            $table->float('temp_ambient', 3, 1);
            $table->float('temp_compost', 3, 1);
            $table->enum('fill_level', [
                '0%',
                '12.5%',
                '25%',
                '37.5%',
                '50%',
                '62.5%',
                '75%',
                '87.5%',
                '100%'
            ]);
            $table->enum('odor', [
                '0' => 'No bad smell',
                '1' => 'Neutral',
                '2' => 'Rotten',
                '3' => 'Other'
            ]);
            $table->boolean('insect_status');
            $table->string('insect_description');
            $table->enum('humidity', [
                '0' => 'Deficient',
                '1' => 'Good',
                '2' => 'Excessive'
            ]);
            $table->string('initial_photos'); // initial photos (URL of the image)
            $table->text('initial_observations'); // initial observations
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('before');
    }
};
