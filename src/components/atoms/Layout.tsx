import React from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}
const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-100 h-10 bg-red-300">GGG</div>
      {children}
      <div className="w-100 h-10 bg-green-300">#########</div>
    </>
  );
};

export default AppLayout;
