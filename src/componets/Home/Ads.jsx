import React from "react";
import Swipe from "../Swipe";
import Show from "../Slidehow2";

function Ads() {
  return (
    <div className="h-52 w-full flex gap-1">
      <div className="bg-slate-900 h-full w-full overflow-hidden">
        <Swipe />
      </div>
      <div className="bg-slate-800 h-full w-full overflow-hidden">
        <Show />
      </div>
    </div>
  );
}

export default Ads;
