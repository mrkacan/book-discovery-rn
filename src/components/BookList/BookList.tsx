import * as React from 'react';
import {useCallback} from 'react';
import {FlatList, RefreshControl, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import booksSelectors from '../../features/books/selectors';
import {BookType} from '../../features/books/types';
import Title from '../../components/Title/Title';
import styles from './styles';
import {getBooksRequest, toggleReadingBook} from "../../features/books/actions";
import BookItem from './BookItem/BookItem';
import {useNavigation} from "@react-navigation/native";

type BookListType = {
    data: BookType[];
}

const BookList: React.FC<BookListType> = ({data}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const {
        isLoading,
        readingList,
    } = useSelector(booksSelectors.getBooks);

    const onAddOrRemoveFromReadingListPress = useCallback((id: string) => {
        dispatch(toggleReadingBook(id))
    }, [])

    const onRefresh = useCallback(() => {
        dispatch(getBooksRequest({
            query: ''
        }));

    }, []);

    const onSeeDetailsPress = (id: string) => {
        navigation.navigate('BookDetails', {id})
    }

    return (
        <FlatList
            data={data}
            style={styles.flatList}
            contentContainerStyle={[
                styles.flatListContentContainer,
            ]}
            keyExtractor={(item: BookType) => `dropdown_item_${item?.id}`}
            renderItem={({item}) => {
                const isAdded = readingList.includes(item.id);
                return (
                    <BookItem
                        isAdded={isAdded}
                        onPress={() => onSeeDetailsPress(item.id)}
                        onAddReadingListPress={() => onAddOrRemoveFromReadingListPress(item.id)} {...item} />
                );
            }}
            ListEmptyComponent={!isLoading ?
                <View style={styles.listEmptyWrapper}>
                    <Title h3>No data found.</Title>
                </View> : null
            }
            refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={onRefresh}
                />
            }
            bounces={false}
        />
    )
}

export default BookList;
