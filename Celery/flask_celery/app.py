from flask import Flask
from task import make_celery
import random

app = Flask(__name__)

celery = make_celery(app)

app.config.update(CELERY_CONFIG={
    "broker_url" : "redis://localhost",
    "result_backend" : "redis://localhost"
})


@app.route("/")
def index():
    print("index func")
    job_id = task1.delay()
    return "Job ID:" + str(job_id) + "Result:" + job_id.get()

@celery.task(name = 'simple task')
def task1():
    return random.randint(1,100)
