import Image from "next/image";

export const Category = ({ img, title }) => {
  return (
    <div className="background border d-flex flex-column justify-content-center align-items-center">
      <Image src={img} />
      <span className="desc">{title}</span>
    </div>
  );
};

