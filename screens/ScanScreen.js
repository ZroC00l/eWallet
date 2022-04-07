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
      </View>
    );
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
  imageView: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },
});
