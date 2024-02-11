import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <section>
        <nav className="nav">
          <ul className="flex py-2 border-t border-gray-300 space-x-8 text-m ml-5 mr-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/world">World</Link>
            </li>
            <li>
              <Link href="/business">Business</Link>
            </li>
            <li>
              <Link href="/domestic">Domestic</Link>
            </li>
            <li>
              <Link href="/top">Top</Link>
            </li>
            <li>
              <Link href="/education">Education</Link>
            </li>
            <li>
              <Link href="/entertainment">Entertainment</Link>
            </li>
            <li>
              <Link href="/environment">Environment</Link>
            </li>
            <li>
              <Link href="/food">Food</Link>
            </li>
            <li>
              <Link href="/health">Health</Link>
            </li>
            <li>
              <Link href="/politics">Politics</Link>
            </li>
            <li>
              <Link href="/science">Science</Link>
            </li>
            <li>
              <Link href="/sports">Sports</Link>
            </li>

            <li>
              <Link href="/tourism">Tourism</Link>
            </li>
          </ul>
          <div className="h-[1px] bg-black mb-1 ml-5 mr-5"></div>
          <div className="h-[1px] bg-black ml-5 mr-5"></div>
        </nav>
      </section>
    </>
  );
}
