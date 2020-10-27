import React from 'react';
import Styles from './styles';

const Header = ({title}) => {
  return (
    <Styles.Header>
      <h1>{title="My home page"}</h1>
    </Styles.Header>
  );
}
 
export default Header;