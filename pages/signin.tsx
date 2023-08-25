/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { NextPage } from "next"
import { FormEventHandler, useState } from "react"
import Logo from "../components/logo"
import styles from "./signin.module.scss"

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const { status } = useSession()
  const router = useRouter()

  const [passwordInput, setPasswordInput] = useState({ password: "" })
  const [error, setError] = useState("")
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    const res = await signIn("credentials", {
      password: passwordInput.password,
      redirect: false,
    })
 // @ts-ignore
    if (res.error) {
      setError("Incorrect password. Please try again.")
    } else {
      setError("")
    }
    console.log(res)
  }

  if (status === "authenticated") {
    const redirect = router.query["redirect"] as string
    router.push(redirect ?? "/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.signinForm}>
        <Logo />
        <h1>Hippo Summary WebSite</h1>
        <form className={styles.passwordForm} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            value={passwordInput.password}
            onChange={({ target }) =>
              setPasswordInput({ ...passwordInput, password: target.value })
            }
            placeholder="Enter password"
            type="password"
            name="login"
          />
          <input type="submit" value="Password" />
          {error && <p className={styles.error}>{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default SignIn
