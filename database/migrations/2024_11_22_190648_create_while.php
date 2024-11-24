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
            $table->boolean('stirring_done')->default(false); // remover
            $table->boolean('green_deposit')->default(false); // aporte verde
            $table->integer('green_quantity'); // cantidad verde
            $table->string('green_type'); // tipo verde
            $table->boolean('dry_deposit')->default(false); // aporte seco
            $table->integer('dry_quantity'); // cantidad seco
            $table->string('dry_type'); // tipo seco
            $table->string('photo')->nullable();
            $table->string('observations');
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
