import GithubIcon from "../../../src/github-icon.svg";
import SwapAndTap from "../../../src/Projects/SwapAndTap.jpg";
import GoogleDrive from "../../../src/GoogleDrive.png";
import ShoutThemUp from "../../../src/Projects/ShoutThemUp.jpg";
import MazeGenerator from "../../../src/Projects/MazeGenerator.png"
import SpaceXX from "../../../src/Projects/SpaceXX.jpg"

const projects = (t) => {
    return [
        {
            name: "Swap And Tap",
            description: t("SwapAndTap"),
            tags: [
                {
                    name: "UnrealEngine5",
                    color: "blue-text-gradient",
                },
                {
                    name: "Mobile",
                    color: "green-text-gradient",
                },
                {
                    name: "Personal",
                    color: "pink-text-gradient",
                }
            ],
            filters: [filters[0], filters[1]],
            image: SwapAndTap,
            src: GoogleDrive,
            source_code_link: "https://drive.google.com/drive/folders/1PfrGncdCtt9NgWj2s0_CDAaqpyIEZREp?usp=sharing",
        },
        {
            name: "Treasure Hunting",
            description: t("TreasureHunting"),
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
                    name: "Personal",
                    color: "pink-text-gradient",
                }
            ],
            filters: [filters[0], filters[1]],
            image: MazeGenerator,
            src: GithubIcon,
            source_code_link: "https://github.com/DiMs8P/TreasureHunting",
        },
        {
            name: "Shoot Them Up",
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
                }
            ],
            filters: [filters[0], filters[1]],
            image: ShoutThemUp,
            src: GithubIcon,
            source_code_link: "https://github.com/DiMs8P/ShootThemUp",
        },
        {
            name: "Laser Defender",
            description: t("LaserDefender"),
            tags: [
                {
                    name: "Unity",
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
            filters: [filters[0], filters[2]],
            image: SpaceXX,
            src: GithubIcon,
            source_code_link: "https://github.com/DiMs8P/Space-30XX",
        }
    ];
}

const filters = [
    "All",
    "Unreal Engine",
    "Unity"
]


export {projects, filters};