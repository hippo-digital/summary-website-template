import * as fs from "fs";
import * as path from "path";
import matter, { type GrayMatterFile } from "gray-matter";
import { FsEntry, getAllFiles, getFileTree, getPathParts, toTitleCase } from "./utils";
import { mapTree, Tree } from "./tree";

const contentsDirectory = "content";

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const getAllPaths = async (filter?: (arg: any) => boolean) => {
    const filterFn = filter ?? (() => true);
    return getAllFiles(contentsDirectory)
        .filter(filterFn)
        .map((fileName) => {
            return getPathParts(fileName);
        });
};

export interface Frontmatter {
    title: string;
    order?: number;
    tags: string[];
}

export interface Metadata {
    frontmatter: Frontmatter;
    excerpt?: string;
    content: string;
    entry: FsEntry;
}

export const readMetadata = (entry: FsEntry) => {
    if (entry.isDirectory) {
        const parts = entry.slug.split("/");
        const name = parts[parts.length - 1].replace(/-/g, " ").replace("_", " ");
        return {
            frontmatter: { title: toTitleCase(name), tags: [], order: 9999 },
            excerpt: "",
            content: "",
            entry: entry,
        };
    }
    const file = fs.readFileSync(path.join(contentsDirectory, entry.filename));
    const getExcerpt = (input: GrayMatterFile<Buffer>) => {
        input.excerpt = input.content.substring(1, 100);
    };
    // @ts-ignore
    const { data, excerpt, content } = matter(file, { excerpt: getExcerpt });
    const frontmatter = data as Frontmatter;

    if (frontmatter.order == undefined) {
        frontmatter.order = 999999;
    }

    return { frontmatter, excerpt, content, entry };
};

export const getAllMetadataForPaths = (dir?: string): Metadata[] => {
    const dirPath = dir ? path.join(contentsDirectory, dir) : contentsDirectory;
    const fileNames = getAllFiles(dirPath).filter((f) => !f.isDirectory);
    return fileNames.map(readMetadata);
};

export const getMetadataTree = (dir?: string): Tree<Metadata> => {
    const dirPath = dir ? path.join(contentsDirectory, dir) : contentsDirectory;
    const tree = getFileTree(dirPath);
    return mapTree(tree, readMetadata);
};

export const readMarkdownFromSlug = async (slug: string) => {
    const file = fs.readFileSync(path.join(contentsDirectory, slug + ".md"));
    const { data: frontmatter, content } = matter(file);

    return {
        props: {
            frontmatter,
            content,
        },
    };
};
