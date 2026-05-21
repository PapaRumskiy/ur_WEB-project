import { useMemo, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { trains } from '../data/trains.js';
import { useBooking } from '../services/BookingService.jsx';
import WagonSelector from '../components/WagonSelector.jsx';
import SeatMap from '../components/SeatMap.jsx';
import BookingForm from '../components/BookingForm.jsx';
import styles from './Booking.module.css';

function Booking() {
  const { trainId } = useParams();
  const navigate = useNavigate();
  const { bookings, addBooking } = useBooking();
  const train = trains.find((item) => item.id === trainId);
  const [selectedWagonNumber, setSelectedWagonNumber] = useState(
    train?.wagons?.[0]?.wagonNumber || ''
  );
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [submitError, setSubmitError] = useState('');

  const activeWagon = train?.wagons?.find((wagon) => wagon.wagonNumber === selectedWagonNumber);

  const bookedSeats = useMemo(() => {
    if (!train) return [];
    return bookings
      .filter((booking) => booking.trainId === trainId && booking.wagonNumber === selectedWagonNumber)
      .flatMap((booking) => booking.seatNumbers);
  }, [bookings, selectedWagonNumber, trainId, train]);

  if (!train) {
    return (
      <section className={styles.notFound}>
        <h2>Поїзд не знайдено</h2>
        <p>Перевірте, будь ласка, адресу або оберіть інший маршрут.</p>
        <button type="button" className={styles.backButton} onClick={() => navigate('/')}>Повернутися</button>
      </section>
    );
  }

  const handleSelectWagon = (wagonNumber) => {
    setSelectedWagonNumber(wagonNumber);
    setSelectedSeats([]);
    setSubmitError('');
  };

  const handleToggleSeat = (seatNumber, isBooked) => {
    if (isBooked) return;
    setSubmitError('');
    setSelectedSeats((prev) =>
      prev.includes(seatNumber) ? prev.filter((seat) => seat !== seatNumber) : [...prev, seatNumber]
    );
  };

  const handleBooking = (customerData) => {
    if (!selectedSeats.length) {
      setSubmitError('Оберіть, будь ласка, хоча б одне місце.');
      return;
    }

    const booking = {
      id: `booking_${Date.now()}`,
      trainId: train.id,
      trainNumber: train.trainNumber,
      fromCity: train.fromCity,
      toCity: train.toCity,
      wagonNumber: selectedWagonNumber,
      seatNumbers: selectedSeats,
      customer: customerData,
      createdAt: new Date().toISOString()
    };

    addBooking(booking);
    toast.success(`Бронювання підтверджено — поїзд ${train.trainNumber}, вагон ${selectedWagonNumber}`);
    setSelectedSeats([]);
    setSubmitError('');
  };

  return (
    <section className={styles.page}>
      <div className={styles.headerBlock}>
        <div className={styles.headerTop}>
          <div>
            <Link to="/" className={styles.backLink}>
              ← Назад до маршрутів
            </Link>
            <h1 className={styles.title}>Бронювання квитка</h1>
            <p className={styles.subtitle}>Поїзд {train.trainNumber} з {train.fromCity} до {train.toCity}</p>
          </div>
          <div className={styles.trainCardSummary}>
            <p className={styles.trainInfoLabel}>Розклад</p>
            <p className={styles.trainInfoValue}>{train.departureTime} → {train.arrivalTime}</p>
            <p className={styles.trainInfoLabel}>Тривалість</p>
            <p className={styles.trainInfoValue}>{train.duration}</p>
            <p className={styles.trainInfoLabel}>Вагонів</p>
            <p className={styles.trainInfoValue}>{train.wagons.length}</p>
          </div>
        </div>
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.bookingPanel}>
          <WagonSelector
            wagons={train.wagons}
            selectedWagonNumber={selectedWagonNumber}
            onSelect={handleSelectWagon}
          />

          <div className={styles.seatSection}>
            <h2 className={styles.sectionTitle}>Схема місць</h2>
            <SeatMap
              seats={activeWagon?.seats || []}
              bookedSeats={bookedSeats}
              selectedSeats={selectedSeats}
              onToggleSeat={handleToggleSeat}
            />
            <div className={styles.legendRow}>
              <span className={styles.legendItem}><span className={styles.legendMarkFree} /> Вільне</span>
              <span className={styles.legendItem}><span className={styles.legendMarkSelected} /> Обране</span>
              <span className={styles.legendItem}><span className={styles.legendMarkBooked} /> Заброньоване</span>
            </div>
          </div>
        </div>

        <div className={styles.formPanel}>
          <div className={styles.ticketCard}>
            <h2 className={styles.sectionTitle}>Деталі бронювання</h2>
            <div className={styles.ticketInfo}>
              <p><strong>Поїзд:</strong> {train.trainNumber}</p>
              <p><strong>Маршрут:</strong> {train.fromCity} → {train.toCity}</p>
              <p><strong>Вагон:</strong> {selectedWagonNumber || 'Не вибрано'}</p>
              <p><strong>Місця:</strong> {selectedSeats.length ? selectedSeats.join(', ') : 'не вибрано'}</p>
            </div>
            {submitError && <div className={styles.errorMessage}>{submitError}</div>}
            <BookingForm onBook={handleBooking} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking;
