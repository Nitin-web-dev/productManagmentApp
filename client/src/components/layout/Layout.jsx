import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
export default function Layout() {
  return (
    <>
      <div className="grid min-h-screen grid-cols-1 bg-[#0D1514]  text-[#E5EEEC] md:grid-cols-[220px_1fr]">
        <Sidebar />
        <main className="min-w-0 px-3.5 py-4 md:px-7 md:py-6">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </>
  );
}
