import React from "react";
import {sizes} from "@/app/[locale]/styles";

const getTabData = (t) => {
    return [
        {
            id: "skills",
            content: (
                <ul className='text-white list-disc pl-2'>
                    <div className={`${sizes.baseTextSize} text-white skills-area`}>
                        <div className="skill">
                            <div className="skill-title">Unreal Engine</div>
                            <div className="skill-bar"></div>
                            <div className="ue skill-fill">
                                <span className="skill-percent">50%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-title">C++</div>
                            <div className="skill-bar"></div>
                            <div className="cpp skill-fill">
                                <span className="skill-percent">60%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-title">C#</div>
                            <div className="skill-bar"></div>
                            <div className="csharp skill-fill">
                                <span className="skill-percent">40%</span>
                            </div>
                        </div>
                        <div className="skill">
                            <div className="skill-title">PostgreSQL</div>
                            <div className="skill-bar"></div>
                            <div className="pSQL skill-fill">
                                <span className="skill-percent">70%</span>
                            </div>
                        </div>
                    </div>
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