import { ProjectsTexts } from "@/types/texts";
import { tags } from "../../tags";
import {
  img_biblioteca,
  img_crud,
  img_ecommerce,
  img_instagram,
  img_minesweeper,
  img_windows,
} from "@/assets/images/projects";

export const projects: ProjectsTexts = {
  title: "Projects",
  projects: [
    {
      link:"https://e-commerce-by-js-html-css.vercel.app/",
      title: "dessert store e-commerce",
      description:
        "Dessert store e-commerce made with html , css ,js   ",
      tags: [
        tags["Css"],
        tags["Html"],
        tags["Js"],
        // tags["PostgreSQL"],
      ],
      image: img_ecommerce,
      height: 1024,
      width: 1024,
      github: "https://github.com/abdelrahman-elsaady/e-commerce-by-js-html-css",
    },
    {
      
      title: "Mostaqel clone website",
      description:
        "A clone of a famous freelance website using Next.js and Nodejs ,MongoDb",
      tags: [tags["React.js"], tags["MongoDB"], 
      tags["Next.js"],
      tags["Node.js"]
    ],
      image: img_windows,
      github: "https://github.com/abdelrahman-elsaady/Mostaqel-nextjs",
      width: 1438,
      height: 737,
      link:"https://mostaqel-clone.vercel.app"
    },
    {
      title: "movie App",
      description:
        "Simple movie App made with React.js to follow the newest movie in the world",
      tags: [
        tags["React.js"],
        // tags[""],
        // tags[""],
        // tags[""],
      ],
      image: img_crud,
      github: "https://github.com/abdelrahman-elsaady/movie-App",
      width: 1376,
      height: 779,
      link:"https://movie-app-beta-wheat.vercel.app/"
    },
    {
      title: "mostaqel clone Dashbourd",

      description: "Dashbourd for mostaqel clone using Angular and Nodejs.",
      tags: [tags["Angular"], tags["Node.js"]],
      image: img_instagram,
      github: "https://github.com/abdelrahman-elsaady/mostaqel.clone.dachbourd",
      link: "https://github.com/abdelrahman-elsaady/mostaqel.clone.dachbourd",
      // link:
    },
    {
      title: "mostaqel clone Node.js ",
      description:
        "mostaqel clone Api system made with Node.js, Express.js and MongoDB.",
      tags: [tags["Node.js"], tags["MongoDB"]],
      image: img_biblioteca,
      github: "https://github.com/abdelrahman-elsaady/mostaqelCloneBackEnd",
      link:"https://github.com/abdelrahman-elsaady/mostaqelCloneBackEnd"
    },
    {
      link:"https://github.com/abdelrahman-elsaady/e-commerce-node.js",
      title: "E-commerce Node.js ",
      description:
        "E-commerce api system made with Node.js, Express.js and MongoDB.",
        tags: [tags["Node.js"], tags["MongoDB"]],

      image: img_minesweeper,
      github: "https://github.com/abdelrahman-elsaady/e-commerce-node.js",
    },
  ],
  
};
