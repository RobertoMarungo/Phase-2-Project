import spinner from '../assets/spinner.gif';

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading'
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        marginTop: '300px',
      }}
    />
  );
}
export default Spinner;
