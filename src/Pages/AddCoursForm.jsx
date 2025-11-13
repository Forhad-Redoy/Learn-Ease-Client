import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import useAxios from "../Hooks/useAxios";

const AddCourseForm = () => {
  const { user,loading } = use(AuthContext);
  const axios = useAxios();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newCourse = {
      title: form.title.value,
      image: form.image.value,
      price: parseFloat(form.price.value),
      duration: form.duration.value,
      category: form.category.value,
      description: form.description.value,
      createdBy: user.email,
      isFeatured: form.isFeatured.checked,
    };
    axios
      .post("/courses", newCourse)
      .then((res) => {
        toast.success("Successfully Added!");
        console.log(res.data);
      })
      .catch((err) => {
        console.error("Error adding course:", err);
        toast.error("Failed to add course!");
      });
  };
   if (loading) {
    return <Loadingspinner />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="bg-base-100 shadow-xl p-8 rounded-2xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center">Add New Course</h2>

        <div>
          <label className="label">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter course title"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="label">Image URL</label>
          <input
            type="url"
            name="image"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="label">Price ($)</label>
            <input
              type="number"
              name="price"
              placeholder="Price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="label">Duration</label>
            <input
              type="text"
              name="duration"
              placeholder="e.g. 4 weeks"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>

        <div>
          <label className="label">Category</label>
          <select
            name="category"
            className="select select-bordered w-full"
            required
          >
            <option value="">Select category</option>
            <option value="Design">Design</option>
            <option value="Development">Development</option>
            <option value="Music">Music</option>
            <option value="Business">Business</option>
            <option value="Art">Art</option>
          </select>
        </div>

        <div>
          <label className="label">Description</label>
          <textarea
            name="description"
            placeholder="Enter course description"
            className="textarea textarea-bordered w-full"
            rows="4"
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input type="checkbox" name="isFeatured" className="checkbox" />
          <span>Mark as Featured</span>
        </div>

        <button className="my-btn">Add Course</button>
      </form>
    </div>
  );
};

export default AddCourseForm;
