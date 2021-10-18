import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {BookType} from "../../../features/books/types";
import styles from './styles';
import Spacer from "../../../components/Spacer/Spacer";
import AddReadingList from "../../../components/AddReadingList";

interface BookItemProps extends BookType {
    onAddReadingListPress: () => void;
    onPress: () => void;
    isAdded?: boolean;
}

const BookItem: React.FC<BookItemProps> = ({
                                               onPress,
                                               onAddReadingListPress,
                                               title,
                                               author,
                                               coverImageUrl,
                                               synopsis,
                                               isAdded,
                                           }) => {
    return (
        <Pressable
            onPress={onPress}
            style={styles.itemWrapper}
        >
            <Image source={{uri: coverImageUrl}} style={styles.image}/>
            <View style={styles.itemRightWrapper}>
                <Text style={styles.title} numberOfLines={2}>{title}</Text>
                <Spacer height={8}/>
                <Text style={styles.synopsis} numberOfLines={4}>{synopsis}</Text>
                <Spacer height={8}/>
                <Text style={styles.author} numberOfLines={1}>{author}</Text>
                <Spacer height={8}/>
                <View style={styles.addReadingListWrapper}>
                    <AddReadingList isAdded={isAdded} onPress={onAddReadingListPress}/>
                </View>
            </View>
        </Pressable>
    );
};

export default BookItem;
