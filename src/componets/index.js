import { lazy } from "react";

import Body from "../componets/Body";
import Footer from "../componets/Footer";
import Trending from "../componets/Home/Trending";
import Ads from "../componets/Home/Ads";

const Description = lazy(() => import("../componets/Home/Description"));
const Discover = lazy(() => import("../componets/Home/Discover"));
const Flashdeals = lazy(() => import("../componets/Home/Flashdeals"));
const MidAds = lazy(() => import("../componets/Home/MidAds"));
const TopProduct = lazy(() => import("../componets/Home/TopProduct"));

export {
  Body,
  Footer,
  Ads,
  Description,
  Discover,
  Flashdeals,
  MidAds,
  TopProduct,
  Trending,
};
