/* eslint-disable prettier/prettier */
import React, { type ReactNode } from "react"
import styles from "./reveal.module.scss"

export type RevealProps = {
    className?: string
    title: string
    isOpen?: boolean
    children: string | ReactNode | ReactNode[];
};

const Reveal = ({ className, title, isOpen = false, children }: RevealProps) => (
    <details className={[className, styles.reveal].join(" ")} open={isOpen}>
        <summary className={styles.title}>{title}</summary>
        {children}
    </details>
);

export default Reveal
