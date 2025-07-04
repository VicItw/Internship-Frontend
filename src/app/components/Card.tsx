import React from "react"

type CardProps = {
    id: number;
    title: string;
    completed: boolean;
};
    



export const Card: React.FC<CardProps> = ({
  title = "Title"
}) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-1/2">
      <a>
        <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
      </a>
    </div>
  )
}

export default Card
export type {CardProps}