
"use client"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white text-[#003366] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nicitum</h3>
            <p className="text-sm">Empowering your digital journey with cutting-edge solutions for over two decades.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Products", "Services", "Our Process", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-sm hover:text-blue-300 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <address className="text-sm not-italic">
              <p>123 Tech Street, Silicon Valley, CA 94000</p>
              <p>Email: info@Nicitum.com</p>
              <p>Phone: (123) 456-7890</p>
            </address>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            {/* Add social media icons here */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-sm">
          © {new Date().getFullYear()} Nicitum. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

