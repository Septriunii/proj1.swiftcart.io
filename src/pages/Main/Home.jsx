import { Suspense } from "react";
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
    <div className="flex ">
      <Body>
        <div className="w-full h-auto bg-zinc-900 bg-opacity-50 p-2 overflow-hidden flex flex-col gap-5">
          <Ads />
          <Trending />
          <Suspense fallback={null}>
            <TopProduct />
            <Flashdeals />
            <MidAds />
            <Discover />
            <Description />
            <CustomerService />
          </Suspense>
        </div>
        <div className="absolute w-full left-0 right-0 mt-10 h-auto p-2 flex justify-between">
          <Footer />
        </div>
      </Body>
    </div>
  );
}

export default Home;
