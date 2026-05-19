export function SiteFooter() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-400">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:pr-8">
            <h3 className="text-sm font-semibold tracking-wide text-white">
              INVOK NECTAR
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-7">
              Technology with a Human Pulse. Building premium SaaS platforms
              across fintech, AI and operations.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://goresolve.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  GOresolve
                </a>
              </li>
              <li>
                <a
                  href="/products/pursuerai"
                  className="transition hover:text-white"
                >
                  PursuerAI
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Mediaberg
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white">
                  Nectar Growth
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="/#about" className="transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="/careers" className="transition hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="transition hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="mailto:hello@invoknectar.com"
                  className="transition hover:text-white"
                >
                  hello@invoknectar.com
                </a>
              </li>
              <li>India</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-slate-500 lg:px-10">
          © 2026 Invok Nectar. All rights reserved.
        </div>
      </div>
    </footer>
  );
}