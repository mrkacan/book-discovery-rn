import * as React from 'react';
import {useSelector} from 'react-redux';
import {getReadingListData} from "../../features/books/selectors";
import BookList from "../../components/BookList/BookList";
import styles from "./styles";
import {View} from 'react-native';

export default function ReadingListScreen() {
    const readingListData = useSelector(getReadingListData);
    return (
        <View style={styles.container}>
            <BookList data={readingListData}/>
        </View>
    )
}
