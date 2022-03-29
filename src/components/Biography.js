import {FiGithub, FiLinkedin, FiMail} from 'react-icons/fi';
import "../styles/Biography.css"
import TitleText from "./TitleText";
import InnerText from "./InnerText";
import {View} from "react-native-web";

export default function Biography() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'left'}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <View>
                    <img src={"profil.jpg"} alt="profil" className="profil"/>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 15}}>
                    <View>
                        <a href="https://www.linkedin.com/in/laurence-floriani-1659b9234/" target="_blank">
                            <TitleText><FiLinkedin /></TitleText>
                        </a>
                    </View>
                    <View>
                        <a style={{paddingLeft: 10}} href={"mailto:laurenceflo@hotmail.com"}>
                            <TitleText><FiMail /></TitleText>
                        </a>
                    </View>
                    <View>
                        <a style={{paddingLeft: 10}} href={"https://github.com/laurencefloriani"} target="_blank">
                            <TitleText><FiGithub /></TitleText>
                        </a>
                    </View>
                </View>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 15, flex: 1}}>
                <View>
                    <TitleText>Bienvenue sur mon site !</TitleText>
                </View>
                <View>
                    <img src={"quotes_left.png"} alt="quotes_left" className="quotes_left"/>
                </View>
                <View>
                    <InnerText>Bonjour, je m'appelle Laurence Daisy Floriani.</InnerText>
                    <InnerText>
                        Je suis actuellement étudiante en Master en Science Informatique finalité spécialisée à l'UMons, Belgique.
                        Durant mes deux ans de Master, j'en ai profité pour m'intéresser à des domaines variés de l'informatique.
                        J'ai une préférence pour le développement d'applications web ou non. J'apprécie également ce qui touche à la gestion des données et au Machine Learning.
                        Je vous souhaite une bonne visite sur ce petit site que j'ai implémenté sur mon temps libre.
                    </InnerText>
                </View>
                <View>
                    <img src={"quotes_right.png"} alt="quotes_right" className="quotes_right"/>
                </View>
            </View>
        </View>
    );
}