import { motion } from "framer-motion";
import MotionWrapper from "@/components/MotionWrapper.tsx";
import type {Blog} from "@/content.config.ts";
import {useTranslatedContent} from "@/lib/hooks.ts";

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    y: -5,
    transition: {
      duration: 0.2,
    },
  }
}

export default function Blogs({blogs}: { blogs: Blog[] }) {

  const { descriptions } = useTranslatedContent();

  return (
    <MotionWrapper>
      <h2 className="text-3xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
        Blogs
      </h2>
      <p
        className="text-muted-foreground mb-10 text-lg"
      >{descriptions.blogPageDescription}</p>
      <div className="flex flex-col gap-8">
        {blogs.map((blog) => (
          <motion.a key={blog.slug} href={`/blog/${blog.slug}`} initial="hidden" whileInView="visible"
                    whileHover="hover" variants={animationVariants}>
            <article className="p-4 bg-card rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold">{blog.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">
                {new Date(blog.publicationDate).toLocaleDateString()}
              </p>
              <p>{blog.description}</p>
            </article>
          </motion.a>
        ))}
      </div>
    </MotionWrapper>
  );
}