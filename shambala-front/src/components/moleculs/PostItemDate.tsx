import { format, parseISO } from "date-fns";
import React from "react";

export interface PostItemDateProps {
  date?: Date;
}
const PostItemDate: React.FC<PostItemDateProps> = ({ date }) => {
  const actualDate = date || new Date();

  return (
    <time
      className="text-xs dark:text-gray-500 flex flex-col justify-end"
      dateTime={actualDate.toISOString()}
    >
      {format(parseISO(actualDate.toISOString()), "MMMM dd, yyyy")}
    </time>
  );
};

export default PostItemDate;
