import Banner from "@/app/UI/Banner";
import Header from "@/app/common-components/Header";
import Image from "next/image";
import Categories from "./UI/Categories";
import BestSellers from "./UI/BestSellers";
import BannerFast from "./UI/BannerFast";
import NeverMissADeal from "./UI/NeverMissADeal";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Header />
      <Banner />
      <Categories />
      <BestSellers/>
      <BannerFast/>
      <NeverMissADeal/>
    </div>
  );
}
