import React from "react";

const landingButtonStyle =
  "bg-opacity-0 outline outline-2 px-6 py-4 text-xl text-white outline-offset-0 outline-white hover:text-slate-950 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate";

const actionButtonStyle =
  "bg-slate-950 outline outline-2 px-3 py-2 text-m text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate";

interface LandingButtonChildren {
  href?: string;
  text?: string;
  target?: string;
  rel?: string;
}

interface ActionButtonChildren {
  type?: "submit" | "reset" | "button" | undefined;
  text?: string;
  disabled?: boolean;
}

export const LinkButton: React.FC<LandingButtonChildren> = ({
  href,
  text,
  target,
  rel,
}) => {
  return (
    <>
      <a
        href={href ? href : "#"}
        target={target ? target : ""}
        rel={rel ? rel : ""}
        className={landingButtonStyle}
      >
        {text}
      </a>
    </>
  );
};

export const ActionButton: React.FC<ActionButtonChildren> = ({
  type,
  text,
  disabled,
}) => {
  return (
    <>
      <button
        className={actionButtonStyle}
        type={type}
        disabled={disabled ? disabled : false}
      >
        {text}
      </button>
    </>
  );
};
