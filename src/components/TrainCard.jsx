import { Link } from 'react-router-dom';
import styles from './TrainCard.module.css';

function TrainCard({ train }) {
  return (
    <Link to={`/booking/${train.id}`} className={styles.link}>
      <article className={styles.card}>
        <div className={styles.topRow}>
          <span className={styles.trainNumber}>Поїзд {train.trainNumber}</span>
          <span className={styles.wagons}>{train.wagons.length} вагони</span>
        </div>
        <div className={styles.routeRow}>
          <div>
            <p className={styles.cityLabel}>З</p>
            <p className={styles.cityName}>{train.fromCity}</p>
            <p className={styles.time}>{train.departureTime}</p>
          </div>
          <div className={styles.routeInfo}>
            <span className={styles.duration}>{train.duration}</span>
          </div>
          <div>
            <p className={styles.cityLabel}>До</p>
            <p className={styles.cityName}>{train.toCity}</p>
            <p className={styles.time}>{train.arrivalTime}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default TrainCard;
