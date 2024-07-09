import React from "react";

type InnerNavigationProps = {
  serviceName: string;
};

const NavigationMenu: React.FC<InnerNavigationProps> = ({ serviceName }) => {
  return (
    <div>
      <h3>{serviceName}</h3>
    </div>
  );
};

export default NavigationMenu;
