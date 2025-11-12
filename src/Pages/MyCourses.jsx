import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import MyContainer from "../Components/MyContainer";
import CourseCard from "../Components/CourseCard";
import useAxios from "../Hooks/useAxios";
import Loadingspinner from "../Components/Loadingspinner";

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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </MyContainer>
  );
};

export default MyCourses;
