import { ChangeEvent, useState } from "react"
import { initialText } from "./initialText"
import styles from "../styles/Markup.module.css"
import Markdown from 'react-markdown'

const Markup = () => {
    const [text, setText] = useState<string>(initialText)

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value)        
    }

    return (
        <>
            <section className={styles.divEditor}>
                <h1 className={styles.h1Class}>Editor area</h1>
                <textarea id='editor' className={styles.editor} onChange={handleChange} value={text} />
            </section>
            <section className={styles.divPreview} >
                <h2 className={styles.h2Class}>Code preview!</h2>
                <div id='preview' style={{padding: '5px'}}>
                    <Markdown>{text}</Markdown>
                </div>
            </section>
        </>
        
    )
}

export default Markup