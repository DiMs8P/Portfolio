import { Link } from 'react-scroll'

const NavLink = ({targetId, title}) => {
  return(
      <Link
          to={targetId}
          spy={true}
          smooth={true}
          className='block py-2 pl-3 pr-4
                            text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer'
      >
          {title}
      </Link>
  );
};

export default NavLink;