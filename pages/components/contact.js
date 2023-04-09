import styles from '@/styles/Contact.module.css'

export default function Contact(){
    return (
        <div className={styles.contact}>
            <div>
            <form className={styles.form}>
            <label htmlFor="fname">First name:</label><br/>
            <input required type="text" id="fname" name="fname" placeholder='Your Name...'/><br/>
            <label htmlFor="email">Enter your email:</label><br></br>
            <input required type="email" id="email" name="email" placeholder='Your Email...'/><br/>
            <label htmlFor="lname">Write a message: </label><br/>
            <textarea className={styles.textarea} required name='message' rows={10} cols={10} placeholder='Enter Your Message...'></textarea><br/><br/>
            <button type='submit' value='submit'>Send Message</button>
            </form>
            </div>
            
        </div>
    )
}