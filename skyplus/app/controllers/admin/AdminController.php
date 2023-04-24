<?php

class AdminController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		$properties = Property::all();
        return View::make('user.admin.index' , compact('properties'));
	}


	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function createPropertyForm()
	{
		//get the create property form
        return View::make('user.admin.createPropertyForm');
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function createProperty()
	{
		//create property from form data
        $input = Input::all();
        $rules = array('image' => 'required',
            'property_name' => 'required',
            'description' => 'required',
            'location' => 'required',
            'cost' => 'required' ,
            'bedrooms' => 'required' ,
            'garage' => 'required',
            'parking' => 'required' ,
            'nature' => 'required' ,
            'type' => 'required');

//        $image = Input::file('image');
        $propertyFeatures = array('image' => Input::file('image'),'property_name'=> $input['property_name'],
            'description'=>$input['description'], 'location'=>$input['location'],'cost'=>$input['cost'],
            'bedrooms'=>$input['bedrooms'], 'garage'=>$input['garage'],'parking'=>$input['parking'],
            'nature'=>$input['nature'],'type'=>$input['type']);

        $validator = Validator::make($propertyFeatures , $rules);

        if($validator -> passes()){
            $property_image = Input::file('image');
            $fileName =null;
            if (Input::file('image')->isValid()){
                $asset = new Asset();
                $destinationPath = public_path()."/images/assets"; // upload path
                $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
                $fileName = "images/assets/".rand(00000,99999).'.'.$extension; // renameing image
                Input::file('image')->move($destinationPath, $fileName);

                $asset->name = $fileName;
                $asset->save();

                $property = new Property();
                $property->property_name = $input['property_name'];
                $property->description = $input['description'];
                $property->location = $input['location'];
                $property->cost = $input['cost'];
                $property->bedrooms = $input['bedrooms'];
                $property->garage = $input['garage'];
                $property->parking = $input['parking'];
                $property->nature = $input['nature'];
                $property->type = $input['type'];
                $property->asset_id = $asset->id;

                $property->save();

                Session::flash('success', 'Property Added successfully');
                return Redirect::to('admin/create-new-property');
            }
        }else{
            return Redirect::route('admin/create-new-property')->withInput()->withErrors($validator);
        }
	}


	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		//
	}


	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}


	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		//
	}


	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}


}
