import {StyleSheet} from 'react-native';
import colors from '../../../themes/colors';
import {scale} from "../../../utils/scaler";

const styles = StyleSheet.create({
    itemWrapper: {
        width: '100%',
        minWidth: '100%',
        maxWidth: '100%',
        padding: scale(10),
        borderWidth: 1,
        backgroundColor: colors.white,
        borderColor: colors.bookCardBorder,
        marginBottom: scale(18),
        borderRadius: scale(5),
        overflow: 'hidden',
        flexDirection: 'row',
    },
    itemRightWrapper: {
        flexDirection: 'column',
    },
    image: {
        backgroundColor: colors.imageBackground,
        width: scale(100),
        maxWidth: scale(100),
        height: scale(130),
        resizeMode: 'contain'
    },
    title: {
        fontWeight: 'bold',
        fontSize: scale(14),
        maxWidth: scale(180),
        marginLeft: scale(5),
    },
    synopsis: {
        fontSize: scale(11),
        maxWidth: scale(180),
        marginLeft: scale(5),
    },
    author: {
        fontWeight: '200',
        fontSize: scale(11),
        maxWidth: scale(180),
        marginRight: scale(5),
        fontStyle: 'italic',
        textAlign: 'right',
        color: colors.authorColor
    },
    addReadingListWrapper: {
        alignSelf: 'flex-end',
    }
});

export default styles;
