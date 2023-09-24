import React from "react";

const getTabData = (t) => {
    return [
        {
            id: "skills",
            content: (
                <ul className='list-disc pl-2'>
                    <li>C++</li>
                    <li>Unreal Engine</li>
                    <li>OpenGL</li>
                    <li>PostgreSQL</li>
                </ul>
            )
        },
        {
            id: "education",
            content: (
                <ul className='list-disc pl-2'>
                    <li>{t("Education.University")}</li>
                    <li>
                        Udemy
                        <ul className='list-disc pl-2'>
                            <li><a href='https://www.udemy.com/course/unrealengine/'>{t("Education.Udemy.FirstShooter")}</a></li>
                            <li><a href='https://www.udemy.com/course/unreal-engine-5-cpp-multiplayer-shooter/'>{t("Education.Udemy.Multiplayer")}</a></li>
                            <li><a href='https://www.udemy.com/course/unitycourse/'>{t("Education.Udemy.Unity")}</a></li>
                        </ul>
                    </li>
                </ul>
            )
        },
/*        {
            id: "certifications",
            content: (
                <ul className='list-disc pl-2'>
                    <li>English </li>
                </ul>
            )
        }*/
    ]
}


export {getTabData};