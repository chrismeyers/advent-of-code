def part1(data):
    data = list(map(lambda x: x.strip(), data.strip().split("\n")))

    sum = 0
    lowercase_offset = ord("a") - 1
    uppercase_offset = ord("A") - 27

    for item in data:
        compartment1, compartment2 = item[: len(item) // 2], item[len(item) // 2 :]
        intersections = list(set(compartment1) & set(compartment2))
        for chars in intersections:
            for char in chars:
                if char.isupper():
                    sum += ord(char) - uppercase_offset
                else:
                    sum += ord(char) - lowercase_offset

    return sum


def part2(data):
    return 0
