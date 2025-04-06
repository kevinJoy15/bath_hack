import {View, Text, Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import {icons} from "@/constants/icons";

const FriendSearchBar = () => {

    const [searchQuery, setSearchQuery] = useState('');

    const handleInputChange = (text: string) => {
        setSearchQuery(text);
    };

    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-20">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="ab8bff" style={{ width: 25, height: 25, marginRight: 10, tintColor:"#ab8bff" }} />
            
            <TextInput
                onPress={() => {}}
                placeholder='Find your Friends...'
                value={searchQuery}
                onChangeText={handleInputChange}
                placeholderTextColor="ab8b5db"
                className="flex-1 ml-2 text-white"
                style={{
                    color: 'white',
                    fontSize: 22, // Increase this value as needed
                  }}
            />
        </View>
    )
}

export default FriendSearchBar;