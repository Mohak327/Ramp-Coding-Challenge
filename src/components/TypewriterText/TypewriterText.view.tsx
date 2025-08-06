import styles from './TypewriterTextProps.module.css'

const TypewriterTextView = ({ typedText }: { typedText: string }) => {
  return <span className={styles.flagText}>{typedText}</span>
}

export default TypewriterTextView
