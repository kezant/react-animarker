"use client";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { motion } from "framer-motion";

interface PostCardProps {
  post: {
    name: string;
    description: string;
    url: string;
  };
}
export default function PostCard({ post }: PostCardProps) {
  return (
    <motion.div
      initial={{ scale: 1, boxShadow: "0 0 0" }}
      className="rounded-md"
      whileHover={{ scale: 1.02, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Link href={"/"} passHref>
        <Card className="">
          <CardHeader>
            <CardTitle>{post.name}</CardTitle>
            <CardDescription>{post.description}</CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </motion.div>
  );
}
