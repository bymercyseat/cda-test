import Link from 'next/link'

const Navbar = () => {
    return (
    <nav>
        <h3>CDA</h3>
        <Link href="/"><a>Home</a></Link>
        <Link href="/programs"><a>Programs</a></Link>
        <Link href="/about_academy"><a>About-Us</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
    </nav>
     );
}
 
export default Navbar;