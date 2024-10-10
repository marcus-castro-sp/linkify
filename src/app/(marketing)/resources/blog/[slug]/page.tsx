import React from 'react';
import Image from 'next/image';
import blogs from "@/utils/constants/blogs.json";

import { Badge } from "@/components/ui/badge"

import { RelatedArticles } from '@/components/blog/relatedArticles';
import ReadingProgressBar from '@/components/blog/ReadingProgressBar';
import NewsletterSignup from '@/components/common/NewsletterSignup';

interface Props {
    params: {
        slug: string;
    };
}

interface BlogPost {
    title: string;
    image: string;
    author_image: string;
    author_name: string;
    date_published: string;
    description: string;
    slug: string;
    category: string;
    content: string;
}

const BlogPage = ({ params }: Props) => {
    const blog = React.useMemo(() => blogs.find((blog) => blog.slug === params.slug) as BlogPost, [params.slug]);

    return (
        <>      
            <ReadingProgressBar />      
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
                {blog ? (
                    <div className="flex flex-col items-center justify-center">
                        
                        {/* Category */}
                        <Badge className="cursor-pointer">{blog.category}</Badge>

                        {/* Title */}
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            {blog.title}
                        </h1>

                        {/* Description */}
                        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                            {blog.description}
                        </p>

                        {/* Author Section */}
                        <div className="flex items-center mt-6 pb-10">
                            <Image
                                src={blog.author_image || '/fallback-image.png'}
                                alt={blog.author_name || 'Author'}
                                width={60}
                                height={60}
                                loading="lazy"
                                className="rounded-full mr-4"
                            />
                            <div>
                                <p className="text-base md:text-lg text-muted-foreground">
                                    By {blog.author_name}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Published on {new Date(blog.date_published).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Full-Width Image with max height */}
                        <div className="w-full max-h-[400px] overflow-hidden pb-20">
                            <Image
                                src={blog.image}
                                alt={`Image for blog post titled ${blog.title}`}
                                layout="responsive" 
                                width={1920} 
                                height={1080} 
                                loading="lazy"
                                className="object-cover" 
                            />
                        </div>

                        {/* Article Content */}
                        <div className="mt-6 text-left max-w-3xl text-base md:text-lg text-muted-foreground">
                            {blog.content.split("\n").map((paragraph, index) => (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            ))}
                        </div>

                        <div className="w-full py-20 lg:py-40">
                            <RelatedArticles />
                        </div>

                        <div className="items-center justify-center w-full px-4 md:px-0 pb-20">
                        <NewsletterSignup />
                    </div>
                    </div>
                ) : (
                    <div className="items-center justify-center mt-6 pb-20">
                        <p className="text-xl text-center mt-10">Blog post not found.</p>
                    </div>
                )}               
            </div>            
        </>
    );
};

export default BlogPage;
