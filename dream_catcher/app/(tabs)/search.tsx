import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react'
import {images} from '@/constants/images';
import {icons} from '@/constants/icons';
import PromptBar from '@/components/promptBar';

export default function Search() {
    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="flex-1 absolute w-full z-0" />

            {/* Fixed Logo */}
            <View className="px-5">
                <Image
                    source={icons.logo}
                    className='w-32 h-16 mt-20 mb-5 mx-auto'
                    resizeMode="contain"
                />
            </View>

            {/* Scrollable Content */}
            <ScrollView
                className="flex-1 px-5"
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 80}} // Increased padding
            >
                <View className="flex-1">
                    <PromptBar />
                </View>
            </ScrollView>
        </View>
    )
}