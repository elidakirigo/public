<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@homPage');
Route::group(array('prefix' => 'user') , function(){
  Route::get('contact_us', array('as' => 'user.contactUs','uses'=>'UserController@contactUs'));
  Route::get('about_us', array('as' => 'user.aboutUs','uses'=>'UserController@aboutUs'));
});
/*
 * Routes group to handle admin registration and login
 */
Route::group(array('prefix' => 'admin'), function(){
    Route::get('login', array('as' => 'login.form', 'uses' => 'UserController@login'));
    Route::post('login', array('as' => 'login.post', 'uses' => 'UserController@handleLogin'));
    Route::get('register', array('as' => 'register.form', 'uses' => 'UserController@register'));
    Route::post('register', array('as' => 'register.post', 'uses' => 'UserController@postRegister'));
    Route::get('logout', array('as'=>'logout.logout','uses'=> 'UserController@logout'));
});

/*
 * Route group to handle admin tasks after authentication success
 */
Route::group(array('before'=>'auth','prefix' => 'admin'), function(){
    Route::get('/', array('as' => 'admin.index', 'uses'=>'AdminController@index') );
    Route::get('create-new-property' , array('as'=>'admin.create.new.propertyForm',
        'uses'=>'AdminController@createPropertyForm'));
    Route::post('create-new-property' , array('as'=>'admin.create.new.property',
        'uses'=>'AdminController@createProperty'));
});

/*
 * property urls
 */
Route::group(array('prefix' => 'property'), function(){
    Route::get('more/{id}', array('as' => 'property.view', 'uses' => 'PropertyController@show'));
});