import Image from "next/image";
import Link from "next/link";
import React from "react";
import cancel from "../../public/icon/cancel.png";

const CrimeInformation = () => {
  const information = [
    {
      title: "Untaxed vehicles",
    },
    {
      title: "Benefit Fraud",
    },
    {
      title: "Minor driving offenses",
    },
    {
      title: "Fly-tipping.",
    },
    {
      title: "Dumped Vehicles",
    },
    {
      title: "Missing People",
    },
    {
      title: "You are the Victim",
    },
    {
      title: "Scam email and phone",
    },
    {
      title: "Fly-tipping",
    },
  ];
  return (
    <div>
      <div className="crime_info">
        <div className=" container mx-auto text-white">
          <div className="text-center ">
            <h2>Information we cannot process</h2>
            <p>
              As we are not the police, sometimes you may want to pass us <br />
              information that we cannot process. Please see our advice for{" "}
              <br />
              passing on information about the following:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[27px]">
            {information.map((info, index) => (
              <div key={index} className="flex gap-6 items-center">
                <Image src={cancel} alt="icon" />
                <p id="cancel">{info.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        <Link
          href="crimeEnglishChangePage"
          className="crime_info_btn btn normal-case"
          type=""
        >
          Give Information Here
        </Link>
      </div>
    </div>
  );
};

export default CrimeInformation;
