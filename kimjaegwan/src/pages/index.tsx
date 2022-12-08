import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Movie from '../components/Movie';

const Home = () => {
    return (
        <>
            <article>
                <Movie />
            </article>
        </>
    );
};

export default Home;
