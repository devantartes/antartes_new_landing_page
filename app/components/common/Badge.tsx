import React from "react";

export default function Badge({
  children,
  ...props
}: {
  children: React.ReactNode;
} & React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={`border border-border px-2 py-1.5 rounded-3xl text-sm text-center ${props.className}`}
    >
      {children}
    </div>
  );
}
