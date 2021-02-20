import Meta from '../components/Meta';
import styles from '../styles/Home.module.css';
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Meta title="Home"/>
    <section>
      <h2>Home Page</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nostrum a totam magni nam eaque corporis et! Obcaecati a maiores, doloribus veniam consequuntur culpa! Adipisci blanditiis quasi dolorum delectus voluptate.</p>
      <Image src="/images/img.png" width={90} height={77}/>
    </section>
    </>
  )
}
