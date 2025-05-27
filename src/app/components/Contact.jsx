'use client';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaInstagram,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0f0b09] py-20 px-6 md:px-20 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 tracking-wider text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#b35627] to-[#7b3e19]">
          Get in Touch
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-16 leading-relaxed">
          Whether you're visiting us in person or sending love from afar, we’re always happy to connect.
        </p>

        {/* Map */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-16 h-96 w-full">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7830642846425!2d-73.98589488459587!3d40.72663014460773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259886da70a03%3A0x146506e534bfa223!2s131%20E%207th%20St%2C%20New%20York%2C%20NY%2010009%2C%20USA!5e0!3m2!1sen!2sin!4v1623010020406!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="grid md:grid-cols-2 gap-16 text-left">
          {/* Contact Form */}
          <form className="bg-[#1a110e] p-10 rounded-3xl shadow-xl space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-[#2b1c17] text-white border border-[#573621] focus:outline-none focus:border-[#d97742] focus:ring-1 focus:ring-[#d97742]"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-[#2b1c17] text-white border border-[#573621] focus:outline-none focus:border-[#d97742] focus:ring-1 focus:ring-[#d97742]"
              required
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-[#2b1c17] text-white border border-[#573621] focus:outline-none focus:border-[#d97742] focus:ring-1 focus:ring-[#d97742] resize-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#b35627] to-[#7b3e19] hover:from-[#94491f] hover:to-[#5e2a13] text-white font-semibold py-4 rounded-lg transition duration-300"
            >
              Send Message
            </button>
          </form>
          {/* Contact Info */}
          <div>
            <div className="space-y-8 mb-12">
              <ContactInfoRow icon={<FaMapMarkerAlt />} label="Address" value="131 E 7th St, New York, NY" />
              <ContactInfoRow icon={<FaEnvelope />} label="Email" value="hello@787coffee.com" />
              <ContactInfoRow icon={<FaPhoneAlt />} label="Phone" value="+1 (212) 555-7878" />
            </div>

            <h3 className="text-2xl font-semibold mb-6 tracking-wide text-[#d97742]">Follow Us</h3>
            <div className="flex space-x-5 text-[#d97742] text-2xl">
              <SocialIcon url="https://instagram.com" icon={<FaInstagram />} hover="hover:text-pink-500" />
              <SocialIcon url="https://facebook.com" icon={<FaFacebookF />} hover="hover:text-blue-500" />
              <SocialIcon url="https://twitter.com" icon={<FaTwitter />} hover="hover:text-sky-400" />
              <SocialIcon url="https://youtube.com" icon={<FaYoutube />} hover="hover:text-red-600" />
              <SocialIcon url="https://tiktok.com" icon={<FaTiktok />} hover="hover:text-gray-300" />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

// Helper components
function ContactInfoRow({ icon, label, value }) {
  return (
    <div className="flex items-center space-x-5">
      <div className="text-[#d97742] text-3xl">{icon}</div>
      <div>
        <p className="text-xs uppercase text-[#e0a97f] tracking-widest font-bold">{label}</p>
        <p className="text-lg text-gray-300 font-medium">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ url, icon, hover }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`transition duration-300 ${hover}`}
    >
      {icon}
    </a>
  );
}
