import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Tags } from './styles';

const FilterBar = ({ tags, ...rest }) => {
  let id = 0;

  return (
    <Container {...rest}>
      <Tags
        data={tags}
        keyExtractor={() => {
          id += 1;
          return String(id);
        }}
        renderItem={({ item }) => {
          if (item === 'Tudo') {
            return (
              <Button style={{ borderBottomColor: '#3b9eff' }}>{item}</Button>
            );
          }
          return <Button>{item}</Button>;
        }}
      />
    </Container>
  );
};

FilterBar.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FilterBar;
