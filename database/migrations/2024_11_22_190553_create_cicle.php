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
            $table->foreignId('bolo_id')->nullable()->constrained('bolos')->cascadeOnDelete();
            $table->foreignId('composter_id')->nullable()->constrained('composters')->cascadeOnDelete();
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