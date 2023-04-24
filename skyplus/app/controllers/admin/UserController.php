<?php

class UserController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{

        return view::make('user.index', compact('users'));
	}



	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}


	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		//
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

    //user log in method
    public function login(){
        return View::make('user.login');
    }

    //register view
    public function register(){
        return View::make('user.register');
    }

    //handle login data
    public function handleLogin(){
        $input = Input::all();

        $rules = array('login_id' => 'required' , 'password' => 'required');

        $validator = Validator::make($input , $rules);

        if($validator -> fails()){
            return Redirect::route('admin/login')->withErrors($validator);
        }else{
            $credentials = array('login_id'=> $input['login_id'] , 'password' => $input['password']);

            if(Auth::attempt($credentials)){
                return Redirect::to('admin');
            }else{
                Session::flash('success', 'Log in failed, Please check your username and password');
                return Redirect::to('admin/login');
            }
        }
    }

    //logout
    public function logout(){
        Auth::logout();

        return Redirect::to('admin/login');
    }

    //handle registration data
    /**
     *
     */
    public function postRegister()
    {
        $users = User::all();

        if ($users != null) {
            Session::flash('success', 'Sorry , there is already an administrator registered. Please log in');
            return Redirect::to('/admin/login');
        } else {
            $input = Input::all();

            $rules = array('email' => 'unique:users|email', 'loginId' => 'unique:users|login_id');

            $validator = Validator::make($input, $rules);

            if ($validator->passes()) {
                $password = $input['password'];
                $password = Hash::make($password);

                $user = new User();
                $user->login_id = $input['login_id'];
                $user->email = $input['email'];
                $user->password = $password;

                $user->save();

                return Redirect::to('/admin/login');
            } else {
                return Redirect::to('/admin/register')->withInput()->withErrors($validator);
            }
        }
    }

    public function contactUs()
    {
        return View::make('post/contactUs');
    }

    public function aboutUs(){
        return View::make('aboutUs');
    }
}
