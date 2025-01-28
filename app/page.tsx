"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
// import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useEffect, useState } from "react";

const Home = () => {
  const [projects, setProjects] = useState(0);
  const [leetcode, setLeetcode] = useState(0);
  const [experience, setExperience] = useState(0);

  useEffect(() => {
    // Simulate counter animation
    const interval = setInterval(() => {
      setProjects((prev) => (prev < 20 ? prev + 1 : prev));
      setLeetcode((prev) => (prev < 1000 ? prev + 50 : prev));
      setExperience((prev) => (prev < 2 ? prev + 0.1 : prev));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  function StatCard({
    label,
    count,
    link,
  }: {
    label: string;
    count: number;
    link?: string;
  }) {
    const cardContent = (
      <div className="flex flex-col items-center p-4 bg-white bg-opacity-10 rounded-lg shadow-md">
        <div className="text-2xl font-bold">{Math.ceil(count)}+</div>
        <div className="text-sm font-medium opacity-80">{label}</div>
      </div>
    );

    return link ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {cardContent}
      </a>
    ) : (
      cardContent
    );
  }
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="p-6 border-4 border-white bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl shadow-xl">
          <div className="flex justify-between items-center gap-6">
            <StatCard
              label="Projects"
              count={projects}
              link="https://github.com/praveen202105"
            />
            <StatCard
              label="Leetcode"
              count={leetcode}
              link="https://leetcode.com/u/Praveen219/"
            />
            <StatCard
              label="Experience (Years)"
              count={parseFloat(experience.toFixed(1))}
              link="https://www.linkedin.com/in/praveen-gupta-45708b183/"
            />
          </div>
        </div>
        {/* <Grid /> */}

        <RecentProjects />
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
