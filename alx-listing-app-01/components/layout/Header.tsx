import Link from "next/link";
const Header = () => {
  return (
    <header className="header">
      <nav>
        <form action="submit">
          <input type="text" placeholder="Search..." />
          <button type="submit">Search</button>
        </form>
        <Link href="/sign-in">
          <button>Sign In</button>
        </Link>

        <Link href="/sign-up">
          <button>Sign Up</button>
        </Link>
      </nav>
    </header>
  );
};
export default Header;
