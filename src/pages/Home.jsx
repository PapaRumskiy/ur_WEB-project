import { useState } from 'react';
import { trains } from '../data/trains.js';
import TrainList from '../components/TrainList.jsx';
import styles from './Home.module.css';

function Home() {
  const [numberQuery, setNumberQuery] = useState('');
  const [cityQuery, setCityQuery] = useState('');

  const filteredTrains = trains.filter((train) => {
    const matchNumber = train.trainNumber.toLowerCase().includes(numberQuery.toLowerCase());
    const routeText = `${train.fromCity} ${train.toCity}`.toLowerCase();
    const matchCity = routeText.includes(cityQuery.toLowerCase());
    return matchNumber && matchCity;
  });

  return (
    <section className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroTop}>
          <div className={styles.heroInfo}>
            <p className={styles.label}>Потяги України</p>
            <h1 className={styles.title}>Знайдіть свій комфортний маршрут</h1>
            <p className={styles.subtitle}>
              Переглядайте розклад, фільтруйте за номером або містом та бронюйте квитки онлайн.
            </p>
          </div>
          <div className={styles.statsCard}>
            <p className={styles.statsNumber}>{filteredTrains.length}</p>
            <p className={styles.statsLabel}>доступних маршрутів</p>
          </div>
        </div>
      </div>

      <div className={styles.searchPanel}>
        <label className={styles.field}>
          Номер поїзда
          <input
            type="text"
            value={numberQuery}
            onChange={(event) => setNumberQuery(event.target.value)}
            placeholder="Наприклад, 701К"
          />
        </label>
        <label className={styles.field}>
          Місто / маршрут
          <input
            type="text"
            value={cityQuery}
            onChange={(event) => setCityQuery(event.target.value)}
            placeholder="Наприклад, Київ або Львів"
          />
        </label>
      </div>

      <TrainList trains={filteredTrains} />
    </section>
  );
}

export default Home;
