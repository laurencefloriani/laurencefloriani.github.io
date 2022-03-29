import {View} from "react-native";
import TitleText from "./TitleText";

export default function SectionTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'right'}}>
            <View style={{flex: 1, height: 5, backgroundColor: "#464646"}} />
            <View style={{paddingRight: 10}}>
                <TitleText>{props.title}</TitleText>
            </View>
        </View>
    );
}