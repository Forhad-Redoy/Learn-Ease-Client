import React, { useEffect, useState, use } from "react";
import CourseCard from "../Components/CourseCard";
import MyContainer from "../Components/MyContainer";
import Reveal from "../Components/Reveal";
import { AuthContext } from "../Context/AuthContext";
import Loadingspinner from "../Components/Loadingspinner";

const AllCourses = () => {
  const { loading } = use(AuthContext);

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const coursesPerPage = 10;

  const categories = [
    "All",
    "Development",
    "Design",
    "Data Science",
    "Marketing",
    "Art",
  ];

  // Fetch courses
  useEffect(() => {
    fetch(
      `http://localhost:3000/courses?search=${search}&category=${activeCategory}&page=${currentPage}&limit=${coursesPerPage}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
        setTotalPages(data.totalPages);
      });
  }, [search, activeCategory, currentPage]);

  if (loading) {
    return <Loadingspinner />;
  }

  return (
    <div className="min-h-screen">
      <MyContainer>
        <h1 className="text-center text-5xl font-bold mt-15 mb-10">
          All Courses
        </h1>

        {/* Search */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full md:w-1/2 px-4 py-2 border rounded-lg"
          />
        </div>

        {/*  Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded-lg border ${
                activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/*  Courses */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Reveal key={course._id} delay={index * 0.1}>
              <CourseCard course={course} />
            </Reveal>
          ))}
        </div>

        {/*  Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded ${
                  currentPage === i + 1
                    ? "bg-blue-600 text-white"
                    : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-4 py-2 border rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </MyContainer>
    </div>
  );
};

export default AllCourses;
