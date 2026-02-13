import { useState } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiJavascript, SiFirebase, SiSupabase } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import devGif from "./assets/dev.gif.gif";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";



function App() {
  const skills = [
  { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" />, level: "Learning structure, accessibility and semantic markup." },
  { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" />, level: "Building responsive layouts using Flexbox, Grid and Tailwind CSS." },
  { name: "JavaScript", icon: <SiJavascript size={50} className="text-yellow-400" />, level: "Implementing logic, DOM manipulation and API integrations." },
  { name: "React", icon: <FaReact size={50} className="text-cyan-500" />, level: "Building component-based UIs and managing state effectively." },
  { name: "Node.js", icon: <FaNodeJs size={50} className="text-green-600" />, level: "Creating backend services and REST APIs." },
  { name: "Express", icon: <SiExpress size={50} className="text-gray-700" />, level: "Designing routes, middleware and server logic." },
  { name: "Supabase", icon: <SiSupabase size={50} className="text-emerald-500" />, level: "Using authentication, database and realtime features in projects." },
  { name: "Firebase", icon: <SiFirebase size={50} className="text-yellow-500" />, level: "Implementing authentication and cloud database features." },
  { name: "Git", icon: <FaGitAlt size={50} className="text-red-500" />, level: "Version control, branching and collaborative workflows." }
];


  const [visibleIndex, setVisibleIndex] = useState(null);
  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_6gv0u7o",
      "template_cyowvon",
      form.current,
      "2aIKCDEqFTJ-eayGO"
    )
    .then(
      () => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message.");
        console.log(error.text);
      }
    );
};


  return (
    <div className="bg-linear-to-br from-sky-100 via-blue-200 to-sky-300 text-gray-800 min-h-screen scroll-smooth">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-6 bg-white/60 backdrop-blur-md shadow-md fixed w-full z-50">
        <h1 className="text-xl font-bold text-sky-900">Ankitha.R.B</h1>
        <div className="space-x-6 hidden md:block font-medium">
          <a href="#home" className="hover:text-sky-700 transition">Home</a>
          <a href="#about" className="hover:text-sky-700 transition">About</a>
          <a href="#skills" className="hover:text-sky-700 transition">Skills</a>
          <a href="#projects" className="hover:text-sky-700 transition">Projects</a>
          <a href="#contact" className="hover:text-sky-700 transition">Contact</a>
        </div>
      </nav>

     {/* HOME */}
<section
  id="home"
  className="min-h-screen flex items-center justify-center px-6 pt-20"
>
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT TEXT */}
    <div>
      <h1 className="text-4xl md:text-6xl font-bold text-sky-900 mb-6">
        Hi, I'm Ankitha
      </h1>

      <h2 className="text-2xl md:text-3xl text-sky-700 font-semibold mb-6">
        A Full Stack Developer
      </h2>

      <p className="text-gray-700 leading-relaxed mb-8">
        I build modern, scalable and responsive web applications using
        React, Node.js, Supabase and Firebase while continuously learning
        and improving my skills.
      </p>

      <div className="flex gap-4">
        <a
          href="#projects"
          className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="border border-sky-600 text-sky-700 px-6 py-3 rounded-lg hover:bg-sky-100 transition"
        >
          Contact Me
        </a>
      </div>
    </div>

    <div className="w-80 md:w-96 drop-shadow-xl float-animation"
>
  <img
    src={devGif}
    alt="Developer Animation"
    className="w-80 md:w-96 drop-shadow-xl"
  />
</div>


  </div>
</section>


      {/* ABOUT */}
<section id="about" className="py-24 px-6 bg-white/60">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* Left Side Text */}
    <div>
      <h2 className="text-3xl font-bold mb-6 text-sky-900">
        About Me
      </h2>

      <p className="text-gray-700 leading-relaxed mb-6">
        I am a passionate Full Stack Developer with a strong foundation in
        frontend and backend development. I enjoy building responsive web
        applications and continuously learning new technologies to improve my
        skills.
      </p>

      <p className="text-gray-700 leading-relaxed mb-8">
        My focus is on writing clean, maintainable code and implementing
        practical solutions using React, Node.js, Supabase, and modern web
        technologies.
      </p>

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1zdhqgKJSA7USM0z1O2WkWiCOuN83Nj1j/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-sky-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-700 transition font-medium"
      >
        Download Resume
      </a>
    </div>

    {/* Right Side Highlight Card */}
    <div className="bg-white p-8 rounded-2xl shadow-md border border-sky-200">
      <h3 className="text-xl font-semibold mb-4 text-sky-900">
        Quick Highlights
      </h3>

      <ul className="space-y-3 text-gray-700">
        <li>• Full Stack Web Development</li>
        <li>• REST API Integration</li>
        <li>• Authentication & Database Integration</li>
        <li>• Responsive UI Design</li>
        <li>• Version Control with Git</li>
      </ul>
    </div>

  </div>
