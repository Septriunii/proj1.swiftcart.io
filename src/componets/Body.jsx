import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";
// eslint-disable-next-line react/prop-types
function Body({ children }) {
  return (
    <>
      <Navbar />

      <div className=" h-full w-[84rem]  flex pr-10 flex-col mt-16 pb-5 relative">
        <div className="flex mt-5 relative ">
          <Sidebar />
          <div className=" flex h-auto w-full p-1 ml-24">
            <div className=" w-full h-auto p-2 ">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
