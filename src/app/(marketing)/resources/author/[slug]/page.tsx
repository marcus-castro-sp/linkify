import React from 'react';
import Image from 'next/image';
import authors from "@/utils/constants/authors.json";
import { Blogs } from '@/components';


interface Props {
    params: {
        slug: string;
    };
}

interface Author {
    id: string;
    slug: string;
    image: string;
    name: string;
    author_name: string;
    profession: string;
    bio: string;
    posts: string[];
}

const BlogPage = ({ params }: Props) => {
    const author = React.useMemo(() => authors.find((author) => author.slug === params.slug) as Author, [params.slug]);

    return (
        <>         
            <div className="flex flex-col items-center justify-center max-w-6xl mx-auto px-4 md:px-0">
                {author ? (
                    <div className="flex flex-col items-center justify-center">

                        {/* Author Image */}
                        <div className="flex items-center mt-6 pb-10">
                            <Image
                                src={author.image || '/fallback-image.png'}
                                alt={author.name || 'Author'}
                                width={120}
                                height={120}
                                loading="lazy"
                                className="rounded-full mr-4"
                            />
                        </div>

                        {/* Author Name */}
                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                            {author.name}
                        </h1>

                        {/* Author Bio */}
                        <div className="mt-6 text-center max-w-3xl text-base md:text-lg text-muted-foreground pt-4">
                            {author.bio}
                        </div>
                        
                        {/* Author Articles */}
                        <div className="items-center justify-center mt-6 pb-20">
                            <Blogs />
                        </div>
                        
                    </div>
                ) : (
                    <div className="items-center justify-center mt-6 pb-20">
                        <p className="text-xl text-center mt-10">Author not found.</p>
                    </div>
                )}
                
            </div>            
        </>
    );
};

export default BlogPage;
