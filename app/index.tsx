import { Text, View } from "react-native";
import { Image } from "expo-image"
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-gray-300" style={{ flex: 1, backgroundColor: '#d1d5db' }}>
      <View className="flex-1 p-3">
        <Image 
          source={require('../assets/images/hero.png')} 
          style={{width: '100%', height: '60%', margin: 0}} 
          contentFit="contain"
        />
        <Text className="text-7xl mt-1 text-gray-900 text-center" style={{ fontFamily: 'Fira' }}>
          FIND YOUR{'\n'}STRENGTH
        </Text>
        <Link href="/home" asChild>
          <Text className="text-white px-2 py-4 bg-blue-600 mx-10 my-5 rounded-xl text-center text-2xl font-semibold overflow-hidden">
            Get Started
          </Text>
        </Link>

      </View>
    </SafeAreaView>
  );
}