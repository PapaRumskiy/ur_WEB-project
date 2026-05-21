import styles from './WagonSelector.module.css';

function WagonSelector({ wagons, selectedWagonNumber, onSelect }) {
  return (
    <section className={styles.selectorBlock}>
      <h2 className={styles.title}>Оберіть вагон</h2>
      <div className={styles.wagonList}>
        {wagons.map((wagon) => (
          <button
            type="button"
            key={wagon.wagonNumber}
            className={`${styles.wagonButton} ${wagon.wagonNumber === selectedWagonNumber ? styles.active : ''}`}
            onClick={() => onSelect(wagon.wagonNumber)}
          >
            <span className={styles.number}>Вагон {wagon.wagonNumber}</span>
            <span className={styles.type}>{wagon.type}</span>
            <span className={styles.seatCount}>{wagon.seats.length} місць</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default WagonSelector;
