import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import * as Screen from '../../constants/Screen';

const width = Screen.SCREEN_WIDTH;
const height = Screen.SCREEN_HEIGHT;

export default function GetStarted() {
      return (
            <View style={styles.cont}>
                  <View style={styles.statusbar}/>
                  <View style={styles.upperpart}>
                        <View>
                              <View>
                                    <Text style={[styles.commontxt, styles.headp1]}>Stay{'\n'}Informed</Text>
                              </View>
                              <View style={{ position: 'relative', bottom: height/26 }}>
                                    <Text style={[styles.commontxt, styles.headp2]}>Prevent{'\n'}Waste</Text>
                              </View>
                        </View>
                        <View>
                              <Image source={require('../../../assets/images/logo.png')} style={styles.logo} />
                        </View>
                  </View>
                  <View style={styles.lowerpart}>
                        <View style={{flex: 1}}>
                              <Image source={require('../../../assets/images/avatars.png')} style={styles.avatars} />
                        </View>
                        <View style={styles.shade}>
                              <BlurView intensity={0} style={{ flex: 1 }}></BlurView>
                        </View>
                        <TouchableHighlight style={styles.btnhighlightbox} onPress={() => { console.log('hello Antriksh') }}>
                              <View style={styles.btnbox}>
                                    <Text style={styles.btn}>Get Started</Text>
                              </View>
                        </TouchableHighlight>
                  </View>
            </View>
      )
}

const styles = StyleSheet.create({
      cont: {
            flex: 1,
            alignItems: 'center',
            alignContent: 'space-between',
            backgroundColor: '#E8E8E8',
      },
      statusbar: {
            width: width,
            height: 30,
            backgroundColor: '#E8E8E8', 
      },
      upperpart: {
            flex: 0.45,
            flexDirection: 'row',
            width: width,
            justifyContent: 'space-between',
            paddingLeft: width / 7,
            paddingRight: width / 8,
            position: 'relative',
            top: height/20,
      },
      commontxt: {
            fontFamily: 'SF-Pro-Rounded-Heavy',
            fontSize: width/8,
            textShadowColor: 'rgba(53, 53, 53, 0.34)',
            textShadowOffset: { width: 1, height: 3 },
            textShadowRadius: 10,
      },
      headp1: {
            color: '#333232',
      },
      headp2: {
            color: '#868686',
      },
      logo: {
            marginTop: height/40,
            width: width/6.14,
            height: width/6.14,
      },
      lowerpart: {
            flex: 0.55
      },
      avatars: {
            width: width + 50,
            height: width + 50,
            marginBottom: 100,
      },
      shade: {
            position: 'absolute',
            bottom: 0,
            alignSelf: 'center',
            zIndex: -1,
            width: width,
            height: height / 10,
            backgroundColor: '#52A2E7',
      },
      btnhighlightbox: {
            width: width / 1.5,
            height: width / 6.4,
            alignSelf: 'center',
            position: 'relative',
            bottom: height / 20,
            borderRadius: 30,
      },
      btnbox: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#F2EFEF'
      },
      btn: {
            fontSize: width/23,
            fontFamily: 'SF-Pro-Rounded-Heavy',
            borderRadius: 10,
            color: '#57A2E7',
      },
});