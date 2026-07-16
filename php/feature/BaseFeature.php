<?php
declare(strict_types=1);

// FreeGames SDK base feature

class FreeGamesBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(FreeGamesContext $ctx, array $options): void {}
    public function PostConstruct(FreeGamesContext $ctx): void {}
    public function PostConstructEntity(FreeGamesContext $ctx): void {}
    public function SetData(FreeGamesContext $ctx): void {}
    public function GetData(FreeGamesContext $ctx): void {}
    public function GetMatch(FreeGamesContext $ctx): void {}
    public function SetMatch(FreeGamesContext $ctx): void {}
    public function PrePoint(FreeGamesContext $ctx): void {}
    public function PreSpec(FreeGamesContext $ctx): void {}
    public function PreRequest(FreeGamesContext $ctx): void {}
    public function PreResponse(FreeGamesContext $ctx): void {}
    public function PreResult(FreeGamesContext $ctx): void {}
    public function PreDone(FreeGamesContext $ctx): void {}
    public function PreUnexpected(FreeGamesContext $ctx): void {}
}
