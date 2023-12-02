import { Link } from 'react-scroll'
import {sizes} from "../../[locale]/styles";

const NavLink = ({targetId, title}) => {
  return(
      <Link
          to={targetId}
          spy={true}
          smooth={true}
          className={`${sizes.baseTextSize} block py-2 pl-3 pr-4
                            text-secondary rounded md:p-0 hover:text-white
                            cursor-pointer`}
      >
          {title}
      </Link>
  );
};

export default NavLink;