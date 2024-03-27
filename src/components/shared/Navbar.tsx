"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { FaRegCircleUser } from "react-icons/fa6";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <Container>
      <div className="navbar bg-transparent max-w-7xl absolute w-full z-50 py-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link
                className={`${pathName === "/" ? "text-secondary" : null}`}
                href="/"
              >
                Home
              </Link>
              <Link
                className={`${
                  pathName === "/dresses" ? "text-secondary" : null
                }`}
                href="/dresses"
              >
                All Dresses
              </Link>
              <Link
                className={`${
                  pathName === "/flash-sale" ? "text-secondary" : null
                }`}
                href="/flash-sale"
              >
                Flash Items
              </Link>
              <Link href="#">About Us</Link>
              <Link
                className={`${
                  pathName === "/dashboard" ? "text-secondary" : null
                }`}
                href="/dashboard"
              >
                Dashboard
              </Link>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul> */}
          </div>
          <Logo customClass="font-normal"></Logo>
        </div>
        <div className="navbar-center hidden lg:flex gap-5 text-black ">
          <Link
            className={`${pathName === "/" ? "text-secondary" : null}`}
            href="/"
          >
            Home
          </Link>
          <Link
            className={`${pathName === "/dresses" ? "text-secondary" : null}`}
            href="/dresses"
          >
            All Dresses
          </Link>
          <Link
            className={`${
              pathName === "/flash-sale" ? "text-secondary" : null
            }`}
            href="/flash-sale"
          >
            Flash Items
          </Link>
          <Link href="#">About Us</Link>
          <Link
            className={`${pathName === "/dashboard" ? "text-secondary" : null}`}
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
        <div className="navbar-end">
          <FaRegCircleUser className="text-4xl" />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
