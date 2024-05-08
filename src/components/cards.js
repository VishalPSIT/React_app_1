import React from 'react';
import Card from './card';

const Cards = ({courses}) => {

       

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
        <div>
            {
                getCourses().map((course) => {
                   return <Card key={course.id} course={course}></Card>
                })
            }
             
        </div>
    );
}

export default Cards;
