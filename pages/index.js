import Head from "next/head";

// Component imports
import Certification from "../components/sections/Certification";
import Learning from "../components/Learning";
import Wallet from "../components/Wallet";
import ArrowContainer from "../components/arrows/ArrowContainer";
import Course from "../components/Course";
import Certificate from "../components/Certificate";
import Development from "../components/Development";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NEAR dev 101</title>
        <meta
          name="description"
          content="It important is to have regional and local support. Now you can become NEAR certified in a regional language of preference and connect with our team to support your further growth within the NEAR ecosystem."
        />
        <link
          rel="icon"
          href="https://dacade-nearbalkans.netlify.app//favicon.ico"
        />
      </Head>
      {/* Certification Section */}
      <Certification />
      {/* Learning Section */}
      <Learning />
      {/* Wallet Section */}
      <Wallet />
      {/* Arrow Section */}
      <ArrowContainer
        src="/svgs/ArrowToRight.svg"
        style="hidden lg:flex mt-16"
      />
      {/* Course Section */}
      <Course />
      {/* Arrow Section */}
      <ArrowContainer
        src="/svgs/ArrowToLeft.svg"
        style="hidden lg:flex mt-16"
      />
      {/* Certificate Section */}
      <Certificate />
      {/* Development Section */}
      <Development />
    </div>
  );
}
