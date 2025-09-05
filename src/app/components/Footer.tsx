import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-15 text-gray-700">
      {/* Newsletter Section */}
      <div className="max-w-6xl mx-auto px-10 py-4">
        <div className="bg-black rounded-[2rem] p-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Text */}
          <h2 className="text-3xl lg:text-4xl font-bold text-white leading-snug text-center lg:text-left">
            STAY UP TO DATE ABOUT <br /> OUR LATEST OFFERS
          </h2>

          {/* Form */}
          <div className="flex flex-col items-center lg:items-end gap-4 w-full lg:w-1/2">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full py-3 px-5 outline-none text-gray-400"
            />
            <button className="w-full bg-white text-black font-medium py-3 px-5 rounded-full hover:bg-gray-200 transition">
              Subscribe to Newsletter
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-10 pb-10 mt-10 border-t border-gray-300 flex flex-col lg:flex-row justify-between items-center py-6 gap-4">
        {/* CopyRight */}
        <p className="text-sm text-gray-500">
          Route.co © 2000-2025, All Rights Reserved
        </p>

        {/* Social Icons */}
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-80">
            <FaFacebookF />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-400 text-white hover:opacity-80">
            <FaTwitter />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white hover:opacity-80">
            <FaInstagram />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-red-600 text-white hover:opacity-80">
            <FaYoutube />
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-700 text-white hover:opacity-80">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}
