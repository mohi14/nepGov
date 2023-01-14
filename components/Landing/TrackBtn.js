import Image from "next/image";
import Link from "next/link";
import React from "react";
import arrow from "../../public/icon/arrow.png";

const TrackBtn = () => {
  return (
    <div className="arrow__btn">
      <Link className="flex" href="#">
        View More Trackers <Image src={arrow} alt="icon" />
      </Link>
    </div>
  );
};

export default TrackBtn;
