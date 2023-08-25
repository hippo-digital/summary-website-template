/* eslint-disable prettier/prettier */
import React from "react"
import { Tree } from "../lib/tree"
import { Metadata } from "../lib/content-api"
import Reveal from "./reveal"
import styles from "./nav-tree.module.scss"
import { useRouter } from "next/router"

const directorySorter = (a: Tree<Metadata>, b: Tree<Metadata>) => {
  if (a.current.entry.isDirectory < b.current.entry.isDirectory) {
    return -1
  }

  if (
    a.current.frontmatter.order &&
    b.current.frontmatter.order &&
    a.current.frontmatter.order < b.current.frontmatter.order
  ) {
    return -1
  }

  return 1
}

export type NavTreeProps = {
  tree: Tree<Metadata>
}

const isNodeCurrentPage = (routerPath: string, slug: string): boolean => {
  return routerPath.substring(1).includes(slug)
}

const isCurrentPageInChildren = (
  routerPath: string,
  children: Tree<Metadata>[]
): boolean => {
  return children.some((child) => {
    if (isNodeCurrentPage(routerPath, child.current.entry.slug)) {
      return true
    }

    if (isCurrentPageInChildren(routerPath, child.children)) {
      return true
    }
  })
}

const NavTree = ({ tree }: NavTreeProps) => {
  const router = useRouter()

  return (
    <ul className={styles.list}>
      {tree.children.sort(directorySorter).map((node, index) => (
        <li key={index}>
          {node.children.length ? (
            <Reveal
              title={node.current.frontmatter.title}
              isOpen={isCurrentPageInChildren(router.asPath, node.children)}
            >
              <NavTree tree={node} />
            </Reveal>
          ) : (
            <PageNode node={node} />
          )}
        </li>
      ))}
    </ul>
  )
}

const PageNode = ({ node }: { node: Tree<Metadata> }) => {
  const router = useRouter()

  const isCurrentPage = isNodeCurrentPage(
    router.asPath,
    node.current.entry.slug
  )

  return (
    <a
      className={isCurrentPage ? styles.currentNode : ""}
      href={"/" + node.current.entry.slug}
      data-testid="left-side-nav-tree-link"
      aria-current={isCurrentPage && "page"}
    >
      {node.current.frontmatter.title}
    </a>
  )
}

export default NavTree
