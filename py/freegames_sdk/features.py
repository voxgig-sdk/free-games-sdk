# FreeGames SDK feature factory

from freegames_sdk.feature.base_feature import FreeGamesBaseFeature
from freegames_sdk.feature.ratelimit_feature import FreeGamesRatelimitFeature
from freegames_sdk.feature.retry_feature import FreeGamesRetryFeature
from freegames_sdk.feature.test_feature import FreeGamesTestFeature
from freegames_sdk.feature.timeout_feature import FreeGamesTimeoutFeature


_FEATURES = {
    "base": lambda: FreeGamesBaseFeature(),
    "ratelimit": lambda: FreeGamesRatelimitFeature(),
    "retry": lambda: FreeGamesRetryFeature(),
    "test": lambda: FreeGamesTestFeature(),
    "timeout": lambda: FreeGamesTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
