import styles from './TypewriterTextProps.module.css'

const TypewriterTextView = ({ text }: { text: string }) => {
  return (
    <ul className={styles.flagText}>
      {[...text].map((char, idx) => (
        <li key={idx} className={styles.typewriterLetter}>{char}</li>
      ))}
    </ul>
  )
}

export default TypewriterTextView
