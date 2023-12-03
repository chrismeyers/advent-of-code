# frozen_string_literal: true

require 'minitest/autorun'
require_relative 'solutions'

# Tests for Advent of Code 2023.3
class TestDay03 < Minitest::Test
  def setup
    @sample_data = File.read("#{__dir__}/sample.txt")
    @input_data = File.read("#{__dir__}/input.txt")
  end

  def test_part1_sample
    assert_equal(4361, Day03.part1(@sample_data))
  end

  def test_part1_input
    assert_equal(540_131, Day03.part1(@input_data))
  end

  def test_part2_sample
    assert_equal(2, Day03.part2(@sample_data))
  end

  def test_part2_input
    assert_equal(2, Day03.part2(@input_data))
  end
end
