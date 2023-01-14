import Image from "next/image";
import React from "react";
import searchImg from "../../public/icon/search.png";

const HeaderTab = () => {
  const tabList = [
    {
      list: "Voting Intention",
    },
    {
      list: "Covid 19",
    },
    {
      list: "Politics",
    },
    {
      list: "Society",
    },
    {
      list: "Consumer",
    },
    {
      list: "Technology",
    },
    {
      list: "Entertainment",
    },
    {
      list: "Transport",
    },
    {
      list: searchImg,
    },
  ];
  return (
    <section className="heading__list">
      <div className="container mx-auto">
        <div className="list__inner">
          <ul className="flex justify-between items-center">
            {tabList.slice(0, 8).map((list, index) => {
              return <li className="cursor-pointer" key={index}>{list.list}</li>;
            })}

            {tabList.slice(8, 9).map((list, index) => (
              <div key={index}>
                <Image className="cursor-pointer" src={list.list} alt="icon" />
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeaderTab;
