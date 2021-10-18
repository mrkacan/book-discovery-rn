import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scaler';
import colors from '../../themes/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bookPagesBackground
    },
    searchWrapper: {
        width: '100%',
        alignItems: 'center',
        padding: scale(30),
        paddingBottom: 0,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    flatList: {
        flex: 1,
    },
    flatListContentContainer: {
        padding: scale(30),
    },
    listEmptyWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        fontSize: scale(10),
        color: colors.searchText
    },
});

export default styles;
