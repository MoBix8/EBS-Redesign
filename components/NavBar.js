import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = ({ title, link }) => {
  const router = useRouter();
  return (
    <Link href={link}>
      <div className={`hover:text-dark-gray ${
        router.asPath === link 
        ? "font-medium"
        : "text-text-gray-color"
      }`}>{title}</div>
    </Link>
  )
}

export default NavBar