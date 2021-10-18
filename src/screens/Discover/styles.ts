import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';
import {scale} from "../../utils/scaler";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.bookPagesBackground
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
});

export default styles;
