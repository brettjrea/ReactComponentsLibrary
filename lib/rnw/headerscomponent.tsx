// HeadersComponent.tsx
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HorizontalLine from './horizontalline.tsx';

type HeadersComponentProps = {
  headerText: string;
  subHeaderText: string;
  lineThickness?: number; // Optional prop for line thickness
  lineColor?: string; // Optional prop for line color
  lineStyle?: string; // Optional prop for line color
};

const HeadersComponent: React.FC<HeadersComponentProps> = ({
  headerText,
  subHeaderText,
  lineThickness = 2, // Default thickness
  lineColor = 'black', // Default color
  lineStyle='solid'
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerText}</Text>
      <Text style={styles.subHeader}>{subHeaderText}</Text>
      <HorizontalLine thickness={lineThickness} color={lineColor} line={lineStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subHeader: {
    fontSize: 18,
  },
});

export default HeadersComponent;

