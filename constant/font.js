
import { useFonts } from 'expo-font';

export const  font = () => {
    const [fontsLoaded] = useFonts({
        'Ubuntu-Regular': require('.././assets/fonts/Ubuntu-Regular.ttf'),
        'Ubuntu-Bold': require('.././assets/fonts/Ubuntu-Bold.ttf'),
        'Ubuntu-Medium': require('.././assets/fonts/Ubuntu-Medium.ttf'),
        'KaushanScript-Regular': require('.././assets/fonts/KaushanScript-Regular.ttf'),
    });

    return fontsLoaded
}