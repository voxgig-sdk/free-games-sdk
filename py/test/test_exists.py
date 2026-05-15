# ProjectName SDK exists test

import pytest
from freegames_sdk import FreeGamesSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = FreeGamesSDK.test(None, None)
        assert testsdk is not None
