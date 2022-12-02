import os
import unittest
from day01.solutions import part1, part2


class TestDay01Solutions(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        dir = os.path.dirname(os.path.realpath(__file__))
        with open(f"{dir}/sample.txt", "r") as f:
            cls.sample_data = f.read()
        with open(f"{dir}/input.txt", "r") as f:
            cls.input_data = f.read()

    def test_part1_sample(self):
        self.assertEqual(part1(self.sample_data), 24000)

    def test_part1_sample_different_order(self):
        self.assertEqual(
            part1(
                "\n".join(
                    [
                        "1000",
                        "2000",
                        "3000",
                        "",
                        "10000",
                        "",
                        "4000",
                        "5000",
                        "6000",
                        "",
                        "7000",
                        "8000",
                        "9000",
                    ]
                ),
            ),
            24000,
        )

    def test_part1_input(self):
        self.assertEqual(part1(self.input_data), 69883)

    def test_part2_sample(self):
        self.assertEqual(part2(self.sample_data), 45000)

    def test_part2_input(self):
        self.assertEqual(part2(self.input_data), 207576)


if __name__ == "__main__":
    unittest.main()
