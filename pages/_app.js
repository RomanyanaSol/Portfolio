import './index.css';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';


function MyApp({ Component, pageProps }) {

  const router = useRouter();
  const className = 'height=100vh';

  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div key={router.route} className={className}>
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
