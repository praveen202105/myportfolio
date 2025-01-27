"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading text-center text-3xl font-bold mb-12">
        A small selection of{" "}
        <span className="text-purple">my recent projects</span>
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 px-6">
        {projects.map((item) => (
          <div
            key={item.id}
            className="relative group rounded-xl overflow-hidden shadow-lg bg-[#13162D] hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <div className="relative">
              <img
                src={item.img}
                alt="cover"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
            </div>

            {/* Project Details */}
            <div className="absolute bg-black-100 inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6">
              <h2 className="text-white text-2xl font-bold mb-4">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                {item.des}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-purple text-lg font-semibold hover:underline"
              >
                View Live Site <FaLocationArrow />
              </a>
            </div>

            {/* Static Title */}
            <h2 className="absolute bottom-4 left-4 text-white text-lg font-semibold z-10 group-hover:opacity-0 transition-opacity duration-300">
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
