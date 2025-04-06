import {Text, View, ScrollView, Image, ActivityIndicator, FlatList} from "react-native";
import { images } from "@/constants/images";
import {icons} from '@/constants/icons';
import { useRouter} from "expo-router";
import DreamCard from "@/components/DreamCard";
import useFetch from "@/services/useFetch";
import {fetchDreams} from "@/services/api";

export default function Index() {
    const router = useRouter();

    const {
        data: dreams,
        loading: dreamsLoading,
        error: dreamsError,
    } = useFetch(() => fetchDreams({userId: 1}))

    // For debugging
    console.log("Dreams data:", dreams);

    return (
        <View className="flex-1 bg-primary">
            <Image source={images.bg} className='absolute w-full z-0' />
            <ScrollView className="flex-1 px-5" showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{minHeight: '100%', paddingBottom: 10}}>
                <Image source={icons.logo} className='w-20 h-20 mt-20 mb-5 mx-auto' />

                {dreamsLoading ? (
                    <ActivityIndicator
                        animating={true}
                        size='large'
                        color='#0000ff'
                        className='mt-10 self-center'
                    />
                ) : dreamsError ? (
                    <Text className="text-white">Error: {dreamsError?.message}</Text>
                ) : dreams ? (
                    <View>
                        <Text className='text-lg text-white font-bold mt-5 mb-3'>Your Friends Dreams</Text>

                        <FlatList
                            data={dreams.headers}
                            renderItem={({item}) => (
                                <View className="bg-[#182436] p-4 rounded-lg mb-4">
                                    <Text className="text-white text-lg font-bold">{item.title}</Text>
                                    <Text className="text-blue-200 text-sm">
                                        {new Date(item.date).toLocaleDateString()}
                                    </Text>
                                    <Text
                                        className="text-white text-sm mt-2 underline"
                                        // onPress={() => router.push(`/dream/${item.headerId}`)}
                                    >
                                        View Dream
                                    </Text>
                                </View>
                            )}
                            keyExtractor={(item) => item.headerId.toString()}
                            className='mt-2 pb-32'
                            scrollEnabled={false}
                        />
                    </View>
                ) : (
                    <Text className="text-white text-center mt-10">No dreams found. Follow more users to see their dreams!</Text>
                )}
            </ScrollView>
        </View>
    );
}