import SectionSubTitle from "./SectionSubTitle";
import {View} from "react-native-web";
import InnerText from "./InnerText";

export default function Section(props) {

    return (
        <div>
            <SectionSubTitle title={props.title} appendix={props.appendix}/>
            <br />
            <View style={{flexDirection: 'row', alignItems: 'left'}}>
                <View>
                    <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                </View>
                <View style={{paddingLeft: 20, paddingRight: 20, flex: 1}}>
                    <InnerText isCode={false}>{props.description}</InnerText>
                </View>
            </View>
        </div>
    )

}