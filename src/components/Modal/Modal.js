import html2canvas from "html2canvas";
import logo from "../../images/logo.png";
import styles from "./Modal.module.css";
export default function modal({ Name, Address, IDPicture, OpenModal }) {
  const downloadID = (e) => {
    e.preventDefault();
    const residentID = document.getElementById("residentID");
    html2canvas(residentID).then(function (canvas) {
      const base64img = canvas.toDataURL("image/png");
      var anchor = document.createElement("a");
      anchor.setAttribute("href", base64img);
      anchor.setAttribute("download", `${Name}.png`);
      anchor.click();
      anchor.remove();
    });
  };
  return (
    <div className={styles.modalbackground}>
      <div className={styles["modal-box"]}></div>
      <div id="residentID" className={styles["output-box"]}>
        <div className={styles.images}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          {/* <div className={styles.qrcode}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Name}`}
            />
          </div> */}
        </div>
        <div className={styles.idPicture}>
          <img src={IDPicture} />
        </div>
        <div className={styles.studentInfo}>
          <label>
            <span>Name</span>
          </label>
          <input type="text" disabled value={Name} />
          <label>
            <span>Address</span>
          </label>
          <input type="text" disabled value={Address} />
        </div>
      </div>
      <div className={styles.modalBtn}>
        <button className={styles.cancelbtn} onClick={() => OpenModal(false)}>
          Cancel
        </button>
        <button className={styles.downloadbtn} onClick={downloadID}>
          Download
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";

// import styles from "./modal.module.css";
// export default function modal(Word) {
//   const [QrCode, setQrCode] = useState("");

//   setQrCode(
//     `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${Word}`
//   );

//   return (
//     <div>

//     </div>
//   );
// }
