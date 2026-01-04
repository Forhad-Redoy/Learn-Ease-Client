import React from "react";
import { FaBookReader } from "react-icons/fa";
import {  PiStudentBold } from "react-icons/pi";
const TopInstructors = () => {
  const instructors = [
    {
      name: "Dr. Sarah Kim",
      title: "Data Science Expert",
      image: "https://i.ibb.co/xq7C4yCp/ins2.jpg",
      students: "2500+",
      courses: 12,
    },
    {
      name: "John Carter",
      title: "Full-Stack Developer",
      image: "https://i.ibb.co/043pXSf/ins1.jpg",
      students: "1850+",
      courses: 9,
    },
    {
      name: "Hasan Malik",
      title: "UI/UX Design Specialist",
      image: "https://i.ibb.co/Y4TJrSj2/ins-3.webp",
      students: "1520+",
      courses: 7,
    },
    {
      name: "Carlos Mendes",
      title: "Music Teacher",
      image: "https://i.ibb.co/R4Mvdj98/ins4.jpg",
      students: "800+",
      courses: 5,
    },
  ];

  return (
    <section className="py-16 ">
      <div className=" mx-auto text-center">
         <div className='text-center text-5xl font-bold mt-15 mb-5'><span className='text-purple-500'>Top</span> Instructors</div>
         <p className=" max-w-2xl mx-auto mb-12">
          Our instructors are industry professionals with years of experience and a passion for teaching. 
          They bring real-world insights, hands-on projects, and personalized guidance to help you succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
            >
              <img
                src={instructor.image}
                alt={instructor.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {instructor.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{instructor.title}</p>
              <div className="text-sm text-gray-600 space-y-1">
                <p className="flex justify-center items-center gap-1"><PiStudentBold /> {instructor.students} students</p>
                <p className="flex justify-center items-center gap-1"> <FaBookReader />{instructor.courses} courses</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopInstructors;
