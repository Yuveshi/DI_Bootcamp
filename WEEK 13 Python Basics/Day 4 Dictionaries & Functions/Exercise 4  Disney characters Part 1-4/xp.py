users = ["Mickey","Minnie","Donald","Ariel","Pluto"]

disney_users_A = {}
disney_users_B = {}
disney_users_C = {}

for i in range(len(users)):
   disney_users_A[users[i]] = i
   disney_users_B[i] = users[i]

users.sort()
for i in range(len(users)):
   disney_users_C[users[i]] = i

print(disney_users_A)
print(disney_users_B)
print(disney_users_C)

users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
for i in range(len(users)):
   if "i" in users[i].lower():
      disney_users_A[users[i]] = i
print(disney_users_A)

for i in range(len(users)):
   if "i" in users[i].lower():
      disney_users_A[users[i]] = i
print(disney_users_A)

for i in range(len(users)):
   if "i" in users[i].lower():
      disney_users_A[users[i]] = i
print(disney_users_A)
