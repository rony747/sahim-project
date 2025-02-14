<?php

namespace App\Models;

use App\Enums\StatusEnum;
use App\Enums\TaskPriority;
use App\Enums\TaskStatus;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{

  use HasFactory;

  protected $guarded = [];

  public function user(){
    return $this->belongsTo(User::class);
  }
  public  function client(){
    return $this->belongsTo(Client::class);
  }
  public function attachments(){
    return $this->hasMany(Attachment::class);
  }
  protected $casts = [
    'status' => TaskStatus::class,
    'priority' => TaskPriority::class
  ] ;
}
