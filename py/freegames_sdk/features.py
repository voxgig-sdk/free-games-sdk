# FreeGames SDK feature factory

from freegames_sdk.feature.base_feature import FreeGamesBaseFeature
from freegames_sdk.feature.test_feature import FreeGamesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeGamesBaseFeature(),
        "test": lambda: FreeGamesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
