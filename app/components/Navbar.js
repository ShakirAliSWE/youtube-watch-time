import Link from "next/link";
import React from "react";

const navbar = [
  { title: "Home", link: "../" },
  { title: "Youtube Watch Time", link: "../youtube-watch-time" },
  { title: "Blogs", link: "../blogs" },
  { title: "Contact", link: "../contact" },
];

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="d-flex justify-content-center gap-4">
        {navbar.map((nav, i) => (
          <Link key={i} href={nav.link} className="text-decoration-none">
            {nav.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
