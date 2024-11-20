import { House, Pen, Pencil, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-4 bg-white/5">
      <div className="container flbx">
        <Link href="/">
          <span className="code">CODE BLOCKS</span>
        </Link>

        <div className="flx gap-8 text-white/65">
          <Link href="/" className="flx gap-2">
            <House className="h-4 mb-[1px]" />
            Home
          </Link>
          <Link href="/write" className="flx gap-2">
            <Pencil className="h-4 mb-[1px]" />
            Write
          </Link>
          <Link href="/profile" className="flx gap-2">
            <User className="h-4 mb-[1px]" />
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
