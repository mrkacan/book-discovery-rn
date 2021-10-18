import * as React from 'react';
import {useCallback, useEffect} from 'react';
import {ActivityIndicator, Image, ScrollView, Text, View} from 'react-native';
import styles from './styles';
import {RootTabScreenProps} from "../../../types";
import {useDispatch, useSelector} from "react-redux";
import {getBookDetailsRequest, toggleReadingBook} from "../../features/books/actions";
import Spacer from "../../components/Spacer/Spacer";
import AddReadingList from "../../components/AddReadingList";
import booksSelectors from "../../features/books/selectors";
import colors from "../../themes/colors";


export default function BookDetails({route}: RootTabScreenProps<'BookDetails'>) {
    const dispatch = useDispatch();
    const {
        isLoading, details,
    } = useSelector(booksSelectors.getBookDetails);
    const {
        readingList,
    } = useSelector(booksSelectors.getBooks);


    useEffect(() => {
        const id = route.params?.id;
        dispatch(getBookDetailsRequest({id}))
    }, [])

    const onAddOrRemoveFromReadingListPress = useCallback((id: string) => {
        dispatch(toggleReadingBook(id))
    }, [])
    const isAdded = readingList.includes(details.id)

    if (isLoading) {
        return <View style={styles.loaderWrapper}>
            <ActivityIndicator color={colors.primary} size={"large"}/>
        </View>
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <View
                    style={styles.itemWrapper}
                >
                    <Image source={{uri: details.coverImageUrl}} style={styles.image}/>
                    <View style={styles.itemRightWrapper}>
                        <Spacer height={24}/>
                        <View style={styles.titleWrapper}>
                            <Text style={styles.title} numberOfLines={2}>{details.title}</Text>
                            <AddReadingList isAdded={isAdded}
                                            onPress={() => onAddOrRemoveFromReadingListPress(details.id)}/>
                        </View>
                        <Spacer height={24}/>
                        <Text style={styles.synopsis}>{details.synopsis}</Text>
                        <Spacer height={8}/>
                        <Text style={styles.author} numberOfLines={1}>{details.author}</Text>
                        <Spacer height={8}/>
                        <Text style={styles.publisher} numberOfLines={1}>{details.publisher}</Text>
                        <Spacer height={8}/>
                        <Text style={styles.pageCount} numberOfLines={1}>{details.pageCount}</Text>
                        <Spacer height={8}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
