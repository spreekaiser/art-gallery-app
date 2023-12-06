import React, { useState, useEffect } from "react";

interface IProps {
  trigger: string;
  delay: number;
  content: string;
  buttonText: string;
}

export function Popup({ trigger, delay, content, buttonText }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (trigger === "load") {
      const timeout = setTimeout(() => {
        setIsOpen(true);
      }, delay || 0);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [trigger, delay]);

  return (
    <div>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <p>{content}</p>
            <button onClick={() => setIsOpen(false)}>{buttonText}</button>
          </div>
        </div>
      )}
    </div>
  );
}
