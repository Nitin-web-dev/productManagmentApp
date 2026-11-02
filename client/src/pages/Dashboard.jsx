
export default function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-[#0b1512] p-6 font-['Space_Grotesk',sans-serif] text-[#e8f1ee]">
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');`}</style>

 

        {/* Welcome */}
        <div className="mt-6 flex items-start justify-between">
          <div>
            <h1 className="text-[28px] font-semibold leading-tight">
              Welcome, Sam
            </h1>
            <p className="mt-1 text-sm text-[#9fb0ab]">
              Sprint 5 ends Friday. 4 bugs are still open.
            </p>
          </div>
          <button className="rounded-lg bg-[#2dd4bf] px-4 py-2.5 text-sm font-semibold text-[#06201b]">
            New task
          </button>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-5">
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <p className="text-xs text-[#9fb0ab]">Projects</p>
            <p className="mt-1 text-2xl font-semibold">12</p>
          </div>
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <p className="text-xs text-[#9fb0ab]">Current sprint</p>
            <p className="mt-1 text-2xl font-semibold">Sprint 5</p>
          </div>
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <p className="text-xs text-[#9fb0ab]">Pending tasks</p>
            <p className="mt-1 text-2xl font-semibold">18</p>
          </div>
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <p className="text-xs text-[#9fb0ab]">Completed</p>
            <p className="mt-1 text-2xl font-semibold">52</p>
          </div>
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <p className="text-xs text-[#9fb0ab]">Open bugs</p>
            <p className="mt-1 text-2xl font-semibold text-[#fb923c]">4</p>
          </div>
        </div>

        {/* Charts */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[1.4fr_1fr]">
          {/* Burndown */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-5">
            <h2 className="text-base font-semibold">Burndown</h2>
            <div className="mt-3 flex items-center gap-4 text-xs text-[#9fb0ab]">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#22332f]" /> Ideal
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-sm bg-[#2dd4bf]" /> Actual
              </span>
            </div>

            <svg viewBox="0 0 600 250" className="mt-3 w-full">
              {/* Grid lines */}
              <g stroke="#1f302c" strokeWidth="1">
                <line x1="40" y1="20" x2="580" y2="20" />
                <line x1="40" y1="58" x2="580" y2="58" />
                <line x1="40" y1="96" x2="580" y2="96" />
                <line x1="40" y1="134" x2="580" y2="134" />
                <line x1="40" y1="172" x2="580" y2="172" />
                <line x1="40" y1="210" x2="580" y2="210" />
              </g>

              {/* Y labels */}
              <g fill="#9fb0ab" fontSize="12" textAnchor="end">
                <text x="30" y="24">
                  50
                </text>
                <text x="30" y="62">
                  40
                </text>
                <text x="30" y="100">
                  30
                </text>
                <text x="30" y="138">
                  20
                </text>
                <text x="30" y="176">
                  10
                </text>
                <text x="30" y="214">
                  0
                </text>
              </g>

              {/* X labels */}
              <g fill="#9fb0ab" fontSize="12" textAnchor="middle">
                <text x="40" y="232">
                  D0
                </text>
                <text x="148" y="232">
                  D2
                </text>
                <text x="256" y="232">
                  D4
                </text>
                <text x="364" y="232">
                  D6
                </text>
                <text x="472" y="232">
                  D8
                </text>
                <text x="580" y="232">
                  D10
                </text>
              </g>

              {/* Ideal line */}
              <line
                x1="40"
                y1="20"
                x2="580"
                y2="210"
                stroke="#6b7c77"
                strokeWidth="1.2"
                strokeDasharray="4 4"
              />

              {/* Actual line */}
              <polyline
                points="40,20 94,20 148,35 202,47 256,66 310,85 364,96 418,111 472,126 526,149"
                fill="none"
                stroke="#2dd4bf"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <circle cx="526" cy="149" r="5" fill="#2dd4bf" />
            </svg>
          </div>

          {/* Velocity */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-5">
            <h2 className="text-base font-semibold">Velocity</h2>
            <p className="mt-2 text-xs text-[#9fb0ab]">
              Story points per sprint
            </p>

            <div className="mt-6 flex h-[230px] items-end justify-around">
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#c5d2ce]">21</span>
                <div className="h-[116px] w-12 rounded-md border border-[#245a50] bg-[#1a403a]" />
                <span className="text-xs text-[#9fb0ab]">S1</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#c5d2ce]">26</span>
                <div className="h-[143px] w-12 rounded-md border border-[#245a50] bg-[#1a403a]" />
                <span className="text-xs text-[#9fb0ab]">S2</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#c5d2ce]">24</span>
                <div className="h-[132px] w-12 rounded-md border border-[#245a50] bg-[#1a403a]" />
                <span className="text-xs text-[#9fb0ab]">S3</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#c5d2ce]">30</span>
                <div className="h-[165px] w-12 rounded-md border border-[#245a50] bg-[#1a403a]" />
                <span className="text-xs text-[#9fb0ab]">S4</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[#c5d2ce]">34</span>
                <div className="h-[187px] w-12 rounded-md bg-[#2dd4bf]" />
                <span className="text-xs text-[#9fb0ab]">S5</span>
              </div>
            </div>
          </div>
        </div>

{/* today meeting , deadlines, recent activity */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
  {/* Today's meetings */}
  <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-5">
    <h2 className="text-base font-semibold">Today's meetings</h2>
    <ul className="mt-4 space-y-3.5 text-sm">
      <li className="flex items-center justify-between">
        <span>Daily standup</span>
        <span className="text-[#8a9b96]">10:00</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Sprint 5 mid-review</span>
        <span className="text-[#8a9b96]">14:30</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Client demo prep</span>
        <span className="text-[#8a9b96]">16:00</span>
      </li>
    </ul>
  </div>

  {/* Upcoming deadlines */}
  <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-5">
    <h2 className="text-base font-semibold">Upcoming deadlines</h2>
    <ul className="mt-4 space-y-3.5 text-sm">
      <li className="flex items-center justify-between">
        <span>Payment API integration</span>
        <span className="text-[#8a9b96]">Fri</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Release v2.3 notes</span>
        <span className="text-[#8a9b96]">Mon</span>
      </li>
      <li className="flex items-center justify-between">
        <span>Auth refresh tokens</span>
        <span className="text-[#8a9b96]">Oct 9</span>
      </li>
    </ul>
  </div>

  {/* Recent activity */}
  <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-5">
    <h2 className="text-base font-semibold">Recent activity</h2>
    <ul className="mt-4 space-y-3.5 text-sm">
      <li className="flex items-center justify-between gap-3">
        <span>Riya moved Login page to Testing</span>
        <span className="shrink-0 text-[#8a9b96]">12m</span>
      </li>
      <li className="flex items-center justify-between gap-3">
        <span>Arjun commented on API-41</span>
        <span className="shrink-0 text-[#8a9b96]">1h</span>
      </li>
      <li className="flex items-center justify-between gap-3">
        <span>Sprint 5 goal updated</span>
        <span className="shrink-0 text-[#8a9b96]">3h</span>
      </li>
    </ul>
  </div>
</div>
      </div>
    </>
  );
}
