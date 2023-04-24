@extends('layouts.default')
@section('body')

<!-- Page Content -->
<div class="col-md-6 col-md-offset-3">
    @if(Session::has('success'))
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>{{ Session::get('success') }}</strong>
    </div>
    @endif
    <h1 class="text-center login-title">Create/Add Property</h1>
    <div class="account-wall">
        <form action="/admin/create-new-property" class="form-horizontal" role="form" method="post" enctype="multipart/form-data">
            <div class="form-group">
                <label for="image" class="col-sm-3 control-label">Property Picture</label>
                <div class="col-sm-9">
                    <div class="form-group" id="item-photos-main" >
                        <div class="fileinput fileinput-new" data-provides="fileinput"  >
                            <div class="fileinput-new thumbnail" style="width: 200px; height: 150px;">
                                <img data-src="holder.js/100%x100%" alt="">
                            </div>
                            <div class="fileinput-preview fileinput-exists thumbnail"  style="max-width: 200px; max-height: 150px;"></div>
                            <div>
                                <span class="btn btn-primary btn-file" ><span class="fileinput-new" >Select image</span><span class="fileinput-exists">Change</span>
                                    <input type="file" name="image" id="image"></span>
                                <a href="#" class="btn btn-danger fileinput-exists" data-dismiss="fileinput">Remove</a>
                            </div>
                        </div>

                    </div>
            </div>
                </div>
            <div class="form-group">
                <label for="property_name" class="col-sm-3 control-label">Property Name</label>
                <div class="col-sm-9">
                    <input type="text" id="property_name" name="property_name" class="form-control" placeholder="e.g XXX investments" required autofocus
                           placeholder="Enter Email address">
                </div>
            </div>
            <div class="form-group">
                <label for="description" class="col-sm-3 control-label">Description</label>
                <div class="col-sm-9">
                    <textarea id="description" name="description" class="form-control" placeholder="A brief description of the property" required autofocus
                              placeholder="Enter Email address">
                    </textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="location" class="col-sm-3 control-label">Location</label>
                <div class="col-sm-9">
                    <textarea id="location" name="location" class="form-control" placeholder="A brief description of the location" required
                              placeholder="Enter Email address">
                    </textarea>
                </div>
            </div>
            <div class="form-group">
                <label for="cost" class="col-sm-3 control-label">Cost </label>
                <div class="col-sm-9">
                    <input type="text" id="cost" name="cost" class="form-control" placeholder="e.g Kshs XXXX" required autofocus
                           placeholder="Enter Email address">
                </div>
            </div>
            <div class="form-group">
                <label for="bedrooms" class="col-sm-3 control-label">Number of Bedrooms </label>
                <div class="col-sm-9">
                    <input type="text" id="bedrooms" name="bedrooms" class="form-control" placeholder="e.g 1,2 etc" required autofocus
                           placeholder="Enter Email address">
                </div>
            </div>
            <div class="form-group">
                <label for="garage" class="col-sm-3 control-label">Has a garage </label>
                <div class="col-sm-9">
                    <select id="garage" name="garage" class="form-control" required autofocus>
                        <option></option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="parking" class="col-sm-3 control-label">Has Parking </label>
                <div class="col-sm-9">
                    <select id="parking" name="parking" class="form-control" required autofocus>
                        <option></option>
                        <option value="true">True</option>
                        <option value="false">False</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <label for="nature" class="col-sm-3 control-label">Nature </label>
                <div class="col-sm-9">
                    Bungalow<input type="radio" id="bungalow" name="nature" value="bungalow" class="form-control" placeholder="e.g 1,2 etc">
                    Story<input type="radio" id="story" name="nature" value="story" class="form-control" placeholder="e.g 1,2 etc">
                </div>
            </div>
            <div class="form-group">
                <label for="type" class="col-sm-3 control-label">Type of house </label>
                <div class="col-sm-9">
                    <select id="type" name="type" class="form-control" required autofocus>
                        <option></option>
                        <option value="family">Family Home</option>
                        <option value="apartment">Apartment House</option>
                        <option value="business">Busines House</option>
                    </select>
                </div>
            </div>
            <div class="form-group">
                <button class="btn btn-md btn-primary btn-block" type="submit">
                    Create House</button>
            </div>
            <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
        </form>
    </div>
</div>
@stop