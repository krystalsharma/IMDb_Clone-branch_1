import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {CustomFonts} from '../../assets/values/CustomFonts';
import {Images} from '../../assets/values/Images';
import {Strings} from '../../assets/values/Strings';
import Loader from '../../components/Custom/Loader';
import {GlobalVariables} from '../../Context/AppContext';

const LoginScreen = ({navigation}) => {
    const {colors} = useTheme();
    const {login, loading} = GlobalVariables();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureText, setSecureText] = useState(true);

    if (loading) {
        return <Loader />;
    }

    return (
        <SafeAreaView
            style={{flex: 1, backgroundColor: colors.mainBackgroundColor}}>
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <KeyboardAvoidingView style={styles.KeyboardAvoidingView}>
                    <Image source={Images.IMDb_App_Icon} style={styles.Image} />
                    <Divider width={1} style={{width: '100%', marginTop: 15}} />
                    <View style={styles.Container}>
                        <Text
                            style={[
                                styles.HeaderText,
                                {color: colors.textColor},
                            ]}>
                            {Strings.Sign_in}
                        </Text>
                        <Text
                            style={[
                                styles.ForgotPassword,
                                {color: colors.headingTextColor},
                            ]}>
                            {Strings.Forgot_password}
                        </Text>

                        <View
                            style={[
                                styles.ItemView,
                                {borderColor: colors.overlayColor},
                            ]}>
                            <TextInput
                                placeholder={Strings.Email}
                                placeholderTextColor={colors.inActiveIconColor}
                                value={email}
                                onChangeText={txt => setEmail(txt)}
                                keyboardType={'email-address'}
                                autocomplete={'email'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                style={[
                                    styles.TextInput,
                                    {
                                        backgroundColor: colors.white,
                                        color: colors.black,
                                    },
                                ]}
                            />
                            <View style={styles.InnerItemView}>
                                <TextInput
                                    placeholder={Strings.IMDb_Password}
                                    placeholderTextColor={
                                        colors.inActiveIconColor
                                    }
                                    value={password}
                                    onChangeText={txt => setPassword(txt)}
                                    keyboardType={'password'}
                                    autocomplete={'off'}
                                    autoCapitalize={'none'}
                                    autoCorrect={false}
                                    secureTextEntry={secureText}
                                    style={[
                                        styles.TextInput,
                                        {
                                            backgroundColor: colors.white,
                                            color: colors.black,
                                            paddingRight: 50,
                                        },
                                    ]}
                                />
                                <Icon
                                    name={secureText ? 'eye-slash' : 'eye'}
                                    size={18}
                                    color={colors.black}
                                    onPress={() => setSecureText(!secureText)}
                                    style={{
                                        textAlign: 'center',
                                        position: 'absolute',
                                        padding: 20,
                                        right: 0,
                                    }}
                                />
                            </View>
                        </View>

                        <TouchableOpacity
                            onPress={() => login(email, password)}
                            style={[
                                styles.TouchableOpacity,
                                {
                                    backgroundColor: colors.primaryColor,
                                    borderColor: colors.overlayColor,
                                },
                            ]}>
                            <Text style={[styles.Text, {color: colors.black}]}>
                                {Strings.Sign_in}
                            </Text>
                        </TouchableOpacity>
                        <View
                            style={{
                                width: '100%',
                                alignItems: 'center',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 15,
                            }}>
                            <Divider width={1} style={{width: width / 2.6}} />

                            <Text
                                style={{
                                    color: colors.SocialButtonColor,
                                    fontFamily: CustomFonts.Regular,
                                    paddingHorizontal: 10,
                                }}>
                                {Strings.New_to_IMDb}
                            </Text>

                            <Divider width={1} style={{width: width / 2.6}} />
                        </View>

                        <TouchableOpacity
                            onPress={() => navigation.navigate('Signup')}
                            activeOpacity={0.8}
                            style={[
                                styles.TouchableOpacity,
                                {
                                    backgroundColor:
                                        colors.TouchableBackgroundColor,
                                    borderColor: colors.overlayColor,
                                },
                            ]}>
                            <Text style={[styles.Text, {color: colors.black}]}>
                                {Strings.Create_a_new_IMDb_account}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    KeyboardAvoidingView: {
        marginTop: height * 0.02,
        alignItems: 'center',
    },
    Image: {
        width: 70,
        height: 35,
    },
    Container: {
        width: width,
        padding: 20,
    },
    HeaderText: {
        fontSize: 25,
        width: '100%',
        fontFamily: CustomFonts.Bold,
    },
    ForgotPassword: {
        fontSize: 16,
        width: '100%',
        textAlign: 'right',
        marginVertical: 8,
    },
    ItemView: {
        marginVertical: 10,
        marginBottom: 40,
        borderRadius: 5,
        overflow: 'hidden',
        borderWidth: 1,
        elevation: 1,
    },
    InnerItemView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    TextInput: {
        height: 50,
        width: '100%',
        fontSize: 18,
        paddingHorizontal: 10,
        elevation: 5,
    },
    TouchableOpacity: {
        fontSize: 18,
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 1,
        elevation: 3,
    },
    Text: {
        fontSize: 18,
    },
});
