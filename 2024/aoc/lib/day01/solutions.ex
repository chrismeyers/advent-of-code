defmodule Day01 do
  def part1(input) do
    input
    |> String.trim()
    |> String.split("\n")
    |> Enum.map(fn x ->
      String.split(x, "  ") |> Enum.map(fn x -> String.trim(x) |> String.to_integer() end)
    end)
    |> List.zip()
    |> Enum.map(fn x -> Tuple.to_list(x) end)
    |> Enum.map(fn x -> Enum.sort(x) end)
    |> (fn sorted ->
          Enum.zip_reduce(Enum.at(sorted, 0), Enum.at(sorted, 1), 0, fn x, y, acc ->
            acc + abs(x - y)
          end)
        end).()
  end

  def part2(input) do
    input
    |> String.trim()
    |> String.split("\n")
    |> Enum.map(fn x ->
      String.split(x, "  ") |> Enum.map(fn x -> String.trim(x) |> String.to_integer() end)
    end)
    |> List.zip()
    |> Enum.map(fn x -> Tuple.to_list(x) end)
    |> (fn lists ->
          Enum.reduce(Enum.at(lists, 0), 0, fn x, acc ->
            acc + x * (Enum.at(lists, 1) |> Enum.frequencies() |> Map.get(x, 0))
          end)
        end).()
  end
end

input_file_path = Path.join(Path.dirname(__ENV__.file), "input.txt")
"Part 1: #{Day01.part1(File.read!(input_file_path))}" |> IO.puts()
"Part 2: #{Day01.part2(File.read!(input_file_path))}" |> IO.puts()
