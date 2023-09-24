import GithubIcon from "../../../src/github-icon.svg";

const projects = (t) => {
    return [
        {
            name: "Swap And Tap",
            description: t("SwapAndTap"),
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "mongodb",
                    color: "green-text-gradient",
                },
                {
                    name: "tailwind",
                    color: "pink-text-gradient",
                },
            ],
            image: GithubIcon,
            source_code_link: "https://github.com/",
        },
        {
            name: "Shooter Game",
            description: t("ShooterGame"),
            tags: [
                {
                    name: "react",
                    color: "blue-text-gradient",
                },
                {
                    name: "restapi",
                    color: "green-text-gradient",
                },
                {
                    name: "scss",
                    color: "pink-text-gradient",
                },
            ],
            image: GithubIcon,
            source_code_link: "https://github.com/",
        }
    ];
}

export {projects};