import React from "react";
import { Link } from "react-router";

const CourseCard = ({ course }) => {
  const { title, category, image, description, _id } = course;
  return (
    
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <figure className="h-66 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover hover:scale-90 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{}</h2>
        <div className="badge text-xs badge-xs bg-purple-300 rounded-full">
          {category}
        </div>
        <div className="text-xs text-secondary">{title}</div>
        <p className="line-clamp-1">{description}</p>
        {/* <p className="text-sm text-base-content/70">by {author}</p> */}
        <div className="card-actions justify-between items-center mt-4">
          <div className="flex gap-4 text-sm text-base-content/60">
            {/* <span className="flex items-center gap-1">
              <Eye className="w-4 h-4" />
              {views}
            </span> */}
            {/* <span className="flex items-center gap-1">
              <Heart className="w-4 h-4" />
              {likes}
            </span> */}
          </div>
          <Link
            to={`/course-details/${_id}`}
            className="my-btn"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
