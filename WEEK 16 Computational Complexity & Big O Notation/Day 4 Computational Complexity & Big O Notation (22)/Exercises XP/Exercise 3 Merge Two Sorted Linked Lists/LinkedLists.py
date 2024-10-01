class Node:
   def __init__(self, value):
      self.value = value
      self.next = None

class LinkedList:
   def __init__(self, node=None):
      self.head = node

   def append(self, value):
      new_node = Node(value)

      if self.head is None:
         self.head = new_node
      else:
         current = self.head
         while current.next:
            current = current.next
         current.next = new_node  # type: ignore

   def traverse(self):
      current = self.head
      while current:
         print(current.value)
         current = current.next

def merge_sorted_linked_list(list1, list2):
   dummy = Node(0)
   current = dummy

   while list1.head and list2.head:
      if list1.head.value  < list2.head.value:
         current.next = list1.head
         list1.head = list1.head.next
      else:
         current.next = list2.head
         list2.head = list2.head.next

      current = current.next

   if list1.head:
      current.next = list1.head
   elif list2.head:
      current.next = list2.head

   return LinkedList(dummy.next)

list1 = LinkedList()
list1.append(2)
list1.append(4)
list1.append(6)

list2 = LinkedList()
list2.append(1)
list2.append(3)
list2.append(5)

list3 = merge_sorted_linked_list(list1, list2)
list3.traverse() 