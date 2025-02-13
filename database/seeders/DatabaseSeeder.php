<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
class DatabaseSeeder extends Seeder
{
  /**
   * Seed the application's database.
   */
  public function run(): void
  {
    // User::factory(10)->create();
    User ::factory() -> create([
      'name'     => 't.i.rony',
      'email'    => 'touhid_rony@yahoo.com',
      'password' => Hash ::make('rony747$$'),
    ]);

//    Client::factory()->count(3)->make();
    Task::factory(5)->create();
    Client::factory(2)->create();
  }
}
