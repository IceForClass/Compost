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
        Schema::create('cicles', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('bolo_id')->unsigned()->index();
            $table->foreign('bolo_id')->references('id')->on('bolos');
            $table->timestamp('start');
            $table->timestamp('end');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('cicles');
    }
};
