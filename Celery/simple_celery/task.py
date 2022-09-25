from celery import Celery
from celery.schedules import crontab

#In our case both msg broker and result backend is redis
cel = Celery(
    "My_Task",
    broker="redis://localhost",
    backend="redis://localhost"
)

@cel.on_after_configure.connect
def setup_periodic_tasks(sender, **kwargs):
    # Calls test('hello') every 10 seconds.
    sender.add_periodic_task(10.0, task1.s(), name='after every 10 seconds')

    # Calls test('world') every 30 seconds
    # sender.add_periodic_task(30.0, test.s('world'), expires=10)

    # Executes every Monday morning at 7:30 a.m.
    # sender.add_periodic_task(
    #     crontab(hour=7, minute=30, day_of_week=1),
    #     test.s('Happy Mondays!'),
    # )

@cel.task
def task1():
    return "hello from task1"

@cel.task
def task2():
    for i in range(1000000):
        pass
    return i
    

#to instantiate this celery system we use
# celery -A task.cel worker -l info
# in terminal 

