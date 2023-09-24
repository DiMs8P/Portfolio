import React from "react";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Unreal Engine</li>
                <li>PostgreSQL</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Trash can(NSTU)</li>
                <li>Udemy</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>English</li>
                <li>Game start finalyst</li>
            </ul>
        )
    }
]

export {TAB_DATA};