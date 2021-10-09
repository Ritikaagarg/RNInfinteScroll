import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Constants from '../constants';

const loader = (isLoading) => {
  return (
    isLoading ?
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View> : null
  );
};

export default loader;

const styles = StyleSheet.create({
  loader: {
    marginVertical: Constants.BaseStyle.DEVICE_HEIGHT / 100 * 3,
    alignItems: "center",
  },
})