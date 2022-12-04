def part1(data):
    data = list(
        map(
            lambda z: [[int(z[0][0]), int(z[0][1])], [int(z[1][0]), int(z[1][1])]],
            map(
                lambda y: [y[0].split("-"), y[1].split("-")],
                map(lambda x: x.strip().split(","), data.strip().split("\n")),
            ),
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
    return 0
