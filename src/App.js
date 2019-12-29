import React from 'react';
import styles from './App.module.scss';
import SkillContainer from './containers/SkillContainer/SkillContainer';

function App() {
  return (
      <div className={styles.App}>
        <SkillContainer/>
      </div>
  );
}

export default App;
