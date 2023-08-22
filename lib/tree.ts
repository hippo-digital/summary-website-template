export interface Tree<T> {
    current: T;
    children: Tree<T>[];
}

export function mkTree<T>(current: T, children?: Tree<T>[]): Tree<T> {
    return { current: current, children: children || [] };
}

export function mapTree<A, B>(tree: Tree<A>, map: (args: A) => B): Tree<B> {
    return {
        current: map(tree.current),
        children: tree.children?.map((c) => mapTree(c, map)),
    };
}

export function toArrayTree<A>(tree: Tree<A>, arr?: A[]): A[] {
    arr = arr || [];

    if (tree) {
        arr.push(tree.current);
        tree.children.forEach((t) => toArrayTree(t, arr));
    }

    return arr;
}
