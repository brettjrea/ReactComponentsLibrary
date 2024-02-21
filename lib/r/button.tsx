import React, { useState } from 'react';
import './button.css'; // Ensure this path is correct

interface ButtonProps {
  initialCount?: number; // Optional prop to start counting from a specific number
}

const Button: React.FC<ButtonProps> = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleClick = () => {
    setCount(count + 1); // Increment the count on click
  };

  return (
    <button className="custom-button" onClick={handleClick}>
      Clicked {count} times
    </button>
  );
};

export default Button;

