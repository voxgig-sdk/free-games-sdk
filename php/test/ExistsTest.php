<?php
declare(strict_types=1);

// FreeGames SDK exists test

require_once __DIR__ . '/../freegames_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = FreeGamesSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
