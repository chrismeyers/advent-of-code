#!/usr/bin/env bash

pushd "$(dirname "$0")" > /dev/null

CLEAN=0
BUILD=0
RUN=0

while getopts "cbr" opt; do
  case "$opt" in
    c) CLEAN=1 ;;
    b) BUILD=1 ;;
    r) RUN=1 ;;
    \?) echo "Usage: $0 [-cbr] day file"; exit 1 ;;
  esac
done
shift $((OPTIND - 1))

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 [-cbr] day file"
  exit 1
fi

DAY=$1
FILE=$2

if [ $CLEAN -eq 1 ]; then
  rm -f $DAY/main
fi

if [ $BUILD -eq 1 ]; then
  clang utils.c $DAY/main.c -o $DAY/main
fi

if [ $RUN -eq 1 ]; then
  ./$DAY/main $DAY/$FILE
fi

popd > /dev/null
