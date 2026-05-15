# FreeGames SDK feature factory

from feature.base_feature import FreeGamesBaseFeature
from feature.test_feature import FreeGamesTestFeature


def _make_feature(name):
    features = {
        "base": lambda: FreeGamesBaseFeature(),
        "test": lambda: FreeGamesTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
