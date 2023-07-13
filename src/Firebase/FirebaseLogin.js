import auth from '@react-native-firebase/auth';
import { isValidEmail } from './FirebaseForgotPass';

export const handleLogin = async (email, password, changeScreen, setLoadingModalVisible, setError) => {
    console.log('Login Button Pressed');

    try {
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }
        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        setLoadingModalVisible(true); // Activate the loading spinner
        const response = await auth().signInWithEmailAndPassword(email, password);

        if (response) {
            changeScreen('GetStarted');
            console.log('User Logged In');
        }
    } catch (error) {
        console.log('error: ', error);
        setError('Wrong credentials. Please try again.');
    }
    setLoadingModalVisible(false); // Deactivate the loading spinner
};
