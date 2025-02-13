<?php

namespace App\Enums;

enum TaskPriority: string
{
    case LOW = 'low';
    case MEDIUM = 'medium';
    case HIGH = 'high';
    case URGENT = 'urgent';

    public static function labels(): array
    {
        return [
            self::LOW->value => 'Low',
            self::MEDIUM->value => 'Medium',
            self::HIGH->value => 'High',
            self::URGENT->value => 'Urgent',
        ];
    }
}
