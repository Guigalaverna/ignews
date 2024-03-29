import Head from "next/head";
import {GetStaticProps} from "next";
import {SubscribeButton} from "../components/SubscribeButton";

import styles from "../styles/home.module.scss";
import {stripe} from "../services/stripe";
import {formatPrice} from "../utils/formatPrice";
import {formatSecondsToDays} from "../utils/formatDate";

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({product}: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <img src="./avatar.svg" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ctx => {
  const price = await stripe.prices.retrieve("price_1Ke4kBCUrMzJhcR0tKkDLYxU");

  const product = {
    priceId: price.id,
    amount: formatPrice(price.unit_amount / 100),
  };

  return {
    props: {
      product,
    },
    revalidate: formatSecondsToDays(60),
  };
};
