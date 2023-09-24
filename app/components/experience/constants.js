import GithubIcon from '../../../src/github-icon.svg'

const experiences = (t) => {
    return [
        {
            title: "React.js Developer",
            company_name: "DreamVR",
            icon: GithubIcon,
            iconBg: "#383E56",
            date: t("DreamVR.Date"),
            points: [
                t("DreamVR.Points.FirstPoint"),
                t("DreamVR.Points.SecondPoint"),
                t("DreamVR.Points.ThirdPoint"),
                t("DreamVR.Points.ForthPoint")
            ],
        },
    ];
}

export {experiences};
