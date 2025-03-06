import React, { useEffect, useRef, useState } from 'react';
import imageAICallCustomer from '../../assets/images/ai-agent-customer-call.png';

function Step({ stepData }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const updateState = () => {
      setTimeout(() => {
        setIsOpen(false);
        setIsLoading(false);
      }, 2500);
    };
    updateState();
  }, []);

  return (
    <div className="step-item">
      <div className="title" onClick={toggleContent}>
        {isLoading ? (
          <span class="material-symbols-outlined rotate-item rotate-icon">
            refresh
          </span>
        ) : (
          <span className="glowing-dot"></span>
        )}
        <span className="title">{stepData.title}</span>{' '}
        <span className={`material-symbols-outlined ${isOpen ? 'open' : ''}`}>
          keyboard_arrow_down
        </span>
      </div>
      {isOpen && (
        <div
          ref={contentRef}
          style={{
            height: isOpen ? contentRef.current?.scrollHeight : 0,
            opacity: isOpen ? 1 : 0,
          }}
          className={`content ${isOpen ? 'open' : ''}`}
        >
          {stepData.description}
          {stepData.hasImage && (
            <>
              <br />
              <img className="image-in-content" src={imageAICallCustomer} />
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Step;

// function GlowingDot() {
//   return <span className="glowing-dot"></span>;
// }
