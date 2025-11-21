import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { useState, useEffect } from 'react';
import './App.scss';

// Pages
import TutorialPage from './pages/TutorialPage';
import HomePage from './pages/HomePage';
import AnimalDetailsPage from './pages/AnimalDetailsPage';
import ChatPage from './pages/ChatPage';
import FavouritesPage from './pages/FavouritesPage';
import ProfilePage from './pages/ProfilePage';

// Universal Components
import Navbar from './components/Universal/Navbar';

function App() {
  const [user, setUser] = useState(null);
  const [showTutorial, setShowTutorial] = useState(true);

  useEffect(() => {
    // Fetch user data
    fetch('http://localhost:4000/user')
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Error fetching user:', err));

    // Check if user has seen tutorial
    const hasSeenTutorial = localStorage.getItem('hasSeenTutorial');
    if (hasSeenTutorial) {
      setShowTutorial(false);
    }
  }, []);

  const handleSkipTutorial = () => {
    localStorage.setItem('hasSeenTutorial', 'true');
    setShowTutorial(false);
  };

  return (
    <Router>
      <div className="app">
        {showTutorial ? (
          <TutorialPage onSkip={handleSkipTutorial} />
        ) : (
          <>
            <Routes>
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/animal/:id" element={<AnimalDetailsPage user={user} />} />
              <Route path="/chat" element={<ChatPage user={user} />} />
              <Route path="/favourites" element={<FavouritesPage user={user} />} />
              <Route path="/profile" element={<ProfilePage user={user} />} />
            </Routes>
            <Navbar />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;