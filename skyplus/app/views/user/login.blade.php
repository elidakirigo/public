@extends('layouts.default')
@section('body')
<div class="col-sm-6 col-md-4 col-md-offset-4">
    @if(Session::has('success'))
    <div class="alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <strong>{{ Session::get('success') }}</strong>.
    </div>
    @endif
    <h1 class="text-center login-title">Log in To Skyplus Admin</h1>
    <div class="account-wall">
        @if($errors->any())
        <div class="row">
            <div class="alert alert-warning alert-dismissable">
                <Strong>Log in failed!</Strong><br>
                {{implode('',$errors->all('<li class="error">:message</li>'))}}
            </div>
        </div>
        @endif
<form action="/admin/login" class="form-horizontal" role="form" method="post">
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
                            Log in</button>
                        <label class="checkbox pull-right">
                            <input type="checkbox" value="remember-me">
                            Remember me
                        </label>
                        </div>
                    </form>
        <a href="/admin/register" class="pull-right need-help">Register </a><span class="clearfix"></span><br>

        <a href="#" class="pull-right need-help">Need help? </a><span class="clearfix"></span>
    </div>
</div>
    @stop