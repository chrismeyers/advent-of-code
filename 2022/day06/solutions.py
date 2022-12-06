from collections import Counter


def _solve(data, num_distinct):
    chars_processed = 0

    for i, _ in enumerate(data):
        current = data[i : i + num_distinct]
        counts = Counter(current)

        if len(counts) == num_distinct:
            chars_processed = i + num_distinct
            break

    return chars_processed


def part1(data):
    return _solve(data.strip(), 4)


def part2(data):
    return _solve(data.strip(), 14)
