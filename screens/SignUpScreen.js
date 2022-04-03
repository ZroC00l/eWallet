import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Icon} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';
import {CallingCodePicker} from '@digieggs/rn-country-code-picker';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';
//import {NavigationContainer} from '@react-navigation/native';

const SignUpScreen = ({navigation}) => {
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [areaCode, setAreaCode] = useState([]);
  const [selectedCallingCode, setSelectedCallingCode] = useState(90);
  const [selectedAreaCode, setSelectedAreaCode] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  /*const fetchCountries = async () => {
    const response = await fetch(`http://api.countrylayer.com/v2/all
    ? access_key = ${process.env.COUNTRY_LAYER_API_KEY}`);
    const data = await response.json();
    setCountries(data.countries);
    console.log(data.countries);
  };*/

  function renderHeader() {
    return (
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: SIZES.padding * 6,
          paddingHorizontal: SIZES.padding * 2,
        }}
        //onPress={() => console.log('Sign Up')}>
      >
        <Icon
          type="material-community"
          name="arrow-left"
          size={30}
          color={COLORS.white}
        />
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
    );
  }

  function renderLogo() {
    return (
      <View style={styles.logoView}>
        <Image source={images.wallie_logo} style={styles.logoStyle} />
      </View>
    );
  }

  function renderCountryCode() {
    return (
      <View style={{left: -8}}>
        <CallingCodePicker
          initialCountryCode="ZA"
          selectedValue={selectedCallingCode}
          onValueChange={value => setSelectedCallingCode(value)}
          searchInputStyle={{color: COLORS.black}}
          pickerItemLabelStyle={{color: COLORS.black, fontSize: 15}}
          togglerLabelStyle={{color: COLORS.white, fontSize: 15}}
          style={{marginRight: -10, paddingTop: 12}}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View style={styles.formView}>
        <View style={styles.fullNameView}>
          <Text style={styles.textView}>Full Name</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter your full name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        <View style={styles.phoneNumberView}>
          <Text style={styles.textView}>Phone Number</Text>
          <View style={styles.areaCodeView}>
            <TouchableOpacity style={styles.areaCodeTouchableView} onPress={{}}>
              <View style={styles.flagView}>{renderCountryCode()}</View>
            </TouchableOpacity>
            <TextInput
              style={styles.textinput2}
              placeholder="Enter Phone Number"
              placeholderTextColor={COLORS.white}
              selectionColor={COLORS.white}
            />
          </View>
        </View>
        <View style={styles.passwordView}>
          <Text style={styles.textView}>Password</Text>

          <TextInput
            style={styles.textinput}
            placeholder="Enter your password"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
            secureTextEntry={!showHidePassword}
          />
          <TouchableOpacity style={styles.showHideView}>
            <Icon
              type="material-community"
              name={showHidePassword ? 'eye-off-outline' : 'eye-outline'}
              size={20}
              color={COLORS.white}
              onPress={() => setShowHidePassword(!showHidePassword)}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.buttonTouchableView}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : null}
      style={{flex: 1}}>
      <LinearGradient colors={[COLORS.lime, COLORS.emerald]} style={{flex: 1}}>
        <ScrollView>
          {renderHeader()}
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  signupText: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  logoView: {
    marginTop: SIZES.padding * 5,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoStyle: {
    resizeMode: 'contain',
    width: '60%',
  },

  formView: {
    marginTop: SIZES.padding * 3,
    marginHorizontal: SIZES.padding * 3,
  },

  fullNameView: {
    marginTop: SIZES.padding * 3,
  },

  textView: {
    ...FONTS.body3,
    color: COLORS.lightGreen,
  },
  textinput: {
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  textinput2: {
    flex: 1,
    marginVertical: SIZES.padding,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    height: 40,
    color: COLORS.white,
    ...FONTS.body3,
  },
  phoneNumberView: {
    marginTop: SIZES.padding * 2,
  },
  areaCodeView: {
    flexDirection: 'row',
  },
  areaCodeTouchableView: {
    width: 100,
    height: 50,
    marginHorizontal: 5,
    borderBottomColor: COLORS.white,
    borderBottomWidth: 1,
    flexDirection: 'row',
    ...FONTS.body3,
  },
  flagView: {
    justifyContent: 'center',
    marginLeft: 5,
  },

  fullNumberView: {
    justifyContent: 'center',
    marginLeft: 5,
  },

  fullnumberTextView: {
    ...FONTS.body3,
    color: COLORS.white,
  },
  passwordView: {
    marginTop: SIZES.padding * 3,
  },
  showHideView: {
    position: 'absolute',
    right: 0,
    bottom: 10,
    height: 30,
    width: 30,
  },
  buttonView: {
    margin: SIZES.padding * 3,
  },
  buttonTouchableView: {
    height: 60,
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radius / 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: COLORS.white,
    ...FONTS.h4,
  },
});
