# FreeGames SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

FreeGamesUtility.registrar = ->(u) {
  u.clean = FreeGamesUtilities::Clean
  u.done = FreeGamesUtilities::Done
  u.make_error = FreeGamesUtilities::MakeError
  u.feature_add = FreeGamesUtilities::FeatureAdd
  u.feature_hook = FreeGamesUtilities::FeatureHook
  u.feature_init = FreeGamesUtilities::FeatureInit
  u.fetcher = FreeGamesUtilities::Fetcher
  u.make_fetch_def = FreeGamesUtilities::MakeFetchDef
  u.make_context = FreeGamesUtilities::MakeContext
  u.make_options = FreeGamesUtilities::MakeOptions
  u.make_request = FreeGamesUtilities::MakeRequest
  u.make_response = FreeGamesUtilities::MakeResponse
  u.make_result = FreeGamesUtilities::MakeResult
  u.make_point = FreeGamesUtilities::MakePoint
  u.make_spec = FreeGamesUtilities::MakeSpec
  u.make_url = FreeGamesUtilities::MakeUrl
  u.param = FreeGamesUtilities::Param
  u.prepare_auth = FreeGamesUtilities::PrepareAuth
  u.prepare_body = FreeGamesUtilities::PrepareBody
  u.prepare_headers = FreeGamesUtilities::PrepareHeaders
  u.prepare_method = FreeGamesUtilities::PrepareMethod
  u.prepare_params = FreeGamesUtilities::PrepareParams
  u.prepare_path = FreeGamesUtilities::PreparePath
  u.prepare_query = FreeGamesUtilities::PrepareQuery
  u.result_basic = FreeGamesUtilities::ResultBasic
  u.result_body = FreeGamesUtilities::ResultBody
  u.result_headers = FreeGamesUtilities::ResultHeaders
  u.transform_request = FreeGamesUtilities::TransformRequest
  u.transform_response = FreeGamesUtilities::TransformResponse
}
