import type { ElementType, ReactNode } from "react";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className = "" }: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
