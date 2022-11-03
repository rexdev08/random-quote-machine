import { FaTwitter, FaTumblr } from "react-icons/fa"
import styles from "../styles/QuoteMachine.module.scss"

function QuoteMachine({ text, author, clickHandler }) {

    const tweet = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}"  -${author}`
    const tumblr = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=${author}&content=${text}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`


    return (

        <div className={styles.QuoteBox} id="quote-box">
            <span className={styles.text} id="text">" {text}</span>
            <span className={styles.author} id="author">-{author}</span>
            <div className={styles.buttons}>
                <div className={styles.social}>

                    <a target={"_blank"} className={styles.tweet} id="tweet-quote" href={tweet}><FaTwitter /></a>

                    <a target={"_blank"} className={styles.tumblr} id="tumblr-quote" href={tumblr}><FaTumblr /></a>
                </div>

                <button onClick={clickHandler} className={styles.quoteBtn} id="new-quote">New Quote</button>
            </div>
        </div>

    );
}

export default QuoteMachine;