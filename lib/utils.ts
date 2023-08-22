import * as fs from "fs";
import path from "path";
import { mkTree, Tree } from "./tree";

export type FsEntry = {
    isDirectory: boolean;
    slug: string;
    filename: string;
};

export const mkFsEntry = (isDirectory: boolean, filename: string): FsEntry => {
    return {
        isDirectory: isDirectory,
        filename: filename,
        slug: filename.replace(/\.md$/, ""),
    };
};

export const getPathParts = (entry: FsEntry): string[] => {
    return entry.slug.split("/");
};

export const toTitleCase = (str: string) => {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

export const getAllFiles = (dirPath: string, arrayOfFiles?: FsEntry[]): FsEntry[] => {
    const files = fs.readdirSync(dirPath);

    arrayOfFiles = arrayOfFiles || [];

    files.forEach((file: string) => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            const joinedPath = path.join(dirPath, "/", file);
            arrayOfFiles?.push(mkFsEntry(true, joinedPath.replace("content/", "")));
            arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
        } else {
            const joinedPath = path.join(dirPath, "/", file);
            if (path.extname(joinedPath) == ".md") {
                arrayOfFiles?.push(mkFsEntry(false, joinedPath.replace("content/", "")));
            }
        }
    });

    return arrayOfFiles;
};

export const getFileTree = (dirPath: string, node?: Tree<FsEntry>): Tree<FsEntry> => {
    const files = fs.readdirSync(dirPath);

    node = node || mkTree<FsEntry>(mkFsEntry(true, dirPath));

    files.forEach((file: string) => {
        if (fs.statSync(dirPath + "/" + file).isDirectory()) {
            const joinedPath = path.join(dirPath, "/", file);
            const currentNode = mkTree<FsEntry>(mkFsEntry(true, joinedPath.replace("content/", "")));
            node?.children.push(currentNode);
            getFileTree(dirPath + "/" + file, currentNode);
        } else {
            const joinedPath = path.join(dirPath, "/", file);
            if (path.extname(joinedPath) == ".md") {
                node?.children.push(mkTree<FsEntry>(mkFsEntry(false, joinedPath.replace("content/", ""))));
            }
        }
    });

    return node;
};
