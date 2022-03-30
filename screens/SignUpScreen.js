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
import React from 'react';
import {Icon} from 'react-native-elements';

import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const SignUpScreen = () => {
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

  function renderForm() {
    return (
      <View style={styles.formView}>
        <View style={styles.fullNameView}>
          <Text style={styles.textView}>Full Name</Text>
          <TextInput style={styles.textinput} />
        </View>
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
});
