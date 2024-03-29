def part1(data):
    data = list(map(lambda x: x.strip(), data.split("\n")))

    max = 0
    current = 0

    for i, item in enumerate(data):
        if item != "":
            current += int(item)
        if item == "" or i == len(data) - 1:
            if current > max:
                max = current
            current = 0

    return max


def part2(data):
    data = list(map(lambda x: x.strip(), data.split("\n")))

    sums = []
    current = 0

    for i, item in enumerate(data):
        if item != "":
            current += int(item)
        if item == "" or i == len(data) - 1:
            sums.append(current)
            current = 0

    return sum(sorted(sums, reverse=True)[0:3])
