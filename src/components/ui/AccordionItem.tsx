import React from 'react';
import { ChevronRight } from 'lucide-react';

interface AccordionItemProps {
  title: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
  iconColor?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  isOpen,
  onToggle,
  children,
  className = '',
  titleClassName = '',
  contentClassName = '',
  iconColor = 'text-gray-500'
}) => {
  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden ${className}`}>
      <button
        onClick={onToggle}
        className={`w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 ${titleClassName}`}
        aria-expanded={isOpen}
      >
        <div className="font-medium text-gray-900 dark:text-gray-100">{title}</div>
        <ChevronRight
          className={`w-5 h-5 ${iconColor} transition-transform duration-200 ${
            isOpen ? 'rotate-90' : ''
          }`}
          aria-hidden="true"
        />
      </button>
      
      <div
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className={`px-4 py-3 border-t border-gray-200 dark:border-gray-700 ${contentClassName}`}>
          {children}
        </div>
      </div>
    </div>
  );
};