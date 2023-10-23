import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar";
// eslint-disable-next-line react/prop-types
function Body({ children }) {
  return (
    <>
      <Navbar />

      <main className=" h-full w-[84rem]  flex md:pr-7 lg:pr-10 flex-col mt-16 pb-5 relative">
        <section className="flex md:mt-5 relative ">
          <div className="hidden md:flex">
            <Sidebar />
          </div>
          <div className="flex h-auto w-full p-1 md:ml-16 lg:ml-24">
            <div className="w-full h-auto p-2 ">{children}</div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Body;
