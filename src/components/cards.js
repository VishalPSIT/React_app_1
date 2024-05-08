import React, { useState } from 'react';
import Card from './card';

const Cards = ({courses}) => {

    const [likedCourses , setLikedCourses] = useState([]);

    const getCourses = () => {
        let allcourses = [];
        Object.values(courses).forEach(array => {
            array.forEach((courseData) => {
                allcourses.push(courseData);
            })
        })
        console.log(allcourses);
        return allcourses;
    }
    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4 '>
            {
                getCourses().map((course) => {
                   return <Card key={course.id} course={course}></Card>
                })
            }
             
        </div>
    );
}

export default Cards;
