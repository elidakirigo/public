<?php

class Asset extends \Eloquent {
    protected $table = 'asset';
	protected $fillable = ['name'];

    //defining a one to one relationship with asset
    public function property(){
        return $this->hasOne('Property');
    }
}