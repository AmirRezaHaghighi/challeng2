import Image from "next/image";
import { Button } from "../../../components";
import AndroidIcon from "../../../public/images/Android.svg";
import BazarIcon from "../../../public/images/Bazar.svg";
import MyKetIcon from "../../../public/images/MyKet.svg";
import mobile from "../../../public/images/Mobile.png";

export const DownloadApp = () => {
  return (
    <section>
      <div className="backgroundApp px-5 d-flex align-items-center justify-content-between mx-auto">
        <div className="w-60">
          <h6 className="title"> ویتسل را همیشه همراه داشته باشید!</h6>
          <div className="d-flex justify-content-between w-100">
            <Button value="دانلود از بازار" icon={BazarIcon} />
            <Button value="دانلود از مایکت" icon={MyKetIcon} />
            <Button value="دانلود مستقیم" icon={AndroidIcon} />
          </div>
        </div>

        <Image src={mobile} className="imageApp" />
      </div>
    </section>
  );
};


