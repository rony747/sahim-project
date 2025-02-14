<?php

use App\Http\Controllers\AttachmentController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'canLogin'       => Route::has('login'),
            'canRegister'    => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion'     => PHP_VERSION,
        ]);
    });

    Route::get('/home', function () {
        return Inertia::render('Home', [
            'canLogin'       => Route::has('login'),
            'canRegister'    => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion'     => PHP_VERSION,
        ]);
    });

    Route::prefix('client')->name('client.')->group(function () {
        // List all clients
        Route::get('/', [ClientController::class, 'index'])->name('index');
        // Show create client form
        Route::get('/create', [ClientController::class, 'create'])->name('create');
        // Store new client
        Route::post('/', [ClientController::class, 'store'])->name('store');
        // Show single client
        Route::get('/{client}', [ClientController::class, 'show'])->name('show');
        // Show edit client form
        Route::get('/{client}/edit', [ClientController::class, 'edit'])->name('edit');
        // Update client
        Route::put('/{client}', [ClientController::class, 'update'])->name('update');
        // Delete client
        Route::delete('/{client}', [ClientController::class, 'destroy'])->name('destroy');
    });

    Route::prefix('tasks')->name('tasks.')->group(function () {
        // List all clients
        Route::get('/', [TaskController::class, 'index'])->name('index');
        // Show create client form
        Route::get('/create', [TaskController::class, 'create'])->name('create');
        // Store new client
        Route::post('/', [TaskController::class, 'store'])->name('store');
        // Show single client
        Route::get('/{task}', [TaskController::class, 'show'])->name('show');
        // Show edit client form
        Route::get('/{task}/edit', [TaskController::class, 'edit'])->name('edit');
        // Update client
        Route::put('/{task}', [TaskController::class, 'update'])->name('update');
        // Delete client
        Route::delete('/{task}', [TaskController::class, 'destroy'])->name('destroy');
        // Attachments
        Route::post('/attachments', [AttachmentController::class, 'store'])->name('attachments.store');
    });

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
