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
        Schema::create('composters', function (Blueprint $table) {
            $table->id();
            $table->enum('type', [
                'aporte' => '11',
                'degradacion' => '22',
                'maduracion' => '33'
            ]);
            $table->bigInteger('centre_id')->unsigned()->index();
            $table->foreign('centre_id')->references('id')->on('centres')->onDelete('cascade');
            $table->boolean("ocupada")->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('composters');
    }
};