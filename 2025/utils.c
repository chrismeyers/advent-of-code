#include <stdio.h>
#include <stdlib.h>

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
