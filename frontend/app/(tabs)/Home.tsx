import { useState } from "react";
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image} from 'react-native';


export default function Home ()
{
  return (
    <View className="flex-1"> 
            <View className="flex-[6] bg-[#3723A9]">
            <Image 
            source={require('../../assets/images/background-image.jpg')}
            className="absolute w-full h-full opacity-20"
            />
                
            </View>

            <View className="rounded-[28px] flex-[8] bg-[#F5F5F5] p-10 -mt-16">


            </View>

    </View>
  )
}