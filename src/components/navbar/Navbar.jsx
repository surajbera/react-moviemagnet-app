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

  const commonClasses = 'inline-block py-3 px-5 rounded-t-lg border-b-2';

  return (
    <nav className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 max-w-fit mx-auto my-6 lg:my-8'>
      <ul className='flex flex-wrap -mb-px w-full'>
        {LINKS.map((link) => (
          <li key={link.text}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? `${commonClasses} text-lightPrimary-600  border-lightPrimary-600 active dark:text-darkPrimary-500 dark:border-darkPrimary-500`
                  : `${commonClasses} border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300`
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
