
export const EDUCATIONS = [
    {
        level: "Master 120",
        years: "2021-2022",
        place: "UMons",
        description:"Master en science informatique à finalité spécialisée. " +
                    "Dans le cadre de mes deux années de Master, j'ai pu choisir mes cours parmi un grand nombre d'options. " +
                    "Je me suis plutôt orientée vers tous ce qui est développement et évolution de logiciels. " +
                    "Les autres options que j'ai choisi sont en rapport avec l'intelligence artificielle et le Machine Learning",
        img: "umons.png"
    },
    {
        level: "Bachelier",
        years: "2017-2021",
        place: "UMons",
        description: "Bachelier de transition en science informatique. " +
                    "Au cours de ces premières années en université, j'ai principalement appris à apprendre. " +
                    "J'ai découvert les bases de l'informatique et des mathématiques.",
        img: "umons.png"
    },
    {
        level: "CESS",
        years: "2015",
        place: "IESPP",
        description:"Durant mes années de secondaire, j'ai commencé à éveiller mon esprit critique et scientifique. " +
                    "J'ai acquis les principales notions qui m'ont permis d'accéder à la formation universitaire.",
        img: "iespp.png"
    }
];

export const EXPERIENCES = [
    {
        post: "Jobs étudiants",
        years: "2009-2015",
        place: "Colruyt et H&M",
        description:"En parallèle de mes études secondaires, j'ai effectué divers petit jobs étudiants. " +
                    "J'ai principalement occupé des postes de manutention des les entrepôts de Colruyt et H&M.",
        img: "work.png"
    }
];

export const VOLUNTEERWORKS = [
    {
        post: "Accueil et informations",
        years: "2018",
        place: "Trolls et Légendes à Mons",
        description:"Durant les jours du festival, j'ai accueilli les visiteurs à l'entrée. " +
                    "Je restais également à leurs disposition pour les orienter et répondre à leurs questions.",
        img: "trollEtLegendes.png"
    }
]

export const ACTIVITIES = [
    {
        name: "Cyber Security Challenge",
        years: "2021",
        place: "Belgium",
        description:"Avec mon équipe, nous avons essayé de relever les défis proposés. " +
                    "J'ai personnellement pu apprendre quelques fondements en cybersécurité.",
        img: "cybersecurityBelgium.png"
    }
]

export const PROJECTS = [
    {
        name: "Interface utilisateur WEB pour le serveur PHOEG",
        years: "2022",
        url: "https://github.com/laurencefloriani/phoeg-react",
        langages: new Set(["JavaScript", "CSS", "React"]),
        description: "Pour mon projet de MAB.1, j'ai implémenté une interface web utilisateur pour le service " +
            "d'algorithmique du département d'informatique de l'UMons. Je me suis occupé du frontend. J'ai implémenté " +
            "plusieurs fonctionnalités pour permettre aux chercheurs de mieux visualiser des données importantes.",
        img: "phoeg.png",
        hasPDF: false,
        pdf: ""
    },
    {
        name: "Générateur nombre aléatoire",
        years: "2021",
        url: "https://github.com/laurencefloriani/simulation",
        langages: new Set(["Python"]),
        description: "Pour le cours de Simulation, j'ai implémenté avec mon binôme un générateur de nombre" +
            " pseudo-aléatoire. Pour en tester l'efficacité, nous avons construit plusieurs tests statistiques.",
        img: "random.png",
        hasPDF: true,
        pdf: "simulation.pdf"
    },
    {
        name: "Compilateur Dumbo",
        years: "2021",
        url: "https://github.com/laurencefloriani/compilation",
        langages: new Set(["Python"]),
        description: "Pour le cours de Compilation, j'ai implémenté un petit compilateur pour un langage appelé " +
            "Dumbo. J'ai employé une librairie d'analyse syntaxique, Lark.",
        img: "dumbo.png",
        hasPDF: true,
        pdf: "compilation.pdf"
    },
    {
        name: "Séquenceur ADN",
        years: "2020",
        url: "https://github.com/laurencefloriani/ProjetBioInfo",
        langages: new Set(["Java"]),
        description: "Dans le cadre du cours d'Algorithmique et bioinformatique, j'ai implémenté avec mon binôme un " +
            "séquenceur d'ADN. Nous avons particulièrement dû faire attention à l'optimisation du projet car il devait " +
            "de grands échantillons de données.",
        img: "adn.png",
        hasPDF: true,
        pdf: "bioinfo.pdf"
    },
    {
        name: "Calcul de communautés dans de grands réseaux",
        years: "2019",
        url: "https://github.com/laurencefloriani/OptiCombProjet",
        langages: new Set(["Java"]),
        description: "Pour le cours de Graphes et optimisation combinatoires, j'ai construit un programme permettant de " +
            "regrouper des noeuds d'un graphe en communauté. Il s'agit d'un problème de type NP-difficile, j'ai utilisé " +
            "une approche par métaheuristique. J'ai choisi d'implémenter un recuit simulé.",
        img: "network.png",
        hasPDF: false,
        pdf: ""
    },
    {
        name: "Création d'un jeu inspiré de Slay",
        years: "2019",
        url: "https://github.com/lavendthomas/Slay",
        langages: new Set(["Java", "LibGDX"]),
        description: "Avec mon trinôme, en BAB.2, nous avons implémenté un jeu qui est la copie du jeu Slay. " +
            "Ce premier véritable gros projet m'a permis d'apprendre entre autre à travailler en équipe ainsi " +
            "qu'adopter des bonnes pratiques.",
        img: "slay.png",
        hasPDF: false,
        pdf: ""
    },
    {
        name: "Convertisseur d'algèbre relationnelle en requête SQL",
        years: "2018",
        url: "https://github.com/laurencefloriani/projetBase",
        langages: new Set(["Python", "SQLite3"]),
        description: "Pour le cours de Bases de données 1, j'ai implémenté un petit convertisseur qui permet d'obtenir" +
            " une requête SQL à partir du requête exprimée en algèbre relationnelle.",
        img: "sql.png",
        hasPDF: false,
        pdf: ""
    },

]