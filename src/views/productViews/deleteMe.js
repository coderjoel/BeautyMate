import React, { Component } from 'react';
import { Text, View } from "react-native";
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AuthLoadingScreen from './pages/Auth';
import Login from './pages/Login';
import UserSignUp from './pages/SignUpPages/UserSignUp';
import ForgotPassword from './pages/ForgotContainer/ForgotPw'
import UsernameSignUp from './pages/SignUpPages/UsernameSignUp';
import Home from './pages/HomeContainer/Home';
import Laws from './components/HomeComponents/laws.component'
import Article from './components/ArticleComponents/article.component'
import AllArticle from './pages/HomeContainer/Articles'
import WebScreen from './components/WebView/webView'
import CommunityPage from './pages/Community/CommunityPage'
import UserExperience from './pages/Community/UserExperience'
import Comments from './pages/Community/Comments'
import NearbyLocation from './pages/Tabs/NearbyLocation';
import Assistant from './pages/Assistant/Assistant';
import CanaTab from './pages/Explore/CanaTab';
import SearchProducts from './pages/Explore/Search'
import Profile from './pages/Profile/Profile';
import OtherProfile from './pages/Profile/OtherProfile'
import Followers from './pages/Profile/Followers'
import Following from './pages/Profile/Following'
import CanaWho from './pages/Assistant/Canawho';
import QuestionOne from './pages/Assistant/QuestionOne';
import QuestionTwo from './pages/Assistant/QuestionTwo';
import QuestionThree from './pages/Assistant/QuestionThree';
import QuestionFour from './pages/Assistant/QuestionFour';
import QuestionFive from './pages/Assistant/QuestionFive';
import QuestionSix from './pages/Assistant/QuestionSix';
import Filter from './pages/Explore/filterBrand.components'
import BrandContainer from './pages/BrandContainer/Brands';
import BrandInfo from './pages/BrandContainer/ProductInfo';
import ProductDetail from './pages/BrandContainer/DetailProduct';
import FilterBrandComponent from './components/BrandComponents/filterBrand.components'
import ShareScreen from './components/ProfileComponents/shareScreen.component'
import AllProducts from './pages/Explore/AllProducts'
import PersonalInfo from './components/ProfileComponents/ProfileTabsComponents/SettingsTab/personalInformation'
import MoreArticle from './components/ProfileComponents/moreArticles.component'
import MoreBrand from './components/ProfileComponents/moreBrands.component'
import MoreProduct from './components/ProfileComponents/moreProducts.component'
import MapScreen from './pages/Explore/Map'
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';
const IconComponent = createIconSetFromIcoMoon(icoMoonConfig, 'icomoon', 'icomoon.ttf');
import { Root } from "native-base";
import { StatusBar } from 'react-native';
import SearchPage from './pages/Community/SearchPage';


const AuthStack = createStackNavigator({
    LoginScreen: {
        screen: Login, headerMode: 'none',
        navigationOptions: {
            header: null
        }
    },
    SignUpScreen: { screen: UserSignUp },
    ForgotScreen: { screen: ForgotPassword },
});

