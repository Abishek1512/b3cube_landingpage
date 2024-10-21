import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "./component/Navbar";
import DotPatternLinearGradient from "./component/card";
import { GlareCardDemo } from "./component/Glarecard";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-base_color`}
      >
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-16">{children}</main>

        {/* card */}

        {/* <DotPatternLinearGradient/> */}
        {/* <div className="p-4"> */}
        <div className="b3x-ttokens-referral container mx-auto px-8 py-8 flex flex-col md:flex-row items-center justify-between">
          {/* Content - 50% width */}
          <div className="text-center md:text-left self-start mb-4 md:mb-0 w-full md:w-1/3">
            <h4 className="text-2xl"> Get $10 worth of B3X Tokens!</h4>
            <p className="my-9">
              Earn $10 in B3X tokens by referring friends! B3X tokens offer
              governance rights, lower trading fees, and access to exclusive
              rewards, making them valuable for both traders and investors.
            </p>
          </div>
          {/* </div> */}

          {/* Step cards - 50% width */}
          <div className="md:ml-4 w-full md:w-1/2">
            <GlareCardDemo />
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-100">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold mb-4">About Us</h3>
                <p className="text-gray-600">Your company description here.</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-blue-600">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>Email: info@example.com</li>
                  <li>Phone: (123) 456-7890</li>
                  <li>Address: Your Address Here</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow Us</h3>
                <div className="space-x-4">
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Twitter
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    Facebook
                  </a>
                  <a href="#" className="text-gray-600 hover:text-blue-600">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
              <p>
                &copy; {new Date().getFullYear()} Your Company. All rights
                reserved.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
