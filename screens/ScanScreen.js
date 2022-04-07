import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RNCamera, FaceDetector} from 'react-native-camera';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const ScanScreen = () => {
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
        }}
      />
    </View>
  );
};

export default ScanScreen;

const styles = StyleSheet.create({});
