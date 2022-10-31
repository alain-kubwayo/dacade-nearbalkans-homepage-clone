import { useState } from "react";
import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import Modal from "../components/modal/Modal";

function MyApp({ Component, pageProps }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout handleOpen={handleOpen} handleClose={handleClose}>
        <Component {...pageProps} />
      </Layout>
      {showModal && <Modal handleClose={handleClose} />}
    </>
  );
}

export default MyApp;
