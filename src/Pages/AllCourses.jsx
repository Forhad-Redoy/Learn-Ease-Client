import React, { use, useState } from "react";
import { useLoaderData } from "react-router";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import Reveal from "../Components/Reveal";
import { AuthContext } from "../Context/AuthContext";
import Loadingspinner from "../Components/Loadingspinner";

const AllCourses = () => {
  const loadedData = useLoaderData(); // all courses from loader
  const [courses, setCourses] = useState(loadedData);
  const { loading } = use(AuthContext);

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Development",
    "Design",
    "Data Science",
    "Marketing",
    "Art",
  ];

  const handleFilter = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setCourses(loadedData);
      return;
    }

    // Filter by category (case-insensitive, partial match)
    const filtered = loadedData.filter(
      (course) =>
        course.category &&
        course.category.toLowerCase().includes(category.toLowerCase())
    );

    setCourses(filtered);
  };

  if (loading) {
    return <Loadingspinner />;
  }

  return (
    <div className="min-h-screen">
      <MyContainer>
        <h1 className="text-center text-5xl font-bold mt-15 mb-10">
          All Courses
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleFilter(cat)}
              className={`px-4 py-2 rounded-lg border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
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
