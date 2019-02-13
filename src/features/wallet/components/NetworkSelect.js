import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';

import { SegmentedControl } from '../../../common/components';

import { networkOptions } from '../constants';

const values = networkOptions.map(n => n.label);

const NetworkSelect = ({ onChange, value }) => (
  <SegmentedControl
    values={values}
    onChange={({ nativeEvent: { selectedSegmentIndex } }) =>
      onChange(networkOptions[selectedSegmentIndex].value)
    }
    selectedIndex={networkOptions.findIndex(n => n.value === value)}
    style={styles.select}
  />
);

NetworkSelect.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NetworkSelect;

const styles = StyleSheet.create({
  select: {
    marginBottom: 12,
  },
});
