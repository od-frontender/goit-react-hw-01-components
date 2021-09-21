import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { title = 'Upload stats', stats } = props;
  return (
    <section>
      {title && <h2>{title}</h2>}
      <ul>
        {stats.map(el => (
          <li key={el.id}>
            <span>{el.label}</span>
            <span>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
