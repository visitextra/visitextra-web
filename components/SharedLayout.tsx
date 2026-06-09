import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import styles from "./SharedLayout.module.css";

export const SharedLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`${styles.layoutWrapper} dark`}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};