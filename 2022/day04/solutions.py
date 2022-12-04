def part1(data):
    data = list(
        map(
            lambda y: list(map(lambda z: list(map(int, z.split("-"))), y)),
            map(lambda x: x.strip().split(","), data.strip().split("\n")),
        )
    )

    count = 0

    for group in data:
        if (group[0][0] >= group[1][0] and group[0][1] <= group[1][1]) or (
            group[1][0] >= group[0][0] and group[1][1] <= group[0][1]
        ):
            count += 1

    return count


def part2(data):
    data = list(
        map(
            lambda y: list(map(lambda z: list(map(int, z.split("-"))), y)),
            map(lambda x: x.strip().split(","), data.strip().split("\n")),
        )
    )

    count = 0

    for group in data:
        if (group[0][1] >= group[1][0] and group[0][0] <= group[1][1]) or (
            group[1][1] > group[0][0] and group[1][0] <= group[0][1]
        ):
            count += 1

    return count
