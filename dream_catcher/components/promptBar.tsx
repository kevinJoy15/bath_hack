import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { icons } from '@/constants/icons';
import useFetch from '@/services/useFetch';
import { postDream } from '@/services/api';

const PromptBar = () => {
    const {
            data: dreams,
            loading: dreamsLoading,
            error: dreamsError,
        } = useFetch(() => postDream({userId: 1, dreamDescription: searchText}))
    const [searchText, setSearchText] = useState('');
    const [bookData, setDreamData] = useState({
        title: 'Mock Title',
        author: 'Mock Author',
        story: 'This is a mock story that will be replaced by API data. The ocean stretched endlessly, a perfect wave curling toward the horizon. I stood on my surfboard, the sun warm on my skin, feeling weightless, as if the water itself was guiding me. But this wasn’t just any wave. This was a whale—a majestic creature, its back broad and powerful beneath my feet. I rode its smooth surface, the whale gliding effortlessly through the water, moving with the rhythm of the ocean like we were part of a single, fluid movement. The splash of the waves around us created a sparkling mist in the air, catching the light like a thousand diamonds. Every shift in the whale\'s body sent me soaring, feeling the rush of the wave, the sea, the life beneath. The whale turned, dipping into the depths, and for a moment, I thought we would sink. But instead, it breached, sending us skyward in a thrilling arc, catching the wind as we soared over the rolling waves. The world around us was a blur—just me, the whale, and the rhythm of the sea. Time seemed to stand still. As we descended, I could feel the pulse of the ocean beneath me, the heartbeat of the creature that carried me. I wasn\'t just surfing. I was one with the world, free and wild, riding the wave of life itself. And in that moment, I felt infinite.',
    });

    const handleSearch = () => {
        setDreamData({
            title: searchText || 'Mock Title',
            author: 'Mock Author',
            story: 'This is a mock story that will be replaced by API data. The ocean stretched endlessly, a perfect wave curling toward the horizon. I stood on my surfboard, the sun warm on my skin, feeling weightless, as if the water itself was guiding me. But this wasn’t just any wave. This was a whale—a majestic creature, its back broad and powerful beneath my feet. I rode its smooth surface, the whale gliding effortlessly through the water, moving with the rhythm of the ocean like we were part of a single, fluid movement. The splash of the waves around us created a sparkling mist in the air, catching the light like a thousand diamonds. Every shift in the whale\'s body sent me soaring, feeling the rush of the wave, the sea, the life beneath. The whale turned, dipping into the depths, and for a moment, I thought we would sink. But instead, it breached, sending us skyward in a thrilling arc, catching the wind as we soared over the rolling waves. The world around us was a blur—just me, the whale, and the rhythm of the sea. Time seemed to stand still. As we descended, I could feel the pulse of the ocean beneath me, the heartbeat of the creature that carried me. I wasn\'t just surfing. I was one with the world, free and wild, riding the wave of life itself. And in that moment, I felt infinite.',
        });
    };

    // Simulate posting the story
    const handlePostStory = () => {
        Alert.alert('Post Success', 'Your story has been posted to your friends!');
        // Optionally, you can also log or send the data to a server here
        console.log('Posted Story:', bookData);
    };

    return (
        <View className="flex-1 p-6 bg-gray-900">
            {/* Search Bar */}
            <View className="flex-row items-center bg-gray-800 rounded-full px-5 py-4">
                <Image
                    source={icons.search}
                    className="w-6 h-6 mr-3"
                    resizeMode="contain"
                    style={{ width: 25, height: 25, tintColor: '#ab8bff', marginRight: 10 }}
                />
                <TextInput
                    placeholder="Enter your dream..."
                    value={searchText}
                    onChangeText={setSearchText}
                    placeholderTextColor="#ab8b5db"
                    className="flex-1 text-white"
                    style={{
                        color: 'white',
                        height: 60,
                        paddingVertical: 15,
                        fontSize: 22,
                    }}
                />
            </View>

            {/* Button to generate story */}
            <TouchableOpacity
                onPress={handleSearch}
                style={{
                    backgroundColor: '#6366f1',
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                    width: '70%',
                    height: 45,
                    alignSelf: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Generate Story</Text>
            </TouchableOpacity>

            {/* ScrollView to allow scrolling and prevent text overflow */}
            <ScrollView
                contentContainerStyle={{
                    paddingBottom: 80, // Prevent clipping at the bottom and make space for button
                    paddingTop: 30, // Space between button and text
                    paddingHorizontal: 20, // Padding inside ScrollView
                }}
                style={{
                    marginTop: 30, // Margin at the top for space
                }}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={16}
            >
                {/* Display the result */}
                <View style={{ alignItems: 'center' }}>
                    {/* Title */}
                    <Text style={{ fontSize: 28, color: 'white', fontWeight: 'bold' }}>
                        {bookData.title}
                    </Text>

                    {/* Author */}
                    <Text style={{ fontSize: 18, color: '#b0b0b0', marginTop: 10 }}>
                        {bookData.author}
                    </Text>

                    {/* Story */}
                    <Text
                        style={{
                            color: '#d3d3d3',
                            marginTop: 20,
                            textAlign: 'center',
                            paddingHorizontal: 20,
                        }}
                    >
                        {bookData.story}
                    </Text>
                </View>
            </ScrollView>

            {/* Post Button with Darker Green */}
            <TouchableOpacity
                onPress={handlePostStory}
                style={{
                    backgroundColor: '#272CBD',  // Darker Green color for 'Post' button
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 0,
                    marginBottom: 150,
                    width: '70%',
                    height: 45,
                    alignSelf: 'center',
                }}
            >
                <Text style={{ color: 'white', fontSize: 16 }}>Post Story</Text>
            </TouchableOpacity>
        </View>
    );
};

export default PromptBar; 