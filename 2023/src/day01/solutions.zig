const std = @import("std");

pub fn part1(data: []const u8) i32 {
    std.debug.print("{s}", .{data});
    return 1;
}

pub fn part2(data: []const u8) i32 {
    std.debug.print("{s}", .{data});
    return 2;
}

test "day 1" {
    // TODO: @embedFile doesn't appear to work in tests
    try std.testing.expectEqual(1, part1(@embedFile("sample.txt")));
    try std.testing.expectEqual(1, part1(@embedFile("input.txt")));

    try std.testing.expectEqual(2, part2(@embedFile("sample.txt")));
    try std.testing.expectEqual(2, part2(@embedFile("input.txt")));
}
