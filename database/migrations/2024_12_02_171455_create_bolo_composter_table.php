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
        Schema::create('boloComposters', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('composter_id')->unsigned()->index();
            $table->foreign('composter_id')->references('id')->on('composters')->onDelete('restrict');
            $table->bigInteger('bolo_id')->unsigned()->index();
            $table->foreign('bolo_id')->references('id')->on('bolos')->onDelete('restrict');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boloComposters');
    }
};
