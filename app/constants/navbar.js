import unitedStatesFlag from "@/src/united-states.png";
import russianFlag from "@/src/russia.png";

const generateNavLinks = (t) => {
    return [
        {
            title: t("About"),
            targetId: "about",
        },
        {
            title: t("Experience"),
            targetId: "experience",
        },
        {
            title: t("Projects"),
            targetId: "projects",
        },
        {
            title: t("Contact"),
            targetId: "contact",
        }
    ];
}

const LANGUAGE_DATA = [
    {
        id: "en",
        img: unitedStatesFlag
    },
    {
        id: "ru",
        img: russianFlag
    }
]

export {generateNavLinks, LANGUAGE_DATA};