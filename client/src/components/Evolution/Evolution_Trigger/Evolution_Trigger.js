import React from "react";

function Evolution_Trigger({ trigger }) {
  console.log("trigger =====> ", trigger);

  return (
    <>
      {trigger && (
        <div className="evolution-trigger">
          <span className="evolution-trigger-level">
            {trigger ? trigger?.min_level : null}
          </span>
          <span className="evolution-trigger-name">
            {trigger ? trigger?.trigger_name : <div></div>}
          </span>
        </div>
      )}
    </>
  );
}

export default Evolution_Trigger;
