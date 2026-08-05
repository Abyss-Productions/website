import type { ReactNode } from 'react'
import styles from './Article.module.css'

interface ArticleProps {
  eyebrow: string
  title: string
  meta?: string
  children: ReactNode
  /** Buttons for the foot of the page. Kept out of the prose container so the
      prose link styling cannot reach them. */
  actions?: ReactNode
}

/** Layout for the text pages, so privacy and support read as one set. */
export function Article({ eyebrow, title, meta, children, actions }: ArticleProps) {
  return (
    <div className={`shell ${styles.page}`}>
      <header className={styles.head}>
        <p className={`utility ${styles.eyebrow}`}>
          <span className={styles.rule} aria-hidden="true" />
          {eyebrow}
        </p>
        <h1 className={`display ${styles.title}`}>{title}</h1>
        {meta && <p className={`utility ${styles.meta}`}>{meta}</p>}
      </header>

      <div className={styles.body}>{children}</div>

      {actions && <div className={styles.actions}>{actions}</div>}
    </div>
  )
}
