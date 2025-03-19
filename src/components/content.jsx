import React from "react";

const Content = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      Homepage Content
      <p className="">© {currentYear} Kelvin Akaba. All rights reserved</p>
    </div>
  );
};

export default Content;
