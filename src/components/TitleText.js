import {Text} from "react-native-web";

export default function TitleText (props) {
    return (
        <Text style={{ fontSize: 50, fontWeight: 'bold'}}>
            {props.children}
        </Text>
    )
}