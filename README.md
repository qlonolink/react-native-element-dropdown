[<img src="https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-element-dropdown-demo.png">](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-element-dropdown-demo.png)

# react-native-element-dropdown
React Native Element Dropdown is a library that provides a customizable dropdown component for React Native applications. This library simplifies the process of creating dropdown menus and provides a variety of options to customize the dropdown to match the design and functionality of your application.

## Features
* Dropdown and Multiselect in one package
* Easy to use
* Consistent look and feel on iOS and Android
* Customizable font size, colors and animation duration
* Implemented with typescript

```js
If you love this library, give us a star, you will be a ray of sunshine in our lives :)
```

### Free React Native Boilerplate
[React Native Template](https://github.com/hoaphantn7604/react-native-template-components) with a beautiful UI.

## Getting started
```js
npm install react-native-element-dropdown --save
```
or

```js
yarn add react-native-element-dropdown
```
### Demo

[<img src="https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-element-dropdown-thumbnal.jpg">](https://youtu.be/FhTDR_Ad_14)


<br />

![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-drpdown.gif)
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-multiselect.gif)

### Dropdown Props
| Props              | Params                                          | isRequire | Description                                                         |
| ------------------ | ----------------------------------------------- | --------- | ------------------------------------------------------------------- |
| mode               | 'default' or 'modal' of 'auto'                  | No        | Mode 'modal' is show the dropdown in the middle of the screen.      |
| data               | Array                                           | Yes       | Data is a plain array                                               |
| labelField         | String                                          | Yes       | Extract the label from the data item                                |
| valueField         | String                                          | Yes       | Extract the primary key from the data item                          |
| searchField        | String                                          | No       | Specify the field of data list you want to search                   |
| onChange           | (item: object) => void                          | Yes       | Selection callback                                                  |
| onChangeText       | (search: string) => void                        | No       | Callback that is called when the text input's text changes          |
| value              | Item                                            | No        | Set default value                                                   |
| placeholder        | String                                          | No        | The string that will be rendered before dropdown has been selected  |
| placeholderStyle   | TextStyle                                       | No        | Styling for text placeholder                                        |
| selectedTextStyle  | TextStyle                                       | No        | Styling for selected text                                           |
| selectedTextProps  | TextProps                                       | No        | Text Props for selected text. Ex: numberOfLines={1}                 |
| style              | ViewStyle                                       | No        | Styling for view container                                          |
| containerStyle     | ViewStyle                                       | No        | Styling for list container                                          |
| maxHeight          | Number                                          | No        | Customize max height for list container                             |
| minHeight          | Number                                          | No        | Customize min height for list container                             |
| fontFamily         | String                                          | No        | Customize font style                                                |
| itemContainerStyle | TextStyle                                       | No        | Styling for item container in list                                  |
| itemTextStyle      | TextStyle                                       | No        | Styling for text item in list                                       |
| activeColor        | String                                          | No        | Background color for item selected in list container                |
| disable            | Boolean                                         | No        | Specifies the disabled state of the Dropdown                        |
| dropdownPosition   | 'auto' or 'top' or 'bottom'                     | No        | Dropdown list position. Default is 'auto'                           |
| dropdownWidth      | Number                                          | No        | When dropdownPositionStart is right, it is required.                |
| dropdownPositionStart | 'left' or 'right'                            | No        |  Dropdown list start position. Default is 'left'                    |
| autoScroll         | Boolean                                         | No        | Auto scroll to index item selected, default is true                 |
| showsVerticalScrollIndicator | Boolean                               | No        | When true, shows a vertical scroll indicator, default is true       |
| renderItem         | (item: object, selected: Boolean) => JSX.Element| No        | Takes an item from data and renders it into the list                |
| flatListProps      | FlatListProps                                   | No        | Customize FlatList element                                          |
| inverted           | Boolean                                         | No        | Reverses the direction of scroll on top position mode. Default is true|
| onFocus            | () => void                                      | No        | Callback that is called when the dropdown is focused                |
| onBlur             | () => void                                      | No        | Callback that is called when the dropdown is blurred                |
| keyboardAvoiding   | Boolean                                         | No        | keyboardAvoiding default is true                                    |
| backgroundColor    | String                                          | No        | Set background color                                                |
| confirmSelectItem  | Boolean                                         | No        | Turn On confirm select item. Refer example/src/dropdown/example3    |
| onConfirmSelectItem | (item: object) => void                         | No        | Selection callback. Refer example/src/dropdown/example3             |
| testID             | String                                          | No        | Used to locate this view in end-to-end tests                        |
| itemTestIDField    | String                                          | No        | Add this field to the input data. Ex: DATA = [{itemTestIDField: '', label: '', value:: ''}]|
| accessibilityLabel | String     | No    | Set an accessibilityLabel on the view, so that people who use VoiceOver know what element they have selected |
| itemAccessibilityLabelField | String                                 | No        | Add this field to the input data. Ex: DATA = [{itemAccessibilityLabelField: '', label: '', value:: ''}]|
| closeModalWhenSelectedItem | Boolean                                 | No        | By default, closeModalWhenSelectedItem is set to true. When closeModalWhenSelectedItem is set to false, the Modal won't close when an item is selected. |
| excludeItems       | Item[]                                          | No        | The array containing the items to be excluded.                      |

### Method
| API         | Params      | Description          |
| ----------- | ------------| ---------------------|
| open        | () => void  | Open dropdown list   |
| close       | () => void  | Close dropdown list  |


### Dropdown example
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-dropdown-1.png)
```js
  import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
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
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="Safety"
              size={20}
            />
          )}
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
  });
```

### Dropdown example 1
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-dropdown-2.png)
```javascript
  import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    icon: {
      marginRight: 5,
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
```

### Dropdown example 2
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/dropdown/react-native-dropdown-3.png)
```javascript
  import React, { useState } from 'react';
  import { StyleSheet, View, Text } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);

    const renderItem = item => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === value && (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
        </View>
      );
    };

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        )}
        renderItem={renderItem}
      />
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    textItem: {
      flex: 1,
      fontSize: 16,
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
```
