import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Login from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./utils/ProtectedRoute";
//todo: lineno=13: protectedRoute not working correctly correct it 
function App() {
  const Placeholder = ({ title }) => <h1>{title}</h1>;
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      
      <Route element={<ProtectedRoute />}>
       {/* inside the layout: sidebar + topbar stay, page changes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/projects" element={<Placeholder title="Projects" />} />
          <Route path="/board" element={<Placeholder title="Sprint board" />} />
          <Route path="/backlog" element={<Placeholder title="Backlog" />} />
          <Route path="/scrum" element={<Placeholder title="Scrum" />} />
          <Route path="/docs" element={<Placeholder title="Docs" />} />
          <Route path="/calendar" element={<Placeholder title="Calendar" />} />
          <Route path="/reports" element={<Placeholder title="Reports" />} />
          <Route path="/team" element={<Placeholder title="Team" />} />
        </Route>

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
