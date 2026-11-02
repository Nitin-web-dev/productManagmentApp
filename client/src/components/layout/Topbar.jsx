import { useNavigate } from 'react-router-dom';

const iconBtn =
  'cursor-pointer rounded-lg border border-line bg-panel px-3 py-1.5 transition-colors hover:bg-soft';

export default function Topbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // later: clear your token / auth state here
    navigate('/login');
  };

  return (
    <div>
       {/* Top bar */}
        <div className="flex items-center gap-3">
          <input className="flex h-[41px] flex-1  items-center rounded-lg border border-[#1d2f2a] bg-[#101c19] px-3.5 text-sm text-[#8a9b96]"
            placeholder="Search everything Ctrl K" 
         />
         
          <button className="h-[41px] rounded-lg border border-[#1d2f2a] bg-[#101c19] px-3.5 text-sm font-medium">
            AI assistant
          </button>
          <button className="relative h-[41px] rounded-lg border border-[#1d2f2a] bg-[#101c19] px-3.5 text-sm font-medium">
            Alerts
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#fb923c] text-[10px] font-bold text-white">
              3
            </span>
          </button>
          <button className="h-[41px] rounded-lg border border-[#1d2f2a] bg-[#101c19] px-3.5 text-sm font-medium">
            Log out
          </button>
        </div>
    </div>
  );
}