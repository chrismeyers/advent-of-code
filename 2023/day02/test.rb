# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'solutions'

# Tests for Advent of Code 2023.2
class TestDay02 < Minitest::Test
  def setup
    @sample_data = File.read("#{__dir__}/sample.txt")
    @input_data = File.read("#{__dir__}/input.txt")
  end

  def test_part1_sample
    assert_equal(8, Day02.part1(@sample_data))
  end

  def test_part1_input
    assert_equal(2348, Day02.part1(@input_data))
  end

  def test_part2_sample
    assert_equal(2, Day02.part2(@sample_data))
  end

  def test_part2_input
    assert_equal(2, Day02.part2(@input_data))
  end
end
