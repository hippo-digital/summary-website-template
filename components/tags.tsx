/* eslint-disable prettier/prettier */
import { Frontmatter } from "../lib/content-api"
import React from "react"
import Link from "next/link"
import styles from "./tags.module.scss"

export type TagsProps = {
    frontmatter: Frontmatter
};

const Tags = (props: TagsProps) => {
    const { frontmatter } = props

    return (
        <div className={styles.tagButtonSection}>
            {frontmatter?.tags.map((tag, index) => (
                <Link href={`/search?tag=${tag}`} key={index} className={styles.tagButton}>
                    {tag}
                </Link>
            ))}
        </div>
    );
};

export default Tags
