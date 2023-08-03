import {
  Body,
  Footer,
  Ads,
  Description,
  Discover,
  Flashdeals,
  MidAds,
  TopProduct,
  Trending,
} from "../../componets";
import CustomerService from "../../componets/Home/CustomerService";
function Home() {
  return (
    <div className="flex h-auto relative flex-col">
      <Body>
        <div className="w-full h-auto bg-zinc-900 bg-opacity-50 p-2 overflow-hidden flex flex-col gap-10">
          <Ads />
          <Trending />
          <TopProduct />
          <Flashdeals />
          <MidAds />
          <Discover />
          <Description />
          <CustomerService />
        </div>
      </Body>
      <div className=" h-auto p-2 flex justify-between">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
