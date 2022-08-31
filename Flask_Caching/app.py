"""
Flask caching supports multiple backend
"""

import config
from flask import Flask
from cache import cache
import time

app = Flask(__name__)
app.config.from_object(config)
cache.init_app(app)

@cache.cached(timeout=60,key_prefix='simp_func')
def simple_function():
    return "hello from simple function."

@app.route("/")
@cache.cached(timeout=30,key_prefix='home')
def home():
    # time.sleep(10)
    return "Hello"
#whatever this function return is being cached

@app.route("/del/home")
def del_home():
    cache.delete("home")  #it takes the name of function to delete cache
    return "something"

@app.route("/user/<int:id>")
@cache.cached(20,key_prefix='user_')   #although it has dynamic id it does not get changed once cached. To overcome this we use memoize
def user(id):
    return f"User id is {id}"

@app.route("/memo/user/<int:id>")
@cache.memoize(timeout=60) #In memoization, the functions arguments are also included into the cache_key.
def user_mem(id):   
    return f"User id is {id}"

@app.route("/user/del/memo/<int:id>")
def delete_momo(id):
    cache.delete_memoized(user_mem,id)
    return "deleted"

#READING data from cache
@app.route("/get/home")
def gethome():
    return cache.get('user_')
if __name__ == '__main__':
    app.run(debug=True)