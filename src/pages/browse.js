import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProteinItem from '../components/prokino/ProteinItem';
import GenericItem from '../components/prokino/GenericItem';
import SequenceItem from '../components/prokino/SequenceItem';
import { BASE_ENDPOINT } from '../components/prokino/Endpoints';
import Layout from '../components/Layout'
import { graphql } from 'gatsby';
//import av from '../../content/annotationviewerdata.json'

export default function Browse({ location, data }) { //{protein}
    const av = {
        "name": "Annotation Viewer Data",
        "content":
        {
            "CAMK1G": {
                "prokinoIdentifier": "Human_CAMK1G",
                "UniProt_ID": "Q96NX5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q3HNM6",
                        "organism": "Toxoplasma gondii",
                        "relevantPDBs": [
                            "3dxn-A",
                            "2jam-A",
                            "2jam-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q96NX5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3lij-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q5TCX8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3hzt-A"
                        ]
                    }
                ]
            },
            "MLK4": {
                "prokinoIdentifier": "Human_MLK4",
                "UniProt_ID": "Q5TCX8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P51813",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4uya-A"
                        ]
                    }
                ]
            },
            "BMX": {
                "prokinoIdentifier": "Human_BMX",
                "UniProt_ID": "P51813",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P51813",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3sxr-A",
                            "3sxr-B",
                            "3sxs-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8IV63",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6i99-A",
                            "6i99-B"
                        ]
                    }
                ]
            },
            "VRK3_PSK": {
                "prokinoIdentifier": "Human_VRK3_PSK",
                "UniProt_ID": "Q8IV63",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8IVH8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2jii-B",
                            "2jii-A"
                        ]
                    }
                ]
            },
            "KHS2": {
                "prokinoIdentifier": "Human_KHS2",
                "UniProt_ID": "Q8IVH8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P32577",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "5j5t-A"
                        ]
                    }
                ]
            },
            "CSK": {
                "prokinoIdentifier": "Human_CSK",
                "UniProt_ID": "P41240",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P41240",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1k9a-D",
                            "1k9a-A",
                            "1k9a-C",
                            "1k9a-B"
                        ]
                    },
                    {
                        "unpiprotId": "P07949",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1byg-A"
                        ]
                    }
                ]
            },
            "RET": {
                "prokinoIdentifier": "Human_RET",
                "UniProt_ID": "P07949",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P07949",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ivv-A",
                            "2ivu-A",
                            "2ivs-B",
                            "2ivs-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q92772",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ivt-A"
                        ]
                    }
                ]
            },
            "CDKL2": {
                "prokinoIdentifier": "Human_CDKL2",
                "UniProt_ID": "Q92772",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q92772",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bbm-A",
                            "4bbm-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q86YV6",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4aaa-A"
                        ]
                    }
                ]
            },
            "SGK085": {
                "prokinoIdentifier": "Human_SGK085",
                "UniProt_ID": "Q86YV6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14757",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2x4f-B",
                            "2x4f-A"
                        ]
                    }
                ]
            },
            "CHK1": {
                "prokinoIdentifier": "Human_CHK1",
                "UniProt_ID": "O14757",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14757",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1ia8-A",
                            "1nvq-A",
                            "1nvs-A",
                            "1zlt-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13705",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1nvr-A"
                        ]
                    }
                ]
            },
            "ACTR2B": {
                "prokinoIdentifier": "Human_ACTR2B",
                "UniProt_ID": "Q13705",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P37023",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2qlu-A"
                        ]
                    }
                ]
            },
            "ALK1": {
                "prokinoIdentifier": "Human_ALK1",
                "UniProt_ID": "P37023",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06782",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "3my0-A",
                            "3my0-C",
                            "3my0-B",
                            "3my0-D",
                            "3my0-E"
                        ]
                    }
                ]
            },
            "RSK2": {
                "prokinoIdentifier": "Human_RSK2",
                "UniProt_ID": "P51812",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P18654",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4gue-A",
                            "4nus-A",
                            "4el9-A",
                            "3g51-A"
                        ]
                    },
                    {
                        "unpiprotId": "P35968",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3ubd-A"
                        ]
                    }
                ]
            },
            "AMPKA2": {
                "prokinoIdentifier": "Human_AMPKA2",
                "UniProt_ID": "P54646",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06782",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "3dae-A"
                        ]
                    },
                    {
                        "unpiprotId": "P54646",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2h6d-A",
                            "3aqv-A",
                            "2fh9-A"
                        ]
                    },
                    {
                        "unpiprotId": "P54753",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2yza-A"
                        ]
                    }
                ]
            },
            "EPHB3": {
                "prokinoIdentifier": "Human_EPHB3",
                "UniProt_ID": "P54753",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P54753",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5l6o-A",
                            "3zfy-B",
                            "3zfy-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9UM73",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5l6p-A"
                        ]
                    }
                ]
            },
            "ALK": {
                "prokinoIdentifier": "Human_ALK",
                "UniProt_ID": "Q9UM73",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UM73",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2xp2-A",
                            "2xb7-A",
                            "2yhv-A",
                            "2yfx-A"
                        ]
                    },
                    {
                        "unpiprotId": "P41743",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2xba-A"
                        ]
                    }
                ]
            },
            "PKCI": {
                "prokinoIdentifier": "Human_PKCI",
                "UniProt_ID": "P41743",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P41743",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3a8x-B",
                            "3a8w-B",
                            "3a8x-A",
                            "3a8w-A"
                        ]
                    },
                    {
                        "unpiprotId": "O15075",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1zrz-A"
                        ]
                    }
                ]
            },
            "DCLK1": {
                "prokinoIdentifier": "Human_DCLK1",
                "UniProt_ID": "O15075",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O15075",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5jzj-B",
                            "5jzn-A",
                            "5jzj-A",
                            "5jzn-B"
                        ]
                    },
                    {
                        "unpiprotId": "A3FQ79",
                        "organism": "Cryptosporidium parvum (strain Iowa II)",
                        "relevantPDBs": [
                            "6kyq-A"
                        ]
                    }
                ]
            },
            "ERK7": {
                "prokinoIdentifier": "Human_ERK7",
                "UniProt_ID": "Q8TD08",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q2QDG8",
                        "organism": "Toxoplasma gondii",
                        "relevantPDBs": [
                            "3oz6-A",
                            "3oz6-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q86UE8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6v6a-A",
                            "6v6a-C"
                        ]
                    }
                ]
            },
            "TLK2": {
                "prokinoIdentifier": "Human_TLK2",
                "UniProt_ID": "Q86UE8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P54756",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5o0y-A"
                        ]
                    }
                ]
            },
            "EPHA5": {
                "prokinoIdentifier": "Human_EPHA5",
                "UniProt_ID": "P54756",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q61846",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2r2p-A"
                        ]
                    }
                ]
            },
            "MELK": {
                "prokinoIdentifier": "Human_MELK",
                "UniProt_ID": "Q14680",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q61846",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4cqg-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q14680",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bfm-A",
                            "4bky-A",
                            "4bl1-A"
                        ]
                    },
                    {
                        "unpiprotId": "O43741",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bkz-A"
                        ]
                    }
                ]
            },
            "AMPKA1": {
                "prokinoIdentifier": "Human_AMPKA1",
                "UniProt_ID": "Q13131",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P80386",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "4qfg-A",
                            "4qfs-A"
                        ]
                    },
                    {
                        "unpiprotId": "P80385",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "4cfh-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13131",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4qfr-A"
                        ]
                    },
                    {
                        "unpiprotId": "P06241",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4red-A"
                        ]
                    }
                ]
            },
            "FYN": {
                "prokinoIdentifier": "Human_FYN",
                "UniProt_ID": "P06241",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P08922",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2dq7-X"
                        ]
                    }
                ]
            },
            "ROS": {
                "prokinoIdentifier": "Human_ROS",
                "UniProt_ID": "P08922",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P08922",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3zbf-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q02948",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "4uxl-A"
                        ]
                    }
                ]
            },
            "PIK3R4": {
                "prokinoIdentifier": "Human_PIK3R4",
                "UniProt_ID": "Q99570",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P22543",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "5dfz-B"
                        ]
                    },
                    {
                        "unpiprotId": "P14635",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5kc2-B"
                        ]
                    }
                ]
            },
            "CDC2": {
                "prokinoIdentifier": "Human_CDC2",
                "UniProt_ID": "P06493",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06493",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4y72-A",
                            "4yc3-A"
                        ]
                    },
                    {
                        "unpiprotId": "P61024",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4yc6-A",
                            "4yc6-C",
                            "4yc6-E"
                        ]
                    }
                ]
            },
            "FLT3": {
                "prokinoIdentifier": "Human_FLT3",
                "UniProt_ID": "P36888",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P36888",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4xuf-A",
                            "1rjb-A",
                            "4rt7-A",
                            "4xuf-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q09013",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5x02-A"
                        ]
                    }
                ]
            },
            "DMPK1": {
                "prokinoIdentifier": "Human_DMPK1",
                "UniProt_ID": "Q09013",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13163",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vd5-A",
                            "2vd5-B"
                        ]
                    }
                ]
            },
            "ERK5": {
                "prokinoIdentifier": "Human_ERK5",
                "UniProt_ID": "Q13164",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13164",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ic7-A",
                            "4b99-A",
                            "4ic7-D"
                        ]
                    },
                    {
                        "unpiprotId": "Q15208",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ic8-B",
                            "4ic8-A"
                        ]
                    }
                ]
            },
            "NDR1": {
                "prokinoIdentifier": "Human_NDR1",
                "UniProt_ID": "Q15208",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O75385",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6bxi-B",
                            "6bxi-A"
                        ]
                    }
                ]
            },
            "ULK1": {
                "prokinoIdentifier": "Human_ULK1",
                "UniProt_ID": "O75385",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O75385",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4wnp-D",
                            "4wnp-A",
                            "4wnp-B",
                            "4wnp-C"
                        ]
                    },
                    {
                        "unpiprotId": "O75716",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4wno-A"
                        ]
                    }
                ]
            },
            "MPSK1": {
                "prokinoIdentifier": "Human_MPSK1",
                "UniProt_ID": "O75716",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q2M2I8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2buj-A",
                            "2buj-B"
                        ]
                    }
                ]
            },
            "AAK1": {
                "prokinoIdentifier": "Human_AAK1",
                "UniProt_ID": "Q2M2I8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q2M2I8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5l4q-A",
                            "5l4q-B",
                            "5te0-A"
                        ]
                    },
                    {
                        "unpiprotId": "P22607",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4wsq-A",
                            "4wsq-B"
                        ]
                    }
                ]
            },
            "FGFR3": {
                "prokinoIdentifier": "Human_FGFR3",
                "UniProt_ID": "P22607",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P22607",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6lvm-A",
                            "4k33-A"
                        ]
                    },
                    {
                        "unpiprotId": "A0A1S4NYE5",
                        "organism": "Serratia sp. (strain FS14)",
                        "relevantPDBs": [
                            "6pnx-A",
                            "6pnx-B"
                        ]
                    }
                ]
            },
            "NUAK1": {
                "prokinoIdentifier": "Human_NUAK1",
                "UniProt_ID": "O60285",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A0A1S4NYE5",
                        "organism": "Serratia sp. (strain FS14)",
                        "relevantPDBs": [
                            "5x1r-A",
                            "5x1q-A",
                            "5hnv-A",
                            "5x1s-A"
                        ]
                    },
                    {
                        "unpiprotId": "P52333",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5x1t-A"
                        ]
                    }
                ]
            },
            "TYK2_PSK": {
                "prokinoIdentifier": "Human_TYK2_PSK",
                "UniProt_ID": "P29597",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P29597",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3nz0-A",
                            "3nyx-A",
                            "3lxp-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9R117",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "3lxn-A"
                        ]
                    },
                    {
                        "unpiprotId": "P53671",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4e1z-A"
                        ]
                    }
                ]
            },
            "JAK3_PSK": {
                "prokinoIdentifier": "Human_JAK3_PSK",
                "UniProt_ID": "P52333",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P52333",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3lxl-A",
                            "3zc6-A",
                            "1yvj-A",
                            "3pjc-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q69Z98",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "3lxk-A"
                        ]
                    }
                ]
            },
            "BRSK2": {
                "prokinoIdentifier": "Human_BRSK2",
                "UniProt_ID": "Q8IWQ3",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q69Z98",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4yom-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q05397",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ynz-A",
                            "4ynz-B"
                        ]
                    }
                ]
            },
            "FAK": {
                "prokinoIdentifier": "Human_FAK",
                "UniProt_ID": "Q05397",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q05397",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ijm-B",
                            "2etm-A",
                            "2etm-B",
                            "2ijm-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q6P1C1",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1mp8-A"
                        ]
                    }
                ]
            },
            "RSK1": {
                "prokinoIdentifier": "Human_RSK1",
                "UniProt_ID": "Q15418",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15418",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2z7q-A",
                            "2z7s-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16513",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2z7r-A"
                        ]
                    }
                ]
            },
            "HGK": {
                "prokinoIdentifier": "Human_HGK",
                "UniProt_ID": "O95819",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O95819",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4obq-A",
                            "4obp-B",
                            "4obp-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8WZ42",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4obo-A",
                            "4obo-B"
                        ]
                    }
                ]
            },
            "TTN_PSK": {
                "prokinoIdentifier": "Human_TTN_PSK",
                "UniProt_ID": "Q8WZ42",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8WZ42",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4jnw-B",
                            "4jnw-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q59H18",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1tki-B",
                            "1tki-A"
                        ]
                    }
                ]
            },
            "HH498": {
                "prokinoIdentifier": "Human_HH498",
                "UniProt_ID": "Q59H18",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q59H18",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4yfi-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9P289",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4yff-B",
                            "4yff-D",
                            "4yff-A",
                            "4yff-C"
                        ]
                    }
                ]
            },
            "MST4": {
                "prokinoIdentifier": "Human_MST4",
                "UniProt_ID": "Q9P289",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9P289",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3ggf-A",
                            "3ggf-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Y376",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4fzf-B",
                            "4fzd-B",
                            "4fza-B"
                        ]
                    }
                ]
            },
            "KIT": {
                "prokinoIdentifier": "Human_KIT",
                "UniProt_ID": "P10721",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P10721",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4hvs-A"
                        ]
                    }
                ]
            },
            "BIKE": {
                "prokinoIdentifier": "Human_BIKE",
                "UniProt_ID": "Q9NSY1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NSY1",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5i3o-A",
                            "4w9w-A",
                            "5i3o-B",
                            "5i3r-A"
                        ]
                    },
                    {
                        "unpiprotId": "P49137",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4w9x-A"
                        ]
                    }
                ]
            },
            "MAPKAPK2": {
                "prokinoIdentifier": "Human_MAPKAPK2",
                "UniProt_ID": "P49137",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49137",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1nxk-B",
                            "1nxk-A",
                            "1nxk-C"
                        ]
                    },
                    {
                        "unpiprotId": "P24723",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1kwp-B",
                            "1kwp-A"
                        ]
                    }
                ]
            },
            "PKCH": {
                "prokinoIdentifier": "Human_PKCH",
                "UniProt_ID": "P24723",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P33981",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3txo-A"
                        ]
                    }
                ]
            },
            "TTK": {
                "prokinoIdentifier": "Human_TTK",
                "UniProt_ID": "P33981",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P33981",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2x9e-A",
                            "3cek-A",
                            "2zmd-A",
                            "3dbq-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9UKE5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2zmc-A"
                        ]
                    }
                ]
            },
            "TNIK": {
                "prokinoIdentifier": "Human_TNIK",
                "UniProt_ID": "Q9UKE5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O94804",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2x7f-E",
                            "2x7f-B",
                            "2x7f-C",
                            "2x7f-A",
                            "2x7f-D"
                        ]
                    }
                ]
            },
            "LOK": {
                "prokinoIdentifier": "Human_LOK",
                "UniProt_ID": "O94804",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O94804",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bc6-A",
                            "2j7t-A",
                            "4aot-B",
                            "4aot-A"
                        ]
                    },
                    {
                        "unpiprotId": "E9BQ78",
                        "organism": "Leishmania donovani (strain BPK282A1)",
                        "relevantPDBs": [
                            "4equ-A"
                        ]
                    }
                ]
            },
            "ERK1": {
                "prokinoIdentifier": "Human_ERK1",
                "UniProt_ID": "P27361",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P27361",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4qny-A",
                            "4qny-B"
                        ]
                    },
                    {
                        "unpiprotId": "B6KP12",
                        "organism": "Toxoplasma gondii (strain ATCC 50861 / VEG)",
                        "relevantPDBs": [
                            "2zoq-A",
                            "2zoq-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q07912",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3rp9-A"
                        ]
                    }
                ]
            },
            "ACK": {
                "prokinoIdentifier": "Human_ACK",
                "UniProt_ID": "Q07912",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q07912",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1u46-B",
                            "1u4d-B",
                            "1u46-A",
                            "1u4d-A"
                        ]
                    },
                    {
                        "unpiprotId": "O96013",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1u54-A"
                        ]
                    }
                ]
            },
            "PAK4": {
                "prokinoIdentifier": "Human_PAK4",
                "UniProt_ID": "O96013",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O96013",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2bva-B",
                            "2q0n-A",
                            "2cdz-A",
                            "2bva-A"
                        ]
                    },
                    {
                        "unpiprotId": "O75116",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2j0i-A"
                        ]
                    }
                ]
            },
            "ROCK2": {
                "prokinoIdentifier": "Human_ROCK2",
                "UniProt_ID": "O75116",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q28021",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "2f2u-B",
                            "4l6q-A",
                            "2f2u-A",
                            "4l6q-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q05609",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "2h9v-A"
                        ]
                    }
                ]
            },
            "ZAK": {
                "prokinoIdentifier": "Human_ZAK",
                "UniProt_ID": "Q9NYL2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q05609",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "3ppz-B",
                            "3ppz-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9NYL2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3p86-B",
                            "3p86-A"
                        ]
                    },
                    {
                        "unpiprotId": "P67870",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5hes-A"
                        ]
                    }
                ]
            },
            "CK2A1": {
                "prokinoIdentifier": "Human_CK2A1",
                "UniProt_ID": "P68400",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P28523",
                        "organism": "Zea mays (Maize)",
                        "relevantPDBs": [
                            "1ds5-B",
                            "1day-A",
                            "1ds5-A",
                            "1ds5-C"
                        ]
                    },
                    {
                        "unpiprotId": "P53350",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1daw-A"
                        ]
                    }
                ]
            },
            "PLK1": {
                "prokinoIdentifier": "Human_PLK1",
                "UniProt_ID": "P53350",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53350",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ou7-A",
                            "2owb-A",
                            "2rku-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Y6M4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2v5q-A",
                            "2v5q-B"
                        ]
                    }
                ]
            },
            "CK1G3": {
                "prokinoIdentifier": "Human_CK1G3",
                "UniProt_ID": "Q9Y6M4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Y6M4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2izs-A",
                            "2izu-A",
                            "2chl-A",
                            "2izr-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9HAZ1",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2izt-A"
                        ]
                    }
                ]
            },
            "CLK4": {
                "prokinoIdentifier": "Human_CLK4",
                "UniProt_ID": "Q9HAZ1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O76039",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6fyv-A"
                        ]
                    }
                ]
            },
            "CDKL5": {
                "prokinoIdentifier": "Human_CDKL5",
                "UniProt_ID": "O76039",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13418",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bgq-A"
                        ]
                    }
                ]
            },
            "ILK_PSK": {
                "prokinoIdentifier": "Human_ILK_PSK",
                "UniProt_ID": "Q13418",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NVD7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3rep-A",
                            "3kmu-A",
                            "6mib-A"
                        ]
                    },
                    {
                        "unpiprotId": "P04049",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3kmw-A"
                        ]
                    }
                ]
            },
            "RAF1": {
                "prokinoIdentifier": "Human_RAF1",
                "UniProt_ID": "P04049",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06213",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3omv-B",
                            "3omv-A"
                        ]
                    }
                ]
            },
            "INSR": {
                "prokinoIdentifier": "Human_INSR",
                "UniProt_ID": "P06213",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06213",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1irk-A",
                            "1gag-A",
                            "1i44-A",
                            "1ir3-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8RSY1",
                        "organism": "Pseudomonas syringae pv. tomato (strain ATCC BAA-871 / DC3000)",
                        "relevantPDBs": [
                            "1p14-A"
                        ]
                    }
                ]
            },
            "IRAK1": {
                "prokinoIdentifier": "Human_IRAK1",
                "UniProt_ID": "P51617",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q40234",
                        "organism": "Solanum pimpinellifolium (Currant tomato) (Lycopersicon pimpinellifolium)",
                        "relevantPDBs": [
                            "3hgk-B",
                            "3hgk-A",
                            "3hgk-C",
                            "3hgk-D"
                        ]
                    },
                    {
                        "unpiprotId": "P24276",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "2qkw-B"
                        ]
                    }
                ]
            },
            "NDR2": {
                "prokinoIdentifier": "Human_NDR2",
                "UniProt_ID": "Q9Y2H1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53894",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "4lqs-A",
                            "4lqq-A",
                            "4lqq-D",
                            "5ncl-A"
                        ]
                    },
                    {
                        "unpiprotId": "A8BZ95",
                        "organism": "Giardia intestinalis (strain ATCC 50803 / WB clone C6) (Giardia lamblia)",
                        "relevantPDBs": [
                            "4lqp-A"
                        ]
                    }
                ]
            },
            "CDK3": {
                "prokinoIdentifier": "Human_CDK3",
                "UniProt_ID": "Q00526",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A8BZ95",
                        "organism": "Giardia intestinalis (strain ATCC 50803 / WB clone C6) (Giardia lamblia)",
                        "relevantPDBs": [
                            "3gc0-A"
                        ]
                    },
                    {
                        "unpiprotId": "O53343",
                        "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
                        "relevantPDBs": [
                            "3gbz-A"
                        ]
                    }
                ]
            },
            "ADCK3": {
                "prokinoIdentifier": "Human_ADCK3",
                "UniProt_ID": "Q8NI60",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8NI60",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ped-A",
                            "5yk1-A"
                        ]
                    },
                    {
                        "unpiprotId": "O53343",
                        "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
                        "relevantPDBs": [
                            "5yk0-A",
                            "5yjz-A"
                        ]
                    },
                    {
                        "unpiprotId": "O28471",
                        "organism": "Archaeoglobus fulgidus (strain ATCC 49558 / VC-16 / DSM 4304 / JCM 9628 / NBRC 100126)",
                        "relevantPDBs": [
                            "5i35-A"
                        ]
                    }
                ]
            },
            "RIOK3": {
                "prokinoIdentifier": "Human_RIOK3",
                "UniProt_ID": "O14730",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O28471",
                        "organism": "Archaeoglobus fulgidus (strain ATCC 49558 / VC-16 / DSM 4304 / JCM 9628 / NBRC 100126)",
                        "relevantPDBs": [
                            "1zp9-C",
                            "1zp9-B",
                            "1zp9-D",
                            "1zp9-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q95RR8",
                        "organism": "Drosophila melanogaster (Fruit fly)",
                        "relevantPDBs": [
                            "1ztf-A"
                        ]
                    }
                ]
            },
            "PAN3_PSK": {
                "prokinoIdentifier": "Human_PAN3_PSK",
                "UniProt_ID": "Q58A45",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q7SDP4",
                        "organism": "Neurospora crassa (strain ATCC 24698 / 74-OR23-1A / CBS 708.71 / DSM 1257 / FGSC 987)",
                        "relevantPDBs": [
                            "4bwk-A",
                            "4bwk-B",
                            "4bwp-B",
                            "4bwp-A"
                        ]
                    },
                    {
                        "unpiprotId": "P53779",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bwx-A"
                        ]
                    }
                ]
            },
            "JNK3": {
                "prokinoIdentifier": "Human_JNK3",
                "UniProt_ID": "P53779",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53779",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1jnk-A",
                            "1pmv-A",
                            "1pmn-A",
                            "1pmu-A"
                        ]
                    },
                    {
                        "unpiprotId": "A5K4Q6",
                        "organism": "Plasmodium vivax (strain Salvador I)",
                        "relevantPDBs": [
                            "2b1p-A"
                        ]
                    }
                ]
            },
            "JNK1": {
                "prokinoIdentifier": "Human_JNK1",
                "UniProt_ID": "P45983",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9WVI9",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1ukh-A"
                        ]
                    },
                    {
                        "unpiprotId": "P45983",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2g01-A",
                            "2gmx-A",
                            "2g01-B"
                        ]
                    },
                    {
                        "unpiprotId": "O08908",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1uki-A"
                        ]
                    }
                ]
            },
            "FUSED": {
                "prokinoIdentifier": "Human_FUSED",
                "UniProt_ID": "Q9NRP7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P9WI69",
                        "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
                        "relevantPDBs": [
                            "5m07-B",
                            "5m08-A",
                            "5m07-A"
                        ]
                    },
                    {
                        "unpiprotId": "P06239",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5m06-B",
                            "5m06-A"
                        ]
                    }
                ]
            },
            "LCK": {
                "prokinoIdentifier": "Human_LCK",
                "UniProt_ID": "P06239",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06239",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1qpd-A",
                            "2of2-A",
                            "1qpj-A",
                            "1qpe-A"
                        ]
                    },
                    {
                        "unpiprotId": "P00518",
                        "organism": "Oryctolagus cuniculus (Rabbit)",
                        "relevantPDBs": [
                            "1qpc-A"
                        ]
                    }
                ]
            },
            "PHKG1": {
                "prokinoIdentifier": "Human_PHKG1",
                "UniProt_ID": "Q16816",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P00518",
                        "organism": "Oryctolagus cuniculus (Rabbit)",
                        "relevantPDBs": [
                            "1ql6-A",
                            "1phk-A"
                        ]
                    },
                    {
                        "unpiprotId": "P17948",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2phk-A"
                        ]
                    }
                ]
            },
            "FLT1": {
                "prokinoIdentifier": "Human_FLT1",
                "UniProt_ID": "P17948",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q5U3W1",
                        "organism": "Danio rerio (Zebrafish) (Brachydanio rerio)",
                        "relevantPDBs": [
                            "3hng-A"
                        ]
                    }
                ]
            },
            "SGK196": {
                "prokinoIdentifier": "Human_SGK196",
                "UniProt_ID": "Q9H5K3",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q3TUA9",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5gza-A",
                            "5gz8-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9WUL6",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5gz9-A"
                        ]
                    }
                ]
            },
            "NIK": {
                "prokinoIdentifier": "Human_NIK",
                "UniProt_ID": "Q99558",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q99558",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4g3d-A",
                            "4g3c-B",
                            "4g3c-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9H2X6",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4dn5-B",
                            "4dn5-A"
                        ]
                    }
                ]
            },
            "HIPK2": {
                "prokinoIdentifier": "Human_HIPK2",
                "UniProt_ID": "Q9H2X6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P15442",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "6p5s-A"
                        ]
                    }
                ]
            },
            "GCN2": {
                "prokinoIdentifier": "Human_GCN2",
                "UniProt_ID": "Q9P2K8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q00535",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1zxe-B",
                            "1zxe-D",
                            "1zxe-E",
                            "1zxe-A",
                            "1zxe-C"
                        ]
                    }
                ]
            },
            "JAK1_PSK": {
                "prokinoIdentifier": "Human_JAK1_PSK",
                "UniProt_ID": "P23458",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P23458",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4l01-B",
                            "4l01-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13043",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4l00-B",
                            "4l00-A"
                        ]
                    }
                ]
            },
            "CDK5": {
                "prokinoIdentifier": "Human_CDK5",
                "UniProt_ID": "Q00535",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15078",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1unh-A",
                            "1ung-A",
                            "1ung-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q92837",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1h4l-A",
                            "1h4l-B"
                        ]
                    }
                ]
            },
            "GSK3B": {
                "prokinoIdentifier": "Human_GSK3B",
                "UniProt_ID": "P49841",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49841",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1gng-B",
                            "1gng-A",
                            "1h8f-B",
                            "1h8f-A",
                            "1i09-A"
                        ]
                    }
                ]
            },
            "CK1G1": {
                "prokinoIdentifier": "Human_CK1G1",
                "UniProt_ID": "Q9HCP0",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O00141",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2cmw-A"
                        ]
                    }
                ]
            },
            "SGK1": {
                "prokinoIdentifier": "Human_SGK1",
                "UniProt_ID": "O00141",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O00141",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2r5t-A",
                            "3hdm-A"
                        ]
                    },
                    {
                        "unpiprotId": "P38111",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "3hdn-A"
                        ]
                    }
                ]
            },
            "ATR": {
                "prokinoIdentifier": "Human_ATR",
                "UniProt_ID": "Q13535",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q04377",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "5x6o-C"
                        ]
                    },
                    {
                        "unpiprotId": "Q13535",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6z2w-F",
                            "6z2w-E"
                        ]
                    },
                    {
                        "unpiprotId": "O43353",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5yz0-A",
                            "5yz0-B"
                        ]
                    }
                ]
            },
            "RIPK2": {
                "prokinoIdentifier": "Human_RIPK2",
                "UniProt_ID": "O43353",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O43353",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5ar3-A",
                            "5ar2-B",
                            "5ar2-A"
                        ]
                    },
                    {
                        "unpiprotId": "P21146",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "4c8b-A",
                            "4c8b-B"
                        ]
                    }
                ]
            },
            "BARK1": {
                "prokinoIdentifier": "Human_BARK1",
                "UniProt_ID": "P25098",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P21146",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "1ym7-B",
                            "1ym7-A",
                            "1ym7-D",
                            "1ym7-C"
                        ]
                    },
                    {
                        "unpiprotId": "P35790",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1omw-A"
                        ]
                    }
                ]
            },
            "ALK2": {
                "prokinoIdentifier": "Human_ALK2",
                "UniProt_ID": "Q04771",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P62942",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3h9r-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q04771",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3q4u-A",
                            "3oom-A"
                        ]
                    },
                    {
                        "unpiprotId": "P60006",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3mtf-A",
                            "3mtf-B"
                        ]
                    }
                ]
            },
            "BUBR1": {
                "prokinoIdentifier": "Human_BUBR1",
                "UniProt_ID": "O60566",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UM13",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6tlj-S"
                        ]
                    },
                    {
                        "unpiprotId": "O75914",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5khu-Q"
                        ]
                    }
                ]
            },
            "PAK3": {
                "prokinoIdentifier": "Human_PAK3",
                "UniProt_ID": "O75914",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13976",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6fd3-A"
                        ]
                    }
                ]
            },
            "PKG1": {
                "prokinoIdentifier": "Human_PKG1",
                "UniProt_ID": "Q13976",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13976",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6bg2-B",
                            "6bg2-C",
                            "6bg2-A"
                        ]
                    },
                    {
                        "unpiprotId": "P27448",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6bdl-B",
                            "6bdl-A"
                        ]
                    }
                ]
            },
            "MARK3": {
                "prokinoIdentifier": "Human_MARK3",
                "UniProt_ID": "P27448",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P27448",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2qnj-A",
                            "2qnj-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q13554",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3fe3-B",
                            "3fe3-A"
                        ]
                    }
                ]
            },
            "CAMK2B": {
                "prokinoIdentifier": "Human_CAMK2B",
                "UniProt_ID": "Q13554",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O95747",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3bhh-A",
                            "3bhh-C",
                            "3bhh-B",
                            "3bhh-D"
                        ]
                    }
                ]
            },
            "OSR1": {
                "prokinoIdentifier": "Human_OSR1",
                "UniProt_ID": "O95747",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O95747",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vwi-C",
                            "2vwi-A",
                            "2vwi-B",
                            "2vwi-D"
                        ]
                    },
                    {
                        "unpiprotId": "P28482",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dak-A"
                        ]
                    }
                ]
            },
            "ERK2": {
                "prokinoIdentifier": "Human_ERK2",
                "UniProt_ID": "P28482",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P63086",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1gol-A",
                            "1pme-A"
                        ]
                    },
                    {
                        "unpiprotId": "P28482",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1wzy-A",
                            "1tvo-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q39193",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "1erk-A"
                        ]
                    }
                ]
            },
            "QIK": {
                "prokinoIdentifier": "Human_QIK",
                "UniProt_ID": "Q9H0K1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13153",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3uc3-A"
                        ]
                    }
                ]
            },
            "PAK1": {
                "prokinoIdentifier": "Human_PAK1",
                "UniProt_ID": "Q13153",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13153",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1yhv-A",
                            "1yhw-A",
                            "2hy8-1"
                        ]
                    },
                    {
                        "unpiprotId": "Q9JLS3",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1f3m-C",
                            "1f3m-D"
                        ]
                    }
                ]
            },
            "TAO2": {
                "prokinoIdentifier": "Human_TAO2",
                "UniProt_ID": "Q9UL54",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9JLS3",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1u5r-A",
                            "1u5r-B",
                            "1u5q-B",
                            "1u5q-A"
                        ]
                    },
                    {
                        "unpiprotId": "P42527",
                        "organism": "Dictyostelium discoideum (Slime mold)",
                        "relevantPDBs": [
                            "2gcd-A"
                        ]
                    }
                ]
            },
            "EEF2K": {
                "prokinoIdentifier": "Human_EEF2K",
                "UniProt_ID": "O00418",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P42527",
                        "organism": "Dictyostelium discoideum (Slime mold)",
                        "relevantPDBs": [
                            "3lla-A",
                            "3lla-B",
                            "3lmh-A",
                            "3lmh-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q13627",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3lkm-A"
                        ]
                    }
                ]
            },
            "DYRK1A": {
                "prokinoIdentifier": "Human_DYRK1A",
                "UniProt_ID": "Q13627",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13627",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vx3-B",
                            "2vx3-A",
                            "2vx3-D",
                            "2vx3-C"
                        ]
                    },
                    {
                        "unpiprotId": "Q03137",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2wo6-A"
                        ]
                    }
                ]
            },
            "EPHA4": {
                "prokinoIdentifier": "Human_EPHA4",
                "UniProt_ID": "P54764",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q03137",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2y6o-A",
                            "2hel-A",
                            "2xyu-A"
                        ]
                    },
                    {
                        "unpiprotId": "P22455",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2y6m-A"
                        ]
                    }
                ]
            },
            "FGFR4": {
                "prokinoIdentifier": "Human_FGFR4",
                "UniProt_ID": "P22455",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P22455",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4qrc-A",
                            "4qqt-A",
                            "4qqc-A",
                            "4qq5-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16539",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4qqj-A"
                        ]
                    }
                ]
            },
            "P38A": {
                "prokinoIdentifier": "Human_P38A",
                "UniProt_ID": "Q16539",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16539",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1bl6-A",
                            "1bmk-A",
                            "1bl7-A",
                            "1a9u-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9HBH9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1di9-A"
                        ]
                    }
                ]
            },
            "MNK2": {
                "prokinoIdentifier": "Human_MNK2",
                "UniProt_ID": "Q9HBH9",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9HBH9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ac5-A",
                            "6cj5-A",
                            "2ac3-A",
                            "2hw7-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q15375",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6cje-A"
                        ]
                    }
                ]
            },
            "EPHA7": {
                "prokinoIdentifier": "Human_EPHA7",
                "UniProt_ID": "Q15375",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15375",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dko-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q5S007",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2rei-A"
                        ]
                    }
                ]
            },
            "LRRK2": {
                "prokinoIdentifier": "Human_LRRK2",
                "UniProt_ID": "Q5S007",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q5S007",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6vp6-C",
                            "6vp7-A",
                            "6vp6-A",
                            "6vp6-B"
                        ]
                    },
                    {
                        "unpiprotId": "O75154",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6vno-A"
                        ]
                    }
                ]
            },
            "ERK3": {
                "prokinoIdentifier": "Human_ERK3",
                "UniProt_ID": "Q16659",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16659",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6yky-D",
                            "6yky-A",
                            "6yky-B",
                            "6yky-C"
                        ]
                    },
                    {
                        "unpiprotId": "P31751",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6ylc-A"
                        ]
                    }
                ]
            },
            "AKT2": {
                "prokinoIdentifier": "Human_AKT2",
                "UniProt_ID": "P31751",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P31751",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1gzo-A",
                            "1mry-A",
                            "1gzk-A",
                            "1gzn-A"
                        ]
                    },
                    {
                        "unpiprotId": "P43403",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1mrv-A"
                        ]
                    }
                ]
            },
            "ZAP70": {
                "prokinoIdentifier": "Human_ZAP70",
                "UniProt_ID": "P43403",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P43403",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1u59-A",
                            "4k2r-A"
                        ]
                    },
                    {
                        "unpiprotId": "P54762",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2ozo-A"
                        ]
                    }
                ]
            },
            "EPHB1": {
                "prokinoIdentifier": "Human_EPHB1",
                "UniProt_ID": "P54762",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6INT1",
                        "organism": "Xenopus laevis (African clawed frog)",
                        "relevantPDBs": [
                            "3zfx-D",
                            "3zfx-E",
                            "3zfx-C",
                            "3zfx-A",
                            "3zfx-B"
                        ]
                    }
                ]
            },
            "IKKB": {
                "prokinoIdentifier": "Human_IKKB",
                "UniProt_ID": "O14920",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96KB5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3qa8-E",
                            "3qa8-B",
                            "3qa8-A",
                            "3qa8-D",
                            "3qa8-C"
                        ]
                    }
                ]
            },
            "PBK": {
                "prokinoIdentifier": "Human_PBK",
                "UniProt_ID": "Q96KB5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8N2I9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5j0a-B",
                            "5j0a-A"
                        ]
                    }
                ]
            },
            "STK40_PSK": {
                "prokinoIdentifier": "Human_STK40_PSK",
                "UniProt_ID": "Q8N2I9",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P43250",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5l2q-B",
                            "5l2q-D",
                            "5l2q-A",
                            "5l2q-C"
                        ]
                    }
                ]
            },
            "GPRK6": {
                "prokinoIdentifier": "Human_GPRK6",
                "UniProt_ID": "P43250",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P43250",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3nyn-B",
                            "2acx-B",
                            "2acx-A",
                            "3nyn-A"
                        ]
                    },
                    {
                        "unpiprotId": "O14976",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3nyo-A"
                        ]
                    }
                ]
            },
            "GAK": {
                "prokinoIdentifier": "Human_GAK",
                "UniProt_ID": "O14976",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14976",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4c57-A",
                            "4c57-B",
                            "4o38-A",
                            "4c58-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q473P7",
                        "organism": "Cupriavidus pinatubonensis (strain JMP 134 / LMG 1197) (Cupriavidus necator (strain JMP 134))",
                        "relevantPDBs": [
                            "4c59-A"
                        ]
                    }
                ]
            },
            "HPK1": {
                "prokinoIdentifier": "Human_HPK1",
                "UniProt_ID": "Q92918",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q92918",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6cqe-B",
                            "6cqf-A",
                            "6cqe-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q5TCY1",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6cqd-B",
                            "6cqd-A"
                        ]
                    }
                ]
            },
            "TTBK1": {
                "prokinoIdentifier": "Human_TTBK1",
                "UniProt_ID": "Q5TCY1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q5TCY1",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4btk-A",
                            "4btj-A",
                            "4btj-B"
                        ]
                    },
                    {
                        "unpiprotId": "O96214",
                        "organism": "Plasmodium falciparum",
                        "relevantPDBs": [
                            "4btm-A",
                            "4btm-B"
                        ]
                    }
                ]
            },
            "MAP2K3": {
                "prokinoIdentifier": "Human_MAP2K3",
                "UniProt_ID": "P46734",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q7YTF7",
                        "organism": "Plasmodium falciparum (isolate 3D7)",
                        "relevantPDBs": [
                            "2pml-X",
                            "2pmn-X"
                        ]
                    },
                    {
                        "unpiprotId": "Q9H4A3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2pmo-X"
                        ]
                    }
                ]
            },
            "WNK1_PSK": {
                "prokinoIdentifier": "Human_WNK1_PSK",
                "UniProt_ID": "Q9H4A3",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9H4A3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4pwn-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9JIH7",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "5tf9-B",
                            "5tf9-A",
                            "4q2a-A"
                        ]
                    },
                    {
                        "unpiprotId": "P21860",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5drb-A"
                        ]
                    }
                ]
            },
            "ERBB3_PSK": {
                "prokinoIdentifier": "Human_ERBB3_PSK",
                "UniProt_ID": "P21860",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P21860",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3kex-A",
                            "3lmg-B",
                            "3kex-B",
                            "3lmg-A"
                        ]
                    },
                    {
                        "unpiprotId": "P00533",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4riw-A"
                        ]
                    }
                ]
            },
            "SMMLCK": {
                "prokinoIdentifier": "Human_SMMLCK",
                "UniProt_ID": "Q15746",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q23551",
                        "organism": "Caenorhabditis elegans",
                        "relevantPDBs": [
                            "3hko-A",
                            "3uto-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16980",
                        "organism": "Aplysia californica (California sea hare)",
                        "relevantPDBs": [
                            "1koa-A"
                        ]
                    },
                    {
                        "unpiprotId": "P0C1S8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1kob-A",
                            "1kob-B"
                        ]
                    }
                ]
            },
            "WEE1B": {
                "prokinoIdentifier": "Human_WEE1B",
                "UniProt_ID": "P0C1S8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P16234",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5vdk-A"
                        ]
                    }
                ]
            },
            "PDGFRA": {
                "prokinoIdentifier": "Human_PDGFRA",
                "UniProt_ID": "P16234",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P16234",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5k5x-A",
                            "6joi-A",
                            "6a32-A",
                            "5grn-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9UK32",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6joj-A"
                        ]
                    }
                ]
            },
            "RSK4": {
                "prokinoIdentifier": "Human_RSK4",
                "UniProt_ID": "Q9UK32",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UK32",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6g77-A",
                            "6g76-B",
                            "6g77-B",
                            "6g76-A"
                        ]
                    },
                    {
                        "unpiprotId": "O43293",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6g78-A"
                        ]
                    }
                ]
            },
            "DAPK3": {
                "prokinoIdentifier": "Human_DAPK3",
                "UniProt_ID": "O43293",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O43293",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1yrp-B",
                            "1yrp-A",
                            "2j90-B",
                            "2j90-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16531",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3bhy-A"
                        ]
                    }
                ]
            },
            "CK1A": {
                "prokinoIdentifier": "Human_CK1A",
                "UniProt_ID": "P48729",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P48729",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5fqd-C",
                            "5fqd-F"
                        ]
                    },
                    {
                        "unpiprotId": "Q9W1M7",
                        "organism": "Drosophila melanogaster (Fruit fly)",
                        "relevantPDBs": [
                            "6gzd-A"
                        ]
                    }
                ]
            },
            "DRAK2": {
                "prokinoIdentifier": "Human_DRAK2",
                "UniProt_ID": "O94768",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O94768",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3lm5-A",
                            "6y6h-A",
                            "3lm0-A",
                            "6y6f-A"
                        ]
                    },
                    {
                        "unpiprotId": "D6WMX4",
                        "organism": "Tribolium castaneum (Red flour beetle)",
                        "relevantPDBs": [
                            "6qf4-A"
                        ]
                    }
                ]
            },
            "PINK1": {
                "prokinoIdentifier": "Human_PINK1",
                "UniProt_ID": "Q9BXM7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6VAB6",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5oat-D",
                            "5oat-C",
                            "5oat-B",
                            "5oat-E",
                            "5oat-A"
                        ]
                    }
                ]
            },
            "KSR2_PSK": {
                "prokinoIdentifier": "Human_KSR2_PSK",
                "UniProt_ID": "Q6VAB6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P29678",
                        "organism": "Oryctolagus cuniculus (Rabbit)",
                        "relevantPDBs": [
                            "7jus-B",
                            "5kkr-B",
                            "2y4i-B",
                            "7jur-B",
                            "7juq-B"
                        ]
                    }
                ]
            },
            "CDC7": {
                "prokinoIdentifier": "Human_CDC7",
                "UniProt_ID": "O00311",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UBU7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f9a-C",
                            "4f9a-A",
                            "4f9a-A"
                        ]
                    },
                    {
                        "unpiprotId": "P36507",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f99-A",
                            "4f99-A"
                        ]
                    }
                ]
            },
            "MAP2K2": {
                "prokinoIdentifier": "Human_MAP2K2",
                "UniProt_ID": "P36507",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P12956",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1s9i-A",
                            "1s9i-B"
                        ]
                    }
                ]
            },
            "DNAPK": {
                "prokinoIdentifier": "Human_DNAPK",
                "UniProt_ID": "P78527",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P78527",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5luq-A",
                            "6zfp-A",
                            "5w1r-A",
                            "5luq-B"
                        ]
                    },
                    {
                        "unpiprotId": "O43781",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5y3r-C"
                        ]
                    }
                ]
            },
            "DYRK3": {
                "prokinoIdentifier": "Human_DYRK3",
                "UniProt_ID": "O43781",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "F2YGR7",
                        "organism": "Toxoplasma gondii",
                        "relevantPDBs": [
                            "5y86-A"
                        ]
                    }
                ]
            },
            "MYT1": {
                "prokinoIdentifier": "Human_MYT1",
                "UniProt_ID": "Q99640",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q99640",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5vcv-A"
                        ]
                    },
                    {
                        "unpiprotId": "F2YGR7",
                        "organism": "Toxoplasma gondii",
                        "relevantPDBs": [
                            "3q5z-A",
                            "3q60-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9QZ85",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4lv5-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q00532",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3p1a-A"
                        ]
                    }
                ]
            },
            "CDKL1": {
                "prokinoIdentifier": "Human_CDKL1",
                "UniProt_ID": "Q00532",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P21802",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4agu-C",
                            "4agu-A",
                            "4agu-B"
                        ]
                    }
                ]
            },
            "FGFR2": {
                "prokinoIdentifier": "Human_FGFR2",
                "UniProt_ID": "P21802",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P21802",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1gjo-A",
                            "2psq-A",
                            "1oec-A",
                            "2psq-B"
                        ]
                    },
                    {
                        "unpiprotId": "P49759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2pvf-A"
                        ]
                    }
                ]
            },
            "CLK1": {
                "prokinoIdentifier": "Human_CLK1",
                "UniProt_ID": "P49759",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5j1v-A",
                            "1z57-A",
                            "5j1v-C",
                            "5j1v-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q9H4B4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vag-A"
                        ]
                    }
                ]
            },
            "JAK2_PSK": {
                "prokinoIdentifier": "Human_JAK2_PSK",
                "UniProt_ID": "O60674",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O60674",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2w1i-B",
                            "2b7a-A",
                            "2w1i-A",
                            "2b7a-B"
                        ]
                    },
                    {
                        "unpiprotId": "P15735",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2xa4-A"
                        ]
                    }
                ]
            },
            "PLK3": {
                "prokinoIdentifier": "Human_PLK3",
                "UniProt_ID": "Q9H4B4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14936",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4b6l-A"
                        ]
                    }
                ]
            },
            "CASK_PSK": {
                "prokinoIdentifier": "Human_CASK_PSK",
                "UniProt_ID": "O14936",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14936",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3c0g-A",
                            "3c0g-B",
                            "3c0i-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q4QE15",
                        "organism": "Leishmania major",
                        "relevantPDBs": [
                            "3c0h-B",
                            "3c0h-A"
                        ]
                    }
                ]
            },
            "GSK3A": {
                "prokinoIdentifier": "Human_GSK3A",
                "UniProt_ID": "P49840",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O15514",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3e3p-B",
                            "3e3p-A"
                        ]
                    }
                ]
            },
            "CDK7": {
                "prokinoIdentifier": "Human_CDK7",
                "UniProt_ID": "P50613",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P50613",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1ua2-A",
                            "1ua2-B",
                            "1ua2-C",
                            "1ua2-D"
                        ]
                    },
                    {
                        "unpiprotId": "P34925",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6o9l-8"
                        ]
                    }
                ]
            },
            "RYK": {
                "prokinoIdentifier": "Human_RYK",
                "UniProt_ID": "P34925",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P32361",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "6tua-A"
                        ]
                    }
                ]
            },
            "IRE1": {
                "prokinoIdentifier": "Human_IRE1",
                "UniProt_ID": "O75460",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P32361",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "3fbv-A",
                            "3fbv-C",
                            "3fbv-B"
                        ]
                    },
                    {
                        "unpiprotId": "P52564",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2rio-B",
                            "2rio-A"
                        ]
                    }
                ]
            },
            "MAP2K6": {
                "prokinoIdentifier": "Human_MAP2K6",
                "UniProt_ID": "P52564",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P52564",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3enm-D",
                            "3enm-C",
                            "3enm-B",
                            "3enm-A"
                        ]
                    },
                    {
                        "unpiprotId": "P29317",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3fme-A"
                        ]
                    }
                ]
            },
            "EPHA2": {
                "prokinoIdentifier": "Human_EPHA2",
                "UniProt_ID": "P29317",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P29317",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4pdo-A",
                            "1mqb-A",
                            "1mqb-B",
                            "4pdo-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q9UIK4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4p2k-A"
                        ]
                    }
                ]
            },
            "DAPK2": {
                "prokinoIdentifier": "Human_DAPK2",
                "UniProt_ID": "Q9UIK4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9LY23",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "1wmk-C",
                            "1wmk-F",
                            "1wmk-E",
                            "1wmk-A",
                            "1wmk-B"
                        ]
                    }
                ]
            },
            "CK2A2": {
                "prokinoIdentifier": "Human_CK2A2",
                "UniProt_ID": "P19784",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P15790",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "4jr7-A",
                            "3ofm-A",
                            "4jqe-A"
                        ]
                    },
                    {
                        "unpiprotId": "P19784",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3e3b-X"
                        ]
                    },
                    {
                        "unpiprotId": "P41279",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4fi1-A"
                        ]
                    }
                ]
            },
            "COT": {
                "prokinoIdentifier": "Human_COT",
                "UniProt_ID": "P41279",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P41279",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4y85-B",
                            "4y85-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13308",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4y83-B",
                            "4y83-C",
                            "4y83-A"
                        ]
                    }
                ]
            },
            "PTK7_PSK": {
                "prokinoIdentifier": "Human_PTK7_PSK",
                "UniProt_ID": "Q13308",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NWZ3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6vg3-C",
                            "6vg3-B",
                            "6vg3-A"
                        ]
                    }
                ]
            },
            "IRAK4": {
                "prokinoIdentifier": "Human_IRAK4",
                "UniProt_ID": "Q9NWZ3",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NWZ3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2nru-C",
                            "2nru-D",
                            "2nru-B",
                            "2nru-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q6IQ55",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2nry-A"
                        ]
                    }
                ]
            },
            "TTBK2": {
                "prokinoIdentifier": "Human_TTBK2",
                "UniProt_ID": "Q6IQ55",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6IQ55",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6u0k-A",
                            "6u0k-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q13546",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6vrf-A",
                            "6vrf-B"
                        ]
                    }
                ]
            },
            "RIPK1": {
                "prokinoIdentifier": "Human_RIPK1",
                "UniProt_ID": "Q13546",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13546",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4iti-B",
                            "4ith-B",
                            "4ith-A",
                            "4iti-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9P1W9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4itj-A"
                        ]
                    }
                ]
            },
            "PIM2": {
                "prokinoIdentifier": "Human_PIM2",
                "UniProt_ID": "Q9P1W9",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9P1W9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4x7q-B",
                            "4x7q-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96RR4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2iwi-A",
                            "2iwi-B"
                        ]
                    }
                ]
            },
            "CAMKK2": {
                "prokinoIdentifier": "Human_CAMKK2",
                "UniProt_ID": "Q96RR4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96RR4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5uy6-A",
                            "2zv2-A",
                            "5uyj-A",
                            "5vt1-A"
                        ]
                    },
                    {
                        "unpiprotId": "P23458",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5yv8-A"
                        ]
                    }
                ]
            },
            "DCLK3": {
                "prokinoIdentifier": "Human_DCLK3",
                "UniProt_ID": "Q9C098",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": []
            },
            "MST1": {
                "prokinoIdentifier": "Human_MST1",
                "UniProt_ID": "Q13043",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13043",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6yat-A",
                            "6yat-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q9NYY3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3com-B",
                            "3com-A"
                        ]
                    }
                ]
            },
            "PLK2": {
                "prokinoIdentifier": "Human_PLK2",
                "UniProt_ID": "Q9NYY3",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NYY3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4i6h-A",
                            "4i5p-A",
                            "4i6f-A",
                            "4i6b-A"
                        ]
                    },
                    {
                        "unpiprotId": "O15111",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4i5m-A"
                        ]
                    }
                ]
            },
            "IKKA": {
                "prokinoIdentifier": "Human_IKKA",
                "UniProt_ID": "O15111",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15418",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5ebz-C",
                            "5ebz-E",
                            "5ebz-B",
                            "5ebz-A",
                            "5ebz-D"
                        ]
                    }
                ]
            },
            "PKN2": {
                "prokinoIdentifier": "Human_PKN2",
                "UniProt_ID": "Q16513",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O60674",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4crs-A"
                        ]
                    }
                ]
            },
            "PHKG2": {
                "prokinoIdentifier": "Human_PHKG2",
                "UniProt_ID": "P15735",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P43405",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2y7j-B",
                            "2y7j-A",
                            "2y7j-D",
                            "2y7j-C"
                        ]
                    }
                ]
            },
            "SYK": {
                "prokinoIdentifier": "Human_SYK",
                "UniProt_ID": "P43405",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P43405",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1xba-A",
                            "3fqe-A",
                            "1xbc-A",
                            "1xbb-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Z1W9",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "3emg-A"
                        ]
                    }
                ]
            },
            "STLK3": {
                "prokinoIdentifier": "Human_STLK3",
                "UniProt_ID": "Q9UEW8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Z1W9",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5dbx-A",
                            "5dbx-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q92900",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5d9h-B",
                            "5d9h-A"
                        ]
                    }
                ]
            },
            "SMG1": {
                "prokinoIdentifier": "Human_SMG1",
                "UniProt_ID": "Q96Q15",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96Q15",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6l54-A",
                            "6z3r-A",
                            "6syt-A"
                        ]
                    },
                    {
                        "unpiprotId": "P07332",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6l53-A"
                        ]
                    }
                ]
            },
            "FES": {
                "prokinoIdentifier": "Human_FES",
                "UniProt_ID": "P07332",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P07332",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4e93-A",
                            "3cd3-A",
                            "3bkb-A",
                            "3cbl-A"
                        ]
                    },
                    {
                        "unpiprotId": "P36897",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6jmf-A"
                        ]
                    }
                ]
            },
            "TGFBR1": {
                "prokinoIdentifier": "Human_TGFBR1",
                "UniProt_ID": "P36897",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P62942",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1b6c-B",
                            "1b6c-D",
                            "1b6c-H",
                            "1b6c-F"
                        ]
                    },
                    {
                        "unpiprotId": "Q08345",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1ias-A"
                        ]
                    }
                ]
            },
            "DDR1": {
                "prokinoIdentifier": "Human_DDR1",
                "UniProt_ID": "Q08345",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q08345",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ckr-A",
                            "4bkj-B",
                            "4bkj-A"
                        ]
                    },
                    {
                        "unpiprotId": "P12931",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3zos-B",
                            "3zos-A"
                        ]
                    }
                ]
            },
            "SRC": {
                "prokinoIdentifier": "Human_SRC",
                "UniProt_ID": "P12931",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P12931",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1fmk-A",
                            "1yi6-B",
                            "1ksw-A",
                            "1yi6-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q63450",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1y57-A"
                        ]
                    }
                ]
            },
            "CAMK1A": {
                "prokinoIdentifier": "Human_CAMK1A",
                "UniProt_ID": "Q14012",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q14012",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4fg8-A",
                            "1a06-A",
                            "4fg8-B",
                            "4fg7-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q02750",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4fg9-A"
                        ]
                    }
                ]
            },
            "MAP2K1": {
                "prokinoIdentifier": "Human_MAP2K1",
                "UniProt_ID": "Q02750",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q02750",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2p55-A",
                            "3dy7-A",
                            "3dv3-A"
                        ]
                    },
                    {
                        "unpiprotId": "P29678",
                        "organism": "Oryctolagus cuniculus (Rabbit)",
                        "relevantPDBs": [
                            "2y4i-C"
                        ]
                    },
                    {
                        "unpiprotId": "P51812",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1s9j-A"
                        ]
                    }
                ]
            },
            "KDR": {
                "prokinoIdentifier": "Human_KDR",
                "UniProt_ID": "P35968",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P35968",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1vr2-A",
                            "1ywn-A",
                            "1y6b-A",
                            "1y6a-A"
                        ]
                    },
                    {
                        "unpiprotId": "O35904",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2oh4-A"
                        ]
                    }
                ]
            },
            "CAMK1B": {
                "prokinoIdentifier": "Human_CAMK1B",
                "UniProt_ID": "Q6P2M8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P32298",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4jrn-A"
                        ]
                    }
                ]
            },
            "GPRK4": {
                "prokinoIdentifier": "Human_GPRK4",
                "UniProt_ID": "P32298",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49841",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4yhj-A",
                            "4yhj-B"
                        ]
                    }
                ]
            },
            "AKT1": {
                "prokinoIdentifier": "Human_AKT1",
                "UniProt_ID": "P31749",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P31749",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3cqu-A",
                            "3o96-A",
                            "3mv5-A",
                            "3cqw-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q03656",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "3mvh-A"
                        ]
                    }
                ]
            },
            "MSSK1": {
                "prokinoIdentifier": "Human_MSSK1",
                "UniProt_ID": "Q9UPE1",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q03656",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "1q8z-B",
                            "1q8y-B",
                            "1q8z-A",
                            "1q8y-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13555",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1how-A"
                        ]
                    }
                ]
            },
            "CAMK2G": {
                "prokinoIdentifier": "Human_CAMK2G",
                "UniProt_ID": "Q13555",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A3FQ16",
                        "organism": "Cryptosporidium parvum (strain Iowa II)",
                        "relevantPDBs": [
                            "3mwu-A",
                            "2v7o-A",
                            "2wei-A",
                            "3igo-A"
                        ]
                    },
                    {
                        "unpiprotId": "P29597",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dfa-A"
                        ]
                    }
                ]
            },
            "LIMK2": {
                "prokinoIdentifier": "Human_LIMK2",
                "UniProt_ID": "P53671",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53671",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4tpt-B",
                            "4tpt-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9NQS7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5nxd-B",
                            "5nxd-A"
                        ]
                    }
                ]
            },
            "AURC": {
                "prokinoIdentifier": "Human_AURC",
                "UniProt_ID": "Q9UQB9",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UQB9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6gr9-A"
                        ]
                    },
                    {
                        "unpiprotId": "P55144",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "6gr8-A"
                        ]
                    }
                ]
            },
            "TYRO3": {
                "prokinoIdentifier": "Human_TYRO3",
                "UniProt_ID": "Q06418",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P55144",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4ff8-A",
                            "4feq-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q62838",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "3qup-A"
                        ]
                    }
                ]
            },
            "MUSK": {
                "prokinoIdentifier": "Human_MUSK",
                "UniProt_ID": "O15146",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9BUB5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1luf-A"
                        ]
                    }
                ]
            },
            "MNK1": {
                "prokinoIdentifier": "Human_MNK1",
                "UniProt_ID": "Q9BUB5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9BUB5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5wvd-B",
                            "5wvd-A"
                        ]
                    },
                    {
                        "unpiprotId": "O14733",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2hw6-A",
                            "2hw6-B"
                        ]
                    }
                ]
            },
            "MAP2K7": {
                "prokinoIdentifier": "Human_MAP2K7",
                "UniProt_ID": "O14733",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14733",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3wzu-A",
                            "5b2k-A",
                            "5b2m-A",
                            "5b2l-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8N9N8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2dyl-A"
                        ]
                    }
                ]
            },
            "RIOK1": {
                "prokinoIdentifier": "Human_RIOK1",
                "UniProt_ID": "Q9BRS2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9ULX3",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6g5i-z",
                            "6zxe-z",
                            "6zxf-z"
                        ]
                    },
                    {
                        "unpiprotId": "Q9BRS2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4otp-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q86YV5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6zxd-z"
                        ]
                    }
                ]
            },
            "SGK223": {
                "prokinoIdentifier": "Human_SGK223",
                "UniProt_ID": "Q86YV5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "D3ZMK9",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "5ve6-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13188",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6ewx-B",
                            "6ewx-A"
                        ]
                    }
                ]
            },
            "MST2": {
                "prokinoIdentifier": "Human_MST2",
                "UniProt_ID": "Q13188",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9D2Y4",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4lg4-D",
                            "4lg4-C",
                            "4lg4-A",
                            "4lg4-B",
                            "4lg4-E"
                        ]
                    }
                ]
            },
            "MLKL_PSK": {
                "prokinoIdentifier": "Human_MLKL_PSK",
                "UniProt_ID": "Q8NB16",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9D2Y4",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4btf-A",
                            "4m68-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9QZL0",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4m69-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q8NB16",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4m67-A"
                        ]
                    },
                    {
                        "unpiprotId": "E7FBB8",
                        "organism": "Danio rerio (Zebrafish) (Brachydanio rerio)",
                        "relevantPDBs": [
                            "4mwi-A"
                        ]
                    }
                ]
            },
            "FAM20C": {
                "prokinoIdentifier": "Human_FAM20C",
                "UniProt_ID": "Q8IXL6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P42684",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5yh0-A",
                            "5yh0-E",
                            "5yh0-C",
                            "5yh0-B",
                            "5yh0-D"
                        ]
                    }
                ]
            },
            "ABL2": {
                "prokinoIdentifier": "Human_ABL2",
                "UniProt_ID": "P42684",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P42684",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2xyn-A",
                            "2xyn-C",
                            "3hmi-A",
                            "2xyn-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q96Q04",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3gvu-A"
                        ]
                    }
                ]
            },
            "LMR3": {
                "prokinoIdentifier": "Human_LMR3",
                "UniProt_ID": "Q96Q04",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13882",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6seq-A"
                        ]
                    }
                ]
            },
            "BRK": {
                "prokinoIdentifier": "Human_BRK",
                "UniProt_ID": "Q13882",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13882",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5d7v-C",
                            "5d7v-D",
                            "5d7v-B",
                            "5d7v-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8TF76",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5da3-A"
                        ]
                    }
                ]
            },
            "HASPIN_PSK": {
                "prokinoIdentifier": "Human_HASPIN_PSK",
                "UniProt_ID": "Q8TF76",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8TF76",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dlz-A",
                            "2wb8-A",
                            "3f2n-A",
                            "2vuw-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q15831",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3e7v-A"
                        ]
                    }
                ]
            },
            "STRADA_PSK": {
                "prokinoIdentifier": "Human_STRADA_PSK",
                "UniProt_ID": "Q7RTN6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Y376",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2wtk-E",
                            "2wtk-B"
                        ]
                    },
                    {
                        "unpiprotId": "P00533",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3gni-B"
                        ]
                    }
                ]
            },
            "EGFR": {
                "prokinoIdentifier": "Human_EGFR",
                "UniProt_ID": "P00533",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P00533",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2eb2-A",
                            "1m14-A",
                            "1m17-A",
                            "2eb3-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Y259",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1xkk-A"
                        ]
                    }
                ]
            },
            "MSK1": {
                "prokinoIdentifier": "Human_MSK1",
                "UniProt_ID": "O75582",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P80192",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1vzo-A"
                        ]
                    }
                ]
            },
            "CK1G2": {
                "prokinoIdentifier": "Human_CK1G2",
                "UniProt_ID": "P78368",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P40233",
                        "organism": "Schizosaccharomyces pombe (strain 972 / ATCC 24843) (Fission yeast)",
                        "relevantPDBs": [
                            "2c47-B",
                            "1csn-A",
                            "2c47-A"
                        ]
                    },
                    {
                        "unpiprotId": "P10721",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1eh4-A",
                            "1eh4-B"
                        ]
                    }
                ]
            },
            "FMS": {
                "prokinoIdentifier": "Human_FMS",
                "UniProt_ID": "P07333",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P10721",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1t46-A",
                            "1pkg-A",
                            "1pkg-B"
                        ]
                    },
                    {
                        "unpiprotId": "P07333",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1t45-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16566",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2i0v-A"
                        ]
                    }
                ]
            },
            "CAMK4": {
                "prokinoIdentifier": "Human_CAMK4",
                "UniProt_ID": "Q16566",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q5CYL9",
                        "organism": "Cryptosporidium parvum (strain Iowa II)",
                        "relevantPDBs": [
                            "2qg5-D",
                            "2qg5-B",
                            "2w4o-A",
                            "2qg5-A"
                        ]
                    },
                    {
                        "unpiprotId": "P29322",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3f3z-A"
                        ]
                    }
                ]
            },
            "EPHA8": {
                "prokinoIdentifier": "Human_EPHA8",
                "UniProt_ID": "P29322",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14965",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3kul-B",
                            "3kul-A"
                        ]
                    }
                ]
            },
            "AURA": {
                "prokinoIdentifier": "Human_AURA",
                "UniProt_ID": "O14965",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O14965",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1muo-A",
                            "1ol7-A",
                            "1mq4-A",
                            "1ol6-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q99683",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1ol5-A"
                        ]
                    }
                ]
            },
            "MAP3K5": {
                "prokinoIdentifier": "Human_MAP3K5",
                "UniProt_ID": "Q99683",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q99683",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4bf2-A",
                            "2clq-B",
                            "2clq-A"
                        ]
                    },
                    {
                        "unpiprotId": "O08679",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "3vw6-A",
                            "3vw6-B"
                        ]
                    }
                ]
            },
            "MARK2": {
                "prokinoIdentifier": "Human_MARK2",
                "UniProt_ID": "Q7KZI7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O08679",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1zmu-B",
                            "1y8g-B",
                            "1zmu-A",
                            "1y8g-A"
                        ]
                    },
                    {
                        "unpiprotId": "P17252",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1zmv-A"
                        ]
                    }
                ]
            },
            "PKCA": {
                "prokinoIdentifier": "Human_PKCA",
                "UniProt_ID": "P17252",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P17252",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3iw4-C",
                            "3iw4-B",
                            "3iw4-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8IYT8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ra4-A"
                        ]
                    }
                ]
            },
            "ULK2": {
                "prokinoIdentifier": "Human_ULK2",
                "UniProt_ID": "Q8IYT8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8IYT8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6qat-A",
                            "6qat-C",
                            "6qat-D",
                            "6qat-B"
                        ]
                    },
                    {
                        "unpiprotId": "P37173",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6qau-A"
                        ]
                    }
                ]
            },
            "TGFBR2": {
                "prokinoIdentifier": "Human_TGFBR2",
                "UniProt_ID": "P37173",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P37173",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5e92-A",
                            "5e8y-A",
                            "5e8v-A",
                            "5qin-A"
                        ]
                    },
                    {
                        "unpiprotId": "P05132",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5e91-A"
                        ]
                    }
                ]
            },
            "PKACA": {
                "prokinoIdentifier": "Human_PKACA",
                "UniProt_ID": "P17612",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P63248",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1apm-E"
                        ]
                    },
                    {
                        "unpiprotId": "P05132",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1bkx-A",
                            "1bx6-A"
                        ]
                    },
                    {
                        "unpiprotId": "P36887",
                        "organism": "Sus scrofa (Pig)",
                        "relevantPDBs": [
                            "1atp-E"
                        ]
                    },
                    {
                        "unpiprotId": "P42337",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1cdk-A"
                        ]
                    }
                ]
            },
            "MRCKB": {
                "prokinoIdentifier": "Human_MRCKB",
                "UniProt_ID": "Q9Y5S2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Y5S2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3qfv-B",
                            "3tku-A",
                            "3qfv-A",
                            "3tku-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q9LMN2",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "4uak-A"
                        ]
                    }
                ]
            },
            "FRK": {
                "prokinoIdentifier": "Human_FRK",
                "UniProt_ID": "P42685",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O15530",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6ka4-A",
                            "6ka4-C",
                            "6ka4-D",
                            "6ka4-B"
                        ]
                    }
                ]
            },
            "PDK1": {
                "prokinoIdentifier": "Human_PDK1",
                "UniProt_ID": "O15530",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O15530",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1oky-A",
                            "1uu3-A",
                            "1okz-A",
                            "1uu7-A"
                        ]
                    },
                    {
                        "unpiprotId": "A5H025",
                        "organism": "Sus scrofa (Pig)",
                        "relevantPDBs": [
                            "1h1w-A"
                        ]
                    }
                ]
            },
            "RNASEL": {
                "prokinoIdentifier": "Human_RNASEL",
                "UniProt_ID": "Q05823",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A5H025",
                        "organism": "Sus scrofa (Pig)",
                        "relevantPDBs": [
                            "4o1o-A",
                            "4o1o-B",
                            "4o1o-D",
                            "4o1o-C"
                        ]
                    },
                    {
                        "unpiprotId": "P11309",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4o1p-A"
                        ]
                    }
                ]
            },
            "PIM1": {
                "prokinoIdentifier": "Human_PIM1",
                "UniProt_ID": "P11309",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P11309",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1yhs-A",
                            "1xqz-A",
                            "1yi3-A",
                            "1xr1-A"
                        ]
                    },
                    {
                        "unpiprotId": "P54763",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1xws-A"
                        ]
                    }
                ]
            },
            "EPHB2": {
                "prokinoIdentifier": "Human_EPHB2",
                "UniProt_ID": "P29323",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P54763",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1jpa-B",
                            "1jpa-A"
                        ]
                    },
                    {
                        "unpiprotId": "P15056",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2hen-C",
                            "2hen-A",
                            "2hen-B"
                        ]
                    }
                ]
            },
            "BRAF": {
                "prokinoIdentifier": "Human_BRAF",
                "UniProt_ID": "P15056",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P15056",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1uwj-B",
                            "1uwh-A",
                            "1uwj-A",
                            "1uwh-B"
                        ]
                    },
                    {
                        "unpiprotId": "P61024",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2fb8-A"
                        ]
                    }
                ]
            },
            "CDK2": {
                "prokinoIdentifier": "Human_CDK2",
                "UniProt_ID": "P24941",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P24941",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1aq1-A",
                            "1b38-A",
                            "1buh-A",
                            "1ckp-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8IL19",
                        "organism": "Plasmodium falciparum (isolate 3D7)",
                        "relevantPDBs": [
                            "1b39-A"
                        ]
                    }
                ]
            },
            "CLK2": {
                "prokinoIdentifier": "Human_CLK2",
                "UniProt_ID": "P49760",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49760",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3nr9-C",
                            "3llt-A",
                            "3nr9-B",
                            "3nr9-A"
                        ]
                    },
                    {
                        "unpiprotId": "O43683",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5unp-A"
                        ]
                    }
                ]
            },
            "BUB1": {
                "prokinoIdentifier": "Human_BUB1",
                "UniProt_ID": "O43683",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O43683",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4qpm-A",
                            "4r8q-A",
                            "4qpm-B"
                        ]
                    },
                    {
                        "unpiprotId": "P43249",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "5dmz-B",
                            "5dmz-A"
                        ]
                    }
                ]
            },
            "GPRK5": {
                "prokinoIdentifier": "Human_GPRK5",
                "UniProt_ID": "P34947",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A0A094NJQ6",
                        "organism": "Podiceps cristatus (Great crested grebe)",
                        "relevantPDBs": [
                            "4wnk-A"
                        ]
                    },
                    {
                        "unpiprotId": "P34947",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6pjx-A",
                            "4tnd-A"
                        ]
                    },
                    {
                        "unpiprotId": "O30245",
                        "organism": "Archaeoglobus fulgidus (strain ATCC 49558 / VC-16 / DSM 4304 / JCM 9628 / NBRC 100126)",
                        "relevantPDBs": [
                            "4tnb-A"
                        ]
                    }
                ]
            },
            "RIOK2": {
                "prokinoIdentifier": "Human_RIOK2",
                "UniProt_ID": "Q9BVS4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O30245",
                        "organism": "Archaeoglobus fulgidus (strain ATCC 49558 / VC-16 / DSM 4304 / JCM 9628 / NBRC 100126)",
                        "relevantPDBs": [
                            "1tqm-A",
                            "1zao-A",
                            "1zar-A",
                            "1tqi-A"
                        ]
                    },
                    {
                        "unpiprotId": "O13024",
                        "organism": "Xenopus laevis (African clawed frog)",
                        "relevantPDBs": [
                            "1tqp-A"
                        ]
                    }
                ]
            },
            "AURB": {
                "prokinoIdentifier": "Human_AURB",
                "UniProt_ID": "Q96GD4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6DE08",
                        "organism": "Xenopus laevis (African clawed frog)",
                        "relevantPDBs": [
                            "2bfy-B",
                            "2bfy-A",
                            "2bfx-B",
                            "2bfx-A"
                        ]
                    },
                    {
                        "unpiprotId": "P35568",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vgo-A"
                        ]
                    }
                ]
            },
            "IGF1R": {
                "prokinoIdentifier": "Human_IGF1R",
                "UniProt_ID": "P08069",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P08069",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1jqh-B",
                            "1jqh-A",
                            "1jqh-C",
                            "1k3a-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9P0L2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1m7n-A"
                        ]
                    }
                ]
            },
            "MARK1": {
                "prokinoIdentifier": "Human_MARK1",
                "UniProt_ID": "Q9P0L2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53778",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2hak-E",
                            "2hak-D",
                            "2hak-A",
                            "2hak-B",
                            "2hak-C"
                        ]
                    }
                ]
            },
            "P38G": {
                "prokinoIdentifier": "Human_P38G",
                "UniProt_ID": "P53778",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53778",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1cm8-A",
                            "1cm8-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q16288",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6una-A",
                            "6una-B"
                        ]
                    }
                ]
            },
            "TRKC": {
                "prokinoIdentifier": "Human_TRKC",
                "UniProt_ID": "Q16288",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16288",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ymj-B",
                            "6kzc-A",
                            "4ymj-A"
                        ]
                    },
                    {
                        "unpiprotId": "P19525",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3v5q-B",
                            "3v5q-A"
                        ]
                    }
                ]
            },
            "PKR": {
                "prokinoIdentifier": "Human_PKR",
                "UniProt_ID": "P19525",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P20459",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "2a19-B",
                            "2a19-C"
                        ]
                    },
                    {
                        "unpiprotId": "P19525",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3uiu-A",
                            "3uiu-B"
                        ]
                    },
                    {
                        "unpiprotId": "P08631",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2a1a-B"
                        ]
                    }
                ]
            },
            "HCK": {
                "prokinoIdentifier": "Human_HCK",
                "UniProt_ID": "P08631",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P08631",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1ad5-B",
                            "1qcf-A",
                            "1ad5-A"
                        ]
                    },
                    {
                        "unpiprotId": "P54760",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2c0i-B",
                            "2c0i-A"
                        ]
                    }
                ]
            },
            "EPHB4": {
                "prokinoIdentifier": "Human_EPHB4",
                "UniProt_ID": "P54760",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P54760",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vwu-A",
                            "2vwx-A",
                            "2vww-A",
                            "2vwy-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8WU08",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vwv-A"
                        ]
                    }
                ]
            },
            "YANK1": {
                "prokinoIdentifier": "Human_YANK1",
                "UniProt_ID": "Q8WU08",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q01974",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4fr4-D",
                            "4fr4-E",
                            "4fr4-A",
                            "4fr4-B",
                            "4fr4-C"
                        ]
                    }
                ]
            },
            "ROR2": {
                "prokinoIdentifier": "Human_ROR2",
                "UniProt_ID": "Q01974",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q01974",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4gt4-B",
                            "4gt4-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96RG2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3zzw-B",
                            "3zzw-A"
                        ]
                    }
                ]
            },
            "PASK": {
                "prokinoIdentifier": "Human_PASK",
                "UniProt_ID": "Q96RG2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P04626",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dls-C",
                            "3dls-E",
                            "3dls-D",
                            "3dls-B",
                            "3dls-A"
                        ]
                    }
                ]
            },
            "ERBB2": {
                "prokinoIdentifier": "Human_ERBB2",
                "UniProt_ID": "P04626",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P04626",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3rcd-C",
                            "3rcd-B",
                            "3rcd-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q02763",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3pp0-A",
                            "3pp0-B"
                        ]
                    }
                ]
            },
            "TIE2": {
                "prokinoIdentifier": "Human_TIE2",
                "UniProt_ID": "Q02763",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q02763",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2p4i-A",
                            "2oo8-X",
                            "1fvr-B",
                            "1fvr-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9BYP7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2osc-A"
                        ]
                    }
                ]
            },
            "WNK3_PSK": {
                "prokinoIdentifier": "Human_WNK3_PSK",
                "UniProt_ID": "Q9BYP7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9BYP7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5o1v-B",
                            "5o21-B",
                            "5o21-A",
                            "5o1v-A"
                        ]
                    },
                    {
                        "unpiprotId": "O00238",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5o23-A"
                        ]
                    }
                ]
            },
            "BMPR1B": {
                "prokinoIdentifier": "Human_BMPR1B",
                "UniProt_ID": "O00238",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P48736",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3mdy-C",
                            "3mdy-A"
                        ]
                    }
                ]
            },
            "CAMKK1": {
                "prokinoIdentifier": "Human_CAMKK1",
                "UniProt_ID": "Q8N5S9",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8N5S9",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6ccf-A",
                            "6ccf-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q14004",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6cd6-C",
                            "6cd6-A",
                            "6cd6-B"
                        ]
                    }
                ]
            },
            "CHED": {
                "prokinoIdentifier": "Human_CHED",
                "UniProt_ID": "Q14004",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O75909",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5efq-A",
                            "5efq-C"
                        ]
                    }
                ]
            },
            "DYRK2": {
                "prokinoIdentifier": "Human_DYRK2",
                "UniProt_ID": "Q92630",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q92630",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3k2l-A",
                            "5lxc-A",
                            "3kvw-A",
                            "5lxc-B"
                        ]
                    },
                    {
                        "unpiprotId": "P11362",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4azf-A"
                        ]
                    }
                ]
            },
            "FGFR1": {
                "prokinoIdentifier": "Human_FGFR1",
                "UniProt_ID": "P11362",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P11362",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1agw-B",
                            "1agw-A",
                            "1fgk-A"
                        ]
                    },
                    {
                        "unpiprotId": "P51955",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1fgi-A",
                            "1fgi-B"
                        ]
                    }
                ]
            },
            "NEK2": {
                "prokinoIdentifier": "Human_NEK2",
                "UniProt_ID": "P51955",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P51955",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2jav-A",
                            "2w5b-A",
                            "2wqo-A",
                            "2w5h-A"
                        ]
                    },
                    {
                        "unpiprotId": "P68403",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "2w5a-A"
                        ]
                    }
                ]
            },
            "PKCB": {
                "prokinoIdentifier": "Human_PKCB",
                "UniProt_ID": "P05771",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P05771",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3pfq-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q6XHB2",
                        "organism": "Dictyostelium discoideum (Slime mold)",
                        "relevantPDBs": [
                            "2i0e-B",
                            "2i0e-A"
                        ]
                    }
                ]
            },
            "TAK1": {
                "prokinoIdentifier": "Human_TAK1",
                "UniProt_ID": "O43318",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6XHB2",
                        "organism": "Dictyostelium discoideum (Slime mold)",
                        "relevantPDBs": [
                            "4f0g-A",
                            "4f1m-A"
                        ]
                    },
                    {
                        "unpiprotId": "O43318",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f0f-A",
                            "2eva-A"
                        ]
                    },
                    {
                        "unpiprotId": "P9WI73",
                        "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
                        "relevantPDBs": [
                            "2yiy-A"
                        ]
                    }
                ]
            },
            "TAO3": {
                "prokinoIdentifier": "Human_TAO3",
                "UniProt_ID": "Q9H2K8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P9WI73",
                        "organism": "Mycobacterium tuberculosis (strain ATCC 25618 / H37Rv)",
                        "relevantPDBs": [
                            "2pzi-B",
                            "2pzi-A",
                            "4y12-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9H2K8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4y0x-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96L34",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6bdn-A"
                        ]
                    }
                ]
            },
            "MARK4": {
                "prokinoIdentifier": "Human_MARK4",
                "UniProt_ID": "Q96L34",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A0A238LNS4",
                        "organism": "Saccharum officinarum x Saccharum spontaneum",
                        "relevantPDBs": [
                            "5es1-A"
                        ]
                    },
                    {
                        "unpiprotId": "P29320",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5wax-A",
                            "5wax-B"
                        ]
                    }
                ]
            },
            "EPHA3": {
                "prokinoIdentifier": "Human_EPHA3",
                "UniProt_ID": "P29320",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P29320",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2qob-A",
                            "2qo9-A",
                            "2qo2-A",
                            "2qo7-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q06187",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2gsf-A"
                        ]
                    }
                ]
            },
            "BTK": {
                "prokinoIdentifier": "Human_BTK",
                "UniProt_ID": "Q06187",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q06187",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1k2p-A",
                            "3k54-A",
                            "3ocs-A",
                            "1k2p-B"
                        ]
                    },
                    {
                        "unpiprotId": "O62305",
                        "organism": "Caenorhabditis elegans",
                        "relevantPDBs": [
                            "3gen-A"
                        ]
                    }
                ]
            },
            "CAMK2D": {
                "prokinoIdentifier": "Human_CAMK2D",
                "UniProt_ID": "Q13557",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P0DP23",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2bdw-A",
                            "2bdw-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q13557",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2vn9-A",
                            "2vn9-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q12866",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2wel-A"
                        ]
                    }
                ]
            },
            "MER": {
                "prokinoIdentifier": "Human_MER",
                "UniProt_ID": "Q12866",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q12866",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2p0c-A",
                            "2p0c-B"
                        ]
                    },
                    {
                        "unpiprotId": "P49674",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3bpr-A",
                            "3bpr-C",
                            "3bpr-B"
                        ]
                    }
                ]
            },
            "CK1E": {
                "prokinoIdentifier": "Human_CK1E",
                "UniProt_ID": "P49674",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49674",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4hok-E",
                            "4hok-C",
                            "4hok-A"
                        ]
                    },
                    {
                        "unpiprotId": "O15264",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4hni-A",
                            "4hni-B"
                        ]
                    }
                ]
            },
            "P38D": {
                "prokinoIdentifier": "Human_P38D",
                "UniProt_ID": "O15264",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O15264",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4myg-A",
                            "3coi-A",
                            "4eyj-A",
                            "4myg-B"
                        ]
                    },
                    {
                        "unpiprotId": "P55273",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4eym-A"
                        ]
                    }
                ]
            },
            "CDK6": {
                "prokinoIdentifier": "Human_CDK6",
                "UniProt_ID": "Q00534",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q00534",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1bi8-C",
                            "1blx-A",
                            "1bi8-A",
                            "1g3n-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96QZ7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1bi7-A"
                        ]
                    }
                ]
            },
            "SRPK1": {
                "prokinoIdentifier": "Human_SRPK1",
                "UniProt_ID": "Q96SB4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96SB4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5mxx-A",
                            "1wbp-A",
                            "4wua-A",
                            "3beg-A"
                        ]
                    },
                    {
                        "unpiprotId": "P04608",
                        "organism": "Human immunodeficiency virus type 1 group M subtype B (isolate HXB2) (HIV-1)",
                        "relevantPDBs": [
                            "1wak-A"
                        ]
                    }
                ]
            },
            "CDK9": {
                "prokinoIdentifier": "Human_CDK9",
                "UniProt_ID": "P50750",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P50750",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3blr-A",
                            "3mi9-A",
                            "3blq-A",
                            "3blh-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q15303",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3lq5-A"
                        ]
                    }
                ]
            },
            "ERBB4": {
                "prokinoIdentifier": "Human_ERBB4",
                "UniProt_ID": "Q15303",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15303",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2r4b-B",
                            "2r4b-A",
                            "3bbw-B"
                        ]
                    },
                    {
                        "unpiprotId": "P30530",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3bbt-D",
                            "3bbt-B"
                        ]
                    }
                ]
            },
            "AXL": {
                "prokinoIdentifier": "Human_AXL",
                "UniProt_ID": "P30530",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P00520",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5u6b-C",
                            "5u6b-A",
                            "5u6b-B",
                            "5u6b-D"
                        ]
                    }
                ]
            },
            "ABL1": {
                "prokinoIdentifier": "Human_ABL1",
                "UniProt_ID": "P00519",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P00520",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "1iep-A",
                            "1fpu-B",
                            "1iep-B",
                            "1fpu-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13523",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1m52-A"
                        ]
                    }
                ]
            },
            "PRP4": {
                "prokinoIdentifier": "Human_PRP4",
                "UniProt_ID": "Q13523",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13523",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ian-A",
                            "4ifc-A",
                            "4ifc-B",
                            "4ian-B"
                        ]
                    },
                    {
                        "unpiprotId": "P27037",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4iir-A"
                        ]
                    }
                ]
            },
            "ACTR2": {
                "prokinoIdentifier": "Human_ACTR2",
                "UniProt_ID": "P27037",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P27037",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3q4t-A",
                            "4asx-A",
                            "3q4t-B"
                        ]
                    },
                    {
                        "unpiprotId": "O54874",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "3soc-A",
                            "3soc-B"
                        ]
                    }
                ]
            },
            "MRCKA": {
                "prokinoIdentifier": "Human_MRCKA",
                "UniProt_ID": "Q5VT25",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9P286",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4aw2-A"
                        ]
                    }
                ]
            },
            "PAK5": {
                "prokinoIdentifier": "Human_PAK5",
                "UniProt_ID": "Q9P286",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P06844",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "2f57-A",
                            "2f57-B"
                        ]
                    }
                ]
            },
            "TRRAP": {
                "prokinoIdentifier": "Human_TRRAP",
                "UniProt_ID": "Q9Y4A5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P38811",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "6t9i-T",
                            "6ig9-T",
                            "6t9j-T"
                        ]
                    },
                    {
                        "unpiprotId": "O49839",
                        "organism": "Arabidopsis thaliana (Mouse-ear cress)",
                        "relevantPDBs": [
                            "5ojs-T"
                        ]
                    }
                ]
            },
            "IRAK3_PSK": {
                "prokinoIdentifier": "Human_IRAK3_PSK",
                "UniProt_ID": "Q9Y616",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P37562",
                        "organism": "Bacillus subtilis (strain 168)",
                        "relevantPDBs": [
                            "6j5t-N",
                            "6j5t-B",
                            "6j5t-E",
                            "6j5t-K",
                            "6j5t-H"
                        ]
                    }
                ]
            },
            "SGK110": {
                "prokinoIdentifier": "Human_SGK110",
                "UniProt_ID": "P0C264",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9QZ85",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "6g4j-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16512",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4lv8-A"
                        ]
                    }
                ]
            },
            "PKN1": {
                "prokinoIdentifier": "Human_PKN1",
                "UniProt_ID": "Q16512",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16512",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4otg-A",
                            "4otd-A",
                            "4oth-A"
                        ]
                    },
                    {
                        "unpiprotId": "P53355",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4oti-A"
                        ]
                    }
                ]
            },
            "DAPK1": {
                "prokinoIdentifier": "Human_DAPK1",
                "UniProt_ID": "P53355",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53355",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1jkk-A",
                            "1ig1-A",
                            "1jkt-A",
                            "1jks-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q08881",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1jkl-A"
                        ]
                    }
                ]
            },
            "ITK": {
                "prokinoIdentifier": "Human_ITK",
                "UniProt_ID": "Q08881",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q08881",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1sm2-A",
                            "1snu-B",
                            "1sm2-B",
                            "1snu-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13873",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1snx-A"
                        ]
                    }
                ]
            },
            "BMPR2": {
                "prokinoIdentifier": "Human_BMPR2",
                "UniProt_ID": "Q13873",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q12852",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3g2f-B",
                            "3g2f-A"
                        ]
                    }
                ]
            },
            "DLK": {
                "prokinoIdentifier": "Human_DLK",
                "UniProt_ID": "Q12852",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q12852",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5ceo-A",
                            "5vo1-A",
                            "5ceq-A",
                            "5cen-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9H792",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5cep-A"
                        ]
                    }
                ]
            },
            "SGK269": {
                "prokinoIdentifier": "Human_SGK269",
                "UniProt_ID": "Q9H792",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q86Y07",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6bhc-A"
                        ]
                    }
                ]
            },
            "VRK2": {
                "prokinoIdentifier": "Human_VRK2",
                "UniProt_ID": "Q86Y07",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q86Y07",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5uu1-A",
                            "2v62-B",
                            "2v62-A"
                        ]
                    },
                    {
                        "unpiprotId": "P07948",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6ncg-B",
                            "6ncg-A"
                        ]
                    }
                ]
            },
            "LYN": {
                "prokinoIdentifier": "Human_LYN",
                "UniProt_ID": "P07948",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P25911",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2zv8-A",
                            "3a4o-X",
                            "2zv9-A",
                            "2zv7-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q14289",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2zva-A"
                        ]
                    }
                ]
            },
            "PYK2": {
                "prokinoIdentifier": "Human_PYK2",
                "UniProt_ID": "Q14289",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q14289",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3fzp-A",
                            "3et7-A",
                            "3fzr-A",
                            "3fzo-A"
                        ]
                    },
                    {
                        "unpiprotId": "O75909",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3cc6-A"
                        ]
                    }
                ]
            },
            "CRK7": {
                "prokinoIdentifier": "Human_CRK7",
                "UniProt_ID": "Q9NYV4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NYV4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4nst-C",
                            "4un0-C",
                            "4nst-A"
                        ]
                    },
                    {
                        "unpiprotId": "P28327",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "4cxa-C",
                            "4cxa-A"
                        ]
                    }
                ]
            },
            "RHOK": {
                "prokinoIdentifier": "Human_RHOK",
                "UniProt_ID": "Q15835",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P28327",
                        "organism": "Bos taurus (Bovine)",
                        "relevantPDBs": [
                            "3c4x-A",
                            "3c4x-B",
                            "3c4y-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96PY6",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3c4w-A",
                            "3c4w-B"
                        ]
                    }
                ]
            },
            "NEK1": {
                "prokinoIdentifier": "Human_NEK1",
                "UniProt_ID": "Q96PY6",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96PY6",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4apc-B",
                            "4apc-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9QZL0",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4b9d-A",
                            "4b9d-B"
                        ]
                    }
                ]
            },
            "RIPK3": {
                "prokinoIdentifier": "Human_RIPK3",
                "UniProt_ID": "Q9Y572",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9QZL0",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "6oko-A",
                            "4m69-A",
                            "6oko-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q8IVW4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4m66-A",
                            "4m66-B"
                        ]
                    }
                ]
            },
            "CDKL3": {
                "prokinoIdentifier": "Human_CDKL3",
                "UniProt_ID": "Q8IVW4",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P29678",
                        "organism": "Oryctolagus cuniculus (Rabbit)",
                        "relevantPDBs": [
                            "3zdu-A"
                        ]
                    }
                ]
            },
            "KSR1_PSK": {
                "prokinoIdentifier": "Human_KSR1_PSK",
                "UniProt_ID": "Q8IVT5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8IVT5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "7juw-B",
                            "7jv0-A",
                            "7juz-A",
                            "7juy-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q13464",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "7jux-A"
                        ]
                    }
                ]
            },
            "ROCK1": {
                "prokinoIdentifier": "Human_ROCK1",
                "UniProt_ID": "Q13464",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q13464",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2esm-B",
                            "2esm-A",
                            "2etr-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Z2B5",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2etk-B",
                            "2etk-A"
                        ]
                    }
                ]
            },
            "PEK": {
                "prokinoIdentifier": "Human_PEK",
                "UniProt_ID": "Q9NZJ5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NZJ5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4g34-A",
                            "3qd2-B",
                            "3qd2-B",
                            "4m7i-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q04912",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4g31-A"
                        ]
                    }
                ]
            },
            "RON": {
                "prokinoIdentifier": "Human_RON",
                "UniProt_ID": "Q04912",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9H2G2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3pls-A"
                        ]
                    }
                ]
            },
            "SLK": {
                "prokinoIdentifier": "Human_SLK",
                "UniProt_ID": "Q9H2G2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9H2G2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2jfm-A",
                            "2uv2-A",
                            "2jfl-A",
                            "4usf-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8K1R7",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "2j51-A"
                        ]
                    }
                ]
            },
            "NEK7": {
                "prokinoIdentifier": "Human_NEK7",
                "UniProt_ID": "Q8TDX7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8TDX7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5de2-B",
                            "2wqm-A",
                            "6npy-B",
                            "5de2-A"
                        ]
                    },
                    {
                        "unpiprotId": "P04629",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2wqn-A"
                        ]
                    }
                ]
            },
            "TRKA": {
                "prokinoIdentifier": "Human_TRKA",
                "UniProt_ID": "P04629",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P04629",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f0i-B",
                            "4f0i-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9UHD2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4aoj-C",
                            "4aoj-A",
                            "4aoj-B"
                        ]
                    }
                ]
            },
            "TBK1": {
                "prokinoIdentifier": "Human_TBK1",
                "UniProt_ID": "Q9UHD2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UHD2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4eut-B",
                            "4eut-A",
                            "4euu-A",
                            "4euu-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q06486",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "4im0-A"
                        ]
                    }
                ]
            },
            "CK1D": {
                "prokinoIdentifier": "Human_CK1D",
                "UniProt_ID": "P48730",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q06486",
                        "organism": "Rattus norvegicus (Rat)",
                        "relevantPDBs": [
                            "1ckj-A",
                            "1ckj-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q8LR51",
                        "organism": "Oryza sativa subsp. japonica (Rice)",
                        "relevantPDBs": [
                            "1cki-A",
                            "1cki-B"
                        ]
                    },
                    {
                        "unpiprotId": "O96017",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3sv0-A"
                        ]
                    }
                ]
            },
            "CHK2": {
                "prokinoIdentifier": "Human_CHK2",
                "UniProt_ID": "O96017",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O96017",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2cn8-A",
                            "2cn5-A",
                            "2w7x-A",
                            "2w0j-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q8I719",
                        "organism": "Plasmodium falciparum (isolate 3D7)",
                        "relevantPDBs": [
                            "2wtc-A"
                        ]
                    }
                ]
            },
            "PKACB": {
                "prokinoIdentifier": "Human_PKACB",
                "UniProt_ID": "P22694",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "A5K0N4",
                        "organism": "Plasmodium vivax (strain Salvador I)",
                        "relevantPDBs": [
                            "5dyk-A",
                            "5dzc-A",
                            "4rz7-A",
                            "5dyl-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q96GX5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5ezr-A"
                        ]
                    }
                ]
            },
            "MASTL": {
                "prokinoIdentifier": "Human_MASTL",
                "UniProt_ID": "Q96GX5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UQM7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5loh-B",
                            "5loh-A"
                        ]
                    }
                ]
            },
            "CAMK2A": {
                "prokinoIdentifier": "Human_CAMK2A",
                "UniProt_ID": "Q9UQM7",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9UQM7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3soa-A"
                        ]
                    },
                    {
                        "unpiprotId": "F2UPG5",
                        "organism": "Salpingoeca rosetta (strain ATCC 50818 / BSB-021)",
                        "relevantPDBs": [
                            "2vz6-B",
                            "2vz6-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q15759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5ig1-B",
                            "5ig1-A"
                        ]
                    }
                ]
            },
            "P38B": {
                "prokinoIdentifier": "Human_P38B",
                "UniProt_ID": "Q15759",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q15759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3gc9-B",
                            "3gc8-A",
                            "3gc9-A",
                            "3gc8-B"
                        ]
                    },
                    {
                        "unpiprotId": "P45985",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3gp0-A"
                        ]
                    }
                ]
            },
            "MAP2K4": {
                "prokinoIdentifier": "Human_MAP2K4",
                "UniProt_ID": "P45985",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P45985",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3alo-A",
                            "3aln-A",
                            "3aln-C",
                            "3aln-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q16644",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3vut-A"
                        ]
                    }
                ]
            },
            "MAPKAPK3": {
                "prokinoIdentifier": "Human_MAPKAPK3",
                "UniProt_ID": "Q16644",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16644",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3fxw-A",
                            "3she-A",
                            "3fhr-A"
                        ]
                    },
                    {
                        "unpiprotId": "O15865",
                        "organism": "Plasmodium falciparum (isolate K1 / Thailand)",
                        "relevantPDBs": [
                            "3r1n-A"
                        ]
                    }
                ]
            },
            "CAMK1D": {
                "prokinoIdentifier": "Human_CAMK1D",
                "UniProt_ID": "Q8IU85",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q8IU85",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4mvf-A"
                        ]
                    },
                    {
                        "unpiprotId": "P22216",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "2jc6-A",
                            "2jc6-C"
                        ]
                    },
                    {
                        "unpiprotId": "Q9ERK0",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "4pdp-A"
                        ]
                    }
                ]
            },
            "ANKRD3": {
                "prokinoIdentifier": "Human_ANKRD3",
                "UniProt_ID": "P57078",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9ERK0",
                        "organism": "Mus musculus (Mouse)",
                        "relevantPDBs": [
                            "5wnk-A",
                            "5wnm-A",
                            "5wnj-A",
                            "5wnl-A"
                        ]
                    },
                    {
                        "unpiprotId": "O75582",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5wni-A"
                        ]
                    }
                ]
            },
            "MLK1": {
                "prokinoIdentifier": "Human_MLK1",
                "UniProt_ID": "P80192",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P80192",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4uy9-B",
                            "4uy9-A"
                        ]
                    },
                    {
                        "unpiprotId": "P08581",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3dtc-A"
                        ]
                    }
                ]
            },
            "MET": {
                "prokinoIdentifier": "Human_MET",
                "UniProt_ID": "P08581",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P08581",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2rfn-B",
                            "2rfn-A",
                            "2g15-A",
                            "1r0p-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9NRH2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "1r1w-A"
                        ]
                    }
                ]
            },
            "SNRK": {
                "prokinoIdentifier": "Human_SNRK",
                "UniProt_ID": "Q9NRH2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P23528",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5yks-A",
                            "5yks-B"
                        ]
                    }
                ]
            },
            "LIMK1": {
                "prokinoIdentifier": "Human_LIMK1",
                "UniProt_ID": "P53667",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P53667",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5hvj-B",
                            "3s95-B",
                            "5hvj-A",
                            "3s95-A"
                        ]
                    },
                    {
                        "unpiprotId": "P38110",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "5hvk-A"
                        ]
                    }
                ]
            },
            "ATM": {
                "prokinoIdentifier": "Human_ATM",
                "UniProt_ID": "Q13315",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P38110",
                        "organism": "Saccharomyces cerevisiae (strain ATCC 204508 / S288c) (Baker's yeast)",
                        "relevantPDBs": [
                            "6jxa-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q13315",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5np1-A",
                            "6jxc-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16620",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5np0-A",
                            "5np0-B"
                        ]
                    }
                ]
            },
            "TRKB": {
                "prokinoIdentifier": "Human_TRKB",
                "UniProt_ID": "Q16620",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q16620",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4at4-A",
                            "4at5-A",
                            "4at3-A"
                        ]
                    },
                    {
                        "unpiprotId": "P23443",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4asz-A"
                        ]
                    }
                ]
            },
            "P70S6K": {
                "prokinoIdentifier": "Human_P70S6K",
                "UniProt_ID": "P23443",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P23443",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3a62-A",
                            "3a61-A",
                            "3a60-A",
                            "3a60-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q00536",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3we4-A"
                        ]
                    }
                ]
            },
            "PCTAIRE1": {
                "prokinoIdentifier": "Human_PCTAIRE1",
                "UniProt_ID": "Q00536",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q00536",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3mtl-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q57646",
                        "organism": "Methanocaldococcus jannaschii (strain ATCC 43067 / DSM 2661 / JAL-1 / JCM 10045 / NBRC 100440) (Methanococcus jannaschii)",
                        "relevantPDBs": [
                            "5g6v-A",
                            "5g6v-B"
                        ]
                    }
                ]
            },
            "PRPK": {
                "prokinoIdentifier": "Human_PRPK",
                "UniProt_ID": "Q96S44",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q58530",
                        "organism": "Methanocaldococcus jannaschii (strain ATCC 43067 / DSM 2661 / JAL-1 / JCM 10045 / NBRC 100440) (Methanococcus jannaschii)",
                        "relevantPDBs": [
                            "3enh-A",
                            "2vwb-B",
                            "2vwb-A"
                        ]
                    },
                    {
                        "unpiprotId": "P24863",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3en9-B",
                            "3en9-A"
                        ]
                    }
                ]
            },
            "CDK8": {
                "prokinoIdentifier": "Human_CDK8",
                "UniProt_ID": "P49336",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49336",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f6s-A",
                            "3rgf-A",
                            "4f6w-A",
                            "4crl-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q04759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4f6u-A"
                        ]
                    }
                ]
            },
            "PKCT": {
                "prokinoIdentifier": "Human_PKCT",
                "UniProt_ID": "Q04759",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q04759",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4q9z-A",
                            "1xjd-A",
                            "4q9z-B"
                        ]
                    },
                    {
                        "unpiprotId": "P30291",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2jed-A",
                            "2jed-B"
                        ]
                    }
                ]
            },
            "WEE1": {
                "prokinoIdentifier": "Human_WEE1",
                "UniProt_ID": "P30291",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P30291",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2z2w-A",
                            "2io6-A",
                            "2in6-A",
                            "1x8b-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q99986",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3bi6-A"
                        ]
                    }
                ]
            },
            "VRK1": {
                "prokinoIdentifier": "Human_VRK1",
                "UniProt_ID": "Q99986",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q99986",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2rsv-A",
                            "2kul-A",
                            "2kty-A",
                            "2lav-A"
                        ]
                    },
                    {
                        "unpiprotId": "O00444",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3op5-A"
                        ]
                    }
                ]
            },
            "PLK4": {
                "prokinoIdentifier": "Human_PLK4",
                "UniProt_ID": "O00444",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "O00444",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3cok-B",
                            "4yur-A",
                            "3cok-A"
                        ]
                    },
                    {
                        "unpiprotId": "P30281",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4jxf-A"
                        ]
                    }
                ]
            },
            "CDK4": {
                "prokinoIdentifier": "Human_CDK4",
                "UniProt_ID": "P11802",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P24385",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2w9f-B",
                            "2w99-B",
                            "2w96-B"
                        ]
                    },
                    {
                        "unpiprotId": "P11802",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3g33-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9BVC4",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2w9z-B"
                        ]
                    }
                ]
            },
            "FRAP": {
                "prokinoIdentifier": "Human_FRAP",
                "UniProt_ID": "P42345",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P42345",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4jsp-A",
                            "4jsn-A",
                            "4jsn-B",
                            "4jsp-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q6PHR2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3jbz-A"
                        ]
                    }
                ]
            },
            "ULK3": {
                "prokinoIdentifier": "Human_ULK3",
                "UniProt_ID": "Q6PHR2",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q6PHR2",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6fdz-U"
                        ]
                    },
                    {
                        "unpiprotId": "Q96DU7",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6fdy-U"
                        ]
                    }
                ]
            },
            "JNK2": {
                "prokinoIdentifier": "Human_JNK2",
                "UniProt_ID": "P45984",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P45984",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3npc-B",
                            "3npc-A",
                            "3e7o-A",
                            "3e7o-B"
                        ]
                    },
                    {
                        "unpiprotId": "Q01973",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "7cml-A"
                        ]
                    }
                ]
            },
            "ROR1": {
                "prokinoIdentifier": "Human_ROR1",
                "UniProt_ID": "Q01973",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49715",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6tu9-A",
                            "6tu9-B"
                        ]
                    }
                ]
            },
            "TRIB1_PSK": {
                "prokinoIdentifier": "Human_TRIB1_PSK",
                "UniProt_ID": "Q96RU8",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96RU8",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5cek-A",
                            "6dc0-A",
                            "6dc0-B"
                        ]
                    },
                    {
                        "unpiprotId": "P42356",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "5cem-A"
                        ]
                    }
                ]
            },
            "ULK4_PSK": {
                "prokinoIdentifier": "Human_ULK4_PSK",
                "UniProt_ID": "Q96C45",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q96C45",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6tsz-U"
                        ]
                    },
                    {
                        "unpiprotId": "Q9NQU5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6u5l-A"
                        ]
                    }
                ]
            },
            "PAK6": {
                "prokinoIdentifier": "Human_PAK6",
                "UniProt_ID": "Q9NQU5",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9NQU5",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ks7-A",
                            "2c30-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q16832",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "4ks8-A"
                        ]
                    }
                ]
            },
            "DDR2": {
                "prokinoIdentifier": "Human_DDR2",
                "UniProt_ID": "Q16832",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49761",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "6fer-A",
                            "6fer-D",
                            "6fer-C",
                            "6fer-E",
                            "6fer-B"
                        ]
                    }
                ]
            },
            "CLK3": {
                "prokinoIdentifier": "Human_CLK3",
                "UniProt_ID": "P49761",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "P49761",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2exe-A",
                            "2eu9-A",
                            "2wu7-A",
                            "3raw-A"
                        ]
                    },
                    {
                        "unpiprotId": "Q9Y6E0",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2wu6-A"
                        ]
                    }
                ]
            },
            "YSK1": {
                "prokinoIdentifier": "Human_YSK1",
                "UniProt_ID": "O00506",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Y6E0",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3a7f-A",
                            "3a7g-B",
                            "3a7g-A"
                        ]
                    },
                    {
                        "unpiprotId": "O00506",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "3a7h-A"
                        ]
                    }
                ]
            },
            "LKB1": {
                "prokinoIdentifier": "Human_LKB1",
                "UniProt_ID": "Q15831",
                "organism": "Homo sapiens (Human)",
                "structureViewerData": [
                    {
                        "unpiprotId": "Q9Y376",
                        "organism": "Homo sapiens (Human)",
                        "relevantPDBs": [
                            "2wtk-F",
                            "2wtk-C"
                        ]
                    }
                ]
            }
        }

    }
    const urlParams = new URLSearchParams(location.hash.substring(1));
    const [cifFileNames, setCifFileNames] = useState(null);
    const [entityClass, setEntityClass] = useState(urlParams.get("c"));
    const [value, setValue] = useState(urlParams.get("v"));
    console.log("entityClass", entityClass);
    const [uniprotId, setUniprotId] = useState(null);
    const [uniprotIdRequired, setUniprotIdRequired] = useState(false);

    const [annotationViewerData, setAnnotationViewerData] = useState(null);
    const [prokinoData, setProkinoData] = useState(null);

    //For now, any resource is an entity except prokino:Sequence, that is sequence. If more resource types added, this line should be converted to a switch-case statement.


    // const { data, error } = useSWR(url, fetcher);
    // if (error) 
    //     return <Layout>Failed to load</Layout>

    // if (!data) 
    //     return <Layout>Loading...</Layout>
    useEffect(() => {
        if (uniprotId && data.allFile && data.allFile.nodes.length > 0) {

            console.log("uniprotId", uniprotId)
            const filteredArray = Object.values(av.content).filter(function (itm) {
                return itm.UniProt_ID == uniprotId;
            });
            console.log(filteredArray)

            let cifFilesOnDisk = data["allFile"]["nodes"] //list of available cif files on disk
            let cifFileArr = []
            const avSvwr = filteredArray[0].structureViewerData; //list of Pdbs from structure viewer data
            avSvwr.forEach(sv => {
                console.log("unpiprotId", sv.unpiprotId)
                sv.relevantPDBs.forEach(pdb => {
                    let relatedFile = cifFilesOnDisk.filter(f => f.name.split("_")[f.name.split("_").length-1] == pdb)
                    let fname = ""
                    if (relatedFile.length>0) //file found
                        fname = relatedFile[0]["name"] + ".cif"
                    cifFileArr.push(
                        {
                            name: "pdb:" + pdb + ", uniprot: " + sv.unpiprotId + ", organism: " + sv.organism,
                            pdbId: pdb,
                            uniprotId: sv.unpiprotId,
                            organismName: sv.organism,
                            filename: fname
                        })

                });
                console.log("organism", sv.organism)
            }
            );


            //let cifFileArr = data["allFile"]["nodes"].filter(f => f.name.split("_")[2] === uniprotId);
            //let cifFileArr = av.content.filter(f => f.name.split("_")[2] === uniprotId);
            //Read relevant PDBs to list CIF files

            if (cifFileArr.length > 0) //filename found successfully
            {
                cifFileArr.unshift({ name: "Select a molecule ..." })
                setCifFileNames(cifFileArr)
            }
        }

    }, [uniprotId])

    useEffect(() => {
        const getProkinoData = async () => {
            // if (!value)
            //     return <></>

            const resourceType = entityClass === 'prokino:Sequence' ? 'sequence' : 'entity';
            let url = `${BASE_ENDPOINT}/${resourceType}/${value}`;

            const result = await axios.get(url);
            setProkinoData(result.data);
            console.log("Prokino API result", result.data)
            if (result.data.entityClass === "prokino:Protein")
                setUniprotIdRequired(true);
        };
        getProkinoData();
    }, [entityClass]);

    // useEffect(() => {
    //     const getAnnotationViewerData = async () => {
    //         let url = `../../content/annotationviewerdata.json`;
    //         const result = await axios.get(url);
    //         setAnnotationViewerData(result.data);

    //     };
    //     getAnnotationViewerData();
    // }, []);

    useEffect(() => {
        if (annotationViewerData)
            console.log(annotationViewerData)
    }, [annotationViewerData]);


    useEffect(() => {
        const getUniprotId = async () => {

            let url = `${BASE_ENDPOINT}/protein/${value}/identifier`;
            const result = await axios.get(url);
            setUniprotId(result.data.identifier);
            console.log("uniprot from browse.js", uniprotId);
        };
        if (uniprotIdRequired)
            getUniprotId();
    }, [uniprotIdRequired]);

    if (!prokinoData)
        return <Layout>Loading ...</Layout>;




    // handle success
    let dataProps = {};
    if (prokinoData.datatypeProperties)
        prokinoData.datatypeProperties.forEach(prop =>
            dataProps[prop["p"]] = prop["v"]
        );

    let objProps = {};
    if (prokinoData.objectProperties)
        prokinoData.objectProperties.forEach(prop =>
            objProps[prop["p"]] = prop["v"]
        );

    let incomingProps = {}
    if (prokinoData.incomingObjectProperties)
        prokinoData.incomingObjectProperties.forEach(prop =>
            incomingProps[prop["p"]] = prop["v"]
        );

    // if (!entityClass)
    //     return <p>Loading..</p>

    switch (entityClass) {
        case "prokino:Protein":
            // if (!cifFileNames)
            //     return "Loading CIF files..."

            return <ProteinItem
                uniprotId={uniprotId}
                localName={prokinoData.localName}
                datatypeProperties={dataProps}
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
                cifFileNames={cifFileNames} />;

        case "prokino:Sequence":
            return <SequenceItem data={prokinoData} localName={value} />;

        default:
            return <GenericItem
                entityClass={prokinoData.entityClass}
                localName={prokinoData.localName}
                datatypeProperties={dataProps}
                objectProperties={objProps}
                incomingObjectProperties={incomingProps}
            />;
    }



}
// export const query = graphql`
// query cifFileNameByGlob($prot: String = "*Q9UBF8*") {
//     allFile(filter: {name: {glob: $prot}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `

export const query = graphql`
query cifFileNames {
    allFile(sort: {fields: name}) {
      nodes {
        name
      }
    }
  }
  `