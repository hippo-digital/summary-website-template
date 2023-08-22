import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import Logo from "./logo";
import SearchBox from "./search-box";
import styles from "./header.module.scss";

export type HeaderProps = {
    session: Session | undefined;
    tags: string[];
};

const Header = (props: HeaderProps) => {
    const { session, tags } = props;
    if (session && session.user) {
        return (
            <header className={styles.mainHeader}>
                <Link href="/" className={styles.logo}>
                    <Logo className={styles.logoImage} hasUnderline={true} />
                    Engineering and Data handbook
                </Link>
                <div className={styles.actions}>
                    <SearchBox placeholder={"Enter a tag"} options={tags} />
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            </header>
        );
    }

    return null;
};

export default Header;
