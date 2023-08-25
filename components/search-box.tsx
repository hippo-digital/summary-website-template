/* eslint-disable prettier/prettier */
import React from "react"
import { useRouter } from "next/router"
import styles from "./search-box.module.scss"

export type SearchBoxProps = {
  placeholder: string
  options: string[]
}

const SearchBox = (props: SearchBoxProps) => {
  const router = useRouter()

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const target = e.target as typeof e.target & {
      tag: { value: string }
    }

    await router.push(`/search?tag=${target.tag.value}`)
  }

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <label htmlFor="tag" className={styles.label}>
        Search
      </label>
      <input className={styles.input} type="search" id="tag" />
      <datalist id="tags">
        {props.options.map((o) => {
          return <option key={`dl_${o}`} value={o} />
        })}
      </datalist>
      <input type="submit" value="Search" />
    </form>
  )
}

export default SearchBox
