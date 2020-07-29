import React, { Fragment, useState } from 'react';
import styles from '../styles/ReactInterview1.module.css';

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

const Input = props => {
  const [value, setValue] = useState();
  const { id, label, name, size } = props;

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <label className={styles.label}>{label}</label>
      <br />
      <input
        id={id}
        className={styles.input}
        type="text"
        name={name}
        onChange={handleChange}
        input={value}
        size={size}
      />
    </div>
  );
};

const Button = props => {
  const { text, onButtonClick, primary } = props;

  return (
    <button
      className={`${styles.buttons} ${primary ? styles.primary : ''}`}
      type="button"
      onClick={onButtonClick}
    >
      {text}
    </button>
  );
};
