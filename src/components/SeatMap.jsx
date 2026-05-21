import styles from './SeatMap.module.css';

function SeatMap({ seats, bookedSeats, selectedSeats, onToggleSeat }) {
  return (
    <div>
      <div className={styles.mapGrid}>
        {seats.map((seat) => {
          const isBooked = seat.isBooked || bookedSeats.includes(seat.seatNumber);
          const isSelected = selectedSeats.includes(seat.seatNumber);
          const seatClass = isBooked
            ? styles.booked
            : isSelected
            ? styles.selected
            : styles.free;

          return (
            <button
              type="button"
              key={seat.seatNumber}
              className={`${styles.seat} ${seatClass}`}
              onClick={() => onToggleSeat(seat.seatNumber, isBooked)}
              disabled={isBooked}
            >
              {seat.seatNumber}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SeatMap;
