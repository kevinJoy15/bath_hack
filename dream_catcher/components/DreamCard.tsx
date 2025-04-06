import { Link, useRouter } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import { images } from "@/constants/images";

interface DreamHeader {
    headerId: number;
    title: string;
    date: string;
}

interface DreamCardProps {
    dream: DreamHeader;
}

const DreamCard = ({ dream }: DreamCardProps) => {
    const router = useRouter();

    const handlePress = () => {
        // Navigate to the dream detail screen with the dream ID
        router.push({
            pathname: `/Dreams/${dream.headerId}`,
            // We can also pass some basic params, but complex objects should be fetched in the detail screen
            params: {
                title: dream.title,
                date: dream.date
            }
        });
    };

    return (
        <View className="bg-[#182436] p-4 rounded-lg mb-4">
            <Text className="text-white text-lg font-bold">{dream.title}</Text>
            <Text className="text-blue-200 text-sm">
                {new Date(dream.date).toLocaleDateString()}
            </Text>
            <TouchableOpacity
                onPress={handlePress}
                className="mt-4 bg-[#263447] py-3 rounded-lg flex items-center justify-center"
            >
                <Text className="text-white text-sm font-medium">
                    View Dream
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default DreamCard;