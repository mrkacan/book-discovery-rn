import React from 'react';
import {Pressable} from 'react-native';
import colors from "../../themes/colors";
import {FontAwesome} from "@expo/vector-icons";
import styles from './styles';
import {scale} from "../../utils/scaler";

interface IAddReadingListProps {
    isAdded?: boolean;
    onPress: () => void;
}

const AddReadingList = ({
                            isAdded,
                            onPress,
                        }: IAddReadingListProps) => {

    return (
        <Pressable
            onPress={onPress}
            style={styles.wrapper}
            hitSlop={styles.hitSlop}
        >
            <FontAwesome
                name={isAdded ? 'minus' : 'plus'}
                size={scale(10)}
                color={colors.white}
            />
        </Pressable>
    );
};

export default AddReadingList;
