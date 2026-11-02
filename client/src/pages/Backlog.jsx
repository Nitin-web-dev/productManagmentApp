export default function Backlog() {
  return (
    <>
      {/* Product backlog */}
      <div className="mt-8">
        <h1 className="text-[28px] font-semibold leading-tight">
          Product backlog
        </h1>
        <p className="mt-1 text-sm text-[#9fb0ab]">
          Stories, bugs and debt waiting for a sprint.
        </p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-[#1d2f2a] bg-[#101c19] px-4 py-3">
          <table className="w-full min-w-[800px] text-left text-sm">
            <thead>
              <tr className="border-b border-[#1d2f2a] text-xs font-normal text-[#8a9b96]">
                <th className="py-3 pl-2 font-normal">Item</th>
                <th className="py-3 font-normal">Type</th>
                <th className="py-3 font-normal">Epic</th>
                <th className="py-3 font-normal">Priority</th>
                <th className="py-3 font-normal">Points</th>
                <th className="py-3" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#1d2f2a]">
                <td className="py-4 pl-2">
                  As a user, I can reset my password
                </td>
                <td className="py-4">
                  <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                    Story
                  </span>
                </td>
                <td className="py-4">Authentication</td>
                <td className="py-4">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#facc15]" /> High
                  </span>
                </td>
                <td className="py-4">5</td>
                <td className="py-3 text-right">
                  <button className="rounded-lg border border-[#1d2f2a] px-4 py-2.5 text-sm">
                    Add to Sprint 5
                  </button>
                </td>
              </tr>

              <tr className="border-b border-[#1d2f2a]">
                <td className="py-4 pl-2">Dark mode toggle</td>
                <td className="py-4">
                  <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                    Feature
                  </span>
                </td>
                <td className="py-4">Settings</td>
                <td className="py-4">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#8a9b96]" /> Low
                  </span>
                </td>
                <td className="py-4">3</td>
                <td className="py-3 text-right">
                  <button className="rounded-lg border border-[#1d2f2a] px-4 py-2.5 text-sm">
                    Add to Sprint 5
                  </button>
                </td>
              </tr>

              <tr className="border-b border-[#1d2f2a]">
                <td className="py-4 pl-2">Slow search on large projects</td>
                <td className="py-4">
                  <span className="rounded bg-[#4a2c14] px-2 py-0.5 text-xs text-[#fb923c]">
                    Bug
                  </span>
                </td>
                <td className="py-4">Search</td>
                <td className="py-4">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#fb923c]" />{" "}
                    Critical
                  </span>
                </td>
                <td className="py-4">5</td>
                <td className="py-3 text-right">
                  <button className="rounded-lg border border-[#1d2f2a] px-4 py-2.5 text-sm">
                    Add to Sprint 5
                  </button>
                </td>
              </tr>

              <tr className="border-b border-[#1d2f2a]">
                <td className="py-4 pl-2">Upgrade Prisma to latest</td>
                <td className="py-4">
                  <span className="rounded bg-[#3d3a12] px-2 py-0.5 text-xs text-[#facc15]">
                    Debt
                  </span>
                </td>
                <td className="py-4">Platform</td>
                <td className="py-4">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2dd4bf]" />{" "}
                    Medium
                  </span>
                </td>
                <td className="py-4">2</td>
                <td className="py-3 text-right">
                  <button className="rounded-lg border border-[#1d2f2a] px-4 py-2.5 text-sm">
                    Add to Sprint 5
                  </button>
                </td>
              </tr>

              <tr className="border-b border-[#1d2f2a]">
                <td className="py-4 pl-2">Export sprint report as PDF</td>
                <td className="py-4">
                  <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                    Feature
                  </span>
                </td>
                <td className="py-4">Reports</td>
                <td className="py-4">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-[#2dd4bf]" />{" "}
                    Medium
                  </span>
                </td>
                <td className="py-4">8</td>
                <td className="py-3 text-right">
                  <button className="rounded-lg border border-[#1d2f2a] px-4 py-2.5 text-sm">
                    Add to Sprint 5
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
