/* eslint-disable prettier/prettier */
import React from "react"
import { useMediaQuery } from "react-responsive"
import { GetStaticProps } from "next"
import {
  getAllMetadataForPaths,
  getMetadataTree,
  Metadata,
} from "../lib/content-api"
import { useRouter } from "next/router"
import Link from "next/link"
import Head from "next/head"
import { useSession, signIn } from "next-auth/react"
import { toArrayTree, Tree } from "../lib/tree"
import layoutStyles from "./[...slug].module.scss"
import styles from "./search.module.scss"
import Reveal from "../components/reveal"
import Header from "../components/header"
import NavTree from "../components/nav-tree"
import Tags from "../components/tags"

interface SearchPageProps {
  metaDataTree: Tree<Metadata>
}

const Search = (props: SearchPageProps) => {
  const router = useRouter()
  const { metaDataTree } = props
  const { data: session, status } = useSession()
  const tag = router.query["tag"] as string

  const tags = Array.from(
    new Set<string>(
      toArrayTree(metaDataTree).flatMap((m: Metadata) => {
        return m.frontmatter.tags
      })
    )
  )
  const searchResults = () => {
    return toArrayTree(metaDataTree)
      .filter((m) => m.frontmatter.tags?.includes(tag))
      .map((m, i) => {
        return (
          <li key={`result_${i}`} className={styles.searchItem}>
            <h2 className={styles.searchTitle}>
              <Link key={`link_result_${i}`} href={m.entry.slug}>
                {m.frontmatter.title}
              </Link>
            </h2>
          </li>
        )
      })
  }

  const isSmallerScreen = useMediaQuery({ query: "(max-width: 992px)" })

  return status === "authenticated" ? (
    <>
      <Head>
        <title>Search</title>
        <link rel="icon" href={"/favicon.ico"} />
      </Head>
      <Header session={session} tags={tags} />
      <main className={layoutStyles.main}>
        <div className={layoutStyles.sidebar}>
          {isSmallerScreen ? (
            <Reveal className={layoutStyles.contentsReveal} title="Contents">
              <NavTree tree={props.metaDataTree} />
            </Reveal>
          ) : (
            <NavTree tree={props.metaDataTree} />
          )}
        </div>
        <div className={layoutStyles.content}>
          <h1 className={styles.title}>Search results: {tag}</h1>
          <ul>{searchResults()}</ul>
        </div>
      </main>
    </>
  ) : (
    <button onClick={() => signIn()}>Sign in</button>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getAllMetadataForPaths()
  const metaDataTree = getMetadataTree()
  return {
    props: { data, metaDataTree },
  }
}

export default Search
