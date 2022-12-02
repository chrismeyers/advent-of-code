# 2022 puzzles

> Requires Python 3.11.0

Puzzles can be solved by using `solver.py` and specifying a day number, an input type (`sample` or `input`), and an optional part number (`1` or `2`). Omitting the part number runs all parts for the given day. The solver can be invoked in the following ways:
```sh
$ python3 solver.py 1 sample
$ ./solver.py 01 input 1
```

Templates can be generated for a new day by using `generate.sh` and specifying a day number. The generator can be invoked in the following way:
```sh
$ ./generate.sh 02
```

Tests can be run for a specific day or for all days by running one of the following commands:
```sh
$ python3 -m unittest 01/test.py
$ ./tests.sh
```
See the [unittest](https://docs.python.org/3/library/unittest.html) docs for more information
