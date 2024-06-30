import React from 'react';
import {Image, Text, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const chatgpt = require('../assets/images/chatgpt.png');
const dalle = require('../assets/images/dalle.png');
const smartai = require('../assets/images/smartai.png');

const Features = () => {
  return (
    <View style={{height: hp(60)}} className="space-y-4">
      <Text style={{fontSize: wp(6.5)}} className="font-semibold text-gray-700">
        Features
      </Text>
      <View className="bg-emerald-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={chatgpt} style={{height: 32, width: 32}} />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            ChatGPT
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-700">
          {
            'ChatGPT can provide you with instant and knowledgeable responses, assist you with creative idea on wide range of topics.'
          }{' '}
        </Text>
      </View>
      <View className="bg-purple-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={dalle} style={{height: 32, width: 32}} />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            DALL-E
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-700">
          {
            'DALL-E can generate imaginative and diverse images from textual description, expanding the boundaries of visual creativity.'
          }{' '}
        </Text>
      </View>
      <View className="bg-cyan-200 p-4 rounded-xl space-y-2">
        <View className="flex-row items-center space-x-1">
          <Image source={smartai} style={{height: 32, width: 32}} />
          <Text
            style={{fontSize: wp(4.8)}}
            className="font-semibold text-gray-700">
            Smart AI
          </Text>
        </View>
        <Text style={{fontSize: wp(3.8)}} className="font-medium text-gray-700">
          {
            'A powerful voice assistant with the abilities of ChatGPT and DALL-E, providing you the best of both worlds.'
          }{' '}
        </Text>
      </View>
    </View>
  );
};

export default Features;
