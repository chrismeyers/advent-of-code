# advent-of-code

My solutions for [Advent of Code](https://adventofcode.com) programming puzzles

## Visual Studio Code Workspaces

Some years have VS Code workspaces configured to enable better support for tooling.
To open a workspace, run the following command from the root of the repo.

```sh
$ code <name>.code-workspace
```

For example, 2023 uses Ruby which in turn uses the `Shopify.ruby-lsp` extension.
This extension attempts to resolve the formatter/linter (RuboCop) from the Gemfile, but fails since the Gemfile is not in the root of the repo.
Launching the corresponding workspace gets around this problem and successfully resolves RuboCop.
