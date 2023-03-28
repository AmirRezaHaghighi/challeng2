import Image from "next/image";
import basket from "../../../public/images/image 15.png";
import categoryIcon from "../../../public/images/category.svg";
import cloth from "../../../public/images/image 6.png";
import mobile from "../../../public/images/image 7.png";
import digitalTool from "../../../public/images/image 8.png";
import writingTool from "../../../public/images/image 9.png";
import industrialTool from "../../../public/images/image 10.png";
import superMarket from "../../../public/images/image 11.png";
import toy from "../../../public/images/image 12.png";
import beauty from "../../../public/images/image 13.png";
import homestuff from "../../../public/images/image 14.png";
import {Category} from "../../common/index";


export const CategoryList = () => {
  return (
    <section className="row my-5 ">
      <div className="d-flex py-4">
        <Image src={categoryIcon} className="ms-2" />
        <h6 className="title2">دسته بندی های محبوب</h6>
      </div>
      <div className="col-8 grid-container">
        <Category title={"مدوپوشاک"} img={cloth} />
        <Category title={"موبایل"} img={mobile} />
        <Category title={"کالای دیجیتال"} img={digitalTool} />
        <Category title={"لوازم تحریر"} img={writingTool} />
        <Category title={"تجهیزات صنعتی"} img={industrialTool} />
        <Category title={"سوپر مارکت"} img={superMarket} />
        <Category title={"اسباب بازی"} img={toy} />
        <Category title={"زیبایی و سلامت"} img={beauty} />
        <Category title={"خانه و آشپزخانه"} img={homestuff} />
      </div>
      <div className="col-4 text-start">
        <Image src={basket} />
      </div>
    </section>
  );
};

