import React from 'react'
import LeftSide from '../../components/LeftSide/LeftSide'
import {TagList} from './TagList'
import './Tags.css'

export const Tags = () => {
    ﻿const tagsList = [
        {
            id: 1,
            tagName: "javascript",
            tagDesc: "JavaScript is a versatile, high-level programming language commonly used for web development. It is known for its flexibility and is primarily used to enhance the interactivity of web pages "
        },
        {
            id: 2,
            tagName: "python",
            tagDesc: "Python is a high-level, interpreted programming language renowned for its simplicity and readability. It emphasizes code readability and offers a comprehensive standard library, making it a favorite among developers for various applications, including web development, data analysis, artificial intelligence, and scientific computing."
        },
        {
            id: 3,
            tagName: "java",
            tagDesc: "Java is a widely-used, object-oriented programming language known for its platform independence and robustness. It is designed to be write once, run anywhere (WORA), meaning that Java code can be executed on any platform supporting the Java Virtual Machine (JVM)."
        },
        {
            id: 4,
            tagName: "php",
            tagDesc: "PHP is a server-side scripting language primarily used for web development and dynamic content generation. It is embedded within HTML and executed on a web server, generating dynamic web pages in response to user requests."
        },
        {
            id:4,
            tagName:"Ruby",
            tagDesc:"This inquiry focuses on sorting an array of hashes by a specific key in Ruby. The objective is to reorganize the hashes within the array in either ascending or descending order based on the values associated with a designated key within each hash."
        },
        {
            id:5,
            tagName:"Swift",
            tagDesc:"This question pertains to sorting an array of structs by a specific property in Swift. The aim is to reorder the structs within the array in either ascending or descending order based on the values of a designated property within each struct."
        },{
            id:6,
            tagName:"Kotlin",
            tagDesc:"This question pertains to sorting a list of data classes by a specific property in Kotlin. The goal is to reorder the data classes within the list in either ascending or descending order based on the values of a designated property within each data class."

        }
    ]
    return (
    <div className='home-container-1'>
        <LeftSide />
        <div className='home-container-2'>
            <h1 className='tags-h1'>Tags</h1>
            <p className='tags-p'>A tag is a kwyword or label that categories your question with other, similar questions.</p>
            <p className='tags-p'>Using the right tags makes it easier for others to find and answer your question.</p>
            <div className='tags-list-container'>
                {
                    tagsList.map((tag)=>(
                        <TagList tag={tag} key={tag.id}/>
                    ))
                }
            </div>
        </div>

    </div>

  )
}
