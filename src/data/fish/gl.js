export const glFish = [
    {
        id: "11",
        type: "common",
        name: {
            en: "alewife",
            fr: "gaspareau",
            pt: "alosa cinzenta"
        },
        difficulty: 0,
        attributes: [
            { shadow: [] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 0.1,
            max: 0.2
        },
        lbs: {
            min: 0.22,
            max: 0.44
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 20
            },
            {
                x: 81,
                y: 45
            },
            {
                x: 50,
                y: 70
            },
            {
                x: 75,
                y: 80
            }
        ],
        positionNote: ""
    },
    {
        id: "12",
        type: "common",
        name: {
            en: "brook trout",
            fr: "omble des fontaines",
            pt: "truta de riacho"
        },
        difficulty: 0,
        attributes: [
            { shadow: [1,2] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [2] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false
        ],
        kgs: {
            min: 2,
            max: 8
        },
        lbs: {
            min: 4.41,
            max: 17.64
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 45
            }
        ],
        positionNote: ""
    },
    {
        id: "13",
        type: "common",
        name: {
            en: "brown trout",
            fr: "truite brune",
            pt: "truta marisca"
        },
        difficulty: 0,
        attributes: [
            { shadow: [2,3] },
            { rods: [0,1,2,3,4,5] },
            { moment: [1] }
        ],
        seasons: [
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false
        ],
        kgs: {
            min: 4,
            max: 50
        },
        lbs: {
            min: 8.82,
            max: 110.23
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 45
            },
            {
                x: 85,
                y: 30
            }
        ],
        positionNote: ""
    },
    {
        id: "14",
        type: "common",
        name: {
            en: "largemouth bass",
            fr: "achigan à grande bouche",
            pt: "achigã"
        },
        difficulty: 0,
        attributes: [
            { shadow: [2] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [0,1] }
        ],
        seasons: [
            true,
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            false,
            true
        ],
        kgs: {
            min: 2,
            max: 10
        },
        lbs: {
            min: 4.41,
            max: 22.05
        },
        map: "great-lakes",
        positions: [
            {
                x: 60,
                y: 15
            },
            {
                x: 87,
                y: 67
            }
        ],
        positionNote: ""
    },
    {
        id: "15",
        type: "common",
        name: {
            en: "yellow perch",
            fr: "perchaude",
            pt: "perca amarela"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [0,1] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false
        ],
        kgs: {
            min: 0.5,
            max: 1.9
        },
        lbs: {
            min: 1.10,
            max: 4.19
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 15
            },
            {
                x: 35,
                y: 40
            },
            {
                x: 20,
                y: 80
            },
            {
                x: 75,
                y: 50
            }
        ],
        positionNote: ""
    },
    {
        id: "16",
        type: "common",
        name: {
            en: "white crappie",
            fr: "crapet calicot",
            pt: "promoxis"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 1,
            max: 2.4
        },
        lbs: {
            min: 2.20,
            max: 5.29
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 15
            },
            {
                x: 75,
                y: 80
            },
            {
                x: 20,
                y: 75
            },
            {
                x: 75,
                y: 50
            }
        ],
        positionNote: ""
    },
    {
        id: "17",
        type: "common",
        name: {
            en: "white bass",
            fr: "bar blanc",
            pt: "bass branco"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [2] }
        ],
        seasons: [
            false,
            true,
            true,
            true,
            true,
            true,
            false,
            true,
            true,
            true,
            true,
            false
        ],
        kgs: {
            min: 1,
            max: 3.2
        },
        lbs: {
            min: 2.20,
            max: 7.05
        },
        map: "great-lakes",
        positions: [
            {
                x: 65,
                y: 15
            },
            {
                x: 90,
                y: 30
            }
        ],
        positionNote: ""
    },
    {
        id: "18",
        type: "common",
        name: {
            en: "walleye",
            fr: "doré jaune",
            pt: "picão-verde"
        },
        difficulty: 0,
        attributes: [
            { shadow: [1,2] },
            { rods: [0,1,2,3,4,5] },
            { moment: [1] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        kgs: {
            min: 2,
            max: 11.3
        },
        lbs: {
            min: 4.41,
            max: 24.91
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 40
            },
            {
                x: 80,
                y: 15
            },
            {
                x: 75,
                y: 80
            }
        ],
        positionNote: ""
    },
    {
        id: "19",
        type: "common",
        name: {
            en: "sea lamprey",
            fr: "lamproie marine",
            pt: "lampreia-marinha"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [0,1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 0.5,
            max: 2.5
        },
        lbs: {
            min: 1.10,
            max: 5.51
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 40
            },
            {
                x: 65,
                y: 15
            },
            {
                x: 75,
                y: 80
            },
            {
                x: 80,
                y: 50
            },
            {
                x: 17,
                y: 79
            }
        ],
        positionNote: ""
    },
    {
        id: "110",
        type: "common",
        name: {
            en: "pink salmon",
            fr: "saumon rose à bosse",
            pt: "salmão-rosado"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false
        ],
        kgs: {
            min: 2,
            max: 7
        },
        lbs: {
            min: 4.41,
            max: 15.43
        },
        map: "great-lakes",
        positions: [
            {
                x: 75,
                y: 50
            },
            {
                x: 75,
                y: 7
            }
        ],
        positionNote: ""
    },
    {
        id: "111",
        type: "common",
        name: {
            en: "smallmouth bass",
            fr: "achigan à petite bouche",
            pt: "achigã-boca-pequena"
        },
        difficulty: 0,
        attributes: [
            { shadow: [1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [1] }
        ],
        seasons: [
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        kgs: {
            min: 1,
            max: 5.4
        },
        lbs: {
            min: 2.20,
            max: 11.90
        },
        map: "great-lakes",
        positions: [
            {
                x: 60,
                y: 15
            }
        ],
        positionNote: ""
    },
    {
        id: "112",
        type: "common",
        name: {
            en: "round whitefish",
            fr: "ménomini rond",
            pt: "peixe branco redondo"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] }
        ],
        seasons: [
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        kgs: {
            min: 1,
            max: 2.7
        },
        lbs: {
            min: 2.20,
            max: 5.95
        },
        map: "great-lakes",
        positions: [
            {
                x: 60,
                y: 15
            },
            {
                x: 75,
                y: 70
            },
            {
                x: 15,
                y: 75
            }
        ],
        positionNote: ""
    },
    {
        id: "113",
        type: "common",
        name: {
            en: "redear sunfish",
            fr: "crapet à oreilles rouges",
            pt: "poleiro do sol"
        },
        difficulty: 0,
        attributes: [
            { shadow: [0,1] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true
        ],
        kgs: {
            min: 0.1,
            max: 3
        },
        lbs: {
            min: 0.22,
            max: 6.61
        },
        map: "great-lakes",
        positions: [
            {
                x: 60,
                y: 15
            },
            {
                x: 36,
                y: 12
            },
            {
                x: 46,
                y: 71
            }
        ],
        positionNote: ""
    },
    {
        id: "114",
        type: "common",
        name: {
            en: "channel catfish",
            fr: "barbue de rivière",
            pt: "bagre-americano"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 5,
            max: 26
        },
        lbs: {
            min: 11.02,
            max: 57.32
        },
        map: "great-lakes",
        positions: [
            {
                x: 25,
                y: 75
            },
            {
                x: 88,
                y: 45
            }
        ],
        positionNote: ""
    },
    {
        id: "115",
        type: "common",
        name: {
            en: "bloater",
            fr: "bloater",
            pt: "inchado"
        },
        difficulty: 0,
        attributes: [
            { shadow: [] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 0.1,
            max: 0.5
        },
        lbs: {
            min: 0.22,
            max: 1.10
        },
        map: "great-lakes",
        positions: [
            {
                x: 25,
                y: 75
            },
            {
                x: 40,
                y: 15
            },
            {
                x: 30,
                y: 40
            },
            {
                x: 90,
                y: 30
            },
            {
                x: 70,
                y: 75
            }
        ],
        positionNote: ""
    },
    {
        id: "116",
        type: "common",
        name: {
            en: "coho salmon",
            fr: "saumon coho",
            pt: "salmão-prateado"
        },
        difficulty: 0,
        attributes: [
            { shadow: [2] },
            { rods: [0,1,2,3,4,5] },
            { moment: [0,1] },
            { speed: [1] }
        ],
        seasons: [
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false
        ],
        kgs: {
            min: 1,
            max: 15
        },
        lbs: {
            min: 2.20,
            max: 33.07
        },
        map: "great-lakes",
        positions: [
            {
                x: 75,
                y: 50
            },
            {
                x: 35,
                y: 10
            },
            {
                x: 52,
                y: 70
            }
            
        ],
        positionNote: ""
    },
    {
        id: "117",
        type: "rare",
        name: {
            en: "chinook salmon",
            fr: "saumon royal",
            pt: "salmão-rei"
        },
        difficulty: 1,
        attributes: [
            { shadow: [3,4] },
            { rods: [1,2,3,5] },
            { moment: [0,1] },
            { speed: [0,1] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        kgs: {
            min: 5,
            max: 61
        },
        lbs: {
            min: 11.02,
            max: 134.48
        },
        map: "great-lakes",
        positions: [
            {
                x: 75,
                y: 55
            },
            {
                x: 15,
                y: 78
            }
        ],
        positionNote: ""
    },
    {
        id: "118",
        type: "rare",
        name: {
            en: "muskie",
            fr: "maskinongé",
            pt: "lùcio-almiscarado"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2] },
            { rods: [1,2,3,5] },
            { moment: [0] }
        ],
        seasons: [
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false
        ],
        kgs: {
            min: 2,
            max: 31
        },
        lbs: {
            min: 4.41,
            max: 68.34
        },
        map: "great-lakes",
        positions: [
            {
                x: 40,
                y: 15
            },
            {
                x: 50,
                y: 75
            },
            {
                x: 40,
                y: 45
            },
            {
                x: 70,
                y: 85
            }
        ],
        positionNote: ""
    },
    {
        id: "119",
        type: "rare",
        name: {
            en: "flathead catfish",
            fr: "poisson-chat à tête plate",
            pt: "peixe-gato amarelo"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2,3] },
            { rods: [1,2,3,5] },
            { moment: [1] }
        ],
        seasons: [
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false
        ],
        kgs: {
            min: 5,
            max: 55
        },
        lbs: {
            min: 11.02,
            max: 121.25
        },
        day: false,
        night: true,
        map: "great-lakes",
        positions: [
            {
                x: 45,
                y: 45
            },
            {
                x: 85,
                y: 25
            },
            {
                x: 15,
                y: 78
            }
        ],
        positionNote: ""
    },
    {
        id: "120",
        type: "rare",
        name: {
            en: "lake trout",
            fr: "le touladi",
            pt: "truta de lago"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2,3] },
            { rods: [1,2,3,5] },
            { moment: [0] }
        ],
        seasons: [
            true,
            false,
            false,
            false,
            false,
            false,
            false,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 5,
            max: 32
        },
        lbs: {
            min: 11.02,
            max: 70.55
        },
        map: "great-lakes",
        positions: [
            {
                x: 15,
                y: 80
            },
            {
                x: 40,
                y: 40
            },
            {
                x: 78,
                y: 88
            }
        ],
        positionNote: ""
    },
    {
        id: "121",
        type: "epic",
        name: {
            en: "longnose gar",
            fr: "lépisosté osseux",
            pt: "lepisosteus"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2] },
            { rods: [2,3,5] },
            { moment: [1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 5,
            max: 22
        },
        lbs: {
            min: 11.02,
            max: 48.50
        },
        map: "great-lakes",
        positions: [
            {
                x: 80,
                y: 10
            }
        ],
        positionNote: ""
    },
    {
        id: "122",
        type: "epic",
        name: {
            en: "american eel",
            fr: "anguille d'amérique",
            pt: "enguia-americana"
        },
        difficulty: 1,
        attributes: [
            { shadow: [2] },
            { rods: [2,3,5] },
            { moment: [0,1] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            true
        ],
        kgs: {
            min: 2,
            max: 7.3
        },
        lbs: {
            min: 4.41,
            max: 16.09
        },
        map: "great-lakes",
        positions: [
            {
                x: 90,
                y: 65
            }
        ],
        positionNote: ""
    },
    {
        id: "123",
        type: "epic",
        name: {
            en: "goldfish",
            fr: "poisson rouge",
            pt: "quinguio"
        },
        difficulty: 1,
        attributes: [
            { shadow: [0,1] },
            { rods: [2,3,5] },
            { moment: [0] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 0.1,
            max: 0.7
        },
        lbs: {
            min: 0.22,
            max: 1.54
        },
        map: "great-lakes",
        positions: [
            {
                x: 50,
                y: 70
            }
        ],
        positionNote: ""
    },
    {
        id: "124",
        type: "epic",
        name: {
            en: "lake sturgeon",
            fr: "esturgeon jaune",
            pt: "esturjão de lago"
        },
        difficulty: 1,
        attributes: [
            { shadow: [3,4] },
            { rods: [2,3,5] },
            { moment: [0,1] }
        ],
        seasons: [
            false,
            false,
            true,
            true,
            true,
            true,
            true,
            true,
            false,
            false,
            false,
            false
        ],
        kgs: {
            min: 5,
            max: 125
        },
        lbs: {
            min: 11.02,
            max: 275.58
        },
        map: "great-lakes",
        positions: [
            {
                x: 47,
                y: 10
            }
        ],
        positionNote: ""
    },
    {
        id: "125",
        type: "monster",
        name: {
            en: "bessie",
            fr: "bessie",
            pt: "bessie"
        },
        difficulty: 2,
        attributes: [
            { shadow: [] },
            { rods: [2,3,5] },
            { moment: [0] }
        ],
        seasons: [
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true,
            true
        ],
        kgs: {
            min: 200,
            max: 500
        },
        lbs: {
            min: 440.92,
            max: 1102.31
        },
        map: "great-lakes",
        positions: [
            {
                spot: "Spot\u00A01\u000ASouth",
                position: "left",
                x: 90,
                y: 65
            },
            {
                spot: "Spot\u00A02\u000AReeds\u00A0A",
                position: "left",
                x: 75,
                y: 65
            },
            {
                spot: "Spot\u00A03\u000AReeds\u00A0B",
                position: "top",
                x: 75,
                y: 80
            },
            {
                spot: "Spot\u00A04\u000AEast",
                position: "bottom",
                x: 70,
                y: 90
            },
        ],
        positionNote: "The spot changes everyday. Check Discord to know the current spot."
    },
]