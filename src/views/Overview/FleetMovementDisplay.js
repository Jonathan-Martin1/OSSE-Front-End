import React from "react";

export default function FleetMovementDisplay({ sendFleet = [] }) {
  return (
    <div className="row d-flex justify-content-center mb-1">
      <div style={{ border: "2px solid white"}}>
        <ol>
          {sendFleet.map((fleet) => {
            return <li key={fleet.id}>{fleet}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}
