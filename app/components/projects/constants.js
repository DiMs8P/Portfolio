import GithubIcon from "../../../src/github-icon.svg";
import SwapAndTap from "../../../src/SwapAndTap.jpg";
import GoogleDrive from "../../../src/GoogleDrive.png";
import ShoutThemUp from "../../../src/ShoutThemUp.jpg";
import MazeGenerator from "../../../src/MazeGenerator.png"

const projects = (t) => {
    return [
        {
            name: "SwapAndTap",
            description: t("SwapAndTap"),
            tags: [
                {
                    name: "UnrealEngine5",
                    color: "blue-text-gradient",
                },
                {
                    name: "Mobile",
                    color: "green-text-gradient",
                }
            ],
            filters: [filters[0], filters[1]],
            image: SwapAndTap,
            src: GoogleDrive,
            source_code_link: "https://drive.google.com/drive/folders/1PfrGncdCtt9NgWj2s0_CDAaqpyIEZREp?usp=sharing",
        },
        {
            name: "TreasureHunting",
            description: t("ShooterGame"),
            tags: [
                {
                    name: "UnrealEngine5",
                    color: "blue-text-gradient",
                },
                {
                    name: "PC",
                    color: "green-text-gradient",
                }
            ],
            filters: [filters[0], filters[1]],
            image: MazeGenerator,
            src: GithubIcon,
            source_code_link: "https://github.com/DiMs8P/TreasureHunting",
        },
        {
            name: "ShootThemUp",
            description: t("ShooterGame"),
            tags: [
                {
                    name: "UnrealEngine5",
                    color: "blue-text-gradient",
                },
                {
                    name: "PC",
                    color: "green-text-gradient",
                },
                {
                    name: "Udemy",
                    color: "pink-text-gradient",
                },
            ],
            filters: [filters[0], filters[1]],
            image: ShoutThemUp,
            src: GithubIcon,
            source_code_link: "https://github.com/DiMs8P/ShootThemUp",
        }
    ];
}

const filters = [
    "All",
    "Unreal Engine",
    "Other"
]


export {projects, filters};