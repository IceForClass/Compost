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
        Schema::create('befores', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('regist_id')->unsigned()->index();
            $table->foreign('regist_id')->references('id')->on('regists')->onDelete('cascade');
            $table->float('temp_ambient', 3, 1)->nullable();
            $table->float('temp_compost', 3, 1)->nullable();
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
            ])->nullable();
            $table->enum('olor', [
                '0' => 'Sin mal olor',
                '1' => 'Neutral',
                '2' => 'Podrido',
                '3' => 'Otro'
            ])->nullable();
            $table->boolean('insect_status')->nullable();
            $table->string('insect_description')->nullable();
            $table->enum('humidity', [
                '0' => 'Deficiente',
                '1' => 'Bueno',
                '2' => 'Excesivo'
            ])->nullable();
            $table->string('initial_photos')->nullable(); // initial photos (URL of the image)
            $table->text('initial_observations')->nullable(); // initial observations
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('befores');
    }
};