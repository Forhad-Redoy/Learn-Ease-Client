import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useAxios from '../Hooks/useAxios';
import Loadingspinner from '../Components/Loadingspinner';
import MyContainer from '../Components/MyContainer';
import CourseCard from '../Components/CourseCard';

const MyEnrolls = () => {
    const { user, loading, setLoading } = use(AuthContext);
      const [courses, setCourses] = useState([]);
      const axios = useAxios();
       useEffect(() => {
    axios
      .get("/my-enrolls", {
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
            <h1 className='text-center text-4xl font-bold my-7'>My Enrolls</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course._id} course={course} />
        ))}
      </div>
    </MyContainer>
    );
};

export default MyEnrolls;