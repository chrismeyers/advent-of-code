#!/usr/bin/env bash

pushd "$(dirname "$0")" > /dev/null 2>&1

if [ $# -lt 1 ]; then
  echo "Usage: $(basename "$0") day"
  exit 1
fi

cp -r template $1

popd > /dev/null 2>&1
