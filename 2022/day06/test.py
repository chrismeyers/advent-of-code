import os
import unittest
from day06.solutions import part1, part2


class TestDay06Solutions(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        dir = os.path.dirname(os.path.realpath(__file__))
        with open(f"{dir}/sample.txt", "r") as f:
            cls.sample_data = f.read()
        with open(f"{dir}/input.txt", "r") as f:
            cls.input_data = f.read()

    def test_part1_sample(self):
        self.assertEqual(part1(self.sample_data), 7)

    def test_part1_additional_samples(self):
        self.assertEqual(part1("bvwbjplbgvbhsrlpgdmjqwftvncz"), 5)
        self.assertEqual(part1("nppdvjthqldpwncqszvftbrmjlhg"), 6)
        self.assertEqual(part1("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"), 10)
        self.assertEqual(part1("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"), 11)

    def test_part1_input(self):
        self.assertEqual(part1(self.input_data), 1109)

    def test_part2_sample(self):
        self.assertEqual(part2(self.sample_data), 19)

    def test_part2_additional_samples(self):
        self.assertEqual(part2("bvwbjplbgvbhsrlpgdmjqwftvncz"), 23)
        self.assertEqual(part2("nppdvjthqldpwncqszvftbrmjlhg"), 23)
        self.assertEqual(part2("nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg"), 29)
        self.assertEqual(part2("zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"), 26)

    def test_part2_input(self):
        self.assertEqual(part2(self.input_data), 3965)


if __name__ == "__main__":
    unittest.main()
