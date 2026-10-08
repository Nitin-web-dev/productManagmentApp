import { NavLink } from 'react-router-dom';

const NAV = [
  ['/dashboard', 'Dashboard'],
  ['/projects', 'Projects'],
  ['/board', 'Sprint board'],
  ['/backlog', 'Backlog'],
  ['/scrum', 'Scrum'],
  ['/docs', 'Docs'],
  ['/calendar', 'Calendar'],
  ['/reports', 'Reports'],
  ['/team', 'Team'],
];

const linkBase =
  'whitespace-nowrap rounded-lg px-2.5 py-2 transition-colors hover:bg-white/10 md:whitespace-normal';
const linkActive = 'bg-white/15 font-semibold text-white';

export default function Sidebar() {
  return (
    <aside className="flex flex-row gap-5 overflow-x-auto bg-side p-2.5 text-side-ink md:flex-col md:overflow-visible md:px-3 md:py-5">
      <div className="flex items-center gap-2.5 px-2 text-lg font-bold text-white">
        <svg width="26" height="26" viewBox="0 0 26 26" aria-hidden="true" className="flex-none">
          <rect width="26" height="26" rx="7" fill="#2DD4BF" />
          <path d="M6 17c3-8 6-8 7-4s4 3 7-5" stroke="#12302C" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        </svg>
        <span className="hidden md:inline">AgileFlow</span>
      </div>

      <nav className="flex flex-row gap-0.5 md:flex-col">
        {NAV.map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ''}`}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-auto hidden rounded-[10px] bg-white/10 p-3 text-[13px] md:block">
        <b className="block text-sm text-white">Sprint 5</b>
        Ends in 4 days
      </div>
    </aside>
  );
}