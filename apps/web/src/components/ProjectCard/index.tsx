"use client";
import { motion } from "framer-motion";
import { GithubIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    url: string;
    github: string;
  };
}
export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-end gap-3">
          <Button variant="outline" size="icon" title="Github repository">
            <GithubIcon />
          </Button>
          <Button>Check it out</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
