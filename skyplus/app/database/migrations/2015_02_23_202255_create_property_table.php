<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePropertyTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('property', function(Blueprint $table)
		{
			$table->increments('id');
			$table->timestamps();
            $table->string('property_name');
            $table->string('description');
            $table->string('location');
            $table->decimal('cost');
            $table->integer('bedrooms');
            $table->string('tabs');
            $table->boolean('garage');
            $table->boolean('parking');
            $table->string('nature');//defines story or bungalow
            $table->string('type');//defines type e.g home,apartment e.tc
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('property');
	}

}
