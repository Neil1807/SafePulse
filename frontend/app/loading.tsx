import { useEffect } from "react";
import { useRouter } from "expo-router";
import { View, Image, ActivityIndicator } from "react-native";

export default function LoadingScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/welcome"); 
    }, 2000);
  }, []);

  return (
   <View className="flex-1 justify-center items-center bg-[#3723A9]">
     <Image 
        source={require('../assets/images/background-image.jpg')}
        className="absolute w-full h-full opacity-20"
    />
   <Image 
        source={require('../assets/images/logo.png')} 
        className="w-40 h-40"/>
   <ActivityIndicator size="large" color="#fff" />
   </View>
  );
}