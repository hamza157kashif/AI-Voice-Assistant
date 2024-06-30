import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Features from '../components/features';
import {dummyMessages} from '../utils/constants';
const logo = require('../assets/images/logo.png');
const HomeScreen = () => {
  const [messages, setMessages] = useState(dummyMessages);
  return (
    <View className="flex-1 bg-white">
      <SafeAreaView className="flex-1 flex mx-5">
        <View className="flex-row justify-center">
          <Image style={{width: wp(30), height: hp(20)}} source={logo} />
        </View>
        {messages.length > 0 ? (
          <View className="space-y-2 flex-1">
            <Text
              style={{fontSize: wp(5)}}
              className="text-gray-700 font-semibold ml-1">
              Assistant
            </Text>
            <View
              style={{height: hp(58)}}
              className="bg-neutral-200 rounded-3xl p-4">
              <ScrollView
                bounces={false}
                className="space-y-4"
                showsVerticalScrollIndicator={false}>
                {messages.map((message, index) => {
                  if (message.role === 'assistant') {
                    if (message.content.includes('https')) {
                      return (
                        <View key={index} className="flex-row justify-start">
                          <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                            <Image
                              source={{uri: message.content}}
                              className="rounded-2xl"
                              resizeMode="contain"
                              style={{width: wp(32), height: hp(12)}}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      //text
                      return (
                        <View
                          key={index}
                          className="bg-emerald-100 rounded-xl p-2 rounded-tl-none"
                          style={{width: wp(70)}}>
                          <Text>{message.content}</Text>
                        </View>
                      );
                    }
                  } else {
                    //userinmput
                    return (
                      <View key={index} className="flex-row justify-end">
                        <View
                          className="bg-white rounded-xl p-2 rounded-tr-none"
                          style={{width: wp(70)}}>
                          <Text>{message.content}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}
        <View className="flex justify-center items-center">
          <TouchableOpacity>
              <Image className="rounded-full"/>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
