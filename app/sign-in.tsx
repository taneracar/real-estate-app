import icons from '@/constants/icons'
import images from '@/constants/images'
import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const handleLogin = () => {}

const SingIn = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
     <ScrollView contentContainerClassName='h-full'>
    <Image className='w-full h-4/6' resizeMode='contain' source={images.onboarding} />
    <View className='px-10'> 
    <Text className='text-center font-rubik text-base uppercase text-black-200'>Welcome to ReState</Text>
    <Text className='text-3xl font-rubik-bold text-black-300 mt-2 text-center capitalize'> Let&apos;s get you Closer to {'\n'} <Text className='text-primary-300'>your ideal home</Text></Text>
    <Text className='text-center font-rubik text-lg text-black-200 mt-12'>Login with Google</Text>
    <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
  
    <View className='flex flex-row items-center justify-center'>  <Image className='w-5 h-5' resizeMode='contain' source={icons.google} />
    <Text className='text-lg font-rubik-medium text-black-300 ml-4'>Continue with Google</Text>
    </View>
    </TouchableOpacity>

    </View>
     </ScrollView>
    </SafeAreaView>
  )
}

export default SingIn