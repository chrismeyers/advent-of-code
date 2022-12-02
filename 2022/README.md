# 2022 puzzles

> Requires Python 3.11.0

Puzzles can be solved by using `solver.py` and specifying a day number, an input type (`sample` or `input`), and an optional part number (`1` or `2`). Omitting the part number runs all parts for the given day. The solver can be invoked in the following ways:
```sh
$ python3 solver.py 1 sample
$ ./solver.py 01 input 1
```

Templates can be generated for a new day by using `generate.py` and specifying a day number. The generator can be invoked in the following ways:
```sh
$ python3 generate.py 1
$ ./generate.py 02
```

Running all test suites can be accomplished by using the `tests.sh` script. This script can be run from anywhere in the filesystem. In order to run a specific test suite, one of the following commands can be run from this directory:
```sh
$ python3 day01/test.py
$ python3 -m unittest day01/test.py
$ python3 -m day01.test
```
