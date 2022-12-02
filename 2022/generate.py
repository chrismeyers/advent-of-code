#!/usr/bin/env python3

import os
import sys
import shutil


if __name__ == "__main__":
    if len(sys.argv) < 2:
        print(f"Usage: {os.path.basename(__file__)} day")
        sys.exit(1)

    day = sys.argv[1]

    formatted_day = day.zfill(2)
    dir = os.path.dirname(os.path.realpath(__file__))

    day_dir = f"{dir}/{formatted_day}"

    if os.path.isdir(day_dir):
        overwrite = input(f"Day {day} already exists. Overwrite? [y/N] ")
        if overwrite.lower() in ["y", "yes"]:
            shutil.rmtree(day_dir)
        else:
            sys.exit(0)

    os.mkdir(day_dir)

    with open(f"{day_dir}/__init__.py", "w"):
        pass

    with open(f"{day_dir}/input.txt", "w"):
        pass

    with open(f"{day_dir}/sample.txt", "w"):
        pass

    with open(f"{day_dir}/solutions.py", "w") as f:
        f.write(
            "\n".join(
                [
                    "def part1(data):",
                    "    return 0",
                    "",
                    "",
                    "def part2(data):",
                    "    return 0",
                    "",
                ]
            )
        )

    with open(f"{day_dir}/test.py", "w") as f:
        f.write(
            "\n".join(
                [
                    "import os",
                    "import unittest",
                    "from .solutions import part1, part2",
                    "",
                    "dir = os.path.dirname(os.path.realpath(__file__))",
                    'with open(f"{dir}/sample.txt", "r") as f:',
                    "    sample_data = f.read()",
                    'with open(f"{dir}/input.txt", "r") as f:',
                    "    input_data = f.read()",
                    "",
                    "",
                    f"class TestDay{formatted_day}Solutions(unittest.TestCase):",
                    "    def test_part1_sample(self):",
                    "        self.assertEqual(part1(sample_data), 0)",
                    "",
                    "    def test_part1_input(self):",
                    "        self.assertEqual(part1(input_data), 0)",
                    "",
                    "    def test_part2_sample(self):",
                    "        self.assertEqual(part2(sample_data), 0)",
                    "",
                    "    def test_part2_input(self):",
                    "        self.assertEqual(part2(input_data), 0)",
                    "",
                    "",
                    'if __name__ == "__main__":',
                    "    unittest.main()",
                    "",
                ]
            )
        )
