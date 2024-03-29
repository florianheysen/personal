import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios';

export default function Home({ dbClicks }: { dbClicks: number }) {
  const [dev, setDev] = useState(false);
  const [passion, setPassion] = useState(false);
  const [projets, setProjets] = useState(false);
  const [location, setLocation] = useState(false);
  const [defis, setDefis] = useState(false);
  const [email, setEmail] = useState(false);
  const [totalClicks, setTotalClicks] = useState(dbClicks);

  async function incrementClicks() {
    try {
      const response = await axios.get('https://heysen.fr/api/increment');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  const handleDevClick = async () => {
    setDev(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  const handlePassionClick = async () => {
    setPassion(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  const handleProjetsClick = async () => {
    setProjets(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  const handleLocationClick = async () => {
    setLocation(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  const handleDefisClick = async () => {
    setDefis(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  const handleEmailClick = async () => {
    setEmail(true);
    await incrementClicks();
    setTotalClicks(totalClicks + 1);
  }

  return (
    <>
      <Head>
        <title>Florian Heysen - Développeur Front-End</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <div
          className="textArea"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.1 }}
            className="serif">Florian Heysen</motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.4 }}
            className={`sans clickable ${dev && 'disabled'}`}
            onClick={() => handleDevClick()}
            disabled={dev}>
            développeur
            <Image
              className="rotate pointer-events-none"
              src="/spiral.svg"
              alt="spiral"
              width={25}
              height={25}
            />
          </motion.button>

          <motion.p
            className="sans"
            transition={{ duration: 0.2 }}
            animate={
              dev
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            front-end <button onClick={() => handlePassionClick()} className={`sans clickable ${passion && 'disabled'}`}>passionné</button>
          </motion.p>

          <motion.p
            className="sans"
            transition={{ duration: 0.2 }}
            animate={
              passion
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            <span className="serif">par</span> <button onClick={() => handleProjetsClick()} className={`sans clickable ${projets && 'disabled'}`}>mes projets</button>
          </motion.p>

          <motion.p
            className="sans"
            transition={{ duration: 0.2 }}
            animate={
              projets
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            <a target="_blank" href="https://www.magize.co/" className={`sans external`}>
              <Image
                className="pointer-events-none"
                src="/magize.svg"
                alt="magize"
                width={20}
                height={20}
              />
              magize.co
            </a>
            et
            <a target="_blank" href="https://www.geoloc.dev/" className={`sans external`}>
              <Image
                className="pointer-events-none"
                src="/geoloc.svg"
                alt="geoloc"
                width={20}
                height={20}
              />
              geoloc.dev
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 0.7 }}
            className="serif">
            basé à
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1 }}
            className={`sans clickable ${location && 'disabled'}`}
            onClick={() => handleLocationClick()}>
            Paris <span className="fantasy">France</span>
          </motion.button>

          <motion.p
            className="serif"
            transition={{ duration: 0.2 }}
            animate={
              location
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            animé par des conférences
          </motion.p>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: .4 }}
            animate={
              location
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            et
          </motion.p>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: .6 }}
            animate={
              location
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            des workshops
          </motion.p>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: .8 }}
            animate={
              location
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            internationaux.
          </motion.p>
        </div>

        <div className="textArea mt-2">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.3 }}
            className="serif">
            Je suis à la
          </motion.p>

          <motion.button initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 1.7 }}
            className={`sans clickable ${defis && 'disabled'}`}
            onClick={() => handleDefisClick()}>
            recherche de nouveaux défis
            <Image
              className="rotate pointer-events-none"
              src="/work.svg"
              alt="work"
              width={25}
              height={25}
            />
          </motion.button>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            animate={
              defis
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            pour monter en compétences
          </motion.p>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: 0.3 }}
            animate={
              defis
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            techniques
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 2.1 }}
            className="serif"> joignez moi par</motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 2.3 }}
            className={`sans clickable ${email && 'disabled'}`}
            onClick={() => handleEmailClick()}>email
            <Image
              className="pointer-events-none"
              src="/pen.svg"
              alt="pen"
              width={45}
              height={20} />
          </motion.button>

          <motion.p
            className="serif"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            animate={
              email
                ? { display: 'flex', opacity: 1 }
                : { display: 'none', opacity: 0 }
            }>
            à &nbsp;
            <a href="mailto:florian@heysen.fr" className={`sans external`}>
              florian@heysen.fr
            </a>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 2.8 }}
            className="ml-1 serif">ou visualisez
          </motion.p>

          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1, delay: 3.2 }}
            target="_blank"
            href="/florian-HEYSEN.pdf"
            className="sans external ml-1">mon CV
          </motion.a>

        </div>

        <div className='pt-12'>
          <p className='status'>
            <span className='dot'>&nbsp;</span>
            <span className='number'>{totalClicks}</span>
            <span className='clicks'>clicks</span>
          </p>
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://heysen.fr/api/clicks`);
  const dbClicks = await res.json();

  return {
    props: { dbClicks }
  }
}
