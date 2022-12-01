# 2022 puzzles

> Requires Python 3.11.0

Puzzles can be solved by running individual `solutions.py` programs. These programs accept up to two positional arguments:

| Description | Required | Values |
| ----------- | -------- | ------ |
| The name of the input file to load, excluding file extension | **Y** | <ul><li>`sample`</li><li>`input`</li></ul> |
| The part to run (omitting the part runs all parts for the given day) | N | <ul><li>`1`</li><li>`2`</li></ul> |


Solution programs can be invoked in the following ways:
```sh
$ python3 01/solutions.py sample
$ python3 01/solutions.py input 1
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
