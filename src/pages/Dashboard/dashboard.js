import React from 'react';
import Layout from 'components/Layout';
import Card from 'components/Card';
import Applications from 'components/Application';
import config from 'config';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  const {
    user,
    date,
    cards,
    applications: {
      title,
      header,
      content,
    }
  } = config;

  const nameArray = user.split(' ');

  return (
    <Layout>
      <p className={styles.greeting}>{`Welcome, ${nameArray[0]}!`}</p>
      <p className={styles.date}>{date}</p>
      <section className={styles.cardWrapper}>
        {
          cards.map((card, id) => (
            <Card
              key={id}
              icon={card.icon}
              total={card.total}
              description={card.description} />
          ))
        }
      </section>

      <section>
        <Applications
          title={title}
          header={header}
          content={content}
        />
      </section>
    </Layout>
  )
}

export default Dashboard;
