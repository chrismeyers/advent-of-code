def part1(data):
    data = list(map(lambda x: x.strip().split(" "), data.strip().split("\n")))

    rock = 1
    paper = 2
    scissors = 3

    lose = 0
    draw = 3
    win = 6

    points = 0

    for opponent, me in data:
        match opponent:
            case "A":
                match me:
                    case "X":
                        points += draw + rock
                    case "Y":
                        points += win + paper
                    case "Z":
                        points += lose + scissors
            case "B":
                match me:
                    case "X":
                        points += lose + rock
                    case "Y":
                        points += draw + paper
                    case "Z":
                        points += win + scissors
            case "C":
                match me:
                    case "X":
                        points += win + rock
                    case "Y":
                        points += lose + paper
                    case "Z":
                        points += draw + scissors

    return points


def part2(data):
    data = list(map(lambda x: x.strip().split(" "), data.strip().split("\n")))

    rock = 1
    paper = 2
    scissors = 3

    lose = 0
    draw = 3
    win = 6

    points = 0

    for opponent, outcome in data:
        match opponent:
            case "A":
                match outcome:
                    case "X":
                        points += lose + scissors
                    case "Y":
                        points += draw + rock
                    case "Z":
                        points += win + paper
            case "B":
                match outcome:
                    case "X":
                        points += lose + rock
                    case "Y":
                        points += draw + paper
                    case "Z":
                        points += win + scissors
            case "C":
                match outcome:
                    case "X":
                        points += lose + paper
                    case "Y":
                        points += draw + scissors
                    case "Z":
                        points += win + rock
    return points
