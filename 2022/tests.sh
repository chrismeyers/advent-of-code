#!/usr/bin/env bash

pushd "$(dirname "$0")" > /dev/null 2>&1

python -m unittest

popd > /dev/null 2>&1
