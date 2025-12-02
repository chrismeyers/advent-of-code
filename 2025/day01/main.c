#include "../utils.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int wrap(int x, const int lower, const int upper)
{
    int range = upper - lower + 1;

    if (x < lower) x += range * ((lower - x) / range + 1);

    return lower + (x - lower) % range;
}

// Sample: 3
// Input: 1158
int part1(char *input)
{
    int zeros = 0;
    int loc = 50;
    char *line;

    line = strtok(input, "\n");

    while (line != NULL) {
        char direction = line[0];
        int value = atoi(&line[1]);

        loc = wrap(direction == 'R' ? loc + value : loc - value, 0, 99);

        if (loc == 0) zeros++;

        line = strtok(NULL, "\n");
    }

    return zeros;
}

// Sample: 6
// Input: 6860
int part2(char *input)
{
    int zeros = 0;
    int loc = 50;
    char *line;

    line = strtok(input, "\n");

    while (line != NULL) {
        char direction = line[0];
        int value = atoi(&line[1]);

        int target = direction == 'R' ? loc + value : loc - value;
        do {
            loc = direction == 'R' ? loc + 1 : loc - 1;
            if (wrap(loc, 0, 99) == 0) zeros++;
        } while (loc != target);

        loc = wrap(target, 0, 99);

        line = strtok(NULL, "\n");
    }

    return zeros;
}

int main(int argc, char *argv[])
{
    if (argc < 2) {
        fprintf(stderr, "Usage: %s filename\n", argv[0]);
        return 1;
    }

    char *buffer = read_file(argv[1]);
    if (buffer == NULL) {
        fprintf(stderr, "Error reading file\n");
        return 1;
    }

    char *part1_buffer = malloc(strlen(buffer) + 1);
    char *part2_buffer = malloc(strlen(buffer) + 1);
    if (part1_buffer == NULL || part2_buffer == NULL) {
        fprintf(stderr, "Error allocating memory\n");
        free(buffer);
        return 1;
    }

    memcpy(part1_buffer, buffer, strlen(buffer) + 1);
    memcpy(part2_buffer, buffer, strlen(buffer) + 1);

    printf("%d\n", part1(part1_buffer));
    printf("%d\n", part2(part2_buffer));

    free(buffer);
    free(part1_buffer);
    free(part2_buffer);
    return 0;
}
