import os
import unittest
from day04.solutions import part1, part2


class TestDay04Solutions(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        dir = os.path.dirname(os.path.realpath(__file__))
        with open(f"{dir}/sample.txt", "r") as f:
            cls.sample_data = f.read()
        with open(f"{dir}/input.txt", "r") as f:
            cls.input_data = f.read()

    def test_part1_sample(self):
        self.assertEqual(part1(self.sample_data), 2)

    def test_part1_input(self):
        self.assertEqual(part1(self.input_data), 490)

    def test_part2_sample(self):
        self.assertEqual(part2(self.sample_data), 4)

    def test_part2_input(self):
        self.assertEqual(part2(self.input_data), 921)


if __name__ == "__main__":
    unittest.main()
