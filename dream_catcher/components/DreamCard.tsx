import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react'
import {Link} from "expo-router";

const Dreams = ({id, title, image, date}: FYPDreamCard) => {
    return (

        <Link href={`/viewPost/${id}`} asChild>
            <TouchableOpacity className='w-[30%]'>
                {/*<Image*/}
                {/*    source={{*/}
                {/*        // uri: image,*/}
                {/*    }}*/}
                {/*/>*/}
            </TouchableOpacity>
        </Link>
    )
}

export default Dreams;