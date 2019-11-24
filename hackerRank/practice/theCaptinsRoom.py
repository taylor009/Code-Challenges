k = 5
roomList = [1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 8, 4, 3, 1, 5, 6, 2]

input()
group = input().strip().split()
rooms = set(group)

for r in rooms:
    group.remove(r)

non_captain = set(group)
print(rooms.difference(non_captain).pop())
