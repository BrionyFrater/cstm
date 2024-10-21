import Image from "next/image";

export const GalleryAnimation = () => {
  return (
    <div className="ctn">
      <div className="col c-1">
        <div className="item">
          <Image src={`/1.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/2.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/3.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/4.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/5.webp`} alt="" width={400} height={400} />
        </div>
      </div>

      <div className="col c-1">
        <div className="item">
          <Image src={`/6.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/7.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/15.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/9.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/10.webp`} alt="" width={400} height={400} />
        </div>
      </div>

      <div className="col c-1">
        <div className="item">
          <Image src={`/11.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/12.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/13.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/14.webp`} alt="" width={400} height={400} />
        </div>
        <div className="item">
          <Image src={`/8.webp`} alt="" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};
