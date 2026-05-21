import TrainCard from './TrainCard.jsx';
import styles from './TrainList.module.css';

function TrainList({ trains }) {
  if (!trains.length) {
    return <p className={styles.empty}>За вашим запитом поїздів не знайдено.</p>;
  }

  return (
    <div className={styles.grid}>
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
}

export default TrainList;
