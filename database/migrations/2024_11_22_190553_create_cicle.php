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
            $table->timestamp('start');
            $table->boolean("terminado")->default(0);
            $table->timestamp('end')->nullable();
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