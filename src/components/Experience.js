import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {EXPERIENCES} from "./Utilities";
import Section from "./Section";
import {PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP} from "../DefaultVars";
import {View} from "react-native-web";

export default function Experience() {
    return (
        <div className="experience-container" >
            <Banner isHome={false}/>
            <SectionTitle title="Expériences" />
            <View style={{
                paddingTop: PADDING_TOP,
                paddingBottom: PADDING_BOTTOM,
                paddingLeft: PADDING_LEFT,
                paddingRight: PADDING_RIGHT,
            }}>
                {
                    EXPERIENCES.map((exp, index) => {
                        return <Section
                            key={`experience-${index}`}
                            title={exp.post}
                            appendix={exp.years}
                            description={exp.description}
                            img={exp.img} />;
                    })
                }
            </View>
        </div>
    )
}