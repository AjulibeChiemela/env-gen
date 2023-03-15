import React from "react";
import "./style.scss";

export const Spinner: React.FC = () => {
  return (
    <div className="loading-spinner" data-testid="loading-icon">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
