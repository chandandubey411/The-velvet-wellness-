import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">
        
        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            THE VELVET WELLNESS
          </h2>
          <p className="text-sm leading-relaxed">
            Experience luxury, relaxation, and rejuvenation at The Velvet
            Wellness, where premium massage and spa therapies meet an elegant
            and calming environment.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-primary-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/appointment" className="hover:text-primary-500">
                Book Appointment
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary-500">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Full Body Massage</li>
            <li>Thai Massage</li>
            <li>Couples Massage</li>
            <li>Swedish Massage</li>
            <li>Signature Spa Therapy</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              📍 1st Floor, Rise Madison Square, Sector 1, Bisrakh Jalalpur,
              Greater Noida, Uttar Pradesh 201318
            </li>
            <li>
              📞{" "}
              <a href="tel:6395050004" className="hover:text-primary-500">
                6395050004
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:thevelvetwellnessspa@gmail.com"
                className="hover:text-primary-500"
              >
                thevelvetwellnessspa@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} The Velvet Wellness. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
