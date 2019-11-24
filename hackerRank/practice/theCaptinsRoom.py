# k = 5
# roomList = [1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 8, 4, 3, 1, 5, 6, 2]

nom = int(input())
members = list(map(int, input().split()))
rooms = set()  # Contains all the rooms.
room_more_mem = set()  # Contains only the rooms with families.

for m in members:
    if m not in rooms:
        rooms.add(m)
    else:
        room_more_mem.add(m)
print(rooms.difference(room_more_mem).pop())
