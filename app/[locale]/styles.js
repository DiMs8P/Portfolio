const sizes = {
    baseTextSize: "text-[16px] sm:text-[18px] lg:text-[20px]",
    emailSectionSize:
        "text-[21px] sm:text-[23px] lg:text-[25px]",
};

const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",

    heroHeadText:
        "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
        "bg-gradient-to-r text-transparent bg-clip-text from-cyan-300 to-blue-400text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

    sectionHeadText:
        "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
        `text-secondary ${sizes.baseTextSize} uppercase tracking-wider`,
    sectionIntroText:
        `text-secondary ${sizes.baseTextSize} leading-[30px]`,

    buttonStyle:
        "bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500\n" +
        "                        hover:from-teal-600 hover:via-cyan-600 hover:to-blue-600\n" +
        "                        hover:bg-slate-100",
};

export { styles, sizes };
