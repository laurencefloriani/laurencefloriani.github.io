import {View} from "react-native";
import SubTitleText from "./SubTitleText";


export default function SectionSubTitle(props) {
    return (
        <View style={{flexDirection: 'row', alignItems: 'left'}}>
            <View style={{paddingLeft: 10}}>
                <SubTitleText>{props.title} </SubTitleText>
            </View>
            <View style={{
                flex: 1,
                height: 5,
                backgroundColor: "#464646"
            }} />
            <View style={{paddingRight: 10}}>
                <SubTitleText> {props.appendix}</SubTitleText>
            </View>
        </View>
    );
}