import {
  Body,
  Footer,
  Ads,
  Catergories,
  Discription,
  Discover,
  Flashdeals,
  MidAds,
  TopProduct,
  Trending,
} from "../../componets";
function Home() {
  return (
    <div className="flex h-auto relative">
      <Body>
        <div className="w-full h-auto bg-zinc-900 bg-opacity-50 p-2 overflow-hidden flex flex-col gap-10">
          <Ads />
          <Trending />
          <TopProduct />
          <Flashdeals />
          <MidAds />
          <Discover />
          <Discription />
          <Catergories />
          {/* <Footer /> */}
        </div>
      </Body>
    </div>
  );
}

export default Home;
