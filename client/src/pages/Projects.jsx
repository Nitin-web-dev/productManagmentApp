export default function Projects() {
  return (
    <>
      {/* Projects */}
      <div className="mt-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[28px] font-semibold leading-tight">
              Projects
            </h1>
            <p className="mt-1 text-sm text-[#9fb0ab]">
              All your projects with owners, dates and progress.
            </p>
          </div>
          <button className="rounded-lg bg-[#2dd4bf] px-4 py-2.5 text-sm font-semibold text-[#06201b]">
            New project
          </button>
        </div>

        {/* Cards */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-4">
          {/* Storefront Web */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold">Storefront Web</h2>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Active
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-snug text-[#c5d2ce]">
              Customer shop with checkout and payments.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                React
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Node
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                PostgreSQL
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-[#1d2f2a]">
              <div className="h-1.5 w-[68%] rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="mt-1 text-sm">
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Progress</span>
                <span className="font-semibold">68%</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Priority</span>
                <span className="font-semibold">High</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Client</span>
                <span className="font-semibold">Kiran Retail</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Owner</span>
                <span className="font-semibold">Nitin</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Dates</span>
                <span className="font-semibold">Jul 1 to Dec 15</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Estimated hours</span>
                <span className="font-semibold">640</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Budget</span>
                <span className="font-semibold">$18,000</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#9fb0ab]">Current sprint</span>
                <span className="font-semibold">Sprint 5</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-[#1d2f2a] pt-3 text-xs">
              <div className="flex gap-3 text-[#2dd4bf]">
                <a href="#" className="underline">
                  Repository
                </a>
                <a href="#" className="underline">
                  Live site
                </a>
              </div>
              <div className="flex gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  RK
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  AM
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  NS
                </span>
              </div>
            </div>
          </div>

          {/* Mobile App */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold">Mobile App</h2>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Active
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-snug text-[#c5d2ce]">
              iOS and Android companion app.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                React Native
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                TypeScript
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-[#1d2f2a]">
              <div className="h-1.5 w-[35%] rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="mt-1 text-sm">
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Progress</span>
                <span className="font-semibold">35%</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Priority</span>
                <span className="font-semibold">Medium</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Client</span>
                <span className="font-semibold">Kiran Retail</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Owner</span>
                <span className="font-semibold">Sana Verma</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Dates</span>
                <span className="font-semibold">Aug 10 to Jan 20</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Estimated hours</span>
                <span className="font-semibold">480</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Budget</span>
                <span className="font-semibold">$12,000</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#9fb0ab]">Current sprint</span>
                <span className="font-semibold">Sprint 2</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-[#1d2f2a] pt-3 text-xs">
              <div className="flex gap-3 text-[#2dd4bf]">
                <a href="#" className="underline">
                  Repository
                </a>
                <a href="#" className="underline">
                  Live site
                </a>
              </div>
              <div className="flex gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  RK
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  NS
                </span>
              </div>
            </div>
          </div>

          {/* Admin Console */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold">Admin Console</h2>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                On hold
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-snug text-[#c5d2ce]">
              Internal tools for support staff.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Next.js
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Prisma
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-[#1d2f2a]">
              <div className="h-1.5 w-[10%] rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="mt-1 text-sm">
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Progress</span>
                <span className="font-semibold">10%</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Priority</span>
                <span className="font-semibold">Low</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Client</span>
                <span className="font-semibold">Internal</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Owner</span>
                <span className="font-semibold">Nitin</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Dates</span>
                <span className="font-semibold">Sep 1 to Feb 28</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Estimated hours</span>
                <span className="font-semibold">220</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Budget</span>
                <span className="font-semibold">–</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#9fb0ab]">Current sprint</span>
                <span className="font-semibold">Not started</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-[#1d2f2a] pt-3 text-xs">
              <div className="flex gap-3 text-[#2dd4bf]">
                <a href="#" className="underline">
                  Repository
                </a>
                <a href="#" className="underline">
                  Live site
                </a>
              </div>
              <div className="flex gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  AM
                </span>
              </div>
            </div>
          </div>

          {/* Analytics API */}
          <div className="rounded-xl border border-[#1d2f2a] bg-[#101c19] p-4">
            <div className="flex items-start justify-between gap-2">
              <h2 className="text-base font-semibold">Analytics API</h2>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Planning
              </span>
            </div>
            <p className="mt-3 text-[15px] leading-snug text-[#c5d2ce]">
              Reporting service for partners.
            </p>
            <div className="mt-2 flex flex-wrap gap-1.5">
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Express
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                PostgreSQL
              </span>
              <span className="rounded bg-[#12423b] px-2 py-0.5 text-xs text-[#2dd4bf]">
                Docker
              </span>
            </div>
            <div className="mt-3 h-1.5 w-full rounded-full bg-[#1d2f2a]">
              <div className="h-1.5 w-[5%] rounded-full bg-[#2dd4bf]" />
            </div>
            <div className="mt-1 text-sm">
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Progress</span>
                <span className="font-semibold">5%</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Priority</span>
                <span className="font-semibold">High</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Client</span>
                <span className="font-semibold">Orbit Labs</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Owner</span>
                <span className="font-semibold">Sana Verma</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Dates</span>
                <span className="font-semibold">Oct 15 to Mar 10</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Estimated hours</span>
                <span className="font-semibold">360</span>
              </div>
              <div className="flex items-center justify-between border-b border-[#1d2f2a] py-2.5">
                <span className="text-[#9fb0ab]">Budget</span>
                <span className="font-semibold">$9,500</span>
              </div>
              <div className="flex items-center justify-between py-2.5">
                <span className="text-[#9fb0ab]">Current sprint</span>
                <span className="font-semibold">Sprint 1</span>
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between border-t border-[#1d2f2a] pt-3 text-xs">
              <div className="flex gap-3 text-[#2dd4bf]">
                <a href="#" className="underline">
                  Repository
                </a>
                <a href="#" className="underline">
                  Live site
                </a>
              </div>
              <div className="flex gap-1.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  AM
                </span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a403a] text-[10px] font-semibold text-[#2dd4bf]">
                  NS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
