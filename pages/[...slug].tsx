import Head from "next/head";
import { GetStaticPaths, GetStaticProps } from "next";
import { Frontmatter, getAllPaths, getMetadataTree, Metadata, readMarkdownFromSlug } from "../lib/content-api";
import React from "react";
import { useMediaQuery } from "react-responsive";
import { useSession } from "next-auth/react";
import Article from "../components/article";
import Header from "../components/header";
import { toArrayTree, Tree } from "../lib/tree";
import styles from "./[...slug].module.scss";
import { useRouter } from "next/router";
import NavTree from "../components/nav-tree";
import Reveal from "../components/reveal";

export interface PageProps {
    props: { frontmatter: Frontmatter; content: string };
    metaDataTree: Tree<Metadata>;
    path: string;
}

const Page = (data: PageProps) => {
    const { frontmatter, content } = data.props;
    const router = useRouter();
    const { data: session, status } = useSession({
        required: false,
        onUnauthenticated() {
            const path = router.asPath;
            if (path && path !== "/") {
                return router.push('${path}');
            } else {
                return router.push(`/`);
            }
        },
    });

    const tags = Array.from(
        new Set<string>(
            toArrayTree(data.metaDataTree).flatMap((m: Metadata) => {
                return m.frontmatter.tags;
            })
        )
    );

    const isSmallerScreen = useMediaQuery({ query: "(max-width: 992px)" });

    return status === "loading" ? (
        <div></div>
    ) : (
        <>
            <Head>
                <title>{frontmatter?.title}</title>
                <link rel="icon" href={"/favicon.ico"} />
            </Head>
            <Header session={session} tags={tags} />
            <main className={styles.main}>
                <div className={styles.sidebar}>
                    {isSmallerScreen ? (
                        <Reveal className={styles.contentsReveal} title="Contents">
                            <NavTree tree={data.metaDataTree} />
                        </Reveal>
                    ) : (
                        <NavTree tree={data.metaDataTree} />
                    )}
                </div>
                <div className={styles.content}>
                    <Article frontmatter={frontmatter} content={content} path={data.path} />
                </div>
            </main>
        </>
    );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const slug = params?.slug as string[];
    const path = slug === undefined ? "index" : slug?.join("/");
    const data = await readMarkdownFromSlug(path);
    const metaDataTree = getMetadataTree();

    return {
        props: { ...data, metaDataTree, path },
    };
};

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = await getAllPaths((f) => !f.isDirectory);
    const slugs = paths.map((p) => {
        return { params: { slug: p } };
    });

    return {
        paths: slugs,
        fallback: false,
    };
};

export default Page;
