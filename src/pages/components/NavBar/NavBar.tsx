import Link from 'next/link'
import styles from './NavBar.module.css'

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <Link className={styles.link} href='/'>Home</Link>
        <Link className={styles.link} href='/contactus'>Contact Us</Link>
        <Link className={styles.link} href='/about'>About</Link>
        <Link className={styles.link} href='/cars'>Cars</Link>
    </div>
  )
}



export default NavBar

