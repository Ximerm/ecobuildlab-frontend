import "./Tooltip.css";

function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}

      <div className="tooltip__content" role="tooltip">
        {text}
      </div>
    </div>
  );
}

export default Tooltip;
