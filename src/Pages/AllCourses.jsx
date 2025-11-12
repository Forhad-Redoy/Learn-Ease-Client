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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
