<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnAssetIdToPropertyTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		//add column asset_id to property table
        Schema::table('property', function($table){
            $table->integer('asset_id')->unsigned();
            $table->foreign('asset_id')->references('id')->on('asset');
        });
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
        //drop column
        Schema::table('property', function($table){
            $table -> dropColumn('asset_id');
        });
	}

}
