import {useEffect, useRef, useState} from 'react';
import { View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export default function MenuBar(){
    const ref = useRef(null);
    const [currentScreen, setCurrentScreen] = useState();
}