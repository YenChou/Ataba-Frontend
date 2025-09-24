'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  mobile?: boolean
}

const navigationItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Ataba',
    href: '/about',
    submenu: [
      { name: 'Ataba Factory', href: '/about/factory' },
      { name: 'OEM/ODM Service', href: '/about/oem-odm' },
    ],
  },
  {
    name: 'Products',
    href: '/products',
    submenu: [
      { name: 'New Products', href: '/products/new' },
      { name: 'Handy Calculator', href: '/products/handy-calculator' },
      { name: 'Desktop Calculator', href: '/products/desktop-calculator' },
      { name: 'Scientific Calculator', href: '/products/scientific-calculator' },
    ],
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contact Us',
    href: '/contact',
  },
]

export default function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }


  if (mobile) {
    return (
      <nav className="space-y-1">
        {navigationItems.map((item) => (
          <div key={item.name}>
            <Link
              href={item.href}
              className={`block px-3 py-2 text-base font-medium rounded-md transition-colors ${
                isActive(item.href)
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
              }`}
            >
              {item.name}
            </Link>
            {item.submenu && (
              <div className="ml-4 space-y-1">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(subitem.href)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-8">
      {navigationItems.map((item) => (
        <div key={item.name} className="relative flex items-center">
          {item.submenu ? (
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.name)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <span>{item.name}</span>
                <svg
                  className="ml-1 h-4 w-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute left-0 mt-1 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  openDropdown === item.name
                    ? 'opacity-100 visible transform translate-y-0'
                    : 'opacity-0 invisible transform -translate-y-2'
                }`}
                style={{ zIndex: 50 }}
              >
                <div className="py-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        isActive(subitem.href)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              href={item.href}
              className={`flex items-center justify-center px-3 py-2 text-sm font-medium rounded-md transition-colors h-10 ${
                isActive(item.href)
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </nav>
  )
}
