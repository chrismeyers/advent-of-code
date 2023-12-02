# frozen_string_literal: true

# Solutions for Advent of Code 2023.2
module Day02
  module_function

  def part1(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    max_red = 12
    max_green = 13
    max_blue = 14

    sum = 0
    data.each_with_index do |line, i|
      sets = line.split(':')[1].split(';').each.map { |set| set.split(',') }

      possible = true
      sets.each do |set|
        set.each do |item|
          count = item.strip.split(' ')[0].to_i

          next unless (item.include?('red') && count > max_red) ||
                      (item.include?('green') && count > max_green) ||
                      (item.include?('blue') && count > max_blue)

          possible = false
          break
        end
      end

      sum += i + 1 if possible
    end

    sum
  end

  def part2(input)
    _data = input.each_line(chomp: true).filter { |line| line != '' }
    2
  end
end
