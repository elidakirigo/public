<?php

class Property extends \Eloquent {
    protected $table = 'property';
	protected $fillable = ['property_name','description','location',
        'cost','bedrooms','tabs','garage','parking','nature','type','asset_id'];

    public function asset(){
        return $this->belongsTo('Asset');
    }
}