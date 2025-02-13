<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{

  protected $table = 'attachments';
  protected $guarded = [];

  public function task ()
  {
    return $this->belongsTo(Task::class);

  }
  public function client()
  {
    return $this->belongsTo(Client::class);

  }
}
