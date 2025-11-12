import React from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import Reveal from "../Components/Reveal";

const AllCourses = () => {
  const data = useLoaderData();

  return (
    <div>
      <MyContainer>
        <h1 className='text-center text-5xl font-bold mt-15 mb-10'>All Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((course, index) => (
            <Reveal key={course._id} delay={index * 0.1}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>
      </MyContainer>
    </div>
  );
};

export default AllCourses;
