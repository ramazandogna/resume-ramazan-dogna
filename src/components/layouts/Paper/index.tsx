import React from 'react';
import { ReactNode } from 'react';

interface PaperProps {
  children?: ReactNode;
  pageNumber?: number;
}

const Paper: React.FC<PaperProps> = ({ children, pageNumber }) => {
  return (
    <div className="relative w-full max-w-[210mm] min-h-[240mm] p-[20mm] bg-white border border-gray-300 mb-8 mx-auto">
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
