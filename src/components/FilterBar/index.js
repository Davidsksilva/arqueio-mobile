import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, ButtonF, Tags } from './styles';

const FilterBar = ({ tags, handleButton, ...rest }) => {
  const [index, setIndex] = useState(1);
  const [flatListRef, setFlatListRef] = useState(null);

  useEffect(() => {}, []);

  function handlePress(id_) {
    setIndex(id_);
    flatListRef.scrollToIndex({ index: id_ - 1, animated: true });
  }

  function isActive(item) {
    const filtered = tags.filter(t => t.title !== '');
    let singleTagId = -1;
    if (filtered.length === 1) {
      singleTagId = filtered[0].id;
    }

    if (singleTagId !== -1) {
      return item.id === singleTagId;
    }
    return item.id === index;
  }

  return (
    <Container {...rest}>
      <Tags
        data={tags}
        keyExtractor={item => String(item.id)}
        ref={ref => {
          setFlatListRef(ref);
        }}
        renderItem={({ item }) =>
          isActive(item) ? (
            <ButtonF
              textColor="#3b9eff"
              style={{ borderBottomColor: '#3b9eff', borderBottomWidth: 2 }}
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
              style={{ borderBottomColor: '#c4c4c4' }}
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
