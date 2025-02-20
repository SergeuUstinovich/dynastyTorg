import { ReactNode, useEffect, useState } from "react";
import styles from "./Accordion.module.scss";
import { Button } from "../Button";
import { ArrowSvg } from "../../assets/svg";

interface AccordionProps {
  title: string;
  children: ReactNode;
  descr?: string;
  progress?: ReactNode;
  className?: string;
  isLeft?: boolean;
  active?: boolean;
}

export function Accordion({
  title,
  children,
  descr,
  progress,
  className,
  isLeft,
  active
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if(active)
    setIsOpen(true)
  }, [active])

  return (
    <div className={`${styles.accordionItem} ${className}`}>
      <Button className={styles.accordionTitle} onClick={toggleAccordion}>
        <div className={styles.boxTitle}>
          <div className={styles.infoTitle}>
            <h2 className={`${isLeft && styles.left} ${styles.title}`}>
              {title}
            </h2>
            <p className={styles.descr}>{descr}</p>
          </div>
          <div className={styles.boxSvg}>
            <ArrowSvg
              className={`${styles.svg} ${isOpen ? styles.arrowUp : ""}`}
            />
          </div>
        </div>
        {progress && <div className={styles.boxProgress}>{progress}</div>}
      </Button>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        {children}
      </div>
    </div>
  );
}
