import {Text} from "react-native-web";

export default function InnerText (props) {
    const RenderText = () => {
        if (props.isCode) {
            return <Text style={{fontSize: 20, fontStyle: 'italic', color: 'blue', fontWeight: 'bold', textAlign: 'center'}}>{props.children}</Text>
        } else {
            return <Text style={{fontSize: 20}}>{props.children}</Text>
        }
    }

    return <RenderText/>
}