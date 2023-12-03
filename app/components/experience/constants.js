import DreamVRIcon from '../../../src/DreamVR.jpg'

const experiences = (t) => {
    return [
        {
            title: "Unreal Engine Developer",
            company_name: "DreamVR",
            icon: DreamVRIcon,
            iconBg: "#383E56",
            date: t("DreamVR.Date"),
            points: [
                t("DreamVR.Points.FirstPoint"),
                t("DreamVR.Points.SecondPoint"),
                t("DreamVR.Points.ThirdPoint")
            ],
        },
    ];
}

export {experiences};
