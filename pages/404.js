import Link from 'next/link';
import {useEffect} from 'react';
import {useRouter} from 'next/router';
import Meta from '../components/Meta';

const NotFound = () => {
    const router = useRouter();
    useEffect(()=> {
        setTimeout(()=>{
            router.push('/');
        }, 3000)
    }, []);

    return ( 
        <section>
            <Meta title="404"/>
            <h1>Oooops ....!</h1>
            <h3>That page cannot be found!!</h3>
            <p>Go back to the <Link href="/"><a>home</a></Link> page </p>
        </section>
     );
}
 
export default NotFound;