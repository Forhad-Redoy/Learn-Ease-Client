import React from 'react';
import { useLoaderData } from 'react-router';
import MyContainer from '../Components/MyContainer';
import CourseCard from '../Components/CourseCard';
import WhyChooseUs from '../Components/WhyChooseUS';
import Reveal from '../Components/Reveal';
import HeroSection from '../Components/HeroSection';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
             <MyContainer>
              <HeroSection/>
            <div className='text-center text-5xl font-bold my-7'>Populer Courses</div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
       {data.map((course, index) => (
            <Reveal key={course._id} delay={index * 0.1}>
              <CourseCard course={course}  />
            </Reveal>
          ))}
      </div>
      <WhyChooseUs/>
        </MyContainer>
        </div>
    );
};

export default Home;