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
    data = input.each_line(chomp: true).map { |line| line.split('') }

    map = Hash.new { |h, k| h[k] = [] }
    data.each_with_index do |line, i|
      num = ''
      line.each_with_index do |char, j|
        num += char if Integer(char, exception: false)

        next unless num != '' && (!Integer(char, exception: false) || j == line.length - 1)

        j += 1 if j == line.length - 1 && Integer(char, exception: false)

        start_index = j - num.length != 0 ? j - num.length - 1 : 0
        end_index = j < line.length ? j : line.length

        # above
        if i >= 1
          data[i - 1][start_index..end_index].each_with_index do |x, ii|
            map[[i - 1, ii + start_index]] << num.to_i if x == '*'
          end
        end

        # below
        if i < data.length - 1
          data[i + 1][start_index..end_index].each_with_index do |x, ii|
            map[[i + 1, ii + start_index]] << num.to_i if x == '*'
          end
        end

        # left
        map[[i, j - num.length - 1]] << num.to_i if j - num.length != 0 && (line[j - num.length - 1] == '*')

        # right
        map[[i, j]] << num.to_i if j < line.length && (line[j] == '*')

        num = ''
      end
    end

    map.reduce(0) { |memo, (_k, v)| v.length == 2 ? memo + v.reduce(:*) : memo }
  end
end
