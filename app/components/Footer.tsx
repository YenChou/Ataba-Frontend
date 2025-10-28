import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: 'About Ataba',
      links: [
        { name: 'About Ataba', href: '/about' }
      ],
    },
    {
      title: 'Products',
      links: [
        { name: 'All Products', href: '/products/new' },
        { name: 'Handy Calculator', href: '/products/handy-calculator' },
        { name: 'Desktop Calculator', href: '/products/desktop-calculator' },
        { name: 'Scientific Calculator', href: '/products/scientific-calculator' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'News', href: '/news' },
        { name: 'Contact Us', href: '/contact' },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <div className="mb-4">
              <span className="text-2xl font-bold text-blue-400">ATABA</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              ATABA is a professional calculator manufacturer with over 30 years of experience, providing OEM/ODM solutions to clients in 50+ countries.
            </p>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-white">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © {currentYear} Ataba Company. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {/*<Link*/}
              {/*  href="/contact"*/}
              {/*  className="text-gray-400 hover:text-white transition-colors text-sm"*/}
              {/*>*/}
              {/*  Contact*/}
              {/*</Link>*/}
              {/*<span className="text-gray-400 text-sm">Privacy Policy</span>*/}
              {/*<span className="text-gray-400 text-sm">Terms of Service</span>*/}

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
