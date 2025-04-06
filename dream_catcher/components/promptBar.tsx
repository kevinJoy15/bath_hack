import {View, Text, Image, TextInput} from 'react-native'
import React, {useState} from 'react'
import {icons} from "@/constants/icons";

const PromptBar = () => {

    const [searchText, setSearchText] = useState('');

    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" resizeMode="contain" tintColor="#ab8bff" style={{marginRight:10}} />
            
            <TextInput
                onPress={() => {}}
                placeholder='Enter your dream...'
                value={searchText}
                onChangeText={setSearchText}
                placeholderTextColor="#ab8b5db"
                className="flex-1 ml-2 text-white"
                style={{ flex: 1, color: 'white' }}
            />
        </View>
    )
}

export default PromptBar;