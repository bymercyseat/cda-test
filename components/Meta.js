import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
    return ( 
        <Head>
            <title>CDA | {title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="keywords" content={keywords}/>
            <meta name="description" content={description}/>
        </Head>
     );
}
Meta.defaultProps = {
    title: "CDA Academy",
    keywords: "Teaching how to dance to the glory of God",
    description: "Training school for teaching children how to dance"
}

export default Meta;