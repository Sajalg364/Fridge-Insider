import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/Colors';
import { MotiView } from 'moti';
import Lottie from 'lottie-react-native';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/Screen';
import ADD_ITEM from '../../components/Fridge/ADD_Item';
import Svginserter from '../../components/shared/Svginserter';
import { MotiPressable } from 'moti/interactions';
import Category_List from '../../components/Fridge/Category_List';

const width = SCREEN_WIDTH;
const height = SCREEN_HEIGHT;

const categories = [
  { id: '1', type: 'Fruits', cnt: '5', image: require('../../../assets/images/apple.png') },
  { id: '2', type: 'Vegetables', cnt: '3', image: require('../../../assets/images/tomato.png') },
  { id: '3', type: 'Beverages', cnt: '1', image: require('../../../assets/images/tomato.png') },
  { id: '4', type: 'Meat & Chicken', cnt: '1', image: require('../../../assets/images/apple.png') },
  { id: '5', type: 'Fish & Sea Food', cnt: '1', image: require('../../../assets/images/apple.png') },
  { id: '6', type: 'Dairy & Eggs', cnt: '1', image: require('../../../assets/images/apple.png') },
  { id: '7', type: 'Cereal Food', cnt: '1', image: require('../../../assets/images/tomato.png') },
  { id: '8', type: 'Others', cnt: '1', image: require('../../../assets/images/tomato.png') },
]

const Fridge = (props) => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [temp, setTemp] = useState('');
  const [profile, setProfile] = useState(false);
  const [type,setType] = useState('');

  return (
    <MotiView style={styles.container}
      from={{ borderRadius: 0 }}
      animate={{ borderRadius: props.showMenu ? 35 : 0 }}
      transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
    >

      {/* Profile  */}
      <MotiView style={styles.profileAvatarBox}
        from={{ borderRadius: 0 }}
        animate={{ borderTopLeftRadius: props.showMenu ? 35 : 0 }}
        transition={props.showMenu ? { type: 'timing', duration: 100 } : { type: 'timing', duration: 650 }}
      >
        <MotiPressable onPress={() => { console.log('Clicked on Profile') }}
          from={{ scale: 1 }}
          animate={({ pressed }) => {
            'worklet'
            return {
              scale: pressed ? 0.9 : 1,
            }
          }}>
          <View style={styles.profileAvatar}>
            {profile ? <Image source={require('../../../assets/images/tomato.png')} style={{ width: 40, height: 40 }} /> : <Svginserter tag={'UserProfileDefault'} width={30} height={30} />}
          </View>
        </MotiPressable>
      </MotiView>

      <View style={{ flex: 1, marginTop: 70 }}>
        {/*Heading and Subheading Box*/}
        <View style={styles.IntroBox}>

          <View style={styles.IntroSubHeaderBox}>
            <Text style={styles.IntroHeaderTxt}>Fridge</Text>
          </View>

          <View style={styles.IntroSubHeaderBox}>
            <Text style={styles.IntroSubHeaderTxt}>
              That is what's in your fridge
            </Text>
          </View>
          <View style={styles.IntroSubHeaderBox}>

            <Text style={styles.IntroSubHeaderTxt}>
              Temperature :
            </Text>
            <Text style={{ fontSize: 24, fontFamily: 'SF-Pro-Rounded-Bold' }}> 4°</Text>

          </View>
        </View>

        {/* search & Add Box */}
        <View style={styles.Search_AddContainer}>
          <View style={styles.SearchBox}>
            <View style={styles.SearchIconBox}>
              <Svginserter tag={'SearchIcon'} width={SCREEN_WIDTH / 16.2} height={SCREEN_WIDTH / 16.2} />
            </View>
            <View>
              <TextInput
                style={styles.SearchInput}
                onChangeText={setTemp}
                value={temp}
                placeholder="Search food item"
                keyboardType="email-address"
                cursorColor={Colors.palette_secondary}
                autoFocus={false} >
              </TextInput>
            </View>
          </View>
          <View>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 24 }} onPress={() => { setVisible1(true) }}>
              <View ><Lottie style={{ height: 60, width: 60 }} source={require('../../../assets/animation/add_button_lottie.json')} autoPlay loop /></View>
            </TouchableOpacity>
          </View>
        </View>

        {/*Add Form*/}
        <ADD_ITEM visible={visible1} setVisible={setVisible1} />

        {/* categoriesList */}
        <View style={styles.CategoriesContainer}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={categories}
            renderItem={({ item, index }) => {

              return (
                <MotiView
                  from={{ opacity: 0, translateX: -40 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ delay: index * 200 }}
                >
                  <TouchableOpacity style={styles.CategoriesComp} onPress={() => { setType(item.type); setVisible2(true) }}>

                    <View style={styles.CategoriesComp1}>
                      <Image source={item.image} style={{ width: 40, margin: 9, height: 40 }} />
                    </View>

                    <Text style={styles.CategoriesComp2}>
                      {item.type}
                    </Text>
                    <Text style={styles.CategoriesComp3}>
                      {item.cnt} {item.cnt > '1' ? 'Items' : 'Item'}
                    </Text>

                  </TouchableOpacity>
                </MotiView>
              )
            }}
            />
            {/* Particular Category Page */}
            <Category_List type1={type} visible={visible2} setVisible={setVisible2}/>
        </View>

      </View>
    </MotiView>

  );
};

