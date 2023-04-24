@extends('layouts.defaultHome')
@section('body')
<div class="wrapper">
<style rel="stylesheet">
    .wrapper {
        min-height: 100%;
        height: auto !important;
        height: 100%;
        margin: 0 auto -200px;
    }
    .push{
        height: 200px;
    }
    .intro-feedback{
        height: 600px;
        background-image: url("/images/53.jpg");
        background-size: cover;
    }
    #contactform{
        padding-top: 10%;
        padding-bottom: 10%;
        color: #fff;
    }
</style>
    <div class="intro-feedback">

            <div class="row">
                <div class="col-sm-offset-4 col-sm-4">
                    <form method="post" id="contactform">
                        <label>YOUR NAME</label>
                        <div class="form-group" >
                            <input type="text" class="form-control" required="required" id="name" name="name" />

                        </div>
                        <label>YOUR EMAIL</label>
                        <div class="form-group" >
                            <input type="text" class="form-control" required="required" id="email" name="email" />
                        </div>
                        <label>YOUR MESSAGE</label>
                        <div class="form-group" >
                            <textarea name="message" id="message" name="message" required="required" class="form-control" style="min-height:120px;" ></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-primary">Send</button>
                        </div>

                    </form>



                </div>

            </div>
    </div>
    <!-- /.intro-header -->





    <div class="push"></div>

</div>
@stop

