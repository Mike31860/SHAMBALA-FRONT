import React from "react";

const getInitials = (name: string) => {
  const nameParts = name.split(" ");
  if (!nameParts.length) {
    return "UN";
  }

  if (nameParts.length == 1) {
    return `${nameParts[0].slice(0, 2)}`;
  }

  return `${nameParts[0][0]}${nameParts[1][0]}`;
};

const generateBackground = (name) => {
  let hash = 0;
  let i;

  for (i = 0; i < name.length; i += 1) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  // name.charCodeAt() return an int between 0 and 65535
  // left shift (<<)  operator moves to left by number of specified
  // bites after <<. The whole for loop will create a color hash
  // based on username length
  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
};

interface LetteredAvatarProps {
  name: string;
}

export const LetteredAvatar: React.FC<LetteredAvatarProps> = ({ name }) => {
  const initials = getInitials(name);
  const color = generateBackground(name);
  console.log("COLOR ", color);
  return (
    <div
      className={`flex w-50 h-50 rounded-full m-auto bg-[${color}] p-2`}
      style={{ background: color }}
    >
      <span className="m-auto text-black"> {initials} </span>
    </div>
  );
};
