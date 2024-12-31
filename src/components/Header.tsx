import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <img src="/images/logo.png" alt="Logo" className="h-20" />
        <div>
          <Link href="/" className="mr-4">Home</Link>
          <Link href="/about" className="mr-4">About</Link>
          <Link href="/contact">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
