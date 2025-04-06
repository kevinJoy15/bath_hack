import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { icons } from '@/constants/icons';  // Assuming you have icons for the button, if any.
import duckImage from '@/assets/images/duck.png'; // Change to your image path
import { images } from "@/constants/images"; // Assuming background image is defined
// import { panda } from "@/constants/images"; // Assuming background image is defined
// import images from '@/assets/images/images.png';
import panda from '@/assets/images/panda.png';


const DreamDetail = () => {
    return (
        <View style={styles.container}>
            <Image source={images.bg} style={styles.bgImage} />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    {/* Title */}
                    <Text style={styles.title}>
                        The Panda's Easter Egg Hunt
                    </Text>

                    {/* Friend's Username */}
                    <Text style={styles.username}>By: stellar_sleep</Text>

                    {/* Image (Duck Image) */}
                    <View style={styles.imageContainer}>
                        <Image source={panda} style={styles.dreamImage={width: '60%', height:'80%'}} />
                    </View>

                    {/* Likes and Like Button */}
                    <View style={styles.likesContainer}>
                        <Text style={styles.likesCount}>❤️ 5 likes</Text>
                        <TouchableOpacity style={styles.likeButton}>
                            <Text style={styles.likeButtonText}>Like</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Story */}
                    <View style={styles.storyContainer}>
                        <Text style={styles.storyText}>
                            "This is a story about an adventurous panda that flew across the skies. It explored forests, met strange creatures, and discovered new lands. Every moment was a new discovery, filled with wonder and awe..."
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default DreamDetail;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C', // Dark background color
    },
    bgImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    contentContainer: {
        flex: 1,
        marginTop: 100, // Space from the top for title and profile
    },
    title: {
        color: 'white',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    username: {
        color: 'rgba(255, 255, 255, 0.7)', // Slightly grey for username
        fontSize: 18,
        marginBottom: 15,
    },
    imageContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    dreamImage: {
        width: '80%',
        height: 250, // Adjust as needed
        resizeMode: 'contain',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    likesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
    },
    likesCount: {
        color: 'white',
        fontSize: 18,
    },
    likeButton: {
        backgroundColor: '#6366F1', // Similar to your button styles
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 30,
        alignItems: 'center',
    },
    likeButtonText: {
        color: 'white',
        fontSize: 16,
    },
    storyContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
    },
    storyText: {
        color: '#D3D3D3',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'justify', // Text alignment for story
        lineHeight: 24, // Spacing between lines for readability
    },
});