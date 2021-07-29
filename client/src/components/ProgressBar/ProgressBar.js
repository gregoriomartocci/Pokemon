import { useEffect, useState } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ done }) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const newStyle = {
        opacity: 1,
        width: `${done}%`,
      };

      setStyle(newStyle);
    }, 200);
  }, [done]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}></div>
    </div>
  );
};

export default ProgressBar;
