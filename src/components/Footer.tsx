// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
            Facebook
          </a>
          <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
            Twitter
          </a>
          <a href="https://wa.me" target="_blank" className="hover:text-gray-400">
            WhatsApp
          </a>
          <a href="https://instagram.com" target="_blank" className="hover:text-gray-400">
            Instagram
          </a>
        </div>
        <p>Address: 123 Car Blog Street, Auto City</p>
        <p>&copy; {new Date().getFullYear()} Car Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

  
  