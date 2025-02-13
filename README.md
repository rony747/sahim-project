# Sahim Project Manager

A modern task management application built with Laravel and React, designed to help teams and individuals organize and track their projects efficiently.

## Features

- **Task Management**: Create, update, and delete tasks with detailed information
- **Task Status Tracking**: Monitor task progress through multiple stages:
  - To Do
  - In Progress
  - Review
  - Done
  - Archived
- **Client Management**: Associate tasks with specific clients
- **Priority Levels**: Assign different priority levels to tasks
- **Modern UI**: Built with React and TypeScript for a smooth user experience

## Tech Stack

- **Backend**: Laravel 10.x
- **Frontend**: React with TypeScript
- **Database**: MySQL
- **Authentication**: Laravel Sanctum
- **UI Framework**: Tailwind CSS

## Getting Started

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js & npm
- MySQL

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sahim-project.git
```

2. Install PHP dependencies:
```bash
composer install
```

3. Install JavaScript dependencies:
```bash
npm install
```

4. Copy the environment file:
```bash
cp .env.example .env
```

5. Generate application key:
```bash
php artisan key:generate
```

6. Configure your database in the .env file and run migrations:
```bash
php artisan migrate
```

7. Start the development server:
```bash
php artisan serve
npm run dev
```

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
