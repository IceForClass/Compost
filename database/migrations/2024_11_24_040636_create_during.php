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
        Schema::create('durings', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('regist_id')->unsigned()->index();
            $table->foreign('regist_id')->references('id')->on('regists')->onDelete('cascade');
            $table->boolean('watering_done')->default(false)->nullable(); // riego
            $table->boolean('stirring_done')->default(false)->nullable(); // remover
            $table->boolean('green_deposit')->default(false)->nullable(); // aporte verde
            $table->integer('green_quantity')->nullable(); // cantidad verde
            $table->string('green_type')->nullable(); // tipo verde
            $table->boolean('dry_deposit')->default(false)->nullable(); // aporte seco
            $table->integer('dry_quantity')->nullable(); // cantidad seco
            $table->string('dry_type')->nullable(); // tipo seco
            $table->string('photo')->nullable();
            $table->string('observations')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('durings');
    }
};