import React from "react";

type AppProps = {
  children: React.ReactNode;
  bgColor: string;
  textColor: string;
  disabled: boolean;
  handler: () => void;
};

const Button = ({
  children,
  bgColor,
  textColor,
  disabled,
  handler = () => {},
}: AppProps) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-8 rounded-full relative z-10 uppercase ${disabled ? "opacity-70 cursor-not-allowed" : "opacity-100"}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
