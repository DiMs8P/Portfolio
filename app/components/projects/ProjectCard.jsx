import Tilt from "react-parallax-tilt";
import Image from "next/image";
import github from "../../../src/github-icon.svg";
import TextSplitter from "@/app/components/utils/TextSplitter";

const ProjectCard = ({
                         index,
                         name,
                         description,
                         tags,
                         image,
                         src,
                         source_code_link,
                     }) => {
    return (
        <div>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl lg:w-[330px] md:w-[320px] w-full'
            >
                <div className='relative w-full h-[230px]'>
                    <Image
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />

                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <Image
                                src={src}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <TextSplitter
                        className='mt-2 text-secondary text-[14px]'
                        text={description}
                    />
                </div>

                <div className='mt-4 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </div>
    );
};

export default ProjectCard;