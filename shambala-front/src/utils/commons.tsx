import clsx from "clsx";

export const cx = (...inputs: clsx.ClassValue[]) => clsx(inputs);

// because we use sanity-next-image
// vercel throws error when using normal imports
export const myLoader = ({ src }) => {
  return src;
};
