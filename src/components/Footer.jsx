function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Your Club</h3>
            <p>Empowering youth through service and leadership</p>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-blue-300">About Us</a></li>
              <li><a href="/team" className="hover:text-blue-300">Team</a></li>
              <li><a href="/events" className="hover:text-blue-300">Events</a></li>
              <li><a href="/projects" className="hover:text-blue-300">Projects</a></li>
              <li><a href="/contact" className="hover:text-blue-300">Contact</a></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
            <div className="space-y-2">
              <p>Email: info@yourclub.org</p>
              <p>Phone: +91 1234567890</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 pt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} Shubham Raut. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;