</section>


      {/* SKILLS */}
<section id="skills" className="py-24 px-6">
  <h2 className="text-3xl font-bold text-center mb-14 text-sky-900">
    Technical Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="bg-white rounded-2xl p-8 shadow-md hover:shadow-sky-300 hover:shadow-2xl hover:-translate-y-3 transition duration-300 text-center border border-sky-200"
      >
        <div className="flex justify-center mb-4">
          {skill.icon}
        </div>

        <h3 className="font-semibold text-lg">{skill.name}</h3>

        <button
          onClick={() =>
            setVisibleIndex(visibleIndex === index ? null : index)
          }
          className="mt-3 text-sm text-sky-700 hover:underline font-medium"
        >
          {visibleIndex === index ? "Hide Focus" : "View Focus"}
        </button>

        {visibleIndex === index && (
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {skill.level}
          </p>
        )}
      </div>
    ))}
  </div>
</section>


<section id="projects" className="py-24 px-6 bg-white/60">
  <h2 className="text-3xl font-bold text-center mb-14 text-sky-900">
    Projects
  </h2>

  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

   
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-sky-200">
      <h3 className="text-xl font-semibold mb-2">ENVIOmeteor</h3>
      <p className="text-gray-600 mb-4">
        Weather forecasting app using OpenWeather API with dynamic UI and responsive design.
      </p>

      <a
        href="https://github.com/ankithabelagundi/ENVIOmeteor"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
      >
        <FaGithub />
        View Code
      </a>
    </div>

  
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition border border-sky-200">
      <h3 className="text-xl font-semibold mb-2">AI Time Tracker</h3>
      <p className="text-gray-600 mb-4">
        Productivity tracking application built using Supabase and Firebase with real-time updates.
      </p>

      <a
        href="https://github.com/ankithabelagundi/time-tracker-2"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-sky-600 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition"
      >
        <FaGithub />
        View Code
      </a>
    </div>

  </div>
</section>


    
      {/* CONTACT */}
<section id="contact" className="py-24 px-6 bg-white/60">
  <h2 className="text-3xl font-bold text-center mb-14 text-sky-900">
    Contact Me
  </h2>

  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

    {/* LEFT INFO */}
    <div className="space-y-6 text-gray-700">

      <div className="flex items-center gap-3">
        <FaPhone className="text-sky-700" />
        <span>+91 7899523656</span>
      </div>

      <div className="flex items-center gap-3">
        <FaMapMarkerAlt className="text-sky-700" />
        <span>Raichur, India</span>
      </div>

      <div className="flex items-center gap-3">
        <FaEnvelope className="text-sky-700" />
        <span>ankithabelagundi@gmail.com</span>
      </div>

      <div className="flex gap-6 mt-6 text-2xl text-sky-700">
        <a href="https://github.com/ankithabelagundi/Ankitha-R-B" target="_blank">
          <FaGithub className="hover:text-sky-900 transition" />
        </a>

        <a href="www.linkedin.com/in/ankitha-belagundi-7510a3272" target="_blank">
          <FaLinkedin className="hover:text-sky-900 transition" />
        </a>
      </div>
    </div>

    {/* RIGHT FORM */}
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-white p-8 rounded-2xl shadow-md border border-sky-200 space-y-5"
    >
      <input
        type="text"
        name="user_name"
        placeholder="Your Name"
        required
        className="w-full border border-sky-200 p-3 rounded-lg focus:outline-none focus:border-sky-500"
      />

      <input
        type="email"
        name="user_email"
        placeholder="Your Email"
        required
        className="w-full border border-sky-200 p-3 rounded-lg focus:outline-none focus:border-sky-500"
      />

      <input
        type="text"
        name="subject"
        placeholder="Subject"
        required
        className="w-full border border-sky-200 p-3 rounded-lg focus:outline-none focus:border-sky-500"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        className="w-full border border-sky-200 p-3 rounded-lg focus:outline-none focus:border-sky-500"
      ></textarea>

      <button
        type="submit"
        className="w-full bg-sky-600 text-white py-3 rounded-lg hover:bg-sky-700 transition font-medium"
      >
        Send Message
      </button>
    </form>

  </div>
</section>


    </div>
  );
}

export default App;
