import React, { useRef, useState } from "react";
import Image from "next/image";
import styles from "../../../styles/MainSection.module.css";

const MainSection = () => {
  const yN = useRef(null);
  const yB = useRef(null);
  const [yourName, setYourName] = useState(null);
  const [belovedName, setBelovedName] = useState(null);
  const [count, setCount] = useState(null);
  const [condition, setCondition] = useState(null);

  const handlePradiction = () => {
    if (yourName != null && belovedName != null && count == null) {
      let pre = Math.ceil(Math.random() * 100);
      if (pre > 100) {
        pre = 100;
        setCount(`${pre} %`);
        setCondition("Awesome 😍. খাঁটি প্রেমিক প্রেমিকা।😂");
      } else {
        setCount(`${pre} %`);
        if (pre < 33) {
          setCondition(
            "I am sorry to say 😔, It would be better if you two stayed away from each other."
          );
        } else if (pre > 89) {
          setCondition("Awesome 😍. খাঁটি প্রেমিক প্রেমিকা।😂");
        } else if (pre < 66) {
          setCondition(
            "If Allah wills, you can be one. Your relationship is not very good. Let's see what happens."
          );
        } else if (pre < 100) {
          setBelovedName(
            "I know you love each other very much. I pray that God unites you."
          );
        } else {
          setCondition(
            "It is ok that you love each other but to take your love to another step you need to give each other some time."
          );
        }
      }
    } else {
      setCount(null);
      setBelovedName(null);
      setYourName(null);
      alert("Enter Your & Your Beloved Name");
    }
  };
  return (
    <div className={styles.mainSection}>
      <div className={styles.fild}>
        <span></span>
        <div className={styles.content}>
          <h1>Love Percentage Prediction 💕</h1>
          <hr />
          <br />
          <div className={styles.ansImg}>
            <h4 className={styles.count}>{count}</h4>
            <img
              src="https://i.ibb.co/tHjtKbX/output-onlinegiftools.gif"
              alt="breathing love"
              srcset=""
              width="10%"
            />
          </div>
          <br />
          <div className={styles.inputFilds}>
            {count != null && (
              <div className={styles.report} style={{ wordWrap: "break-word" }}>
                <h5 style={{ color: "black" }}>{`${yourName.slice(
                  0,
                  19
                )}..🍁 `}</h5>
                <h5 style={{ color: "orange" }}>{` ${belovedName.slice(
                  0,
                  19
                )}..☘️`}</h5>

                <br />
                <p style={{ wordWrap: "break-word" }}>{condition}</p>
                <br />
                <div>
                  "
                  <small>
                    {" "}
                    FB:{" "}
                    <a
                      style={{ color: "blue" }}
                      href="https://www.facebook.com/Kamrul.h.m.77/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kamrul H. Manzur
                    </a>
                  </small>
                  "
                </div>
              </div>
            )}
            {count != null && (
              <div>
                <button
                  onClick={() => {
                    setCount(null);
                    setBelovedName(null);
                    setYourName(null);
                    setCondition(null);
                  }}
                  className={styles.clickBtn}
                >
                  Try Again
                </button>
              </div>
            )}
            {/* When input fild empty... */}
            {count == null && (
              <div className={styles.inputFild}>
                <h5>Your Name</h5>
                <input
                  onBlur={(e) => {
                    setYourName(` ${e.target.value} `);
                    yN.current.value = "";
                  }}
                  ref={yN}
                  type="text"
                  name="yourName"
                  id="yourName"
                  placeholder="Your Name"
                  required
                />
              </div>
            )}
            {count == null && (
              <div className={styles.inputFild}>
                {count == null && (
                  <button
                    onClick={handlePradiction}
                    className={styles.clickBtn}
                  >
                    Click
                  </button>
                )}
              </div>
            )}
            {count == null && (
              <div className={styles.inputFild}>
                <h5>Your Beloved</h5>
                <input
                  onBlur={(e) => {
                    setBelovedName(` ${e.target.value}`);
                    yB.current.value = "";
                  }}
                  ref={yB}
                  type="text"
                  name="belovedName"
                  id="your-belovedName"
                  placeholder="Your Beloved Name"
                  required
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
