users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

disney_users_A = {user: idx for idx, user in enumerate(users)}
print(disney_users_A)


disney_users_B = {idx: user for idx, user in enumerate(users)}
print(disney_users_B)


disney_users_C = {user: idx for idx, user in enumerate(sorted(users))}
print(disney_users_C)

disney_users_with_i = {user: idx for idx, user in enumerate(users) if 'i' in user.lower()}
print(disney_users_with_i)

disney_users_M_P = {user: idx for idx, user in enumerate(users) if user.startswith(('M', 'P'))}
print(disney_users_M_P)





