"use client";

import { Project } from "@/types/projects";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Tilt } from "react-tilt";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  return (
    
    <div className="w-full max-w-[320px]">
      <Tilt
        options={{
          max: 30,
          scale: 1,
          speed: 450,
        }}
        className="flex flex-col p-4 bg-dark-gray border border-white rounded-md gap-4 w-full group relative transition-all h-full"
      >
        <div className="relative w-full">
          <Image
            height={project.height ?? 400}
            width={project.width ?? 400}
            src={project.image}
            alt={project.title}
            className="w-full h-60 object-cover rounded-md"
          />
          <div className="flex gap-4 absolute top-2 right-2 scale-95 transition-all hover:scale-100 hover:brightness-110">
            <Link href={project.github} className="text-white" target="_blank">
              <FaGithub size={40} className="bg-dark-gray p-1.5 rounded-full" />
            </Link>
          </div>
        </div>
        <div className="transition-all flex flex-col gap-2 [&>*]:z-10">
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#3178c6] hover:underline"
            >
              Visit Project
            </a>
          )}
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-sm">{project.description}</p>
          <div className="text-sm space-x-2 flex flex-wrap gap-y-1">
            {project.tags.map((tag) => (
              <span
                key={tag.name}
                style={{
                  color: tag.color,
                }}
              >
                #{tag.name}
              </span>
            ))}
          </div>
        </div>
      </Tilt>
    </div>
  );
} 