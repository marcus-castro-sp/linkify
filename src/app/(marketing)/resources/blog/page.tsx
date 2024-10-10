"use client";

import { AnimationContainer, Blogs, MaxWidthWrapper } from "@/components";
import { Badge } from "@/components/ui/badge";
import React, { useState, useEffect } from 'react';

const BlogPage = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    useEffect(() => {
        // Fetch categories from an API or define them statically
        const fetchCategories = async () => {
            // Example static categories
            const categories = ["All", "Tech", "Lifestyle", "Business"];
            setCategories(categories);
        };

        fetchCategories();
    }, []);

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category === "All" ? null : category);
    };

    return (
        <div className="flex flex-col items-center justify-center pb-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Blog
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Latest news and updates.
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full pt-20">
                <div className="flex justify-center mb-6">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            className={`px-4 py-2 mx-2 cursor-pointer ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>
                <Blogs selectedCategory={selectedCategory} />
            </AnimationContainer>
        </div>
    );
};

export default BlogPage;