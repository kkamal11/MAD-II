#We need to se config ti tell our app that we are using redis backend
CACHE_TYPE = 'RedisCache'
CACHE_REDIS_URL = 'redis://localhost:6379/5'
#we can set timeout in decorator as well as here too.
CACHE_DEFAULT_TIMEOUT = 1000 #seconds    By defaukt the timeout is 1000s
CACHE_KEY_PREFIX = 'my_app'
#We use key prefix when we have two or more running applications. It distinguishes data of both
# SQLALCHEMY_DATABASE_URI = 'sqlite:///test.db'