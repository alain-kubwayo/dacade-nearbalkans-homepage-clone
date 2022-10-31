import { useState } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Modal from "../components/Modal";

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    console.log(showModal);
  };

  return (
    <>
      <Layout handleOpen={handleOpen}>
        <Component {...pageProps} />
      </Layout>
      {showModal && <Modal handleClose={handleClose} />}
    </>
  );
}

export default MyApp;
