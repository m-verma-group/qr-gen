// TokenExpiredModal.js
import React from 'react';
import '../css/TokenExpiredModal.css'; // Create this for custom styles

const TokenExpiredModal = ({ onLogin, onLogout }) => {
  return (
    <div className="modal-backdrop">
      <div className="token-expired-modal">
        <h2>Session Expired</h2>
        <p>Your session has expired.</p> 
        <p>Please log in again to continue.</p>
        <div className="modal-actions">
          <button className="primary-button1" onClick={onLogin}>Login</button>
          <button className="secondary-button" onClick={onLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default TokenExpiredModal;
