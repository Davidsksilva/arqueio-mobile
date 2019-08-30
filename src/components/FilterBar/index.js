import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonF, Tags } from './styles';

const FilterBar = ({ tags, handleButton, ...rest }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {}, []);

  function handlePress(id_) {
    setIndex(id_);
  }

  return (
    <Container {...rest}>
      <Tags
        data={tags}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          item.id === index ? (
            <ButtonF
              textColor="#3b9eff"
              style={{ borderBottomColor: '#3b9eff' }}
              icon={item.icon}
              onPress={() => {
                handleButton(item.id);
                handlePress(item.id);
              }}
            >
              {item.title}
            </ButtonF>
          ) : (
            <ButtonF
              icon={item.icon}
              onPress={() => {
                handleButton(item.id);
                handlePress(item.id);
              }}
            >
              {item.title}
            </ButtonF>
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
  handleButton: PropTypes.func.isRequired,
};

export default FilterBar;
