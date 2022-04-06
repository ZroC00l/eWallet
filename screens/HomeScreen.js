import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, FONTS, SIZES, icons, images} from '../constants';

const HomeScreen = () => {
  //Dummy data for features
  const featuresData = [
    {
      id: 1,
      icon: icons.reload,
      color: COLORS.purple,
      backgroundColor: COLORS.lightPurple,
      description: 'Top Up',
    },
    {
      id: 2,
      icon: icons.send,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightYellow,
      description: 'Transfer',
    },
    {
      id: 3,
      icon: icons.internet,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: 'Top Up',
    },
    {
      id: 4,
      icon: icons.wallet,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Wallet',
    },
    {
      id: 5,
      icon: icons.bill,
      color: COLORS.yellow,
      backgroundColor: COLORS.lightYellow,
      description: 'Bill',
    },
    {
      id: 6,
      icon: icons.games,
      color: COLORS.primary,
      backgroundColor: COLORS.lightGreen,
      description: 'Games',
    },
    {
      id: 7,
      icon: icons.phone,
      color: COLORS.red,
      backgroundColor: COLORS.lightRed,
      description: 'Mobile Prepaid',
    },
    {
      id: 8,
      icon: icons.more,
      color: COLORS.purple,
      backgroundColor: COLORS.lightPurple,
      description: 'More',
    },
  ];

  const specialPromo = [
    {
      id: 1,
      img: images.cash_back,
      title: 'Bonus Cashback',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 2,
      img: images.enter,
      title: 'Win as you play',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 3,
      img: images.vouchers,
      title: 'Vouchers',
      description: "Don't miss it. Grab it now!",
    },
    {
      id: 4,
      img: images.save,
      title: 'Save More with',
      description: "Don't miss it. Grab it now!",
    },
  ];

  const [features, setFeatures] = useState(featuresData);
  const [specialPromos, setSpecialPromos] = useState(specialPromo);

  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: SIZES.padding * 2,
        }}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h1}}>Hello!</Text>
          <Text style={{...FONTS.body2, color: COLORS.gray}}>Thato</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: COLORS.lightGray,
            }}>
            <Image
              source={icons.bell}
              style={{width: 20, height: 20, tintColor: COLORS.secondary}}
            />
            <View
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                borderRadius: 5,
                backgroundColor: COLORS.red,
              }}></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderBanner() {
    return (
      <View style={{height: 120, borderRadius: 20}}>
        <Image
          source={images.banner}
          resizeMode="cover"
          style={{width: '100%', height: '100%', borderRadius: 20}}
        />
      </View>
    );
  }

  function renderFeatures() {
    const header = () => (
      <View style={{marginBottom: SIZES.padding * 2}}>
        <Text style={{...FONTS.h3}}>Features</Text>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: 'center',
        }}
        onPress={() => console.log(item.description)}>
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={item.icon}
            resizeMode="contain"
            style={{width: 20, height: 20, tintColor: item.color}}
          />
        </View>
        <Text style={{textAlign: 'center', flexWrap: 'wrap', ...FONTS.body4}}>
          {item.description}
        </Text>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={header}
        data={featuresData}
        numColumns={4}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        style={{marginTop: SIZES.padding * 2}}
      />
    );
  }

  function renderPromos() {
    const headerComponent = () => (
      <View style={{}}>
        {renderHeader()}
        {renderBanner()}
        {renderFeatures()}
        {renderSpecialPromosHeader()}
      </View>
    );

    const renderSpecialPromosHeader = () => (
      <View style={{flexDirection: 'row', marginBottom: SIZES.padding * 2}}>
        <View style={{flex: 1}}>
          <Text style={{...FONTS.h3}}>Special Promos</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('View all')}>
          <Text style={{...FONTS.body4, color: COLORS.gray}}>View all</Text>
        </TouchableOpacity>
      </View>
    );

    const renderItem = ({item}) => (
      <TouchableOpacity
        style={styles.touchView}
        onPress={() => console.log(item.title)}>
        <View style={styles.touchInnerView}>
          <Image
            source={item.img}
            resizeMode="cover"
            style={styles.imageView}
          />
        </View>
        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{...FONTS.h4}}>{item.title}</Text>
          <Text style={{...FONTS.body4}}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        ListHeaderComponent={headerComponent}
        contentContainerStyle={{paddingHorizontal: SIZES.padding * 3}}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        data={specialPromos}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<View style={{marginBottom: 80}}></View>}
      />
    );
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      {renderPromos()}
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  touchView: {
    marginVertical: SIZES.base,
    width: SIZES.width / 2.5,
  },
  touchInnerView: {
    height: 80,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: COLORS.primary,
  },
  imageView: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
