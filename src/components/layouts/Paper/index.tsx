import React from 'react';
import { ReactNode } from 'react';

interface PaperProps {
  children?: ReactNode;
  pageNumber?: number;
}

const Paper: React.FC<PaperProps> = ({ children, pageNumber }) => {
  return (
    <div className="relative w-full max-w-[1100px] min-h-screen mx-auto my-0 md:my-10 px-5 py-10 sm:px-10 sm:py-12 md:px-16 md:py-16 bg-white border-x-0 md:border border-[var(--line)] rounded-none md:rounded-[var(--radius-page)]">
      {children}
      {pageNumber !== undefined && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
          {pageNumber}
        </div>
      )}
    </div>
  );
};

export default Paper;
