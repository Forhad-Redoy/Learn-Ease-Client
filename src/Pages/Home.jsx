import React from "react";
import { useLoaderData } from "react-router";
import MyContainer from "../Components/MyContainer";
import CourseCard from "../Components/CourseCard";
import WhyChooseUs from "../Components/WhyChooseUS";
import Reveal from "../Components/Reveal";
import HeroSection from "../Components/HeroSection";
import TopInstructors from "../Components/TopInstructors";
import Features from "../Components/Features";
import Services from "../Components/Services";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <MyContainer>
        <HeroSection />
        <div className="text-center text-5xl font-bold mt-15 mb-10">
          <span className="text-purple-500">Populer</span> Courses
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((course, index) => (
            <Reveal key={course._id} delay={index * 0.1}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
        <WhyChooseUs />
        <TopInstructors />
        <Features/>
        <Services/>
      </MyContainer>
    </div>
  );
};

export default Home;
