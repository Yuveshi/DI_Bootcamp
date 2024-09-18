ages = []
while True:
   print("1. Enter age of member")
   print("2. Exit")
   choice = int(input("Enter your choice: "))
   if choice == 1:
      age = int(input("Enter age: "))
      ages.append(age)
   elif choice ==2:
      break
total = 0
for age in ages:
   if age in range(3,13):
      total += 10
   elif age > 12:
      total += 15
print("Total: ", total)

teenagers = ["Abby", "Gail", "Barry", "Tom"]
for teen in teenagers:
   age = int(input(f"Enter age for {teen}: "))
   if age not in range(16,22):
      teenagers.remove(teen)

print(teenagers)