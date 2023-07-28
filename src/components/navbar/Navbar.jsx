import { Link } from 'react-router-dom';

const Navbar = () => {
  const LINKS = [
    {
      text: 'Home',
      to: '/',
    },
    {
      text: 'Starred',
      to: '/starred',
    },
  ];

  return (
    <nav>
      <ul>
        {LINKS.map((link) => (
          <li key={link.text}>
            <Link to={link.to}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
