import Swipe from "../Swipe";
import Show from "../Slidehow2";

function Ads() {
  return (
    <div className="md:h-40 lg:h-52 w-full flex md:flex-row flex-col-reverse gap-1">
      <div className="hidden md:flex md:h-full w-full overflow-hidden">
        <Swipe />
      </div>
      <div className="bg-slate-800 h-32 md:h-full md:w-full overflow-hidden object-contain">
        <Show />
      </div>
    </div>
  );
}

export default Ads;
