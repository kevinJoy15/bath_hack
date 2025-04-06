import { useLocalSearchParams } from "expo-router";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { fetchDreamDetail } from "@/services/api";
import { images } from "@/constants/images";
import { router } from "expo-router";
import { icons } from "@/constants/icons";

// Define a type for the Dream detail
interface DreamDetail {
    headerId: number;
    title: string;
    date: string;
    content: string;
    // Add other fields as needed
}

export default function DreamDetail() {
    const { id } = useLocalSearchParams();
    const [dream, setDream] = useState<DreamDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const getDreamDetail = async () => {
            try {
                setLoading(true);
                // Assuming you have or will create this API function
                const data = await fetchDreamDetail(Number(id));
                setDream(data);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("Failed to fetch dream"));
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            getDreamDetail();
        }
    }, [id]);

    return (
        <View className="flex-1 bg-primary">
            {/* Background removed */}

            {/* Header with back button */}
            <View className="flex-row items-center px-5 pt-16 pb-4">
                <TouchableOpacity
                    onPress={() => router.back()}
                    className="bg-[#182436] rounded-full p-2 mr-4"
                >
                    <Image source={icons.back || icons.home} className="w-6 h-6" tintColor="#A8B5DB" />
                </TouchableOpacity>
                <Text className="text-white text-xl font-bold">Dream Details</Text>
            </View>

            <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false}>
                {loading ? (
                    <View className="flex-1 justify-center items-center mt-10">
                        <Text className="text-white">Loading dream...</Text>
                    </View>
                ) : error ? (
                    <View className="flex-1 justify-center items-center mt-10">
                        <Text className="text-white">Error: {error.message}</Text>
                    </View>
                ) : dream ? (
                    <View className="bg-[#182436] p-5 rounded-lg mb-16">
                        <Text className="text-white text-xl font-bold mb-2">{dream.title}</Text>
                        <Text className="text-blue-200 text-sm mb-6">
                            {new Date(dream.date).toLocaleDateString()}
                        </Text>
                        <View className="bg-[#263447] p-4 rounded-lg mb-2">
                            <Text className="text-white leading-6">{dream.content}</Text>
                        </View>
                    </View>
                ) : (
                    <View className="flex-1 justify-center items-center mt-10">
                        <Text className="text-white">Dream not found</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    );
}