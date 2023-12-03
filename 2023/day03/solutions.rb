# frozen_string_literal: true

# Solutions for Advent of Code 2023.3
module Day03
  module_function

  def part1(input)
    data = input.each_line(chomp: true).map { |line| line.split('') }

    sum = 0
    data.each_with_index do |line, i|
      num = ''
      line.each_with_index do |char, j|
        num += char if Integer(char, exception: false)

        next unless num != '' && (!Integer(char, exception: false) || j == line.length - 1)

        j += 1 if j == line.length - 1 && Integer(char, exception: false)

        start_index = j - num.length != 0 ? j - num.length - 1 : 0
        end_index = j < line.length ? j : line.length

        above_valid = i >= 1 ? data[i - 1][start_index..end_index].any? { |x| x != '.' } : false
        below_valid = i < data.length - 1 ? data[i + 1][start_index..end_index].any? { |x| x != '.' } : false
        left_valid = j - num.length != 0 ? line[j - num.length - 1] != '.' : false
        right_valid = j < line.length ? line[j] != '.' : false

        sum += num.to_i if left_valid || right_valid || above_valid || below_valid
        num = ''
      end
    end

    sum
  end

  def part2(input)
    _data = input.each_line(chomp: true).filter { |line| line != '' }
    2
  end
end
