import Head from "next/head";

// Component imports
import Certification from "../components/sections/Certification";
import Learning from "../components/misc/Learning";
import ArrowContainer from "../components/arrows/ArrowContainer";
import Development from "../components/misc/Development";
import Completion from "../components/sections/Completion";
import Curriculum from "../components/sections/Curriculum";
import CreateWallet from "../components/sections/CreateWallet";

export default function Home() {
  return (
    <div className="overflow-hidden">
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
      {/* Create Wallet Section */}
      <CreateWallet />
      {/* Arrow Section */}
      <ArrowContainer
        src="/svgs/ArrowToRight.svg"
        style="hidden lg:flex mt-16"
      />
      {/* Curriculum Section */}
      <Curriculum />
      {/* Arrow Section */}
      <ArrowContainer
        src="/svgs/ArrowToLeft.svg"
        style="hidden lg:flex mt-16"
      />
      {/* Completion Section */}
      <Completion />
      {/* Development Section */}
      <Development />
    </div>
  );
}
