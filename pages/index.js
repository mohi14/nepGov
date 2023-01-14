import Head from "next/head";
import Image from "next/image";
// import { Inter } from '@next/font/google'

//TODO: make all lazy link instade of link normal import

import styles from "../styles/Home.module.css";
import CrimeBanner from "../components/CrimeReport/CrimeBanner";
import CrimeCard from "../components/CrimeReport/CrimeCard";
import CrimeInformation from "../components/CrimeReport/CrimeInformation";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import EnglishChange from "../components/CrimeReport/EnglishChange";
import HeaderTab from "../components/Landing/HeaderTab";
import Banner from "../components/Landing/Banner";
import Politics from "../components/Landing/Politics";
import LiveTrackers from "../components/Landing/LiveTrackers";
import PreviousTrackers from "../components/Landing/PreviousTrackers";
import Articles from "../components/Landing/Articles";
// import CrimeTab from "../components/CrimeReport/CrimeTab";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Nepgov</title>
        <meta name="description" content="Nepgov" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <HeaderTab />
      <Banner />
      <Politics />
      <LiveTrackers />
      <PreviousTrackers />
      <Articles />
      <Footer />
    </>
  );
}
