import React from 'react';
import AccountSection from 'components/AccountSection';
import Form from 'components/Form';
import Input from 'components/Input';
import Layout from 'components/Layout';
import config from 'config';
import styles from './account.module.scss';
import { composeClasses } from 'libs/utils';

const {
  account: {
    title,
  }
} = config;

const renderInfo = () => (
  <>
    <Input
      htmlFor="email_address"
      type="email"
      name="email_address"
      label="Email Address"
      disabled={true}
      value="amarachuku@gmail.com"
    />
    <div className={styles.inputSection}>
      <Input
        htmlFor="full_name"
        type="text"
        name="full_name"
        label="Full Name"
        customClass={styles.inputContent}
        value="Olatunji Joseph"
      />
      <Input
        htmlFor="user_name"
        type="text"
        name="user_name"
        label="User Name"
        customClass={styles.inputContent}
        value="Madjozi"
      />
      <Input
        htmlFor="birth_date"
        type="date"
        name="birth_date"
        label="Birth Date"
        disabled={true}
        value="07/15/1990"
      />
    </div>
  </>
);

const renderPassword = () => (
  <section className={composeClasses(styles.passwordWrapper, styles.inputSection)}>
    <Input
      htmlFor="current_password"
      type="password"
      name="current_password"
      label="Current Password"
      customClass={styles.inputContent}
    />
    <Input
      htmlFor="new_password"
      type="password"
      name="new_password"
      label="New Password"
      customClass={styles.inputContent}
    />
    <Input
      htmlFor="confirm_password"
      type="password"
      name="confirm_password"
      label="Confirm Password"
      customClass={styles.inputContent}
    />
  </section>
);

const renderResidence = () => (
  <>
    <Input
      htmlFor="current_state"
      type="text"
      name="current_state"
      label="Current State"
      disabled={true}
      value="Niger"
    />

    <div className={styles.inputSection}>
      <Input
        htmlFor="new_state"
        type="text"
        name="new_state"
        label="New State of Residence"
        customClass={styles.inputContent}
      />
      <Input
        htmlFor="lga"
        type="text"
        name="lga"
        label="What LGA do you live in"
        customClass={styles.inputContent}
      />
      <Input
        htmlFor="constituency"
        type="text"
        name="constituency"
        label="Federal Constituencies"
      />
    </div>
    <div className={styles.inputSection}>
      <Input
        htmlFor="senatorial_district"
        type="text"
        name="senatorial_district"
        label="Senatorial District"
        customClass={styles.inputContent}
      />
      <Input
        htmlFor="state_constituences"
        type="text"
        name="state_constituences"
        label="State Constituencies"
        customClass={styles.inputContent}
      />
    </div>
  </>
);

const Account = () => {
  return (
    <Layout>
      <h1 className={styles.title}>{title}</h1>
      <section>
        <AccountSection
          title='Personal Information'
          description='Use this page to update your contact information and change your password.'
        >
          <Form customClass={styles.infoWrapper}>
            <section className={styles.avatarWrapper}>
              <div className={styles.avatar}></div>
              <div className={styles.avatarInstructionWrapper}>
                <p className={styles.avatarInstruction}>Upload a new profile image</p>
                <p className={styles.avatarSize}>Maximum size allowed is 600kb of PNG, JPEG, JPG</p>
              </div>
            </section>

            {renderInfo()}
          </Form>

          <Form>
            {renderPassword()}
          </Form>
        </AccountSection>

        <AccountSection title='Change State of Residence'
          description='Ut enim ad minim veniam, quis nostrud exercitation ullamco.'>
          <Form>
            {renderResidence()}
          </Form>
        </AccountSection>
      </section>
    </Layout>
  )
}

export default Account;
