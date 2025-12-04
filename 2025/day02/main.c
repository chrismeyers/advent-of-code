#include "../utils.h"
#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Sample: 1227775554
// Input: 38158151648
long part1(char *input)
{
    long sum = 0;
    char *line;

    line = strtok(input, ",");
    while (line != NULL) {
        bool first = true;
        char id1[100] = "";
        char id2[100] = "";

        for (size_t i = 0; i < strlen(line); i++) {
            if (line[i] == '\n') continue;
            if (line[i] == '-') {
                first = false;
                continue;
            }
            if (first) strncat(id1, &line[i], 1);
            else strncat(id2, &line[i], 1);
        }

        for (long i = atol(id1); i <= atol(id2); i++) {
            char str[100];
            sprintf(str, "%ld", i);

            if (strlen(str) % 2 != 0) continue;

            int center = strlen(str) / 2;
            char first_half[100];
            char second_half[100];
            strncpy(first_half, str, center);
            first_half[center] = '\0';
            strncpy(second_half, str + center, center);
            second_half[center] = '\0';

            if (strcmp(first_half, second_half) == 0) {
                sum += i;
            }
        }

        line = strtok(NULL, ",");
    }

    return sum;
}

// Sample: ?
// Input: ?
int part2(char *input)
{
    return 0;
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

    printf("%ld\n", part1(part1_buffer));
    printf("%d\n", part2(part2_buffer));

    free(buffer);
    free(part1_buffer);
    free(part2_buffer);
    return 0;
}
