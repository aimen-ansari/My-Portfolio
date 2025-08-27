import { useState, useEffect } from 'react';
import './Popup.css';

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsAnimating(true), 50);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleOk = () => {
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`popup-overlay ${isAnimating ? 'show' : ''}`}>
      <div className={`popup-container ${isAnimating ? 'show' : ''}`}>
        {/* <button 
          className="close-button" 
          onClick={handleClose}
          aria-label="Close popup"
        >
          ×
        </button> */}
        
        <div className="popup-content">
          <div className="icon-container">
            <div className="gpu-icon">
              <div className="chip"></div>
              <div className="chip"></div>
              <div className="chip"></div>
            </div>
          </div>
          
          <h2 className="popup-title">3D Rendering Notice</h2>
          
          <div className="popup-message">
            <p>This website features <strong>3D model rendering</strong> that requires:</p>
            <ul className="requirements-list">
              <li>
                <span className="bullet">🌐</span>
                Stable internet connection
              </li>
              <li>
                <span className="bullet">💻</span>
                GPU-compatible device
              </li>
              <li>
                <span className="bullet">⏱️</span>
                Additional loading time
              </li>
            </ul>
            <p className="notice">For the best experience, please ensure your device meets these requirements.</p>
          </div>
          
          <div className="popup-actions">
            <button className="ok-button" onClick={handleOk}>
              Got it!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

