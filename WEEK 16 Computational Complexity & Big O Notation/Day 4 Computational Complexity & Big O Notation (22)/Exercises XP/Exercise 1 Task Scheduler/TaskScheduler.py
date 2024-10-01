from collections import deque
from collections import namedtuple

class TaskScheduler:
   def __init__(self):
      self.queue = deque()

   def enqueue(self, description, priority):
      Task = namedtuple('Task', ['description', 'priority'])
      new_task = Task(description, priority)
      self.queue.append(new_task)

      self.queue = deque(sorted(self.queue, key=lambda x : x.priority))
   
   def dequeue(self):
      current = self.queue.popleft()
      print(f'Executing task: {current.description}')

   def show_task_queue(self):
      print(f'Task Queue: {self.queue}')

task_list = TaskScheduler()
task_list.enqueue("make bed", 3)
task_list.enqueue("brush teeth", 1)
task_list.dequeue()
task_list.show_task_queue()