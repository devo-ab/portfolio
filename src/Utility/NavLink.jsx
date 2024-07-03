"use client";
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

const NavLink = ({ href, title }) => {
 const currentPath= usePathname();
 console.log(currentPath);
  return (
    <Link
    to={href}
    spy={true} 
    smooth={true} 
    offset={-140} 
    duration={700}
      className= 'hover:text-[#219C90] transition duration-300'
    >
      {title}
    </Link>

   
  );
};

export default NavLink;