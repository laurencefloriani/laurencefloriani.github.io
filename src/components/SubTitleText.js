import {Text} from "react-native-web";

export default function SubTitleText (props) {
    return (
        <Text style={{ fontSize: 30, fontStyle: "italic" }}>
            {props.children}
        </Text>
    )
}