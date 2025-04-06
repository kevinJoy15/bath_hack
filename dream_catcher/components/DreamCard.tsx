import { Link } from "expo-router";
import { Text, Image, TouchableOpacity, View } from "react-native";
import duck from '@/assets/images/duck.png';
import { getPostData } from "@/services/api";
import { useState } from "react";

interface DreamHeader {
    headerId: number;
    title: string;
    date: string;
}

interface DreamCardProps {
    dream: DreamHeader;
}

const DreamCard = ({ dream }: DreamCardProps) => {
    const [viewPostResponseData, setViewPostResponseData] = useState({
        "postId": 0,
        "story": "some story",
        "comments": [
          {
            "postId": 0,
            "username": "user",
            "content": "comment"
          }
        ]
      });

    const handleViewPostDream = async () => {
            try {
                console.log('About to call viewpost');
                const viewPostResponse = await getPostData({
                    headerId: dream.headerId
                });
        
                setViewPostResponseData({
                    postId: viewPostResponse.postId,
                    story: viewPostResponse.story,
                    comments: viewPostResponse.comments
                });

                console.log('View Post Response: ', viewPostResponseData);
            } catch (error) {
                console.error('Error posting dream:', error);
            }
        };


    return (
        <View className="bg-[#182436] p-4 rounded-lg mb-4">
            <Text className="text-white text-lg font-bold">{dream.title}</Text>
            <Text className="text-blue-200 text-sm">
                {new Date(dream.date).toLocaleDateString()}
            </Text>
            <Link href={`/Dreams/${dream.headerId}`} asChild>
                <TouchableOpacity onPress={handleViewPostDream}>
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