# frozen_string_literal: true

# Solutions for Advent of Code 2023.4
module Day04
  module_function

  def part1(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    score = 0
    data.each do |line|
      winning, have = line.split(':')[1].split('|').map { |group| group.split(' ').map { |item| item.to_i } }
      intersection = winning.intersection(have)

      score += intersection.empty? ? 0 : 2**(intersection.length - 1)
    end

    score
  end

  def part2(input)
    _data = input.each_line(chomp: true).filter { |line| line != '' }
    2
  end
end
