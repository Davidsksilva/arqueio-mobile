import React from 'react';
import PropTypes from 'prop-types';

import { Container, FilterButton, Scroll } from './styles';

const FilterBar = ({ title, icon, ...rest }) => {
  return (
    <Container>
      <Scroll {...rest}>
        <FilterButton>{title}</FilterButton>
        <FilterButton>{title}</FilterButton>
        <FilterButton>{title}</FilterButton>
      </Scroll>
    </Container>
  );
};

FilterBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

FilterBar.defaultProps = {
  icon: 'none',
};

export default FilterBar;
