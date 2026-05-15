<?php
declare(strict_types=1);

// FreeGames SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

FreeGamesUtility::setRegistrar(function (FreeGamesUtility $u): void {
    $u->clean = [FreeGamesClean::class, 'call'];
    $u->done = [FreeGamesDone::class, 'call'];
    $u->make_error = [FreeGamesMakeError::class, 'call'];
    $u->feature_add = [FreeGamesFeatureAdd::class, 'call'];
    $u->feature_hook = [FreeGamesFeatureHook::class, 'call'];
    $u->feature_init = [FreeGamesFeatureInit::class, 'call'];
    $u->fetcher = [FreeGamesFetcher::class, 'call'];
    $u->make_fetch_def = [FreeGamesMakeFetchDef::class, 'call'];
    $u->make_context = [FreeGamesMakeContext::class, 'call'];
    $u->make_options = [FreeGamesMakeOptions::class, 'call'];
    $u->make_request = [FreeGamesMakeRequest::class, 'call'];
    $u->make_response = [FreeGamesMakeResponse::class, 'call'];
    $u->make_result = [FreeGamesMakeResult::class, 'call'];
    $u->make_point = [FreeGamesMakePoint::class, 'call'];
    $u->make_spec = [FreeGamesMakeSpec::class, 'call'];
    $u->make_url = [FreeGamesMakeUrl::class, 'call'];
    $u->param = [FreeGamesParam::class, 'call'];
    $u->prepare_auth = [FreeGamesPrepareAuth::class, 'call'];
    $u->prepare_body = [FreeGamesPrepareBody::class, 'call'];
    $u->prepare_headers = [FreeGamesPrepareHeaders::class, 'call'];
    $u->prepare_method = [FreeGamesPrepareMethod::class, 'call'];
    $u->prepare_params = [FreeGamesPrepareParams::class, 'call'];
    $u->prepare_path = [FreeGamesPreparePath::class, 'call'];
    $u->prepare_query = [FreeGamesPrepareQuery::class, 'call'];
    $u->result_basic = [FreeGamesResultBasic::class, 'call'];
    $u->result_body = [FreeGamesResultBody::class, 'call'];
    $u->result_headers = [FreeGamesResultHeaders::class, 'call'];
    $u->transform_request = [FreeGamesTransformRequest::class, 'call'];
    $u->transform_response = [FreeGamesTransformResponse::class, 'call'];
});
