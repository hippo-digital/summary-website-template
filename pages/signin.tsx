import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Logo from "../components/logo";
import styles from "./signin.module.scss";

const isDevelopment = true;
const hasGoogleSSO =
    typeof process.env.GOOGLE_CLIENT_ID !== "undefined" && typeof process.env.GOOGLE_SECRET !== "undefined";

interface SignInProps {
    hasGoogleSSO: boolean;
}

export async function getStaticProps() {
    return {
        props: {
            hasGoogleSSO,
        } as SignInProps,
    };
}

const SignIn = ({ hasGoogleSSO }: SignInProps) => {
    const { status } = useSession();
    const router = useRouter();

    if (status === "authenticated") {
        const redirect = router.query["redirect"] as string;
        router.push(redirect ?? "/");
    }

    return (
        <div className={styles.container}>
            <div className={styles.signinForm}>
                <Logo />
                <h1>Summary WebSite Template 1</h1>
                {hasGoogleSSO && <button onClick={() => signIn("google")}>Sign in</button>}
                {isDevelopment && <button onClick={() => signIn("credentials")}>Sign in as development user</button>}
            </div>
        </div>
    );
};

export default SignIn;
