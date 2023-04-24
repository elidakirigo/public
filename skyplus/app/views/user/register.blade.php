@extends('layouts.default')
@section('body')
<div class="col-sm-6 col-md-4 col-md-offset-4">
    <h1 class="text-center login-title">Register To Skyplus Admin</h1>
    <div class="account-wall">
<form action="/admin/register" class="form-horizontal" role="form" method="post">
    <div class="form-group">
        <label for="email" class="col-sm-3 control-label">Email</label>
        <div class="col-sm-9">
            <input type="email" id="email" name="email" class="form-control" placeholder="Email" required autofocus
                   placeholder="Enter Email address">
        </div>
    </div>
                            <div class="form-group">
                                <label for="login_id" class="col-sm-3 control-label">Username</label>
                                <div class="col-sm-9">
                                    <input type="text" id="login_id" name="login_id" class="form-control" placeholder="Username/Login Id" required autofocus
                                           placeholder="Enter Username">
                                </div>
                            </div>
                            <div class="form-group">
                                 <label for="password" class="col-sm-3 control-label">Password</label>
                               <div class="col-sm-9">
                                <input type="password" id="password" name="password" class="form-control" placeholder="Password" required
                                       placeholder="Enter Password">
                               </div>
                            </div>
                        <div class="form-group">
                        <button class="btn btn-md btn-primary btn-block" type="submit">
                            Register</button>
                        </div>
                        <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
                    </form>
    </div>
</div>
    @stop