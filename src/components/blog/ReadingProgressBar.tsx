"use client"

import React, { useState, useEffect } from 'react';

const ReadingProgressBar: React.FC = () => {
  const [readingProgress, setReadingProgress] = useState(0);

  useEffect(() => {
    const updateReadingProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight) {
        setReadingProgress(Number((currentProgress / scrollHeight).toFixed(2)) * 100);
      }
    }

    window.addEventListener('scroll', updateReadingProgress);

    return () => {
      window.removeEventListener('scroll', updateReadingProgress);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-primary transition-all duration-300 ease-out"
        style={{ width: `${readingProgress}%` }}
      />
    </div>
  );
};

export default ReadingProgressBar;