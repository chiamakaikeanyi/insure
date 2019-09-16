import React, { Component } from 'react';
import Layout from 'components/Layout';
import Card from 'components/Card';
import Applications from 'components/Application';
import { isObjectEmpty, } from 'libs/utils';
import config from 'config';
import styles from './dashboard.module.scss';

import { getStatistics, getApplications } from 'services/applications';

class Dashboard extends Component {

  state = {
    statistics: null,
    applications: null,
  }

  fetchStatistics = async () => {
    await getStatistics()
      .then(response => {
        if (response && response.status === 200) {
          const statistics = response.data && response.data.statistics;

          this.setState({
            statistics,
          })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  fetchApplications = async () => {
    await getApplications()
      .then(response => {
        if (response && response.status === 200) {
          const applications = response.data && response.data.applications;

          this.setState({
            applications,
          })
        }
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentDidMount() {
    this.fetchStatistics();
    this.fetchApplications();
  }

  render() {
    const { user, date, cards,
      applications: {
        title,
        header,
      }
    } = config;

    const nameArray = user.split(' ');
    const {
      statistics,
      applications
    } = this.state;

    return (
      <Layout>
        <p className={styles.greeting}>{`Welcome, ${nameArray[0]}!`}</p>
        <p className={styles.date}>{date}</p>
        <section className={styles.cardWrapper}>
          {
            !isObjectEmpty(cards) && Object.keys(cards).map((card, id) => {
              return (
                <Card
                  key={id}
                  icon={cards[card].icon}
                  total={statistics ? statistics[card] : 0}
                  description={cards[card].description} />
              )
            })
          }
        </section>

        <section>
          <Applications
            title={title}
            header={header}
            content={applications}
          />
        </section>
      </Layout>
    )
  }
}

export default Dashboard;
