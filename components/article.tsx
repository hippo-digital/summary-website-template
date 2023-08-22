import { Frontmatter } from "../lib/content-api";
import React from "react";
import styles from "./article.module.scss";
import ReactMarkdown, { uriTransformer } from "react-markdown";
import remarkGfm from "remark-gfm";
// @ts-ignore
import remarkHeadingId from "remark-heading-id";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Tags from "./tags";

export type ArticleProps = {
    frontmatter: Frontmatter;
    content: string;
    path: string;
};

const Article = (props: ArticleProps) => {
    const { frontmatter, content, path, ...rest } = props;

    const linkTransformer = (href: string) => {
        if (href.includes(".md")) {
            return uriTransformer(href.replace(".md", ""));
        } else {
            return uriTransformer(href);
        }
    };

    return (
        <article className={styles.mainArticle}>
            <ReactMarkdown
                key={"content-md"}
                transformLinkUri={linkTransformer}
                remarkPlugins={[remarkGfm, remarkHeadingId]}
                components={{
                    img({ src, alt }) {
                        // eslint-disable-next-line @next/next/no-img-element
                        return <img src={src ?? ""} alt={alt ?? ""} className={styles.center} />;
                    },
                    code({ inline, className, children }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                            <SyntaxHighlighter
                                language={match[1]}
                                style={a11yDark}
                                PreTag="div"
                                className={styles.code}
                            >
                                {String(children).replace(/\n$/, "")}
                            </SyntaxHighlighter>
                        ) : (
                            <code className={className} {...rest}>
                                {children}
                            </code>
                        );
                    },
                }}
            >
                {content}
            </ReactMarkdown>
            <hr className={styles.divider} />
            <Tags frontmatter={frontmatter} />
            <a href={`https://github.com/hippo-digital/engineering-data-handbook/edit/main/content/${path}.md`}>
                Edit this page on GitHub
            </a>
        </article>
    );
};

export default Article;
