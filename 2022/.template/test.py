import os
import unittest
from .solutions import part1, part2

dir = os.path.dirname(os.path.realpath(__file__))
with open(f"{dir}/sample.txt", "r") as f:
    sample_data = list(map(lambda x: x.strip(), f.readlines()))
with open(f"{dir}/input.txt", "r") as f:
    input_data = list(map(lambda x: x.strip(), f.readlines()))


class TestDay01Solutions(unittest.TestCase):
    def test_part1_sample(self):
        self.assertEqual(part1(sample_data), "NOT IMPLEMENTED")

    def test_part1_input(self):
        self.assertEqual(part1(input_data), "NOT IMPLEMENTED")

    def test_part2_sample(self):
        self.assertEqual(part2(sample_data), "NOT IMPLEMENTED")

    def test_part2_input(self):
        self.assertEqual(part2(input_data), "NOT IMPLEMENTED")


if __name__ == "__main__":
    unittest.main()
