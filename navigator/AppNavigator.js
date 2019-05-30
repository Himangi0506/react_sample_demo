import React, { Component } from "react";
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "../navigator/Home";
import Details from "../navigator/Details";
const Project= createStackNavigator({
  Home: {
   screen: Home
  },
  Details: {
   screen: Details
  }
});
export default createAppContainer(Project);