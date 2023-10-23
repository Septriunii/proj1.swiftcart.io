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
    <main className="flex ">
      <Body>
        <section className="w-full h-auto bg-zinc-900 bg-opacity-50 p-2 overflow-hidden flex flex-col gap-5">
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
        </section>
        <footer className="absolute w-full left-0 right-0 mt-10 h-auto p-2 flex justify-between">
          <Footer />
        </footer>
      </Body>
    </main>
  );
}

export default Home;
