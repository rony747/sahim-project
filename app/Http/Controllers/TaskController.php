<?php

namespace App\Http\Controllers;

use App\Enums\StatusEnum;
use App\Enums\TaskPriority;
use App\Enums\TaskStatus;
use App\Models\Client;
use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
  /**
   * Display a listing of the resource.
   */
  public function index()
  {
    $tasks = Task ::with('client') -> get() -> map(function ($task) {
      return [
        ...$task -> toArray(),
        'status_label'   => TaskStatus ::labels()[ $task -> status -> value ],
        'priority_label' => TaskPriority ::labels()[ $task -> priority -> value ],
      ];
    });
    return inertia('Tasks/Index', compact('tasks'));
  }

  /**
   * Show the form for creating a new resource.
   */
  public function create()
  {
    return inertia('Tasks/Create', [
      'clients'    => Client ::all(),
      'statuses'   => TaskStatus ::labels(),
      'priorities' => TaskPriority ::labels(),
    ]);
  }

  /**
   * Store a newly created resource in storage.
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $task = Task ::with('client') -> findOrFail($id);
    return inertia('Tasks/View', compact('task'));
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
    //
  }
}
