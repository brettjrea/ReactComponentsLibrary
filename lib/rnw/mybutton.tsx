// MyButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

// Add an onPress prop to the component's props
const MyButton = ({ title, onPress, statusMessage = '', showStatus = false }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      {/* Conditionally display statusMessage or title */}
      <Text style={styles.text}>
        {showStatus ? statusMessage : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
});

export default MyButton;

