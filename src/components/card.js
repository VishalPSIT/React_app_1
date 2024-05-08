import React from 'react';
import {FcLike} from "react-icons/fc"

const Card = ({courseData}) => {
    return (
        <div>
            <div>
                <img src={courseData.image.url}></img>
                <div>
                    <button>
                        <FcLike fontSize="1.75rem"/>
                    </button>
                </div>
            </div>
            <div>
                <p>{courseData.title}</p>
                <p> {courseData.description}</p>
            </div>
        </div>
    );
}

export default Card;
