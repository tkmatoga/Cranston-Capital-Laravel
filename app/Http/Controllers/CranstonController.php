<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CranstonController extends Controller
{
    public function cranston()
    {

        return view('cranstonforms');
    }


    public function show($id)
    {
        // Logic for retrieving a specific record
    }

    public function store()
    {
        $form= new Form;

        $form->firstname = request('firstname');
        $form->lastname = request('lastname');
        $form-> businessname= request('businessname');
        $form-> businessphone= request('businessphone');
        $form->save();

    }

public function submitForm(Request $request)
{
    $validatedData = $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required'
    ]);


    return response()->json(['message' => 'Form submitted successfully']);
 }
}
