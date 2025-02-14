<?php

namespace App\Http\Controllers;

use App\Enums\StatusEnum;
use App\Enums\TaskPriority;
use App\Enums\TaskStatus;
use App\Models\Attachment;
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
    $tasks = Task ::with('client')
      ->where('user_id', auth() -> id())
      ->get()
      ->map(function ($task) {
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

    $validated = $request -> validate([
      'title'        => ['required', 'string', 'max:255'],
      'description'  => ['nullable', 'string'],
      'status'       => ['required', 'string'],
      'priority'     => ['required', 'string'],
      'client_id'    => ['required', 'exists:clients,id'],
      'due_date'     => ['nullable', 'date_format:Y-m-d'],
      'start_date'   => ['nullable', 'date_format:Y-m-d'],
      'completed_at' => ['nullable', 'date_format:Y-m-d'],
      'price'        => ['nullable'],
    ]);

    $validated['user_id'] = auth() -> id();
    $task      = Task ::create($validated);
    if ( $request -> hasFile('files') ) {
      $request -> validate([
        'files.*' => ['required', 'file', 'mimetypes:image/jpeg,image/png,image/gif,image/webp', 'max:2048'],
      ]);
      $files = $request -> file('files.*');
      foreach ($files as $file) {


        if ( $file -> isValid() ) {
          $filename = time() . '_' . $file -> getClientOriginalName();
          $file -> storeAs('tasks_files', $filename);
          Attachment ::create([
            'task_id'   => $task -> id,
            'user_id'   => 1,
            'client_id' => $task -> client_id,
            'file_name' => $filename,
            'file_url'  => $file -> hashName(),
            'file_type' => $file -> getClientMimeType(),
            'file_size' => $file -> getSize(),
          ]);
        } else {
          return redirect() -> back() -> withErrors(['Invalid file upload']);
        }
      }
    }
    return redirect() -> route('tasks.index') -> with('message', 'Task created successfully');
  }

  /**
   * Display the specified resource.
   */
  public function show(string $id)
  {
    $task = Task ::with(['client','attachments'])
      ->where('user_id', auth() -> id())
      ->findOrFail($id);
    $task = [
      ...$task -> toArray(),
      'status_label'   => TaskStatus ::labels()[ $task -> status -> value ],
      'priority_label' => TaskPriority ::labels()[ $task -> priority -> value ],
    ];
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