export default Fridge;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  profileAvatarBox: {
    width: width,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'absolute',
    zIndex: 1000,
    paddingRight: width / 8.68,
    paddingTop: height / 15.86,
    paddingBottom: height / 79.3,
    backgroundColor: Colors.white,
  },
  profileAvatar: {
    width: width / 9.775,
    height: width / 9.775,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: Colors.bg,
    shadowColor: 'black',
    elevation: 4,
  },
  IntroBox: {
    paddingTop: height / 52.87,
    paddingLeft: width / 78.2,
  },
  IntroSubHeaderBox: {
    position: 'relative',
    bottom: width / 28,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24
  },
  IntroHeaderTxt: {
    fontSize: width / 10.3,
    fontFamily: 'SF-Pro-Rounded-Semibold',
    color: Colors.palette_secondary,
    letterSpacing: 0.5,
  },
  IntroSubHeaderTxt: {
    fontSize: width / 21.72,
    fontFamily: 'SF-Pro-Rounded-Medium',
    color: Colors.palette_gray_dark,
  },
  Search_AddContainer: {
    height: width / 6.98,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginTop: 16,
    paddingBottom: 24
  },
  SearchBox: {
    width: width / 1.6,
    height: width / 7,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: width / 78.2,
    marginRight: width / 15.64,
    backgroundColor: Colors.palette_white,
  },
  SearchIconBox: {
    paddingHorizontal: width / 39.1,
  },
  SearchInputBox: {
    width: '80%',
    height: width / 7.24,
    justifyContent: 'center',
    paddingLeft: width / 39.1,
  },
  SearchInput: {
    fontSize: width / 21.72,
    fontFamily: 'SF-Pro-Rounded-Medium',
    color: Colors.palette_gray_dark,
    letterSpacing: 0.4,
    width: width / 2.11,
    height: width / 7,
  },
  CategoriesContainer:{ 
    flex: 1, 
    marginLeft: 6 
  },
  CategoriesComp:{
    width: SCREEN_WIDTH / 2.6,
    height: SCREEN_WIDTH / 2.6,
    marginLeft: 24,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    elevation: 10
  },
  CategoriesComp1:{
    backgroundColor: 'white', 
    shadowColor: '#213a7c', 
    elevation: 15, 
    padding: 0, 
    borderRadius: 100  
  },
  CategoriesComp2:{
    fontSize: 16, 
    marginTop: 2, 
    fontFamily: 'SF-Pro-Rounded-Bold', 
    color: 'grey'
  },
  CategoriesComp3:{
    fontSize: 12, 
    marginTop: -2-3-4, 
    fontFamily: 'SF-Pro-Rounded-Bold', 
    color: Colors.palette_gray_dark
  },
});
