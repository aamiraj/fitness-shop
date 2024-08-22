import React from "react";

type AppProps = {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  handler: () => void;
};

const Button = ({
  children,
  bgColor,
  textColor,
  handler = () => {},
}: AppProps) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10`}
    >
      {children}
    </button>
  );
};

export default Button;
