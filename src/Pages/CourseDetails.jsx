
import React, { use } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import useAxios from '../Hooks/useAxios';
import { AuthContext } from '../Context/AuthContext';
import { toast } from 'react-toastify';

const CourseDetails = () => {
    const data =useLoaderData()
    const navigate = useNavigate();
    const course =data.result;
    const {user}=use(AuthContext)
    const axios=useAxios()

     const handleDlete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       axios
      .delete(`/courses/${course._id}`)
      .then((res) => {
        // console.log(res.data);
        navigate("/all-courses");

        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      })
      .catch((err) => {
        console.error("Error deleting course:", err);
        Swal.fire({
          title: "Error!",
          text: "Failed to delete course.",
          icon: "error",
        });
      });
      }
    });
  };

  const handleEnroll =()=>{
    fetch('http://localhost:3000/enrolls',{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({...course,enrollBy : user.email})
    })
    .then(res => res.json())
    .then(data=>{
      console.log(data)
      toast.success('Successfully Enrolled')
    })
    .catch(err =>{
      console.log(err)
    })
  }
  
    return (
         <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 p-6 md:p-8">
          <div className="shrink-0 w-full md:w-1/2">
            <img
              src={course.image}
              alt=""
              className="w-full object-cover rounded-xl shadow-md"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
              {course.title}
            </h1>

            <div className="flex gap-3">
              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                {course.category}
              </div>

              <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
               {course.price}
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {course.description}
            </p>

            <div className="flex gap-3 mt-6">
              <Link
                to={`/update-course/${course._id}`}
                className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Update Model
              </Link>
              {/* <button
                onClick=""
                className="btn btn-secondary rounded-full"
              >
                Download
              </button> */}
              <button
                onClick={handleEnroll}
                 to={'/my-enrolls'}
                 className="btn btn-primary rounded-full bg-linear-to-r from-pink-500 to-red-600 text-white border-0 hover:from-pink-600 hover:to-red-700"
              >
                Enroll Now
              </button>
              <button
                onClick={handleDlete}
                className="btn btn-outline rounded-full border-gray-300 hover:border-pink-500 hover:text-pink-600"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default CourseDetails;