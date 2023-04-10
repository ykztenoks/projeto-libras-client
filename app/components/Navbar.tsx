import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex flex-row justify-evenly bg-slate-300 h-20 items-center">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/signin">
          <li>Login</li>
        </Link>
        <Link href="/signup">
          <li>Signup</li>
        </Link>
      </ul>
    </nav>
  );
}
