import styles from '@/styles/About.module.css';
import Image from 'next/image';
import { useEffect } from 'react';
import DateTime from './components/dateTime';

async function getData(){
    const fetchData =  await fetch('https://api.github.com/users/Bevon');
    const response = await fetchData.json()
    console.log(response)

}


export default function About({data}){

    useEffect(function(){
        getData()
    })
    
    return (
        <div className={styles.about}>
            <div className={styles.boximg}>
            <h5>{data.name}</h5>
            <Image className={styles.image} src='https://avatars.githubusercontent.com/u/39159901' height={64} width={64} alt='User Photo' priority/>
            <p>Twitter: {data.twitter_username}</p>
            <p>Public Repos: {data.public_repos}</p>
            <p>Location: {data.location}</p>
            </div>
            <DateTime/>
        </div>
    )
}

export async function getStaticProps(){
    const res = await fetch('https://api.github.com/users/Bevon');
    if (!res.ok){
        throw new Error('Resource not found')
    }
    const data = await res.json();
   
    return {
        props:{data}
    }
}