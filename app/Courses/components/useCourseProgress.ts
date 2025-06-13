// components/useCourseProgress.ts
import { useState, useEffect } from 'react';

export default function useCourseProgress(courseId: string) {
  const [progress, setProgress] = useState(0);

  // Load saved progress from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem(`course-progress-${courseId}`);
    if (saved) setProgress(parseFloat(saved));
  }, [courseId]);

  // Save progress to localStorage when it changes
  const updateProgress = (value: number) => {
    const rounded = Math.round(value * 100) / 100; // Keep two decimal places
    setProgress(rounded);
    localStorage.setItem(`course-progress-${courseId}`, rounded.toString());
  };

  return { progress, updateProgress };
}
