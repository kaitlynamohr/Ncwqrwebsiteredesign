import { Link } from 'react-router';
import { Droplets, MapPin, Mail, Phone, Facebook, ExternalLink } from 'lucide-react';

const BLUE = '#1B4F8A';
const GREEN = '#2D5016';

export function Footer() {
  return (
    <footer style={{ backgroundColor: '#0f2942' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                  src="/images/ncwqr-logo-2026-large.jpg"
                  alt="NCWQR Logo"
                  className="h-10 w-auto"
                />
              <div>
                <div className="font-bold text-sm text-white">NCWQR</div>
                <div className="text-xs text-blue-200">National Center for Water Quality Research</div>
              </div>
            </div>
            <p className="text-sm text-blue-200 leading-relaxed mb-5">
              Generating knowledge about the dynamics of water and soil resources to improve water quality since 1969.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/NCWQR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = BLUE;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'About NCWQR', href: '/about' },
                { label: 'Monitoring Program', href: '/monitoring' },
                { label: 'Research Projects', href: '/research' },
                { label: 'Publications', href: '/publications' },
                { label: 'Water Testing', href: '/water-testing' },
                { label: 'Get Involved', href: '/get-involved' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-blue-200 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Data Portal', href: 'https://ncwqr-data.org', external: true },
                { label: 'News & Updates', href: '/news' },
                { label: 'Contact Us', href: '/contact' },
                { label: 'Heidelberg University', href: 'https://www.heidelberg.edu', external: true },
                { label: 'NOAA Great Lakes', href: 'https://www.glerl.noaa.gov', external: true },
              ].map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-200 hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-sm text-blue-200 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-blue-200">
                  Gillmor Science Hall<br />
                  Heidelberg University<br />
                  Tiffin, OH 44883
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="tel:+14194483828" className="text-sm text-blue-200 hover:text-white transition-colors">
                  (419) 448-3828
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="mailto:ncwqr@heidelberg.edu" className="text-sm text-blue-200 hover:text-white transition-colors">
                  ncwqr@heidelberg.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-900 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-blue-300">
            © {new Date().getFullYear()} National Center for Water Quality Research at Heidelberg University. All rights reserved.
          </p>
          <p className="text-xs text-blue-300">
            A division of{' '}
            <a
              href="https://www.heidelberg.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-colors"
            >
              Heidelberg University
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
