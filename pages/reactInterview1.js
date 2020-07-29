import React, { Fragment, useState } from 'react';
import styles from '../styles/ReactInterview1.module.css';
import { Input } from '../components/reactInterview/Input';
import { Button } from '../components/reactInterview/Button';

export default function ReactInterview1() {
  const [name, setName] = useState();
  const [birthDate, setBirthDate] = useState();

  const handleSubmitClicked = event => {
    setName(document.getElementById('name').value);
    setBirthDate(document.getElementById('birthDate').value);
  };

  const handleResetClicked = () => {
    setName(null);
    setBirthDate(null);
    document.getElementById('name').value = null;
    document.getElementById('birthDate').value = null;
  };

  return (
    <Fragment>
      <h1 className={styles.title}>React Interview 1 Example</h1>
      <div className={styles.App}>
        <div className={styles.container}>
          <div className={styles.flexContainer}>
            <div className={styles.boxLeft}>
              <Input id="name" name="name" label="Name" size="40" />
            </div>
            <div className={styles.boxRight}>
              <Input
                id="birthDate"
                name="birthDate"
                label="Birthdate"
                size="25"
              />
            </div>
          </div>

          <Button primary text="Save" onButtonClick={handleSubmitClicked} />
          <Button text="Cancel" onButtonClick={handleResetClicked} />

          <hr />
          <div className={styles.display}>
            <div className={styles.displayItemLine}>
              Name: <span className={styles.displayItemText}>{name}</span>
            </div>
            <div className={styles.displayItemLine}>
              BirthDate:
              <span className={styles.displayItemText}>{birthDate}</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
