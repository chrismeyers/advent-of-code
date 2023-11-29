# frozen_string_literal: true

require 'fileutils'

if ARGV.empty?
  puts "Usage: #{__FILE__} day"
  exit(1)
end

day = format('%02d', ARGV[0])
day_dir = File.join(__dir__, "day#{day}")

if File.directory?(day_dir)
  print "Day #{day.to_i} already exists. Overwrite? [y/N] "
  overwrite = STDIN.gets.chomp

  if %w[y yes].include? overwrite.strip.downcase
    FileUtils.rm_rf(day_dir)
  else
    exit(0)
  end
end

FileUtils.mkdir(day_dir)

FileUtils.touch(File.join(day_dir, 'sample.txt'))

FileUtils.touch(File.join(day_dir, 'input.txt'))

File.open(File.join(day_dir, 'solutions.rb'), 'w') do |f|
  code = <<~RUBY
    # frozen_string_literal: true

    # Solutions for Advent of Code 2023.#{day.to_i}
    module Day#{day}
      module_function

      def part1(input)
        _data = input.each_line(chomp: true).filter { |line| line != '' }
        1
      end

      def part2(input)
        _data = input.each_line(chomp: true).filter { |line| line != '' }
        2
      end
    end
  RUBY

  f.write(code)
end

File.open(File.join(day_dir, 'test.rb'), 'w') do |f|
  code = <<~RUBY
    # frozen_string_literal: true

    require 'minitest/autorun'
    require_relative 'solutions'

    # Tests for Advent of Code 2023.#{day.to_i}
    class TestDay#{day} < Minitest::Test
      def setup
        @sample_data = File.read("\#{__dir__}/sample.txt")
        @input_data = File.read("\#{__dir__}/input.txt")
      end

      def test_part1_sample
        assert_equal(1, Day#{day}.part1(@sample_data))
      end

      def test_part1_input
        assert_equal(1, Day#{day}.part1(@input_data))
      end

      def test_part2_sample
        assert_equal(2, Day#{day}.part2(@sample_data))
      end

      def test_part2_input
        assert_equal(2, Day#{day}.part2(@input_data))
      end
    end
  RUBY

  f.write(code)
end
