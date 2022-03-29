import SectionSubTitle from "./SectionSubTitle";
import {View} from "react-native-web";
import InnerText from "./InnerText";
import TitleText from "./TitleText";
import {FiGithub} from "react-icons/fi";
import {MdOutlinePictureAsPdf} from "react-icons/md";

export default function Project(props) {
    return (
        <div>
            <SectionSubTitle title={props.name} appendix={props.years}/>
            <View>
                {props.langages.map((lang) => {
                    return <InnerText isCode={true}>{lang} </InnerText>;
                })}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'left'}}>
                <View>
                    <a href={props.url} target="_blank">
                        <img src={props.img} alt={props.img} style={{width: 150, height: 150}}/>
                    </a>
                </View>
                <View style={{paddingLeft: 20, justifyContent: 'center', flex: 1}}>
                    <InnerText isCode={false}>{props.description}</InnerText>
                </View>
                <View style={{flexDirection: 'column', padding: 10}}>
                    <View>
                        <a href={props.url} target="_blank">
                            <TitleText><FiGithub /></TitleText>
                        </a>
                    </View>
                    {props.hasPDF ?
                        <View>
                            <a href={props.pdf} target="_blank">
                                <TitleText><MdOutlinePictureAsPdf /></TitleText>
                            </a>
                        </View> : null
                    }
                </View>
            </View>
            <br/>
        </div>
    )

}