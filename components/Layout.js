import Navbar from './Navbar';
import Footer from './Footer';
import Meta from './Meta'

const Layout = ({ children }) => {
    return ( 
        <section>
            <Meta/>
            <Navbar/>
                { children }
            <Footer/>
        </section>
     );
}

export default Layout;