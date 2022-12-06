from collections import Counter


def part1(data):
    data = data.strip()

    position = 0

    for i, _ in enumerate(data):
        current = data[i : i + 4]
        counts = Counter(current)

        if len(counts) == 4:
            position = i + 4
            break

    return position


def part2(data):
    return 0
