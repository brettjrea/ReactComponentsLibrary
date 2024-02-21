import React from 'react';
import { View, StyleSheet } from 'react-native';

type HorizontalLineProps = {
  thickness?: number;
  color?: string;
  lineStyle?: 'solid' | 'dotted' | 'dashed'; // Added lineStyle prop
};

const HorizontalLine: React.FC<HorizontalLineProps> = ({
  thickness = 2,
  color = 'black',
  lineStyle = 'solid',
}) => {
  return (
    <View style={[styles.container, { borderBottomWidth: thickness, borderBottomColor: color, borderStyle: lineStyle }]} />
  );
};

const styles = StyleSheet.create({
  container: {
    // Adjust the container to act as the line itself
    width: '100%',
    // Default settings for the line, can be overridden by props
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    borderStyle: 'dashed',
  },
});

export default HorizontalLine;

