import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {ACTIVITIES, VOLUNTEERWORKS} from "./Utilities";
import Section from "./Section";
import {PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP} from "../DefaultVars";
import {View} from "react-native-web";


export default function Activities() {
    return (
        <div className="activities-container" >
            <Banner home={false}/>
            <SectionTitle title="Bénévolats" />
            <View style={{
                paddingTop: PADDING_TOP,
                paddingBottom: PADDING_BOTTOM,
                paddingLeft: PADDING_LEFT,
                paddingRight: PADDING_RIGHT,
            }}>
                {
                    VOLUNTEERWORKS.map((vol) => {
                        return <Section title={vol.post} appendix={vol.years} description={vol.description} img={vol.img}/>
                    })
                }
            </View>
            <View>
                <SectionTitle title="Activités" />
            </View>
            <View style={{
                paddingTop: PADDING_TOP,
                paddingBottom: PADDING_BOTTOM,
                paddingLeft: PADDING_LEFT,
                paddingRight: PADDING_RIGHT,
            }}>
                {
                    ACTIVITIES.map((act) => {
                        return <Section title={act.name} appendix={act.years} description={act.description} img={act.img}/>
                    })
                }
            </View>
        </div>
    )
}