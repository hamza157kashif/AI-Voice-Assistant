import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const logo = require('../assets/images/logo.png');
const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around  bg-[#111827]">
      <View className="space-y-2">
        <Text
          style={{fontSize: wp(10)}}
          className="text-center font-bold text-white">
          Wizard
        </Text>
        <Text
          style={{fontSize: wp(4)}}
          className="text-center tracking-wider text-white font-semibold">
          The future is here, powered by AI.
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image style={{width: wp(64), height: hp(32)}} source={logo} />
      </View>
      <TouchableOpacity
        className="bg-blue-500 border-0 mx-5 p-5 rounded-2xl"
        onPress={() => navigation.navigate('Home')}>
        <Text
          style={{fontSize: wp(6)}}
          className="text-center font-bold text-white text-2xl">
          Get Started
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
