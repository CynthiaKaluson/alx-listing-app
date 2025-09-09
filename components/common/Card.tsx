import React from "react";

export interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-lg font-bold">{title}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
};

export default Card;
