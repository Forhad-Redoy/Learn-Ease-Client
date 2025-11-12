import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyContainer from "../Components/MyContainer";
import CourseCard from "../Components/CourseCard";
import useAxios from "../Hooks/useAxios";
import Loadingspinner from "../Components/Loadingspinner";
import Reveal from "../Components/Reveal";

const MyCourses = () => {
  const { user, loading, setLoading } = use(AuthContext);
  const [courses, setCourses] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    axios
      .get("/my-courses", {
        params: { email: user.email },
      })
      .then((res) => {
        setCourses(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, [user, axios]);
  if (loading) {
    return <Loadingspinner />;
  }
  return (
    <MyContainer>
      <h1 className='text-center text-5xl font-bold mt-15 mb-10'>My Courses</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses.map((course, index) => (
            <Reveal key={course._id} delay={index * 0.1}>
              <CourseCard course={course}  />
            </Reveal>
          ))}
      </div>
    </MyContainer>
  );
};

export default MyCourses;
