import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute"

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Analytics from "./pages/Analytics";
import JobDetails from "./pages/JobDetails";


function App() {
  return (
    <BrowserRouter>
      <Routes>



  {/* Default Route */}
  <Route path="/" element={<Navigate to="/login" replace />} />

  {/* Authentication */}
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />

  {/* Protected Routes */}
  <Route
    path="/dashboard"
    element={
      <ProtectedRoute>
        <MainLayout />
      </ProtectedRoute>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="add-job" element={<AddJob />} />
    <Route path="edit-job/:id" element={<EditJob />} />
    <Route path="job/:id" element={<JobDetails />} />
    <Route path="analytics" element={<Analytics />} />
  </Route>

  {/* Unknown Routes */}
  <Route path="*" element={<Navigate to="/login" replace />} />
</Routes>
          
      
    
    </BrowserRouter>
  );
}

export default App;