const AppStack = createStackNavigator({
    AppTabsScreen: {
        screen: createBottomTabNavigator({
            HomeTab: {
                screen: createStackNavigator({
                    HomeScreen: { screen: Home },
                    ArticleScreen: { screen: Article },
                    AllArticleScreen: { screen: AllArticle },
                    LawScreen: Laws,
                    WebViewScreen: { screen: WebScreen },
                    ShareScreen: { screen: ShareScreen },
                    BrandContainerScreen: { screen: BrandContainer },
                    BrandInfoScreen: { screen: BrandInfo },
                    UserExperienceScreen: { screen: UserExperience },
                    CommentsScreen: { screen: Comments },
                    AllProductsScreen: { screen: AllProducts },
                    ProductDetailScreen: { screen: ProductDetail },
                    FilterBrandScreen: { screen: FilterBrandComponent },
                    SearchScreen: { screen: SearchProducts },
                    UsernameSignUpScreen: UsernameSignUp,
                },
                    {
                        initialRouteName: 'HomeScreen',
                    })
            },
            LocationTab: {
                screen: createStackNavigator({
                    UsernameSignUpScreen: UsernameSignUp,
                    Location: NearbyLocation,
                    WebViewScreen: { screen: WebScreen },
                    ShareScreen: { screen: ShareScreen },
                    CommunityPageScreen: { screen: CommunityPage },
                    UserExperienceScreen: { screen: UserExperience },
                    OtherProfileScreen: { screen: OtherProfile },
                    SearchProfilesScreen: { screen: SearchPage },
                    CommentsScreen: { screen: Comments },
                    AllProductsScreen: { screen: AllProducts },
                    ProductDetailScreen: { screen: ProductDetail },
                    FilterBrandScreen: { screen: FilterBrandComponent },
                    SearchScreen: { screen: SearchProducts },
                    BrandContainerScreen: { screen: BrandContainer },
                    BrandInfoScreen: { screen: BrandInfo },
                },
                    {
                        initialRouteName: 'UsernameSignUpScreen',
                    })
            },
            AssistantTab: {
                screen: createStackNavigator({
                    AssistantScreen: { screen: Assistant },
                    CanaWhoScreen: { screen: CanaWho },
                    QuestionOneScreen: { screen: QuestionOne },
                    QuestionTwoScreen: { screen: QuestionTwo },
                    QuestionThreeScreen: { screen: QuestionThree },
                    QuestionFourScreen: { screen: QuestionFour },
                    QuestionFiveScreen: { screen: QuestionFive },
                    QuestionSixScreen: { screen: QuestionSix },
                    BrandContainerScreen: { screen: BrandContainer },
                    BrandInfoScreen: { screen: BrandInfo },
                    WebViewScreen: { screen: WebScreen },
                    ShareScreen: { screen: ShareScreen },
                    UserExperienceScreen: { screen: UserExperience },
                    CommentsScreen: { screen: Comments },
                    AllProductsScreen: { screen: AllProducts },
                    ProductDetailScreen: { screen: ProductDetail },
                    FilterBrandScreen: { screen: FilterBrandComponent },
                    SearchScreen: { screen: SearchProducts },
                },
                    {
                        initialRouteName: 'AssistantScreen',
                    })
            },
            CanaTab: {
                screen: createStackNavigator({
                    CanaTabScreen: { screen: CanaTab },
                    SearchScreen: { screen: SearchProducts },
                    BrandContainerScreen: { screen: BrandContainer },
                    BrandInfoScreen: { screen: BrandInfo },
                    AllProductsScreen: { screen: AllProducts },
                    ProductDetailScreen: { screen: ProductDetail },
                    FilterBrandScreen: { screen: FilterBrandComponent },
                    SearchScreen: { screen: SearchProducts },
                    WebViewScreen: { screen: WebScreen },
                    UserExperienceScreen: { screen: UserExperience },
                    CommentsScreen: { screen: Comments },
                    ShareScreen: { screen: ShareScreen },
                    MapScreen: { screen: MapScreen },
                    FilterScreen: { screen: Filter }
                },
                    {
                        initialRouteName: 'CanaTabScreen',
                    }),
            },
            ProfileTab: {
                screen: createStackNavigator({
                    ProfileScreen: { screen: Profile },
                    ShareScreen: { screen: ShareScreen },
                    WebViewScreen: { screen: WebScreen },
                    ArticleScreen: { screen: Article },
                    AllArticleScreen: { screen: AllArticle },
                    UserExperienceScreen: { screen: UserExperience },
                    BrandContainerScreen: { screen: BrandContainer },
                    BrandInfoScreen: { screen: BrandInfo },
                    AllProductsScreen: { screen: AllProducts },
                    ProductDetailScreen: { screen: ProductDetail },
                    PersonalInfoScreen: { screen: PersonalInfo },
                    FilterBrandScreen: { screen: FilterBrandComponent },
                    SearchScreen: { screen: SearchProducts },
                    CommentsScreen: { screen: Comments },
                    MapScreen: { screen: MapScreen },
                    MoreArticleScreen: { screen: MoreArticle },
                    OtherProfileScreen: { screen: OtherProfile },
                    MoreBrandScreen: { screen: MoreBrand },
                    MoreProductScreen: { screen: MoreProduct },
                    FollowersScreen: { screen: Followers },
                    FollowingScreen: { screen: Following }
                },
                    {
                        initialRouteName: 'ProfileScreen',
                    }),
            }
        }, {
            initialRouteName: 'HomeTab',
            order: ['HomeTab', 'LocationTab', 'AssistantTab', 'CanaTab', 'ProfileTab'],
            animationEnabled: true,
            defaultNavigationOptions: ({ navigation }) => ({
                tabBarLabel: () => {
                    const { routeName } = navigation.state;
                    let tLabel;
                    if (routeName === 'HomeTab') {
                        tLabel = 'Home';
                        return <Text style={{ textAlign: 'center', fontSize: wp(2.7), fontFamily: 'OpenSans-SemiBold', }}>{tLabel}</Text>;
                    } else if (routeName === 'LocationTab') {
                        tLabel = 'Community';
                        return <Text style={{ textAlign: 'center', fontSize: wp(2.7), fontFamily: 'OpenSans-SemiBold', }}>{tLabel}</Text>;
                    } else if (routeName === 'CanaTab') {
                        tLabel = 'Explore';
                        return <Text style={{ textAlign: 'center', fontSize: wp(2.7), fontFamily: 'OpenSans-SemiBold', }}>{tLabel}</Text>;
                    } else if (routeName === 'AssistantTab') {
                        tLabel = 'Wanda';
                        return <Text style={{ textAlign: 'center', fontSize: wp(2.7), fontFamily: 'OpenSans-SemiBold', }}>{tLabel}</Text>;
                    } else if (routeName === 'ProfileTab') {
                        tLabel = 'Profile';
                        return <Text style={{ textAlign: 'center', fontSize: wp(2.7), fontFamily: 'OpenSans-SemiBold', }}>{tLabel}</Text>;
                    }
                },
                tabBarIcon: ({ tintColor }) => {
                    const { routeName } = navigation.state;
                    let iconName;
                    if (routeName === 'HomeTab') {
                        iconName = `home`;
                        return <IconComponent name={iconName} size={wp(8)} color={tintColor} />
                    } else if (routeName === 'LocationTab') {
                        iconName = `globe`;
                        return <IconComponent name={iconName} size={wp(8)} color={tintColor} />
                    } else if (routeName === 'AssistantTab') {
                        iconName = `cwLogo`;
                        return <IconComponent name={iconName} size={wp(8)} color={tintColor} />
                    } else if (routeName === 'CanaTab') {
                        iconName = `leafLibrary`;
                        return <IconComponent name={iconName} size={wp(8)} color={tintColor} />
                    } else if (routeName === 'ProfileTab') {
                        iconName = `user`;
                        return <IconComponent name={iconName} size={wp(8)} color={tintColor} />
                    }
                    //return <IconComponent name={iconName} size={wp(8)} color={tintColor} />;
                },
            }),
            tabBarOptions: {
                activeTintColor: '#000',
                inactiveTintColor: '#b3b3b3',
                activeBackgroundColor: '#FAFAFA',
                inactiveBackgroundColor: '#FAFAFA',
                style: { height: wp(16.5) },
                showLabel: true,
                showIcon: true,
                keyboardHidesTabBar: true
            }
        })
    }
}, {
    initialRouteName: 'AppTabsScreen',
    headerMode: 'none',
    navigationOptions: {
        header: null
    }
})

const AppStackNavigation = createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
))

export default class App extends Component {
    render() {
        return <Root>
            <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
            <AppStackNavigation />
        </Root>
    }
}