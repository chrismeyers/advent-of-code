# frozen_string_literal: true

Dir[File.join(__dir__, 'day??', 'solutions.rb')].each { |file| require file }

if ARGV.length < 2
  puts "Usage: #{__FILE__} day input_type [part]"
  exit(1)
end

day = format('%02d', ARGV[0])
input_type = ARGV[1]
part = ARGV[2].to_i

puts "Running day #{day.to_i}..."

input = File.read(File.join(__dir__, "day#{day}", "#{input_type}.txt"))

if [0, 1].include?(part)
  # Dynamic version of: Day01.part1(input)
  result = Object.const_get("Day#{day}").public_send(:part1, input)
  puts "Part 1: #{result}"
end

if [0, 2].include?(part)
  result = Object.const_get("Day#{day}").public_send(:part2, input)
  puts "Part 2: #{result}"
end
