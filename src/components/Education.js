import {EDUCATIONS} from "./Utilities";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import Banner from "./Banner";


export default function Education() {
    return (
        <div className="education-container" >
            <Banner isHome={false}/>
            <SectionTitle title="Éducation" />
            <br/>
            {
                EDUCATIONS.map((educ) => {
                    return <Section key={`education-${educ.level}`} title={educ.level} appendix={educ.years} description={educ.description} img={educ.img} />
                })
            }
        </div>
    )
}