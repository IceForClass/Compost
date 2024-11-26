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
        Schema::create('regists', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('user_id')->unsigned()->index();
            $table->foreign('user_id')->references('id')->on('users');
            $table->bigInteger('cicle_id')->unsigned()->index();
            $table->foreign('cicle_id')->references('id')->on('cicles');
            $table->bigInteger('composter_id')->unsigned()->index();
            $table->foreign('composter_id')->references('id')->on('composters');
            $table->date('date');
            $table->boolean('cicle_start')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('regists');
    }
};
