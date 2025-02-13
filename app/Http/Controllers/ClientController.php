<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $clients = Client::all();
    return inertia('Client/Index', ['clients'=>$clients]);
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('Client/Create');
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    $validated = $request -> validate([
      'name'    => 'required',
      'email'   => 'required|email',
      'phone'   => 'nullable',
      'website' => 'nullable|url'
    ]);
    Client ::create($validated);
    return redirect('/client');

  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   */
  public function edit(string $id)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   */
  public function update(Request $request, string $id)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   */
  public function destroy(string $id)
  {
    $client = Client::findOrFail($id);
    // Delete related tasks first
    $client->tasks()->delete();
    $client->delete();
    return back()->with('success','Deleted Successfully');
  }
}
