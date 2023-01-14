import Image from "next/image";
import Link from "next/link";
import React from "react";
import article from "../../public/landing/article.png";
import article1 from "../../public/landing/article1.png";
import TrackBtn from "./TrackBtn";

const Articles = () => {
  const articleData = [
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article1,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
    {
      img: article1,
      top: "SCIENCE",
      tilte:
        "With just a few sleeps until Christmas, some Britons hadn’t even started buying presents",
      foot: "about 2 hours ago",
    },
  ];
  return (
    <section className="article__section section__gap">
      <div className="container mx-auto">
        <h3>Articles</h3>
        <div className="article__inner">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
            {articleData.map((item, index) => (
              <Link href="newsPage" className="article__box" key={index}>
                <Image src={item.img} alt="img" />
                <div className="article__content">
                  <span>{item.top}</span>
                  <h4>{item.tilte}</h4>
                  <span>{item.foot}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <TrackBtn />
      </div>
    </section>
  );
};

export default Articles;
