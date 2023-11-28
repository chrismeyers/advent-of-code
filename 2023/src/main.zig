const std = @import("std");

const modules = struct {
    pub const day1 = .{
        .solutions = @import("day01/solutions.zig"),
        .sample = @embedFile("day01/sample.txt"),
        .input = @embedFile("day01/input.txt"),
    };
};

pub fn main() !void {
    var general_purpose_allocator = std.heap.GeneralPurposeAllocator(.{}){};
    const args_alloc = general_purpose_allocator.allocator();
    const args = try std.process.argsAlloc(args_alloc);
    defer std.process.argsFree(args_alloc, args);

    if (args.len < 3) {
        std.debug.print("Usage: {s} day input_type [part]\n", .{std.fs.path.basename(args[0])});
        std.os.exit(1);
    }

    const day = try std.fmt.parseInt(i32, args[1], 10);
    const input_type = args[2];
    const part = if (args.len > 3) try std.fmt.parseInt(i32, args[3], 10) else -1;

    var found = false;

    inline for (@typeInfo(modules).Struct.decls, 0..) |decl, i| {
        if (i + 1 == day) {
            std.log.info("Running day {d}...", .{day});

            const module = @field(modules, decl.name);
            const data = if (std.mem.eql(u8, input_type, "sample")) module.sample else if (std.mem.eql(u8, input_type, "input")) module.input else "";

            if (part == -1 or part == 1) {
                std.log.info("Part 1: {d}", .{module.solutions.part1(data)});
            }
            if (part == -1 or part == 2) {
                std.log.info("Part 2: {d}", .{module.solutions.part2(data)});
            }

            found = true;
            break;
        }
    }

    if (!found) {
        std.log.info("Unable to find day {} solutions", .{day});
    }
}

test {
    std.testing.refAllDecls(@This());
}
