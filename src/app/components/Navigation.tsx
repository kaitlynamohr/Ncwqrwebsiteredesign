import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, Droplets } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Monitoring',
    href: '/monitoring',
    children: [
      { label: 'Overview', href: '/monitoring' },
      { label: 'Data Portal', href: 'https://ncwqr-data.org', external: true },
      { label: 'FAQs', href: '/monitoring#faqs' },
    ],
  },
  {
    label: 'Research',
    href: '/research',
    children: [
      { label: 'Ongoing Projects', href: '/research#ongoing' },
      { label: 'Past Projects', href: '/research#past' },
    ],
  },
  { label: 'Publications', href: '/publications' },
  { label: 'Water Testing', href: '/water-testing' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Contact', href: '/contact' },
];

const BLUE = '#1B4F8A';
const DARK_BLUE = '#163f6e';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : ''
      }`}
      style={{ backgroundColor: '#fff' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
                src="/images/ncwqr-logo-2026-large.jpg"
                alt="NCWQR Logo"
                
                className="h-10 w-auto"
              />
            <div className="leading-tight">
              <div
                className="text-sm font-bold tracking-tight"
                style={{ color: BLUE, lineHeight: '1.1' }}
              >
                NCWQR
              </div>
              <div className="text-xs text-gray-500 hidden sm:block" style={{ lineHeight: '1.2' }}>
                National Center for Water Quality Research
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'text-white'
                        : 'text-gray-700 hover:text-white'
                    }`}
                    style={
                      isActive(link.href)
                        ? { backgroundColor: BLUE }
                        : undefined
                    }
                    onMouseEnter={(e) => {
                      if (!isActive(link.href)) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                        (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                        (e.currentTarget as HTMLAnchorElement).style.color = '';
                      }
                    }}
                  >
                    {link.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </Link>
                  {openDropdown === link.label && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 rounded-lg shadow-xl border border-gray-100 overflow-hidden z-50"
                      style={{ backgroundColor: '#fff' }}
                    >
                      {link.children.map((child) =>
                        child.external ? (
                          <a
                            key={child.label}
                            href={child.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white transition-colors"
                            style={{ borderLeft: `3px solid transparent` }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                              (e.currentTarget as HTMLAnchorElement).style.color = '';
                            }}
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link
                            key={child.label}
                            to={child.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:text-white transition-colors"
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                              (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                              (e.currentTarget as HTMLAnchorElement).style.color = '';
                            }}
                          >
                            {child.label}
                          </Link>
                        )
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.href) ? 'text-white' : 'text-gray-700'
                  }`}
                  style={isActive(link.href) ? { backgroundColor: BLUE } : undefined}
                  onMouseEnter={(e) => {
                    if (!isActive(link.href)) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                      (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive(link.href)) {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '';
                      (e.currentTarget as HTMLAnchorElement).style.color = '';
                    }
                  }}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Data Portal CTA */}
            <a
              href="https://ncwqr-data.org"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-4 py-2 rounded-md text-sm font-semibold text-white transition-colors"
              style={{ backgroundColor: BLUE }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = DARK_BLUE;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
              }}
            >
              Data Portal →
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t border-gray-100 shadow-lg"
          style={{ backgroundColor: '#fff' }}
        >
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.href}
                  className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 transition-colors"
                  style={isActive(link.href) ? { backgroundColor: BLUE, color: 'white' } : {}}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.children.map((child) =>
                      child.external ? (
                        <a
                          key={child.label}
                          href={child.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-3 py-1.5 text-sm text-gray-500 hover:text-blue-700"
                        >
                          {child.label} ↗
                        </a>
                      ) : (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block px-3 py-1.5 text-sm text-gray-500"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}
            <a
              href="https://ncwqr-data.org"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-4 py-2 rounded-md text-sm font-semibold text-white text-center"
              style={{ backgroundColor: BLUE }}
            >
              Data Portal →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
