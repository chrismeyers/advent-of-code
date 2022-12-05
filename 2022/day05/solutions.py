def _parse(data):
    last_line = None
    num_crates = None
    raw_crate_lines = []
    commands = []

    # Parse crate and command sections
    for line in data:
        if line == "":
            if num_crates is None:
                num_crates = len(" ".join(last_line.split()).split(" "))
                raw_crate_lines.pop()
            continue

        if num_crates is None:
            raw_crate_lines.append(line)
        else:
            commands.append(list(map(int, line.split(" ")[1::2])))

        last_line = line

    # Parse raw crate rows into 2D lists
    raw_crates = [["" for _ in range(0, num_crates)] for _ in raw_crate_lines]
    for i, line in enumerate(raw_crate_lines):
        chunks = []
        for j in range(0, len(line), 4):
            chunks.append(line[j : j + 4].strip())

        for j, chunk in enumerate(chunks):
            raw_crates[i][j] = chunk

    # Transpose crates from rows into stacks
    crates = [["" for _ in raw_crate_lines] for _ in range(0, num_crates)]
    for i, row in enumerate(raw_crates):
        for j, item in enumerate(row):
            crates[j][i] = item

    # Remove any empty space
    crates = list(map(lambda x: list(filter(lambda y: y not in [""], x)), crates))

    return crates, commands


def _build_message(crates):
    message = ""

    for stack in crates:
        if len(stack) > 0:
            message += stack[0].replace("[", "").replace("]", "")

    return message


def part1(data):
    data = data.split("\n")

    crates, commands = _parse(data)

    for amount, source, dest in commands:
        for _ in range(amount):
            value = crates[source - 1].pop(0)
            crates[dest - 1].insert(0, value)

    return _build_message(crates)


def part2(data):
    data = data.split("\n")

    crates, commands = _parse(data)

    for amount, source, dest in commands:
        values = []
        for _ in range(amount):
            values.append(crates[source - 1].pop(0))

        crates[dest - 1] = values + crates[dest - 1]

    return _build_message(crates)
