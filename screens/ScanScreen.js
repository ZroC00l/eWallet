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
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding * 4,
          paddingHorizontal: SIZES.padding * 3,
        }}>
        <TouchableOpacity
          style={{width: 45, alignItems: 'center', justifyContent: 'center'}}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={icons.close}
            style={{height: 20, width: 20, tintColor: COLORS.white}}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.transparent}}>
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
      </RNCamera>
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
