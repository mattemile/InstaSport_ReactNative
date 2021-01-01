import { Platform, Dimensions } from "react-native";

const isIos = Platform.OS == "ios";
const isAndroid = Platform.OS = "android";

const {width : SCREEN_WIDTH,height: SCREEN_HEIGHT} = Dimensions.get('windows');

export {
    isIos,
    isAndroid,
    SCREEN_WIDTH,
    SCREEN_HEIGHT
}