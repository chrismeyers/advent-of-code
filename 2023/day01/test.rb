# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'solutions'

# Tests for Advent of Code 2023.1
class TestDay01 < Minitest::Test
  def setup
    @sample_data = File.read("#{__dir__}/sample.txt")
    @input_data = File.read("#{__dir__}/input.txt")
  end

  def test_part1_sample
    assert_equal(142, Day01.part1(@sample_data))
  end

  def test_part1_input
    assert_equal(55_538, Day01.part1(@input_data))
  end

  def test_part2_sample
    assert_equal(281, Day01.part2(File.read("#{__dir__}/sample2.txt")))
  end

  def test_part2_input
    assert_equal(54_875, Day01.part2(@input_data))
  end
end
