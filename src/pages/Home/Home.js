import { useState } from "react";
import { useEffect } from "react";
import styles from "./Home.module.css";
import Modal from "../../components/Modal/Modal";

import idimage from "../../images/idlogo.png";
const imageMimeType = /image\/(png|jpg|jpeg)/i;
export default function Home() {
  const [name, setName] = useState("");
  const [address, setAdress] = useState("");
  // const [idpicture, setIdPicture] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    setOpenModal(true);
  };

  const [file, setFile] = useState(null);
  const [fileDataURL, setFileDataURL] = useState(null);

  const changeHandler = (e) => {
    const file = e.target.files[0];
    if (!file.type.match(imageMimeType)) {
      alert("Image mime type is not valid");
      return;
    }
    setFile(file);
  };
  useEffect(() => {
    let fileReader,
      isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const { result } = e.target;
        if (result && !isCancel) {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);
  return (
    <div className={styles.idGeneratorBg}>
      <div>
        <img src={idimage} />
      </div>
      <form onSubmit={handleClick}>
        <div className={styles["input-box"]}>
          <div className={styles.title}>
            <h1>Welcome to ID Genearator</h1>
          </div>

          <label>
            <span className={styles.inputLabel}>Enter Name: </span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              required
            />
            <span className={styles.inputLabel}>Enter Address: </span>
            <input
              type="text"
              onChange={(e) => setAdress(e.target.value)}
              required
            />
            <span className={styles.inputLabel}>Upload your ID Picture: </span>
            <div className={styles.imgups}>
              <input
                type="file"
                id="image"
                accept=".png, .jpg, .jpeg"
                onChange={changeHandler}
              />
            </div>
          </label>
          <button className={styles.formsubmit} type="submit">
            Generate
          </button>
        </div>
        {openModal && (
          <Modal
            Name={name}
            Address={address}
            IDPicture={fileDataURL}
            OpenModal={setOpenModal}
          />
        )}
      </form>
    </div>
  );
}
