import { FaPhone, FaWhatsapp, FaGlobe } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import cover from '../assets/hero.webp'
import pic from '../assets/consult.jpg'
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <div className=" mx-auto h-[100vh] bg-black text-white  shadow-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative">
        <img
          src={cover}
          alt="Cover"
          className="w-full h-[200px] object-cover"
        />
        {/* Profile Image */}
        <div className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 border-4 border-black rounded-full">
          <img
            src={pic}
            alt="Profile"
            className="w-[100px] h-[100px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="mt-12 text-center px-4 pb-4">
        <h2 className="text-2xl font-bold">Att. Fabio R. Benson
        </h2>
        <p className="text-gray-400 text-sm p-3">Family and Matrimonial Law, Commercial Litigation, Civil Litigation, and Property Law
        LLB Cum Laude (University of Milan)</p>
        <p className="mt-2 text-sm text-gray-300">
        With a distinguished LLB Cum Laude from the University of Milan, Att. Fabio R. Benson specializes in Family and Matrimonial Law, Commercial Litigation, Civil Litigation, and Property Law. Her client-centered approach and meticulous attention to detail ensure effective and tailored legal solutions.
        </p>

        {/* Icons Section */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="tel:+17248102785" className="flex flex-col items-center">
            <FaPhone size={20} />
            <span className="text-xs mt-1">Phone</span>
          </a>
          <a href="mailto:barrfabiobenson@gmail.com" className="flex flex-col items-center">
            <MdEmail size={20} />
            <span className="text-xs mt-1">Email</span>
          </a>
          <a href="https://wa.me/+17248102785" className="flex flex-col items-center">
            <FaWhatsapp size={20} />
            <span className="text-xs mt-1">WhatsApp</span>
          </a>
          <Link to="/consultants" className="hover:underline">
            <FaGlobe size={20} />
            <span className="text-xs mt-1">Website</span>
          </Link>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-center">
          <button className="w-1/2 bg-black hover:bg-[#fff] hover:text-black py-2 border border-white  text-sm font-semibold ">
            Share
          </button> 
          <button className="w-1/2 bg-black hover:bg-[#fff] hover:text-black py-2  border border-white text-sm font-semibold ">
            Add To Contact
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default ProfileCard;
