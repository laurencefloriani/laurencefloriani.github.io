import Banner from "./Banner";
import SectionTitle from "./SectionTitle";
import {PROJECTS} from "./Utilities";
import Project from "./Project";
import Select from 'react-select';
import {useState} from "react";
import InnerText from "./InnerText";
import {View} from "react-native-web";
import {PADDING_BOTTOM, PADDING_LEFT, PADDING_RIGHT, PADDING_TOP} from "../DefaultVars";

export default function Projects() {
    let options = [];
    const [selectedValue, setSelectedValue] = useState([]);

    const handleChange = (event) => {
        setSelectedValue(Array.isArray(event) ? event.map(x => x.value) : []);
    }

    const setLangages = () => {
        let results = new Set();
        for (let project of PROJECTS) {
            for (let langage of project.langages) {
                if (!results.has(langage)) {
                    results.add(langage);
                }
            }
        }
        for (let langage of results) {
            options.push({value: langage, label: langage})
        }
    }

    const projectContainsLangage = (project) => {
        let result = false;
        for (let langage of selectedValue) {
            if (project.langages.has(langage)) {
                result = true;
            }
        }
        return result;
    }

    return (
        <div className="projects-container" >
            <Banner isHome={false}/>
            <SectionTitle title="Projects" />
            {
                setLangages() // Not work correctly if set in useEffect
            }
            <div style={{
                paddingTop: PADDING_TOP,
                paddingBottom: PADDING_BOTTOM,
                paddingLeft: PADDING_LEFT,
                paddingRight: PADDING_RIGHT,
            }}>
                <View style={{paddingBottom: PADDING_BOTTOM}}>
                    <InnerText>Sélectionnez des languages ci-après pour voir les projets associés.</InnerText>
                </View>
                <Select
                    value={options.filter(obj => selectedValue.includes(obj.value))}
                    isMulti
                    name="langages"
                    options={options}
                    className="project-select"
                    onChange={handleChange}
                />
            </div>
            <View style={{
                paddingTop: PADDING_TOP,
                paddingBottom: PADDING_BOTTOM,
                paddingLeft: PADDING_LEFT,
                paddingRight: PADDING_RIGHT,
            }}>
                {
                    PROJECTS.map((proj, index) => {
                        if (projectContainsLangage(proj)) {
                            return <Project
                                key={`project-${index}`}
                                name={proj.name}
                                years={proj.years}
                                url={proj.url}
                                langages={Array.from(proj.langages)}
                                description={proj.description}
                                img={proj.img}
                                hasPDF={proj.hasPDF}
                                pdf={proj.pdf} />
                        } else {
                            return null;
                        }
                    })
                }
            </View>
        </div>
    )
}