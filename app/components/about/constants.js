import React from "react";

const getTabData = (t) => {
    return [
        {
            id: "skills",
            content: (
                <ul className='text-white list-disc pl-2'>
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
                <ul className='text-white list-disc pl-2'>
                    <li>
                        Bachelor&apos;s degree
                        <ul className='text-secondary list-decimal pl-2'>
                            <li>{t("Education.University")}</li>
                        </ul>
                    </li>
                    <li>
                        Udemy
                        <ul className='text-secondary list-decimal pl-2'>
                            <li className='hover:text-white'><a target='_blank' href='https://www.udemy.com/course/unrealengine/'>{t("Education.Udemy.FirstShooter")}</a></li>
                            <li className='hover:text-white'><a target='_blank' href='https://www.udemy.com/course/unreal-engine-5-cpp-multiplayer-shooter/'>{t("Education.Udemy.Multiplayer")}</a></li>
                            <li className='hover:text-white'><a target='_blank' href='https://www.udemy.com/course/unitycourse/'>{t("Education.Udemy.Unity")}</a></li>
                        </ul>
                    </li>
                </ul>
            )
        },
        {
            id: "certifications",
            content: (
                <ul className='text-secondary list-disc pl-2'>
                    <li className='hover:text-white'><a target='_blank' href='https://imgur.com/a/2uVlUbc'>{t("Certifications.English")}</a></li>
                    <li className='hover:text-white'><a target='_blank' href='https://imgur.com/a/4SNIoap'>{t("Certifications.StartTheGame")}</a></li>
                </ul>
            )
        }
    ]
}


export {getTabData};