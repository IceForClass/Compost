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
        Schema::create('while', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('regist_id')->unsigned()->index();
            $table->foreign('regist_id')->references('id')->on('regist');
            $table->boolean('watering_done')->default(false); // riego
            $table->boolean('stirring_done')->default(false); // revolver
            $table->boolean('fertilizer_done')->default(false); // "verde"
            $table->integer('fertilizer_quantity');
            $table->string('fertilizer_type');

            // aporte seco
            // tipo de aporte seco
            // fotografias durante
            // observaciones

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('while');
    }
};
