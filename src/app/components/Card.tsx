import React, { ChangeEvent, useState } from "react";

type CardProps = {
    id: number;
    title: string;
    className?: string;
    completed: boolean;
};
    



export const Card: React.FC<CardProps> = ({
    title = "Title",
    className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",
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

export default Card;
export type {CardProps};