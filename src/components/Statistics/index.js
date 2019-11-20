import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777216).toString(16)}`;
  return randomColor;
}

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && (
      <h2
        className={styles.statsTitle}
        style={{ color: generateRandomColor() }}
      >
        {title}
      </h2>
    )}
    <ul className={styles.statList}>
      {stats.length > 0 &&
        stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={styles.statsItem}
            style={{ backgroundColor: generateRandomColor() }}
          >
            <span
              className={styles.label}
              style={{ color: generateRandomColor() }}
            >
              {label}
            </span>
            <span
              className={styles.percentage}
              style={{ color: generateRandomColor() }}
            >{`${percentage}%`}</span>
          </li>
        ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Statistics;
