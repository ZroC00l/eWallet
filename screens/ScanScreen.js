import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {RNCamera, FaceDetector} from 'react-native-camera';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const ScanScreen = ({navigation}) => {
  function renderHeader() {
    return (
      <View style={styles.view3}>
        <TouchableOpacity
          style={styles.view2}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={icons.close} style={styles.imageView} />
        </TouchableOpacity>

        <View style={styles.view4}>
          <Text style={styles.text}>Scan for Payment</Text>
        </View>

        <TouchableOpacity
          style={styles.view5}
          onPress={() => console.log('Info')}>
          <Image source={icons.info} style={styles.imageView2} />
        </TouchableOpacity>
      </View>
    );
  }

  function renderPaymentMethods() {
    return <View style={styles.view6}></View>;
  }

  return (
    <View style={styles.view1}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={{flex: 1}}
        captureAudio={false}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'Camera is required fir barcode scanning',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        {renderHeader()}
        {renderPaymentMethods()}
      </RNCamera>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: COLORS.transparent,
  },
  view2: {
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view3: {
    flexDirection: 'row',
    marginTop: SIZES.padding * 4,
    paddingHorizontal: SIZES.padding * 3,
  },
  view4: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view5: {
    height: 45,
    width: 45,
    backgroundColor: COLORS.green,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  view6: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 220,
    padding: SIZES.padding * 3,
    borderTopLeftRadius: SIZES.radius,
    borderTopRightRadius: SIZES.radius,
  },
  imageView: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },
  imageView2: {
    height: 25,
    width: 25,
    tintColor: COLORS.white,
  },
  text: {
    ...FONTS.body3,
    color: COLORS.white,
  },
});
