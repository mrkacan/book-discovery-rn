import * as React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import {RootTabScreenProps} from "../../../types";
import {useDispatch} from "react-redux";
import {getBookDetailsRequest} from "../../features/books/actions";
import { Text } from 'react-native';


export default function BookDetails({route}: RootTabScreenProps<'BookDetails'>) {
    const dispatch = useDispatch();

    useEffect(() => {
        const id = route.params?.id;
        dispatch(getBookDetailsRequest({id}))
    }, [])

    return (
        <View style={styles.container}>
            <Text>
                Book details
            </Text>
        </View>
    );
}
