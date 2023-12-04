# frozen_string_literal: true

# Solutions for Advent of Code 2023.4
module Day04
  module_function

  def part1(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    score = 0
    data.each do |line|
      winning, have = line.split(':')[1].split('|').map { |group| group.split(' ').map(&:to_i) }
      intersection = winning.intersection(have)

      score += intersection.empty? ? 0 : 2**(intersection.length - 1)
    end

    score
  end

  def part2(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    counts = Array.new(data.length, 0)
    wins = Array.new(data.length, 0)
    data.each_with_index do |line, i|
      winning, have = line.split(':')[1].split('|').map { |group| group.split(' ').map(&:to_i) }
      intersection = winning.intersection(have)

      intersection.each_with_index do |_, j|
        counts[i + j + 1] += 1
      end

      wins[i] = intersection.length
    end

    counts.each_with_index do |count, i|
      next unless count >= 1

      count.times do
        wins[i].times do |j|
          counts[i + j + 1] += 1
        end
      end
    end

    counts.sum + data.length
  end
end
