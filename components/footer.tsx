"use client"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 border-t border-border/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded bg-background/20 flex items-center justify-center">
                <span className="text-background font-bold">⚖</span>
              </div>
              <span className="font-bold text-lg">DocGenAI</span>
            </div>
            <p className="text-background/70 text-sm">AI Legal Document Generator for US businesses</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Documents
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>
                <a href="#" className="hover:text-background transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-background transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-sm text-background/60">
            © 2025 DocGenAI. All rights reserved. This tool does not replace a licensed attorney.
          </p>
        </div>
      </div>
    </footer>
  )
}
