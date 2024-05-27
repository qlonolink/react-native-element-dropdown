/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Item 1', value: '1', search: 'Item 1' },
  { label: 'Item 2', value: '2', search: 'Item 2' },
  { label: 'Item 3', value: '3', search: 'Item 3' },
  { label: 'Item 4', value: '4', search: 'Item 4' },
  { label: 'Item 5', value: '5', search: 'Item 5' },
  { label: 'Item 6', value: '6', search: 'Item 6' },
  { label: 'Item 7', value: '7', search: 'Item 7' },
  { label: 'Item 8', value: '8', search: 'Item 8' },
];

const DropdownComponent = () => {
  const [value, setValue] = useState<string>();
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: 'blue' }]}>
          Dropdown label
        </Text>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
        iconStyle={styles.iconStyle}
        data={data}
        autoScroll
        search
        maxHeight={300}
        minHeight={100}
        labelField="label"
        valueField="value"
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        currentElement={
          <Text style={styles.inputSearchStyle}>
            {value ? data.find((item) => item.value === value)?.search : ''}
          </Text>
        }
      />
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
