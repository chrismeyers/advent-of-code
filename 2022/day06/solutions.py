from collections import Counter


def _solve(data, num_distinct):
    position = 0

    for i, _ in enumerate(data):
        current = data[i : i + num_distinct]
        counts = Counter(current)

        if len(counts) == num_distinct:
            position = i + num_distinct
            break

    return position


def part1(data):
    return _solve(data.strip(), 4)


def part2(data):
    return _solve(data.strip(), 14)
