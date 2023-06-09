import React, { useState, useCallback } from 'react';
import Index from '../screens/GetStarted/index';
import AuthenticationPage from '../screens/GetStarted/AuthenticationPage';
import Location from '../screens/Location/Location';
import ProvideLocation from '../screens/Location/ProvideLocation';
import Main_home from '../screens/Homepage/Main_home';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function ScreenNavigator() {
      const [screen, changeScreen] = useState('MainHome');

      const [fontsLoaded] = useFonts({
            'SF-Pro-Rounded-Regular': require('../../assets/fonts/FontsFree-Net-SF-Pro-Rounded-Regular.ttf'),
            'SF-Pro-Rounded-Medium': require('../../assets/fonts/FontsFree-Net-SF-Pro-Rounded-Medium.ttf'),
            'SF-Pro-Rounded-Semibold': require('../../assets/fonts/FontsFree-Net-SF-Pro-Rounded-Semibold.ttf'),
            'SF-Pro-Rounded-Bold': require('../../assets/fonts/FontsFree-Net-SF-Pro-Rounded-Bold.ttf'),
            'SF-Pro-Rounded-Heavy': require('../../assets/fonts/FontsFree-Net-SF-Pro-Rounded-Heavy.ttf'),
            'SF-Pro-Text-Light': require('../../assets/fonts/SF-Pro-Text-Light.otf'),
            'SF-Pro-Text-Regular': require('../../assets/fonts/SF-Pro-Text-Regular.otf'),
            'SF-Pro-Text-Medium': require('../../assets/fonts/SF-Pro-Text-Medium.otf'),
            'SF-Pro-Text-Semibold': require('../../assets/fonts/SF-Pro-Text-Semibold.otf'),
            'SF-Pro-Text-Bold': require('../../assets/fonts/SF-Pro-Text-Bold.otf'),
            'SF-Pro-Text-Heavy': require('../../assets/fonts/SF-Pro-Text-Heavy.otf'),
      });
      useCallback(async () => {
            if (fontsLoaded) {
                  await SplashScreen.hideAsync();
            }
      }, [fontsLoaded]);
      if (!fontsLoaded) {
            return null;
      }

      if (screen == 'GetStarted') {
            return (
                  <Index changeScreen={changeScreen} />
            )
      }
      else if (screen == 'AuthenticationPage') {
            return (
                  <AuthenticationPage changeScreen={changeScreen} />
            )
      }
      else if (screen == 'Location') {
            return (
                  <Location changeScreen={changeScreen} />
            )
      }
      else if (screen == 'ProvideLocation') {
            return (
                  <ProvideLocation changeScreen={changeScreen} />
            )
      }
      else if (screen == 'MainHome') {
            return (
                  <Main_home changeScreen={changeScreen} />
            )
      }
      else if (screen == 'Fridge') {
            return (
                  <Fridge changeScreen={changeScreen} />
            )
      }

}