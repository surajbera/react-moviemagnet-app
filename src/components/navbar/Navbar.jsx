import { NavLink } from 'react-router-dom';

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
    <nav className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-4 max-w-fit mx-auto my-4'>
      <ul className='flex flex-wrap -mb-px w-full'>
        {LINKS.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? 'inline-block py-3 px-5 text-primary-600 border-b-2 border-primary-600 rounded-t-lg active dark:text-primary-500 dark:border-primary-500'
                  : 'inline-block py-3 px-5 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
              }
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;

/* 
  activeClass css: 
    - 
*/
