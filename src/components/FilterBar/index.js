import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, Button, Tags } from './styles';

const FilterBar = ({ tags, ...rest }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {}, []);

  const handleButton = id_ => {
    setIndex(id_);
  };

  return (
    <Container {...rest}>
      <Tags
        data={tags}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          item.id === index ? (
            <Button
              textColor="#3b9eff"
              style={{ borderBottomColor: '#3b9eff' }}
              onPress={() => {
                handleButton(item.id);
              }}
            >
              {item.title}
            </Button>
          ) : (
            <Button
              onPress={() => {
                handleButton(item.id);
              }}
            >
              {item.title}
            </Button>
          )
        }
      />
    </Container>
  );
};

FilterBar.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FilterBar;
