import { Banner, TripleBanner } from "../components/common";
import {
  Bargain,
  BestSeller,
  CategoryList,
  DownloadApp,
  HomeSlider,
  Offer,
} from "../components";
import { Layout } from "../components";

export default function Home() {
  return (
    <Layout>
      <main>
        <HomeSlider />
        <Banner />
        <Bargain />
        <Banner reverse={true} />
        <CategoryList />
        <Offer />
        <BestSeller />
        <TripleBanner />
        <DownloadApp />
       
      </main>
    </Layout>
  );
}
