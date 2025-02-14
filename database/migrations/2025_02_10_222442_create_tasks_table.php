<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\TaskStatus;
use App\Enums\TaskPriority;

return new class extends Migration {
  /**
   * Run the migrations.
   */
  public function up(): void
  {
    Schema ::create('tasks', function (Blueprint $table) {

      $table -> id();
      $table -> string('title');
      $table -> text('description') -> nullable();
      $table -> string('status')
        -> default(TaskStatus::TODO->value);
      $table -> string('priority')
        -> default(TaskPriority::MEDIUM->value);
      $table -> string('price')->nullable();
      $table -> dateTime('due_date') -> nullable();
      $table -> dateTime('start_date') -> nullable();
      $table -> dateTime('completed_at') -> nullable();
      $table -> foreignId('client_id') -> nullable() -> constrained('clients')->onDelete('cascade');
      $table -> foreignId('user_id') -> nullable() -> constrained('users')->onDelete('cascade');
      $table -> unsignedInteger('position') -> default(0);
      $table -> unsignedTinyInteger('progress_percent') -> default(0);
      $table -> timestamps();
    });
  }

  /**
   * Reverse the migrations.
   */
  public function down(): void
  {
    Schema ::dropIfExists('tasks');
  }
};
