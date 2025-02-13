import { ReactNode, useState } from "react";
import styles from "./Accordion.module.scss"; // Импортируйте свои стили
import { Button } from "../Button";
import { ArrowSvg } from "../../assets/svg";

interface AccordionProps {
  title: string;
  children: ReactNode;
  descr?: string;
  progress?: ReactNode;
}

export function Accordion({
  title,
  children,
  descr,
  progress,
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordionItem}>
      <Button className={styles.accordionTitle} onClick={toggleAccordion}>
        <div className={styles.boxTitle}>
          <div className={styles.infoTitle}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.descr}>{descr}</p>
          </div>
          <div className={styles.boxSvg}>
            <ArrowSvg
              className={`${styles.svg} ${isOpen ? styles.arrowUp : ""}`}
            />
          </div>
        </div>
        <div>
            {progress}
        </div>
      </Button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
