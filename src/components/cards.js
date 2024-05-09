import React, { createFactory, useState } from 'react';
import Card from './card';

const Cards = ({courses,category}) => {

    const [likedCourses , setLikedCourses] = useState([]);
    console.log(category);
    const getCourses = () => {
        if (category === "All"){
            let allcourses = [];
            Object.values(courses).forEach(array => {
                array.forEach((courseData) => {
                    allcourses.push(courseData);
                })
            })
            console.log(allcourses);
            return allcourses;
        }else{
            return courses[category];
        }
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4 '>
            {
                getCourses().map((course) => {
                   return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
                })
            }
             
        </div>
    );
}

export default Cards;
