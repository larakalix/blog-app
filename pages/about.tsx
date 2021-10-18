import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex mt-12 justify-center flex-row">
      <div className="w-3/12 text-center">
        <Image
          className="relative rounded-md shadow-md"
          src="https://www.datocms-assets.com/50719/1625642555-2042228321883724831238239178179011583638848n.jpg?auto=format&dpr=0.29&w=1794"
          width={220}
          height={250}
          alt="About Page"
        />
      </div>
      <div className="w-6/12">
        <p className="text-gray-400 mb-2">HEY THERE, I&apos;M IVAN LARA.</p>
        <p className="font-semibold text-3xl mb-4">
          I&apos;m a web developer with a love for coding, specialized in
          frontend and backend development.
        </p>
        <p className="text-gray-900 text-xl font-light">
          I also work mobile projects, choosing best practices and best trends
          as part of the work.
        </p>

        <div className="inline-block mt-8 transition-colors bg-blue-500 hover:bg-indigo-500 rounded-md text-white">
          <Link href="https://kalixthedev.netlify.app/">
            <a className="block px-6 py-4" target="_blank">Get in touch</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
