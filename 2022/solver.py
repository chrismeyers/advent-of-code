#!/usr/bin/env python3

import os
import sys
import importlib

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(f"Usage: {os.path.basename(__file__)} day input_type [part]")
        sys.exit(1)

    day = sys.argv[1]
    input_type = sys.argv[2]
    part = sys.argv[3] if len(sys.argv) > 3 else None

    formatted_day = day.zfill(2)

    module = importlib.import_module(f"{formatted_day}.solutions", ".")

    dir = os.path.dirname(os.path.realpath(__file__))
    with open(f"{dir}/{formatted_day}/{input_type}.txt", "r") as f:
        data = f.read()

    if part == "1" or part is None:
        print(module.part1(data))
    if part == "2" or part is None:
        print(module.part2(data))
