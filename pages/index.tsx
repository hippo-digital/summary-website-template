/* eslint-disable prettier/prettier */
import { GetStaticProps } from "next"
import { getMetadataTree, readMarkdownFromSlug } from "../lib/content-api"
import React from "react";
import Page, { PageProps } from "./[...slug]"

const Index = (data: PageProps) => {
    return <Page {...data} />
};

export const getStaticProps: GetStaticProps = async () => {
    const data = await readMarkdownFromSlug("index")
    const metaDataTree = getMetadataTree()
    return {
        props: { ...data, metaDataTree },
    };
};

export default Index
