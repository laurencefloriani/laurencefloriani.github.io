import { EDUCATIONS } from "./Utilities";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Banner from "./Banner";
import {
  PADDING_BOTTOM,
  PADDING_LEFT,
  PADDING_RIGHT,
  PADDING_TOP,
} from "../DefaultVars";
import { View } from "react-native-web";

export default function Education() {
  return (
    <div className="education-container">
      <Banner isHome={false} />
      <SectionTitle title="Éducation" />
      <View
        style={{
          paddingTop: PADDING_TOP,
          paddingBottom: PADDING_BOTTOM,
          paddingLeft: PADDING_LEFT,
          paddingRight: PADDING_RIGHT,
        }}
      >
        {EDUCATIONS.map((educ, index) => {
          return (
            <Section
              key={`education-${index}`}
              title={educ.level}
              appendix={educ.years}
              description={educ.description}
              img={educ.img}
            />
          );
        })}
      </View>
    </div>
  );
}
