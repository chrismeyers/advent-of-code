# 2023 puzzles

> Requires Ruby 3.2.2

Puzzles can be solved by using `solver.rb` and specifying a day number, an input type (`sample` or `input`), and an optional part number (`1` or `2`).
Omitting the part number runs all parts for the given day.
The solver can be invoked in the following ways:

```sh
$ ruby solver.rb 1 sample
```

Templates can be generated for a new day by using `generate.rb` and specifying a day number.
The generator can be invoked in the following ways:

```sh
$ ruby generate.rb 1
```

Running all test suites can be accomplished by running `ruby tests.rb`.
This script can be run from anywhere in the filesystem.
In order to run a specific test suite, a command such as `ruby day01/test.rb` can be run from this directory.
