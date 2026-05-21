import { Routes, Route, Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';
import { BookingProvider } from './services/BookingService.jsx';
import styles from './App.module.css';

function App() {
  return (
    <BookingProvider>
      <div className={styles.appShell}>
        <header className={styles.header}>
          <div className={styles.headerInner}>
            <div className={styles.brand}>Укрзалізниця</div>
            <nav className={styles.nav}>
              <Link to="/" className={styles.navLink}>
                Головна
              </Link>
            </nav>
          </div>
        </header>

        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking/:trainId" element={<Booking />} />
          </Routes>
        </main>

        <footer className={styles.footer}>
          <p>Система бронювання квитків</p>
        </footer>
        <ToastContainer position="top-right" autoClose={3000} theme="light" />
      </div>
    </BookingProvider>
  );
}

export default App;
