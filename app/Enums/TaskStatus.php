<?php

namespace App\Enums;

enum TaskStatus: string
{
    case TODO = 'todo';
    case IN_PROGRESS = 'in_progress';
    case REVIEW = 'review';
    case DONE = 'done';
    case ARCHIVED = 'archived';

    
 public static function labels(): array
    {
        return [
            self::TODO->value => 'To Do',
            self::IN_PROGRESS->value=> 'In Progress',
            self::REVIEW->value => 'Review',
            self::DONE->value => 'Done',
            self::ARCHIVED->value => 'Archived',
        ];
    }
}
