import Head from "next/head";
// import Image from "next/image";
import Header from "../components/Header";
import Container from "../components/Container";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Dan's Group | Home</title>
      </Head>
      <Header />
      <Container>COUCOU</Container>
    </>
  );
}
