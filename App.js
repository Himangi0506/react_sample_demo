/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import AppNavigator from "./navigator/AppNavigator";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
