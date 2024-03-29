/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps, NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {
        }
    }
}

export type BookDetailsParams = {
    id: string;
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    BookDetails: BookDetailsParams
};
export type AuthStackParamList = {
    Landing: undefined;
    Login: undefined;
    Register: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList,
    Screen>;
export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList,
    Screen>;

export type RootTabParamList = {
    Discover: undefined;
    ReadingList: undefined;
    FinishedBooks: undefined;
    BookDetails: BookDetailsParams;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<BottomTabScreenProps<RootTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>>;
