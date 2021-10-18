import * as React from 'react';
import {useCallback, useEffect, useState} from 'react';
import {RootTabScreenProps} from '../../../types';
import BookList from "../../components/BookList/BookList";
import {useDispatch, useSelector} from 'react-redux';
import booksSelectors from "../../features/books/selectors";
import styles from "../../components/BookList/styles";
import {Text, View} from 'react-native';
import TextInput from "../../components/TextInput/TextInput";
import {getBooksRequest} from "../../features/books/actions";
import Spacer from "../../components/Spacer/Spacer";

export default function Discover({}: RootTabScreenProps<'Discover'>) {
    const [searchValue, setSearchValue] = useState('');
    const dispatch = useDispatch();

    const {
        data,
        searchedData,
    } = useSelector(booksSelectors.getBooks);

    const onSearch = useCallback(() => {
        //TODO: can use debounce here.
        dispatch(getBooksRequest({query: searchValue}))
    }, [searchValue])

    useEffect(() => {
        onSearch()
    }, [searchValue])

    const onRemovePress = () => {
        setSearchValue('')
    }
    return (
        <View style={styles.container}>
            <View style={styles.searchWrapper}>
                <TextInput
                    value={searchValue}
                    placeholder={'Start typing...'}
                    onChangeText={setSearchValue}
                    showRightIcon
                    onRemovePress={onRemovePress}
                />
                {!!searchValue && <>
                    <Spacer height={30}/>
                    <Text style={styles.searchText}>
                        {`${searchedData.length} Search results`}
                    </Text>
                </>}
            </View>
            <BookList data={!!searchValue ? searchedData : data}/>
        </View>
    )
}
