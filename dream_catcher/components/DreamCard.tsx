import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import duck from '@/assets/images/duck.png';

interface DreamHeader {
    headerId: number;
    title: string;
    date: string;
}

interface DreamCardProps {
    dream: DreamHeader;
}

const DreamCard = ({ dream }: DreamCardProps) => {
    return (
        <View className="bg-[#182436] p-4 rounded-lg mb-4">
            <Text className="text-white text-lg font-bold">{dream.title}</Text>
            <Text className="text-blue-200 text-sm">
                {new Date(dream.date).toLocaleDateString()}
            </Text>
            <Link href={`/Dreams/${dream.headerId}`} asChild>
                <TouchableOpacity>
                    <Image
                        source={{
                            uri: duck
                        }}
                        className="w-full h-52 rounded-lg"
                        resizeMode="cover"
                    />
                    <Text className="text-white text-sm mt-2 underline">
                        View Dream
                    </Text>
                </TouchableOpacity>
            </Link>
        </View>
    );
};

export default DreamCard;