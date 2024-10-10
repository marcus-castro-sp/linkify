
import { AnimationContainer, Blogs, MaxWidthWrapper } from "@/components";
import Authors from "@/components/author/authors";
import { Badge } from "@/components/ui/badge";
import React, { useState, useEffect } from 'react';

const AuthorsPage = () => {

    return (
        <div className="flex flex-col items-center justify-center pb-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Authors
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Check out our awesome team.
                </p>
            </AnimationContainer>
            <AnimationContainer delay={0.2} className="w-full pt-20">
                <Authors />
            </AnimationContainer>
        </div>
    );
};

export default AuthorsPage;