import {StyleSheet, Text, ScrollView, View, Image} from 'react-native';
import React from 'react';
import FriendSearchBar from '@/components/friendSearchBar';
import { images } from "@/constants/images";
import { icons } from "@/constants/icons";

import aman from '@/assets/images/amanp.png';
import diya from '@/assets/images/diyap.png';
import nand from '@/assets/images/nandp.png';
import kevin from '@/assets/images/kevinp.png';

export default function Saved() {

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className="absolute w-full z-0"/>

            {/* Fixed Logo */}
            <View style={styles.logoContainer}>
                <Image source={icons.logo} className='w-20 h-20 mt-20 mb-5 mx-auto' />
            </View>

            {/* Scrollable Content */}
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContentContainer}
            >
                <View style={styles.contentContainer}>
                    <View className="flex-1">
                        <FriendSearchBar />
                    </View>

                    <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
                        Suggested Friends from your Contacts 💖
                    </Text>

                    {/* Friend 1 */}
                    <View style={styles.friendContainer}>
                        <View style={styles.friendInfo}>
                            <Image source={aman} style={styles.friendImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.friendName}>Aman Shah</Text>
                                <Text style={styles.usernameText}>Username: ab134</Text>
                            </View>
                        </View>
                        <Image source={icons.add} style={styles.addIcon} />
                    </View>

                    {/* Friend 2 */}
                    <View style={styles.friendContainer}>
                        <View style={styles.friendInfo}>
                            <Image source={diya} style={styles.friendImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.friendName}>Diya Vibhakar</Text>
                                <Text style={styles.usernameText}>Username: dv356</Text>
                            </View>
                        </View>
                        <Image source={icons.add} style={styles.addIcon} />
                    </View>

                    {/* Friend 3 */}
                    <View style={styles.friendContainer}>
                        <View style={styles.friendInfo}>
                            <Image source={nand} style={styles.friendImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.friendName}>Nandini Chanda</Text>
                                <Text style={styles.usernameText}>Username: nc5374</Text>
                            </View>
                        </View>
                        <Image source={icons.add} style={styles.addIcon} />
                    </View>

                    {/* Friend 4 */}
                    <View style={styles.friendContainer}>
                        <View style={styles.friendInfo}>
                            <Image source={kevin} style={styles.friendImage} />
                            <View style={styles.textContainer}>
                                <Text style={styles.friendName}>Kevin Joy</Text>
                                <Text style={styles.usernameText}>Username: kj432</Text>
                            </View>
                        </View>
                        <Image source={icons.add} style={styles.addIcon} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    logoContainer: {
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    scrollView: {
        flex: 1,
        paddingHorizontal: 20,
    },
    scrollContentContainer: {
        paddingBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 40,
        marginBottom: 20,
        alignSelf: 'center',
    },
    contentContainer: {
        flex: 1,
    },
    textContainer: {
        flexDirection: 'column', // Stack the texts vertically
        justifyContent: 'flex-start', // Align text to the left
    },
    sectionTitle: {
        fontSize: 20,
        color: 'white',
        marginBottom: 20,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    friendContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        paddingVertical: 10,
        backgroundColor: '#2A2A2A',
        borderRadius: 10,
        paddingHorizontal: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    usernameText: {
        color: 'rgba(255, 255, 255, 0.7)', // Slightly grey
        fontSize: 14, // Smaller font size
        marginTop: 5, // Space between name and username
        fontWeight: '400', // Lighter font weight
        marginLeft: 12, // Left margin for username
    },
    friendInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    friendImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    friendName: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        marginLeft: 12, // Left margin for name
    },
    addIcon: {
        width: 30,
        height: 30,
        borderRadius: 15,
    },
});