import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
//styles
import './App.css'
//pages
import Dashboard from './pages/Dashboard/Dashboard';
import Create from './pages/Create/Create';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Project from './pages/Project/Project';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import OnlineUsers from './components/OnlineUsers';



function App() {
  const { user, authIsReady } = useAuthContext()
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
        {user && <Sidebar />}
        <div className='container'>
        <Navbar />
          <Routes>
            <Route 
              path="/" 
              element={user ? <Dashboard/> : <Navigate to="/login" /> } />
            <Route 
              path="/create" 
              element={user ? <Create/> : <Navigate to="/login" /> } />
            <Route 
              path="/projects/:id" 
              element={user ? <Project/> : <Navigate to="/login" /> } />
            <Route 
              path="/login" 
              element={!user ? <Login/> : <Navigate to="/" /> } />
            <Route 
              path="/signup" 
              element={!user ? <Signup/> : <Navigate to="/" /> } />
          </Routes>
          </div>
          {user && <OnlineUsers />}
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
