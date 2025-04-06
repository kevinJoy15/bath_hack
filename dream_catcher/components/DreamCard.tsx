import { Link, useRouter } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { images } from "@/constants/images";

// Updated interface to include username and profile picture
interface DreamHeader {
    headerId: number;
    title: string;
    date: string;
    username?: string; // Make it optional for backward compatibility
    profilePicture?: any; // For the profile image source
}

interface DreamCardProps {
    dream: DreamHeader;
}

// List of random usernames to use if none is provided
const randomUsernames = [
    "dreamwalker42",
    "sleepyhead_99",
    "lucidity_drifter",
    "nebula_dreamer",
    "midnight_voyager",
    "stellar_sleeper",
    "cosmic_dreamer",
    "sleep_wanderer",
    "dream_architect",
    "nocturnal_nomad"
];

// Default profile pictures
const defaultProfilePics = [
    require('@/assets/images/duck.png'),
    require('@/assets/images/duck.png'),
    require('@/assets/images/duck.png'),
    require('@/assets/images/duck.png'),
    // Replace with actual paths to your profile pictures
];

const DreamCard = ({ dream }: DreamCardProps) => {
    const router = useRouter();

    // If no username is provided, pick a random one
    const username = dream.username ||
        randomUsernames[Math.floor(Math.random() * randomUsernames.length)];

    // If no profile picture is provided, use a default one
    const profilePic = dream.profilePicture ||
        defaultProfilePics[Math.floor(Math.random() * defaultProfilePics.length)];

    const handlePress = () => {
        // Navigate to the dream detail screen with the dream ID
        router.push({
            pathname: `/Dreams/${dream.headerId}`,
            // We can also pass some basic params, but complex objects should be fetched in the detail screen
            params: {
                title: dream.title,
                date: dream.date,
                username: username
            }
        });
    };

    return (
        <View className="bg-[#182436] p-4 rounded-lg mb-4" style={{ opacity: 0.9 }}>
            {/* User profile section */}
            <View className="flex-row items-center mb-3">
                <Image
                    source={profilePic}
                    className="w-10 h-10 rounded-full mr-3"
                    resizeMode="cover"
                />
                <Text className="text-white text-base font-medium">{username}</Text>
            </View>

            {/* Dream content */}
            <Text className="text-white text-lg font-bold">{dream.title}</Text>
            <Text className="text-blue-200 text-sm mb-3">
                {new Date(dream.date).toLocaleDateString()}
            </Text>

            {/* Dream preview image - optional based on your design */}
            <Image
                source={images.dreamPreview || require('@/assets/images/duck.png')}
                className="w-full h-32 rounded-md mb-3"
                resizeMode="cover"
            />

            <TouchableOpacity
                onPress={handlePress}
                className="mt-2 bg-[#263447] py-3 rounded-lg flex items-center justify-center"
            >
                <Text className="text-white text-sm font-medium">
                    View Dream
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DreamCard;