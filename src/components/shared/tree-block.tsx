interface TreeLine {
  depth: number;
  name: string;
}

function parseTreeLines(raw: string): TreeLine[] {
  return raw
    .split("\n")
    .filter((l) => l.trim() !== "" && /[^│\s]/.test(l))
    .map((line) => {
      const match = line.match(/^((?:│   |    )*)([├└]── )?(.+)$/);
      if (!match) return { depth: 0, name: line.trim() };
      const indentDepth = Math.round((match[1]?.length ?? 0) / 4);
      const hasConnector = !!match[2];
      return {
        depth: hasConnector ? indentDepth + 1 : 0,
        name: (match[3] ?? "").trim(),
      };
    });
}

// For each indent column (0..depth-2), determine whether a vertical line should run through it.
// A vertical line appears in column C if there is a sibling at depth C+1 below this line
// before the tree returns to depth ≤ C.
function getVerticals(lines: TreeLine[], i: number): boolean[] {
  const depth = lines[i].depth;
  if (depth <= 1) return [];
  return Array.from({ length: depth - 1 }, (_, c) => {
    for (let j = i + 1; j < lines.length; j++) {
      if (lines[j].depth <= c) return false;
      if (lines[j].depth === c + 1) return true;
    }
    return false;
  });
}

// True if there is no sibling at the same depth below this line.
function isLastSibling(lines: TreeLine[], i: number): boolean {
  const depth = lines[i].depth;
  if (depth === 0) return true;
  for (let j = i + 1; j < lines.length; j++) {
    if (lines[j].depth < depth) return true;
    if (lines[j].depth === depth) return false;
  }
  return true;
}

const COL = 16;

export function TreeBlock({ code }: { code: string }) {
  const lines = parseTreeLines(code);

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full font-mono text-[13px]">
        {lines.map((line, i) => {
          const { depth, name } = line;
          const isDir = name.endsWith("/");
          const verticals = getVerticals(lines, i);
          const last = isLastSibling(lines, i);
          const isNewRootGroup = depth === 0 && i > 0;

          return (
            <div
              key={i}
              className={`flex items-center h-[22px] whitespace-nowrap${isNewRootGroup ? " mt-1" : ""}`}
            >
              {/* Indent columns — each carries a vertical guide line or empty space */}
              {verticals.map((show, c) => (
                <div
                  key={c}
                  className="relative shrink-0 h-full"
                  style={{ width: COL }}
                >
                  {show && (
                    <div
                      className="absolute top-0 bottom-0 w-px bg-[#3d444d]"
                      style={{ left: COL / 2 }}
                    />
                  )}
                </div>
              ))}

              {/* Connector column */}
              {depth > 0 && (
                <div
                  className="relative shrink-0 h-full"
                  style={{ width: COL + 6 }}
                >
                  {/* Vertical top half — always present */}
                  <div
                    className="absolute w-px bg-[#3d444d]"
                    style={{ left: COL / 2, top: 0, height: "50%" }}
                  />
                  {/* Vertical bottom half — only when more siblings follow */}
                  {!last && (
                    <div
                      className="absolute w-px bg-[#3d444d]"
                      style={{ left: COL / 2, top: "50%", bottom: 0 }}
                    />
                  )}
                  {/* Horizontal arm to the name */}
                  <div
                    className="absolute h-px bg-[#3d444d]"
                    style={{ left: COL / 2, right: 0, top: "50%" }}
                  />
                </div>
              )}

              {/* Name */}
              <span className={isDir ? "text-[#e3b341]" : "text-[#adbac7]"}>
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
