import os
import sys


def part1(data: list[str]) -> int:
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


def part2(data: list[str]) -> int:
    sums: list[int] = []
    current = 0

    for i, item in enumerate(data):
        if item != "":
            current += int(item)
        if item == "" or i == len(data) - 1:
            sums.append(current)
            current = 0

    return sum(sorted(sums, reverse=True)[0:3])


if __name__ == "__main__":
    dir = os.path.dirname(os.path.realpath(__file__))
    with open(f"{dir}/{sys.argv[1]}.txt", "r") as f:
        data = list(map(lambda x: x.strip(), f.readlines()))

    part = sys.argv[2] if len(sys.argv) > 2 else None

    if part == "1" or part is None:
        print(f"Part 1: {part1(data)}")
    if part == "2" or part is None:
        print(f"Part 2: {part2(data)}")
