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
    <div className="mb-[18px] flex flex-wrap items-center gap-2.5">
      <button
        type="button"
        className="min-w-[180px] max-w-[420px] flex-1 cursor-pointer rounded-lg border border-line bg-panel px-3 py-2 text-left text-mute"
      >
        Search everything
      </button>
      <button type="button" className={iconBtn}>AI assistant</button>
      <button type="button" className={iconBtn}>Alerts</button>
      <button type="button" className={iconBtn} onClick={handleLogout}>Log out</button>
    </div>
  );
}