import string


def solve(s):
    l = s.split(" ")
    a = [i.capitalize() for i in l]
    return " ".join(a)


solve('solve me')
