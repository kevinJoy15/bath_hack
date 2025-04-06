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

            {/* Fixed logo at the top */}
            <View className="px-5">
                <Image
                    source={icons.logo}
                    style={{
                        width: '80%',  // Make the logo larger
                        height: undefined,
                        aspectRatio: 2,
                        alignSelf: 'center',
                        marginTop: 80,
                        marginBottom: 20,
                        resizeMode: 'contain'
                    }}
                />
            </View>

            {/* Scrollable content below the logo */}
            <ScrollView className="flex-1 px-5" showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{paddingBottom: 80}}>
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
                        <Text className='text-xl text-white font-bold mt-5 mb-3'>Your Friends Dreams</Text>

                        <FlatList
                            data={dreams.headers}
                            renderItem={({item}) => <DreamCard dream={item} />}
                            keyExtractor={(item) => item.headerId.toString()}
                            className='mt-2'
                            contentContainerStyle={{ paddingBottom: 120 }}
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