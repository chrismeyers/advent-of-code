import os
import sys


def part1(data):
    return "NOT IMPLEMENTED"


def part2(data):
    return "NOT IMPLEMENTED"


if __name__ == "__main__":
    dir = os.path.dirname(os.path.realpath(__file__))
    with open(f"{dir}/{sys.argv[1]}.txt", "r") as f:
        data = list(map(lambda x: x.strip(), f.readlines()))

    part = sys.argv[2] if len(sys.argv) > 2 else None

    if part == "1" or part is None:
        print(f"Part 1: {part1(data)}")
    if part == "2" or part is None:
        print(f"Part 2: {part2(data)}")
