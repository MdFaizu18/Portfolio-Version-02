import {
  ArrowRight,
  ArrowUpRight,
  Facebook,
  Youtube,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gray-900 dark:bg-gray-950 text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-4xl font-bold">Lets Connect there</h2>

          <div className="flex items-center gap-2 bg-gray-800 dark:bg-gray-900 rounded-full px-6 py-3 max-w-lg">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 bg-transparent outline-none text-sm placeholder-gray-500"
            />
            <button className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center hover:bg-theme-primary-hover transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-theme-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">MD</span>
                </div>
                <span className="text-white font-bold text-2xl">FAIZU</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                I love creating products that people enjoy using.
From design to deployment, I focus on simplicity,
performance, and real-world impact.

              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="#"
                  className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-theme-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-theme-primary font-bold mb-4">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#Experience"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li> */}
                <li>
                  <a
                    href="#service"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#resume"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Project
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-theme-primary font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>+91 9345266656</li>
                <li>mohammedfaizulla18@gmail.com</li>
                <li>MdFaizu.com</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>Copyright© 2026 Faizu. All Rights Reserved.</p>
          {/* <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              User Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
