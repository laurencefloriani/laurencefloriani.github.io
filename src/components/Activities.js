import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {ACTIVITIES, VOLUNTEERWORKS} from "./Utilities";
import Section from "./Section";


export default function Activities() {
    return (
        <div className="activities-container" >
            <Banner home={false}/>
            <SectionTitle title="Bénévolats" />
            <br/>
            {
                VOLUNTEERWORKS.map((vol) => {
                    return <Section title={vol.post} appendix={vol.years} description={vol.description} img={vol.img}/>
                })
            }
            <br/>
            <SectionTitle title="Activités" />
            <br/>
            {
                ACTIVITIES.map((act) => {
                    return <Section title={act.name} appendix={act.years} description={act.description} img={act.img}/>
                })
            }
        </div>
    )
}