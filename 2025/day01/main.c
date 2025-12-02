#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char *read_file(const char *filename)
{
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        perror("Error opening file");
        return NULL;
    }

    char *buffer = 0;
    long length;
    fseek(file, 0, SEEK_END);
    length = ftell(file);
    fseek(file, 0, SEEK_SET);
    buffer = malloc(length);
    if (buffer) {
        fread(buffer, 1, length, file);
    }
    fclose(file);

    return buffer;
}

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

    printf("%d\n", part1(buffer));

    free(buffer);
    return 0;
}
