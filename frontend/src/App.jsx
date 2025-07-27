import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HeroBanner from "./components/HeroBanner";
import {Layout, ELayout} from "./Layout";

import { Register } from "./pages/register";
import Login from "./pages/login";
import ProtectedRoute from "./pages/protectedRoute";
import { SidebarProvider } from "./context/SidebarContext";
import { EmployerSidebarProvider } from "./context/EmployerSidebarContext";

import ProfilePage from "./pages/candidate/ProfilePage";
import Applications from "./pages/candidate/Application";
import Dashboard from "./pages/candidate/dashboard";
import JobDescription from "./pages/candidate/JobDescription";
import JobBoard from "./pages/candidate/JobBoard";

import RecruiterProfile from "./pages/recruiter/RecruiterProfile";
import ViewApplicants from "./pages/recruiter/ViewApplicants";
import RecruiterDashboard from "./pages/recruiter/RecruiterDashboard";
import JobListing from "./pages/recruiter/joblisting";
import PostJob from "./pages/recruiter/postjob";






function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HeroBanner />} />


           <Route 
          path = "/employer/*"
          element={
            <EmployerSidebarProvider>
              <ELayout>
                <Routes>
                  <Route path="/rdashboard" element={<ProtectedRoute><RecruiterDashboard /></ProtectedRoute>}/>
                  <Route path="/rprofile" element={<ProtectedRoute><RecruiterProfile /></ProtectedRoute>} />
                  <Route path="/postjob" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
                  <Route path="/postjob/:id" element={<ProtectedRoute><PostJob /></ProtectedRoute>} />
                  <Route path="/joblisting" element={<ProtectedRoute><JobListing /></ProtectedRoute>} />
                  <Route path="/applicants" element={<ProtectedRoute><ViewApplicants /></ProtectedRoute>} />
                </Routes>
              </ELayout>
            </EmployerSidebarProvider>
          }
          />

          <Route
            path="/candidate/*"
            element={
              <SidebarProvider>
                <Layout>
                  <Routes>
                    <Route path="/jobs" element={<ProtectedRoute><JobBoard /></ProtectedRoute>} />
                    <Route path="/jobdesc/:id" element={<ProtectedRoute><JobDescription /></ProtectedRoute>} />
                    <Route path="/application" element={<ProtectedRoute><Applications /></ProtectedRoute>} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
                  </Routes>
                </Layout>
              </SidebarProvider>
            }
          />

         
        </Routes>
      </Router>
    </>
  );
}

export default App;
