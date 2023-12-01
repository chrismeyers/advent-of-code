# frozen_string_literal: true

# Solutions for Advent of Code 2023.1
module Day01
  module_function

  def part1(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    nums = []
    data.each do |line|
      num = ''
      line.split('').each do |char|
        num += char if Integer(char, exception: false)
      end
      num *= 2 if num.length < 2
      nums.push (num[0] + num[-1]).to_i
    end

    nums.sum
  end

  def part2(input)
    data = input.each_line(chomp: true).filter { |line| line != '' }

    sum = 0
    data.each do |line|
      line.gsub!('one', 'o1e')
      line.gsub!('two', 't2o')
      line.gsub!('three', 't3e')
      line.gsub!('four', 'f4r')
      line.gsub!('five', 'f5e')
      line.gsub!('six', 's6x')
      line.gsub!('seven', 's7n')
      line.gsub!('eight', 'e8t')
      line.gsub!('nine', 'n9e')

      line.delete!('^0-9')

      sum += (line[0] + line[-1]).to_i
    end

    sum
  end
end
