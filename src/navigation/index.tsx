/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import {FontAwesome} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {Pressable} from 'react-native';
import Landing from '../screens/Landing/Landing';
import Discover from '../screens/Discover/Discover';
import ReadingListScreen from '../screens/ReadingList/ReadingListScreen';
import {AuthStackParamList, RootStackParamList, RootTabParamList} from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import {useDispatch, useSelector} from "react-redux";
import {getIsAuth} from "../features/auth/selectors";
import colors from '../themes/colors';
import {logout} from "../features/auth/actions";
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import {scale} from "../utils/scaler";
import {isIOS} from "../utils/device";
import FinishedBooksScreen from "../screens/FinishedBooksScreen";
import BookDetails from "../screens/BookDetails/BookDetails";


export default function Navigation() {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}>
            <RootNavigator/>
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const isAuth = useSelector(getIsAuth);

    return (
        <Stack.Navigator>
            <Stack.Screen name="Root" component={isAuth ? BottomTabNavigator : AuthNavigator}
                          options={{headerShown: false}}/>
            <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="BookDetails" component={BookDetails}/>
            </Stack.Group>
        </Stack.Navigator>
    );
}

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

function AuthNavigator() {
    const defaultProps = {
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTitleStyle: {
            color: colors.title
        },
    }
    return (
        <AuthStack.Navigator initialRouteName="Landing" screenOptions={{
            headerShown: true,
            animation: 'fade',
            headerBackButtonMenuEnabled: true,
            headerTintColor: colors.white,
            ...defaultProps
        }}>
            <AuthStack.Screen name="Landing" component={Landing}/>
            <AuthStack.Screen name="Login" component={Login}/>
            <AuthStack.Screen name="Register" component={Register}/>
        </AuthStack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const dispatch = useDispatch();

    const HeaderRightComponent = () => (
        <Pressable
            onPress={() => {
                dispatch(logout());
            }}
            style={({pressed}) => ({
                opacity: pressed ? 0.5 : 1,
            })}>
            <FontAwesome
                name="sign-out"
                size={25}
                color={colors.logoutIcon}
                style={{marginRight: 15}}
            />
        </Pressable>
    );

    const defaultProps = {
        headerRight: HeaderRightComponent,
        headerStyle: {
            backgroundColor: colors.primary,
        },
        headerTitleStyle: {
            color: colors.title
        }
    }
    return (
        <BottomTab.Navigator
            initialRouteName="Discover"
            screenOptions={{
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    alignItems: 'center',
                    paddingBottom: isIOS ? 20 : scale(3)
                }
            }}>
            <BottomTab.Screen
                name="Discover"
                component={Discover}
                options={{
                    title: 'Discover',
                    tabBarIcon: ({color}) => <TabBarIcon name="globe" color={color}/>,
                    ...defaultProps
                }}
            />
            <BottomTab.Screen
                name="ReadingList"
                component={ReadingListScreen}
                options={{
                    title: 'Reading List',
                    tabBarIcon: ({color}) => <TabBarIcon name="bookmark" color={color}/>,
                    ...defaultProps
                }}
            />
            <BottomTab.Screen
                name="FinishedBooks"
                component={FinishedBooksScreen}
                options={{
                    title: 'Finished Books',
                    tabBarIcon: ({color}) => <TabBarIcon name="book" color={color}/>,
                    ...defaultProps
                }}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={30} style={{marginBottom: -3}} {...props} />;
}
