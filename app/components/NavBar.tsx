import Link from "next/link";

export default function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Main navigation">
        <Link className="brand" href="/" aria-label="NextBites home">
          <span className="brand-mark" aria-hidden="true">
            n
          </span>
          <span>nextbites</span>
        </Link>
        <div className="nav-links">
          <Link className="nav-link nav-link-active" href="/">
            Discover
          </Link>
          <a className="nav-link" href="#recipes">
            Recipes
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
        </div>
        <a className="nav-cta" href="#recipes">
          Find a recipe <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
