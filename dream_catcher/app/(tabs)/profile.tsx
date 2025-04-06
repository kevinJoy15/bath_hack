import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import { icons } from "@/constants/icons";
import diya from '@/assets/images/diyap.png'; // Profile picture
import graph from '@/assets/images/graph.png';
import { images } from "@/constants/images"; // Assuming you have a background image for the profile

const Me = () => {
    return (
        <View style={styles.container}>
            <Image source={images.bg} style={styles.bgImage} />

            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.contentContainer}>
                    {/* Profile Picture */}
                    <View style={styles.profileContainer}>
                        <Image source={diya} style={styles.profileImage} />
                        <View style={styles.textContainer}>
                            <Text style={styles.profileName}>Diya Vibhakar</Text>
                            <Text style={styles.profileUsername}>Username: dv356</Text>
                            <Text style={styles.profileDate}>Joined: January 2022</Text>
                        </View>
                    </View>

                    <View style={styles.statsContainer}>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>120</Text>
                            <Text style={styles.statLabel}>Posts</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>350</Text>
                            <Text style={styles.statLabel}>Followers</Text>
                        </View>
                        <View style={styles.statItem}>
                            <Text style={styles.statNumber}>180</Text>
                            <Text style={styles.statLabel}>Following</Text>
                        </View>
                    </View>

                    <View style={styles.bioContainer}>
                        <Text style={styles.bioText}>
                            "Life is beautiful and full of surprises." — User's favorite quote
                        </Text>
                    </View>

                    {/* Graph Image - Add graph image here */}
                    <View style={styles.graphContainer}>
                        <Image source={graph} style={styles.graphImage} />
                    </View>

                    {/* Update Password Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Update Password</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Account Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Account</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>View Account</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Settings Section */}
                    <View style={styles.sectionContainer}>
                        <Text style={styles.sectionTitle}>Settings</Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Go to Settings</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Logout Button */}
                    <View style={styles.sectionContainer}>
                        <TouchableOpacity style={styles.logoutButton}>
                            <Text style={styles.logoutText}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Me;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1C', // Uniform background color
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
        marginTop: 100, // Space from the top for logo and profile
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 30,
    },
    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
    },
    textContainer: {
        marginLeft: 15,
        justifyContent: 'flex-start',
    },
    profileName: {
        color: 'white',
        fontSize: 22,
        fontWeight: '600',
    },
    profileUsername: {
        color: 'rgba(255, 255, 255, 0.7)', // Slightly grey
        fontSize: 16,
        marginTop: 5,
        fontWeight: '400',
    },
    profileDate: {
        color: 'rgba(255, 255, 255, 0.7)', // Slightly grey
        fontSize: 14,
        marginTop: 5,
        fontWeight: '400',
    },
    sectionContainer: {
        marginBottom: 25,
    },
    sectionTitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    button: {
        backgroundColor: '#2A2A2A',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    logoutButton: {
        backgroundColor: '#E74C3C', // Red color for logout
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoutText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
    },
    statLabel: {
        color: 'rgba(255, 255, 255, 0.7)', // Grey text
        fontSize: 14,
    },
    bioContainer: {
        marginBottom: 20,
        paddingHorizontal: 20,
    },
    bioText: {
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
    },
    graphContainer: {
        marginVertical: 20, // Space between bio and graph
        alignItems: 'center', // Center align the graph
    },
    graphImage: {
        width: '76%', // Adjust width to fit the screen
        height: 178, // Adjust height as needed
        resizeMode: 'contain', // Ensure the image is scaled properly
        borderRadius: 20, // Softer edges for a more natural feel
        borderWidth: 2, // Optional: add border width if you want to accentuate the rounded edges
        borderColor: '#fff', // Optional: add border color for the image
    },
    
    
});
