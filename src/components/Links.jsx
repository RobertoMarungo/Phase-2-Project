import { Link } from 'react-router-dom';

function Links() {
  return (
    <ul>
      <Link to='/'>
        <li>Home</li>
      </Link>
      <Link to='/form'>
        <li>Add a Commander</li>
      </Link>
    </ul>
  );
}
export default Links;
