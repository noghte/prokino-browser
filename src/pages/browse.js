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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96NX5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q5TCX8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P51813_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IV63_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IVH8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P41240_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P07949_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q92772_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q86YV6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14757_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13705_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P37023_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P51812_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54646_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54753_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UM73_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P41743_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O15075_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8TD08_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q86UE8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54756_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q14680_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13131_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P06241_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P08922_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q99570_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P06493_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P36888_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q09013_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13164_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15208_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75385_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75716_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q2M2I8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P22607_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O60285_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P29597_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P52333_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IWQ3_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q05397_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15418_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O95819_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8WZ42_F160_model-v1.cif",
                "AF_Q8WZ42_F32_model-v1.cif",
                "AF_Q8WZ42_F35_model-v1.cif",
                "AF_Q8WZ42_F37_model-v1.cif",
                "AF_Q8WZ42_F30_model-v1.cif",
                "AF_Q8WZ42_F137_model-v1.cif",
                "AF_Q8WZ42_F8_model-v1.cif",
                "AF_Q8WZ42_F150_model-v1.cif",
                "AF_Q8WZ42_F23_model-v1.cif",
                "AF_Q8WZ42_F119_model-v1.cif",
                "AF_Q8WZ42_F156_model-v1.cif",
                "AF_Q8WZ42_F120_model-v1.cif",
                "AF_Q8WZ42_F54_model-v1.cif",
                "AF_Q8WZ42_F104_model-v1.cif",
                "AF_Q8WZ42_F134_model-v1.cif",
                "AF_Q8WZ42_F14_model-v1.cif",
                "AF_Q8WZ42_F109_model-v1.cif",
                "AF_Q8WZ42_F105_model-v1.cif",
                "AF_Q8WZ42_F4_model-v1.cif",
                "AF_Q8WZ42_F51_model-v1.cif",
                "AF_Q8WZ42_F53_model-v1.cif",
                "AF_Q8WZ42_F166_model-v1.cif",
                "AF_Q8WZ42_F6_model-v1.cif",
                "AF_Q8WZ42_F46_model-v1.cif",
                "AF_Q8WZ42_F29_model-v1.cif",
                "AF_Q8WZ42_F21_model-v1.cif",
                "AF_Q8WZ42_F94_model-v1.cif",
                "AF_Q8WZ42_F122_model-v1.cif",
                "AF_Q8WZ42_F132_model-v1.cif",
                "AF_Q8WZ42_F26_model-v1.cif",
                "AF_Q8WZ42_F42_model-v1.cif",
                "AF_Q8WZ42_F100_model-v1.cif",
                "AF_Q8WZ42_F66_model-v1.cif",
                "AF_Q8WZ42_F41_model-v1.cif",
                "AF_Q8WZ42_F82_model-v1.cif",
                "AF_Q8WZ42_F44_model-v1.cif",
                "AF_Q8WZ42_F127_model-v1.cif",
                "AF_Q8WZ42_F70_model-v1.cif",
                "AF_Q8WZ42_F62_model-v1.cif",
                "AF_Q8WZ42_F144_model-v1.cif",
                "AF_Q8WZ42_F143_model-v1.cif",
                "AF_Q8WZ42_F1_model-v1.cif",
                "AF_Q8WZ42_F139_model-v1.cif",
                "AF_Q8WZ42_F76_model-v1.cif",
                "AF_Q8WZ42_F24_model-v1.cif",
                "AF_Q8WZ42_F45_model-v1.cif",
                "AF_Q8WZ42_F17_model-v1.cif",
                "AF_Q8WZ42_F81_model-v1.cif",
                "AF_Q8WZ42_F12_model-v1.cif",
                "AF_Q8WZ42_F83_model-v1.cif",
                "AF_Q8WZ42_F128_model-v1.cif",
                "AF_Q8WZ42_F146_model-v1.cif",
                "AF_Q8WZ42_F155_model-v1.cif",
                "AF_Q8WZ42_F57_model-v1.cif",
                "AF_Q8WZ42_F3_model-v1.cif",
                "AF_Q8WZ42_F162_model-v1.cif",
                "AF_Q8WZ42_F93_model-v1.cif",
                "AF_Q8WZ42_F90_model-v1.cif",
                "AF_Q8WZ42_F136_model-v1.cif",
                "AF_Q8WZ42_F86_model-v1.cif",
                "AF_Q8WZ42_F163_model-v1.cif",
                "AF_Q8WZ42_F118_model-v1.cif",
                "AF_Q8WZ42_F95_model-v1.cif",
                "AF_Q8WZ42_F36_model-v1.cif",
                "AF_Q8WZ42_F135_model-v1.cif",
                "AF_Q8WZ42_F73_model-v1.cif",
                "AF_Q8WZ42_F9_model-v1.cif",
                "AF_Q8WZ42_F125_model-v1.cif",
                "AF_Q8WZ42_F65_model-v1.cif",
                "AF_Q8WZ42_F38_model-v1.cif",
                "AF_Q8WZ42_F138_model-v1.cif",
                "AF_Q8WZ42_F27_model-v1.cif",
                "AF_Q8WZ42_F58_model-v1.cif",
                "AF_Q8WZ42_F7_model-v1.cif",
                "AF_Q8WZ42_F67_model-v1.cif",
                "AF_Q8WZ42_F31_model-v1.cif",
                "AF_Q8WZ42_F2_model-v1.cif",
                "AF_Q8WZ42_F121_model-v1.cif",
                "AF_Q8WZ42_F75_model-v1.cif",
                "AF_Q8WZ42_F129_model-v1.cif",
                "AF_Q8WZ42_F64_model-v1.cif",
                "AF_Q8WZ42_F89_model-v1.cif",
                "AF_Q8WZ42_F11_model-v1.cif",
                "AF_Q8WZ42_F153_model-v1.cif",
                "AF_Q8WZ42_F88_model-v1.cif",
                "AF_Q8WZ42_F116_model-v1.cif",
                "AF_Q8WZ42_F91_model-v1.cif",
                "AF_Q8WZ42_F101_model-v1.cif",
                "AF_Q8WZ42_F16_model-v1.cif",
                "AF_Q8WZ42_F99_model-v1.cif",
                "AF_Q8WZ42_F10_model-v1.cif",
                "AF_Q8WZ42_F158_model-v1.cif",
                "AF_Q8WZ42_F61_model-v1.cif",
                "AF_Q8WZ42_F161_model-v1.cif",
                "AF_Q8WZ42_F47_model-v1.cif",
                "AF_Q8WZ42_F141_model-v1.cif",
                "AF_Q8WZ42_F98_model-v1.cif",
                "AF_Q8WZ42_F106_model-v1.cif",
                "AF_Q8WZ42_F149_model-v1.cif",
                "AF_Q8WZ42_F18_model-v1.cif",
                "AF_Q8WZ42_F20_model-v1.cif",
                "AF_Q8WZ42_F63_model-v1.cif",
                "AF_Q8WZ42_F28_model-v1.cif",
                "AF_Q8WZ42_F43_model-v1.cif",
                "AF_Q8WZ42_F107_model-v1.cif",
                "AF_Q8WZ42_F19_model-v1.cif",
                "AF_Q8WZ42_F111_model-v1.cif",
                "AF_Q8WZ42_F164_model-v1.cif",
                "AF_Q8WZ42_F131_model-v1.cif",
                "AF_Q8WZ42_F34_model-v1.cif",
                "AF_Q8WZ42_F133_model-v1.cif",
                "AF_Q8WZ42_F112_model-v1.cif",
                "AF_Q8WZ42_F114_model-v1.cif",
                "AF_Q8WZ42_F50_model-v1.cif",
                "AF_Q8WZ42_F60_model-v1.cif",
                "AF_Q8WZ42_F33_model-v1.cif",
                "AF_Q8WZ42_F85_model-v1.cif",
                "AF_Q8WZ42_F124_model-v1.cif",
                "AF_Q8WZ42_F147_model-v1.cif",
                "AF_Q8WZ42_F13_model-v1.cif",
                "AF_Q8WZ42_F103_model-v1.cif",
                "AF_Q8WZ42_F92_model-v1.cif",
                "AF_Q8WZ42_F68_model-v1.cif",
                "AF_Q8WZ42_F48_model-v1.cif",
                "AF_Q8WZ42_F15_model-v1.cif",
                "AF_Q8WZ42_F25_model-v1.cif",
                "AF_Q8WZ42_F5_model-v1.cif",
                "AF_Q8WZ42_F49_model-v1.cif",
                "AF_Q8WZ42_F69_model-v1.cif",
                "AF_Q8WZ42_F126_model-v1.cif",
                "AF_Q8WZ42_F97_model-v1.cif",
                "AF_Q8WZ42_F96_model-v1.cif",
                "AF_Q8WZ42_F79_model-v1.cif",
                "AF_Q8WZ42_F56_model-v1.cif",
                "AF_Q8WZ42_F84_model-v1.cif",
                "AF_Q8WZ42_F159_model-v1.cif",
                "AF_Q8WZ42_F152_model-v1.cif",
                "AF_Q8WZ42_F74_model-v1.cif",
                "AF_Q8WZ42_F148_model-v1.cif",
                "AF_Q8WZ42_F78_model-v1.cif",
                "AF_Q8WZ42_F117_model-v1.cif",
                "AF_Q8WZ42_F151_model-v1.cif",
                "AF_Q8WZ42_F40_model-v1.cif",
                "AF_Q8WZ42_F154_model-v1.cif",
                "AF_Q8WZ42_F39_model-v1.cif",
                "AF_Q8WZ42_F108_model-v1.cif",
                "AF_Q8WZ42_F80_model-v1.cif",
                "AF_Q8WZ42_F140_model-v1.cif",
                "AF_Q8WZ42_F22_model-v1.cif",
                "AF_Q8WZ42_F115_model-v1.cif",
                "AF_Q8WZ42_F102_model-v1.cif",
                "AF_Q8WZ42_F55_model-v1.cif",
                "AF_Q8WZ42_F72_model-v1.cif",
                "AF_Q8WZ42_F142_model-v1.cif",
                "AF_Q8WZ42_F165_model-v1.cif",
                "AF_Q8WZ42_F87_model-v1.cif",
                "AF_Q8WZ42_F52_model-v1.cif",
                "AF_Q8WZ42_F77_model-v1.cif",
                "AF_Q8WZ42_F110_model-v1.cif",
                "AF_Q8WZ42_F145_model-v1.cif",
                "AF_Q8WZ42_F59_model-v1.cif",
                "AF_Q8WZ42_F71_model-v1.cif",
                "AF_Q8WZ42_F113_model-v1.cif",
                "AF_Q8WZ42_F123_model-v1.cif",
                "AF_Q8WZ42_F130_model-v1.cif",
                "AF_Q8WZ42_F157_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q59H18_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9P289_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P10721_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NSY1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49137_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P24723_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P33981_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UKE5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O94804_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P27361_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q07912_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O96013_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75116_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NYL2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P68400_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53350_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y6M4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9HAZ1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O76039_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13418_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P04049_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P06213_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P51617_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y2H1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q00526_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8NI60_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14730_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q58A45_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53779_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P45983_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NRP7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P06239_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16816_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P17948_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H5K3_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q99558_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H2X6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9P2K8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P23458_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q00535_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49841_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9HCP0_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00141_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13535_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O43353_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P25098_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q04771_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O60566_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75914_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13976_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P27448_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13554_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O95747_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P28482_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H0K1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13153_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UL54_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00418_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13627_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54764_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P22455_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16539_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9HBH9_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15375_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q5S007_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16659_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P31751_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P43403_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54762_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14920_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96KB5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8N2I9_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P43250_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14976_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q92918_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q5TCY1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P46734_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H4A3_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P21860_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15746_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P0C1S8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P16234_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UK32_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O43293_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P48729_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O94768_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9BXM7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q6VAB6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00311_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P36507_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P78527_F1_model-v1.cif",
                "AF_P78527_F2_model-v1.cif",
                "AF_P78527_F3_model-v1.cif",
                "AF_P78527_F11_model-v1.cif",
                "AF_P78527_F7_model-v1.cif",
                "AF_P78527_F8_model-v1.cif",
                "AF_P78527_F15_model-v1.cif",
                "AF_P78527_F14_model-v1.cif",
                "AF_P78527_F10_model-v1.cif",
                "AF_P78527_F12_model-v1.cif",
                "AF_P78527_F9_model-v1.cif",
                "AF_P78527_F4_model-v1.cif",
                "AF_P78527_F13_model-v1.cif",
                "AF_P78527_F5_model-v1.cif",
                "AF_P78527_F6_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O43781_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q99640_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q00532_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P21802_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49759_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O60674_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H4B4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14936_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49840_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P50613_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P34925_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75460_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P52564_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P29317_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UIK4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P19784_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P41279_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13308_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NWZ3_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q6IQ55_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13546_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9P1W9_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96RR4_F1_model-v1.cif"
            ]
        },
        "DCLK3": {
            "prokinoIdentifier": "Human_DCLK3",
            "UniProt_ID": "Q9C098",
            "organism": "Homo sapiens (Human)",
            "structureViewerData": [],
            "relevantAlphaFoldPredicts": [
                "AF_Q9C098_F1_model-v1.cif"
            ]
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13043_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NYY3_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O15111_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16513_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P15735_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P43405_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UEW8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96Q15_F1_model-v1.cif",
                "AF_Q96Q15_F11_model-v1.cif",
                "AF_Q96Q15_F8_model-v1.cif",
                "AF_Q96Q15_F6_model-v1.cif",
                "AF_Q96Q15_F9_model-v1.cif",
                "AF_Q96Q15_F2_model-v1.cif",
                "AF_Q96Q15_F13_model-v1.cif",
                "AF_Q96Q15_F10_model-v1.cif",
                "AF_Q96Q15_F5_model-v1.cif",
                "AF_Q96Q15_F4_model-v1.cif",
                "AF_Q96Q15_F12_model-v1.cif",
                "AF_Q96Q15_F7_model-v1.cif",
                "AF_Q96Q15_F3_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P07332_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P36897_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q08345_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P12931_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q14012_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q02750_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P35968_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q6P2M8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P32298_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P31749_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UPE1_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13555_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53671_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UQB9_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q06418_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O15146_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9BUB5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14733_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9BRS2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q86YV5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13188_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8NB16_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IXL6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P42684_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96Q04_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13882_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8TF76_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q7RTN6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P00533_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O75582_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P78368_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P07333_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16566_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P29322_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O14965_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q99683_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q7KZI7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P17252_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IYT8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P37173_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P17612_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y5S2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P42685_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O15530_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q05823_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P11309_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P29323_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P15056_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P24941_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49760_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O43683_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P34947_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9BVS4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96GD4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P08069_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9P0L2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53778_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16288_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P19525_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P08631_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P54760_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8WU08_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q01974_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96RG2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P04626_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q02763_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9BYP7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00238_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8N5S9_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q14004_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q92630_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P11362_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P51955_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P05771_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O43318_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H2K8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96L34_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P29320_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q06187_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13557_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q12866_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49674_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O15264_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q00534_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96SB4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P50750_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15303_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P30530_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P00519_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13523_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P27037_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q5VT25_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9P286_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y4A5_F5_model-v1.cif",
                "AF_Q9Y4A5_F11_model-v1.cif",
                "AF_Q9Y4A5_F9_model-v1.cif",
                "AF_Q9Y4A5_F6_model-v1.cif",
                "AF_Q9Y4A5_F7_model-v1.cif",
                "AF_Q9Y4A5_F3_model-v1.cif",
                "AF_Q9Y4A5_F10_model-v1.cif",
                "AF_Q9Y4A5_F14_model-v1.cif",
                "AF_Q9Y4A5_F2_model-v1.cif",
                "AF_Q9Y4A5_F13_model-v1.cif",
                "AF_Q9Y4A5_F12_model-v1.cif",
                "AF_Q9Y4A5_F8_model-v1.cif",
                "AF_Q9Y4A5_F1_model-v1.cif",
                "AF_Q9Y4A5_F4_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y616_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P0C264_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16512_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53355_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q08881_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13873_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q12852_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H792_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q86Y07_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P07948_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q14289_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NYV4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15835_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96PY6_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y572_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IVW4_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IVT5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13464_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NZJ5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q04912_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9H2G2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8TDX7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P04629_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UHD2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P48730_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O96017_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P22694_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96GX5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9UQM7_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15759_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P45985_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16644_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q8IU85_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P57078_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P80192_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P08581_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NRH2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P53667_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q13315_F5_model-v1.cif",
                "AF_Q13315_F1_model-v1.cif",
                "AF_Q13315_F7_model-v1.cif",
                "AF_Q13315_F8_model-v1.cif",
                "AF_Q13315_F2_model-v1.cif",
                "AF_Q13315_F4_model-v1.cif",
                "AF_Q13315_F9_model-v1.cif",
                "AF_Q13315_F3_model-v1.cif",
                "AF_Q13315_F10_model-v1.cif",
                "AF_Q13315_F6_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16620_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P23443_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q00536_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96S44_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49336_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q04759_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P30291_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q99986_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00444_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P11802_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P42345_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q6PHR2_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P45984_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q01973_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96RU8_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q96C45_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q9NQU5_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q16832_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_P49761_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_O00506_F1_model-v1.cif"
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
            ],
            "relevantAlphaFoldPredicts": [
                "AF_Q15831_F1_model-v1.cif"
            ]
        },
        "YES1": {
            "prokinoIdentifier": "Human_YES1",
            "UniProt_ID": "P07947",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P07947_F1_model-v1.cif"
            ]
        },
        "MAP3K10": {
            "prokinoIdentifier": "Human_MAP3K10",
            "UniProt_ID": "Q02779",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q02779_F1_model-v1.cif"
            ]
        },
        "ITPKA": {
            "prokinoIdentifier": "Human_ITPKA",
            "UniProt_ID": "P23677",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P23677_F1_model-v1.cif"
            ]
        },
        "STK17A": {
            "prokinoIdentifier": "Human_STK17A",
            "UniProt_ID": "Q9UEE5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UEE5_F1_model-v1.cif"
            ]
        },
        "LRRK1": {
            "prokinoIdentifier": "Human_LRRK1",
            "UniProt_ID": "Q38SD2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q38SD2_F1_model-v1.cif"
            ]
        },
        "STK33": {
            "prokinoIdentifier": "Human_STK33",
            "UniProt_ID": "Q9BYT3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BYT3_F1_model-v1.cif"
            ]
        },
        "CIT": {
            "prokinoIdentifier": "Human_CIT",
            "UniProt_ID": "O14578",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O14578_F1_model-v1.cif"
            ]
        },
        "RPS6KA4": {
            "prokinoIdentifier": "Human_RPS6KA4",
            "UniProt_ID": "O75676",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O75676_F1_model-v1.cif"
            ]
        },
        "CDK14": {
            "prokinoIdentifier": "Human_CDK14",
            "UniProt_ID": "O94921",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O94921_F1_model-v1.cif"
            ]
        },
        "RPS6KB2": {
            "prokinoIdentifier": "Human_RPS6KB2",
            "UniProt_ID": "Q9UBS0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UBS0_F1_model-v1.cif"
            ]
        },
        "MAP2K5": {
            "prokinoIdentifier": "Human_MAP2K5",
            "UniProt_ID": "Q13163",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q13163_F1_model-v1.cif"
            ]
        },
        "PIP5K1B": {
            "prokinoIdentifier": "Human_PIP5K1B",
            "UniProt_ID": "O14986",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O14986_F1_model-v1.cif"
            ]
        },
        "CDK19": {
            "prokinoIdentifier": "Human_CDK19",
            "UniProt_ID": "Q9BWU1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BWU1_F1_model-v1.cif"
            ]
        },
        "PRKD3": {
            "prokinoIdentifier": "Human_PRKD3",
            "UniProt_ID": "O94806",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O94806_F1_model-v1.cif"
            ]
        },
        "IPMK": {
            "prokinoIdentifier": "Human_IPMK",
            "UniProt_ID": "Q8NFU5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NFU5_F1_model-v1.cif"
            ]
        },
        "TNK1": {
            "prokinoIdentifier": "Human_TNK1",
            "UniProt_ID": "Q13470",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q13470_F1_model-v1.cif"
            ]
        },
        "CDKL4": {
            "prokinoIdentifier": "Human_CDKL4",
            "UniProt_ID": "Q5MAI5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q5MAI5_F1_model-v1.cif"
            ]
        },
        "TESK1": {
            "prokinoIdentifier": "Human_TESK1",
            "UniProt_ID": "Q15569",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q15569_F1_model-v1.cif"
            ]
        },
        "MOS": {
            "prokinoIdentifier": "Human_MOS",
            "UniProt_ID": "P00540",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P00540_F1_model-v1.cif"
            ]
        },
        "MYO3B": {
            "prokinoIdentifier": "Human_MYO3B",
            "UniProt_ID": "Q8WXR4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8WXR4_F1_model-v1.cif"
            ]
        },
        "TESK2": {
            "prokinoIdentifier": "Human_TESK2",
            "UniProt_ID": "Q96S53",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96S53_F1_model-v1.cif"
            ]
        },
        "TRIB3": {
            "prokinoIdentifier": "Human_TRIB3",
            "UniProt_ID": "Q96RU7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96RU7_F1_model-v1.cif"
            ]
        },
        "OBSCN": {
            "prokinoIdentifier": "Human_OBSCN",
            "UniProt_ID": "Q5VST9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q5VST9_F29_model-v1.cif",
                "AF_Q5VST9_F2_model-v1.cif",
                "AF_Q5VST9_F21_model-v1.cif",
                "AF_Q5VST9_F13_model-v1.cif",
                "AF_Q5VST9_F31_model-v1.cif",
                "AF_Q5VST9_F12_model-v1.cif",
                "AF_Q5VST9_F9_model-v1.cif",
                "AF_Q5VST9_F7_model-v1.cif",
                "AF_Q5VST9_F4_model-v1.cif",
                "AF_Q5VST9_F5_model-v1.cif",
                "AF_Q5VST9_F22_model-v1.cif",
                "AF_Q5VST9_F17_model-v1.cif",
                "AF_Q5VST9_F20_model-v1.cif",
                "AF_Q5VST9_F3_model-v1.cif",
                "AF_Q5VST9_F19_model-v1.cif",
                "AF_Q5VST9_F1_model-v1.cif",
                "AF_Q5VST9_F11_model-v1.cif",
                "AF_Q5VST9_F6_model-v1.cif",
                "AF_Q5VST9_F30_model-v1.cif",
                "AF_Q5VST9_F25_model-v1.cif",
                "AF_Q5VST9_F28_model-v1.cif",
                "AF_Q5VST9_F34_model-v1.cif",
                "AF_Q5VST9_F26_model-v1.cif",
                "AF_Q5VST9_F8_model-v1.cif",
                "AF_Q5VST9_F33_model-v1.cif",
                "AF_Q5VST9_F16_model-v1.cif",
                "AF_Q5VST9_F15_model-v1.cif",
                "AF_Q5VST9_F10_model-v1.cif",
                "AF_Q5VST9_F18_model-v1.cif",
                "AF_Q5VST9_F23_model-v1.cif",
                "AF_Q5VST9_F27_model-v1.cif",
                "AF_Q5VST9_F14_model-v1.cif",
                "AF_Q5VST9_F24_model-v1.cif",
                "AF_Q5VST9_F32_model-v1.cif"
            ]
        },
        "KALRN": {
            "prokinoIdentifier": "Human_KALRN",
            "UniProt_ID": "O60229",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O60229_F3_model-v1.cif",
                "AF_O60229_F5_model-v1.cif",
                "AF_O60229_F8_model-v1.cif",
                "AF_O60229_F4_model-v1.cif",
                "AF_O60229_F1_model-v1.cif",
                "AF_O60229_F6_model-v1.cif",
                "AF_O60229_F2_model-v1.cif",
                "AF_O60229_F9_model-v1.cif",
                "AF_O60229_F7_model-v1.cif"
            ]
        },
        "LATS2": {
            "prokinoIdentifier": "Human_LATS2",
            "UniProt_ID": "Q9NRM7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9NRM7_F1_model-v1.cif"
            ]
        },
        "PIM3": {
            "prokinoIdentifier": "Human_PIM3",
            "UniProt_ID": "Q86V86",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86V86_F1_model-v1.cif"
            ]
        },
        "CSNK2A3": {
            "prokinoIdentifier": "Human_CSNK2A3",
            "UniProt_ID": "Q8NEV1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NEV1_F1_model-v1.cif"
            ]
        },
        "TRIO": {
            "prokinoIdentifier": "Human_TRIO",
            "UniProt_ID": "O75962",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O75962_F2_model-v1.cif",
                "AF_O75962_F5_model-v1.cif",
                "AF_O75962_F7_model-v1.cif",
                "AF_O75962_F3_model-v1.cif",
                "AF_O75962_F9_model-v1.cif",
                "AF_O75962_F8_model-v1.cif",
                "AF_O75962_F4_model-v1.cif",
                "AF_O75962_F10_model-v1.cif",
                "AF_O75962_F1_model-v1.cif",
                "AF_O75962_F6_model-v1.cif"
            ]
        },
        "ARAF": {
            "prokinoIdentifier": "Human_ARAF",
            "UniProt_ID": "P10398",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P10398_F1_model-v1.cif"
            ]
        },
        "NEK9": {
            "prokinoIdentifier": "Human_NEK9",
            "UniProt_ID": "Q8TD19",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TD19_F1_model-v1.cif"
            ]
        },
        "NEK8": {
            "prokinoIdentifier": "Human_NEK8",
            "UniProt_ID": "Q86SG6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86SG6_F1_model-v1.cif"
            ]
        },
        "MOK": {
            "prokinoIdentifier": "Human_MOK",
            "UniProt_ID": "Q9UQ07",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UQ07_F1_model-v1.cif"
            ]
        },
        "SPEG": {
            "prokinoIdentifier": "Human_SPEG",
            "UniProt_ID": "Q15772",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q15772_F6_model-v1.cif",
                "AF_Q15772_F1_model-v1.cif",
                "AF_Q15772_F5_model-v1.cif",
                "AF_Q15772_F10_model-v1.cif",
                "AF_Q15772_F8_model-v1.cif",
                "AF_Q15772_F9_model-v1.cif",
                "AF_Q15772_F7_model-v1.cif",
                "AF_Q15772_F4_model-v1.cif",
                "AF_Q15772_F11_model-v1.cif",
                "AF_Q15772_F2_model-v1.cif",
                "AF_Q15772_F3_model-v1.cif"
            ]
        },
        "IPPK": {
            "prokinoIdentifier": "Human_IPPK",
            "UniProt_ID": "Q9H8X2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H8X2_F1_model-v1.cif"
            ]
        },
        "MAP4K2": {
            "prokinoIdentifier": "Human_MAP4K2",
            "UniProt_ID": "Q12851",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q12851_F1_model-v1.cif"
            ]
        },
        "SCYL1": {
            "prokinoIdentifier": "Human_SCYL1",
            "UniProt_ID": "Q96KG9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96KG9_F1_model-v1.cif"
            ]
        },
        "TSSK2": {
            "prokinoIdentifier": "Human_TSSK2",
            "UniProt_ID": "Q96PF2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96PF2_F1_model-v1.cif"
            ]
        },
        "NRBP2": {
            "prokinoIdentifier": "Human_NRBP2",
            "UniProt_ID": "Q9NSY0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9NSY0_F1_model-v1.cif"
            ]
        },
        "ITPKB": {
            "prokinoIdentifier": "Human_ITPKB",
            "UniProt_ID": "P27987",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P27987_F1_model-v1.cif"
            ]
        },
        "TSSK3": {
            "prokinoIdentifier": "Human_TSSK3",
            "UniProt_ID": "Q96PN8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96PN8_F1_model-v1.cif"
            ]
        },
        "LMTK2": {
            "prokinoIdentifier": "Human_LMTK2",
            "UniProt_ID": "Q8IWU2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IWU2_F1_model-v1.cif"
            ]
        },
        "IP6K1": {
            "prokinoIdentifier": "Human_IP6K1",
            "UniProt_ID": "Q92551",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q92551_F1_model-v1.cif"
            ]
        },
        "CAMKV": {
            "prokinoIdentifier": "Human_CAMKV",
            "UniProt_ID": "Q8NCB2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NCB2_F1_model-v1.cif"
            ]
        },
        "STKLD1": {
            "prokinoIdentifier": "Human_STKLD1",
            "UniProt_ID": "Q8NE28",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NE28_F1_model-v1.cif"
            ]
        },
        "DSTYK": {
            "prokinoIdentifier": "Human_DSTYK",
            "UniProt_ID": "Q6XUX3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6XUX3_F1_model-v1.cif"
            ]
        },
        "MAP3K11": {
            "prokinoIdentifier": "Human_MAP3K11",
            "UniProt_ID": "Q16584",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q16584_F1_model-v1.cif"
            ]
        },
        "CDK20": {
            "prokinoIdentifier": "Human_CDK20",
            "UniProt_ID": "Q8IZL9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IZL9_F1_model-v1.cif"
            ]
        },
        "ADCK2": {
            "prokinoIdentifier": "Human_ADCK2",
            "UniProt_ID": "Q7Z695",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q7Z695_F1_model-v1.cif"
            ]
        },
        "PXK": {
            "prokinoIdentifier": "Human_PXK",
            "UniProt_ID": "Q7Z7A4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q7Z7A4_F1_model-v1.cif"
            ]
        },
        "CHKB": {
            "prokinoIdentifier": "Human_CHKB",
            "UniProt_ID": "Q9Y259",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y259_F1_model-v1.cif"
            ]
        },
        "PRKACG": {
            "prokinoIdentifier": "Human_PRKACG",
            "UniProt_ID": "P22612",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P22612_F1_model-v1.cif"
            ]
        },
        "PKDCC": {
            "prokinoIdentifier": "Human_PKDCC",
            "UniProt_ID": "Q504Y2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q504Y2_F1_model-v1.cif"
            ]
        },
        "HIPK4": {
            "prokinoIdentifier": "Human_HIPK4",
            "UniProt_ID": "Q8NE63",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NE63_F1_model-v1.cif"
            ]
        },
        "SBK1": {
            "prokinoIdentifier": "Human_SBK1",
            "UniProt_ID": "Q52WX2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q52WX2_F1_model-v1.cif"
            ]
        },
        "SCYL3": {
            "prokinoIdentifier": "Human_SCYL3",
            "UniProt_ID": "Q8IZE3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IZE3_F1_model-v1.cif"
            ]
        },
        "NEK11": {
            "prokinoIdentifier": "Human_NEK11",
            "UniProt_ID": "Q8NG66",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NG66_F1_model-v1.cif"
            ]
        },
        "PIP4K2A": {
            "prokinoIdentifier": "Human_PIP4K2A",
            "UniProt_ID": "P48426",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P48426_F1_model-v1.cif"
            ]
        },
        "NPR1": {
            "prokinoIdentifier": "Human_NPR1",
            "UniProt_ID": "P16066",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P16066_F1_model-v1.cif"
            ]
        },
        "ITPKC": {
            "prokinoIdentifier": "Human_ITPKC",
            "UniProt_ID": "Q96DU7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96DU7_F1_model-v1.cif"
            ]
        },
        "RPS6KL1": {
            "prokinoIdentifier": "Human_RPS6KL1",
            "UniProt_ID": "Q9Y6S9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y6S9_F1_model-v1.cif"
            ]
        },
        "MAP3K15": {
            "prokinoIdentifier": "Human_MAP3K15",
            "UniProt_ID": "Q6ZN16",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6ZN16_F1_model-v1.cif"
            ]
        },
        "BLK": {
            "prokinoIdentifier": "Human_BLK",
            "UniProt_ID": "P51451",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P51451_F1_model-v1.cif"
            ]
        },
        "PRKX": {
            "prokinoIdentifier": "Human_PRKX",
            "UniProt_ID": "P51817",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P51817_F1_model-v1.cif"
            ]
        },
        "CDK15": {
            "prokinoIdentifier": "Human_CDK15",
            "UniProt_ID": "Q96Q40",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96Q40_F1_model-v1.cif"
            ]
        },
        "SBK2": {
            "prokinoIdentifier": "Human_SBK2",
            "UniProt_ID": "P0C263",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P0C263_F1_model-v1.cif"
            ]
        },
        "PI4K2A": {
            "prokinoIdentifier": "Human_PI4K2A",
            "UniProt_ID": "Q9BTU6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BTU6_F1_model-v1.cif"
            ]
        },
        "TSSK1B": {
            "prokinoIdentifier": "Human_TSSK1B",
            "UniProt_ID": "Q9BXA7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BXA7_F1_model-v1.cif"
            ]
        },
        "NIM1K": {
            "prokinoIdentifier": "Human_NIM1K",
            "UniProt_ID": "Q8IY84",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IY84_F1_model-v1.cif"
            ]
        },
        "PI4KA": {
            "prokinoIdentifier": "Human_PI4KA",
            "UniProt_ID": "P42356",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42356_F1_model-v1.cif"
            ]
        },
        "RSKR": {
            "prokinoIdentifier": "Human_RSKR",
            "UniProt_ID": "Q96LW2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96LW2_F1_model-v1.cif"
            ]
        },
        "DYRK1B": {
            "prokinoIdentifier": "Human_DYRK1B",
            "UniProt_ID": "Q9Y463",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y463_F1_model-v1.cif"
            ]
        },
        "RPS6KC1": {
            "prokinoIdentifier": "Human_RPS6KC1",
            "UniProt_ID": "Q96S38",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96S38_F1_model-v1.cif"
            ]
        },
        "GRK7": {
            "prokinoIdentifier": "Human_GRK7",
            "UniProt_ID": "Q8WTQ7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8WTQ7_F1_model-v1.cif"
            ]
        },
        "GUCY2F": {
            "prokinoIdentifier": "Human_GUCY2F",
            "UniProt_ID": "P51841",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P51841_F1_model-v1.cif"
            ]
        },
        "PSKH1": {
            "prokinoIdentifier": "Human_PSKH1",
            "UniProt_ID": "P11801",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P11801_F1_model-v1.cif"
            ]
        },
        "PDIK1L": {
            "prokinoIdentifier": "Human_PDIK1L",
            "UniProt_ID": "Q8N165",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8N165_F1_model-v1.cif"
            ]
        },
        "HYKK": {
            "prokinoIdentifier": "Human_HYKK",
            "UniProt_ID": "A2RU49",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_A2RU49_F1_model-v1.cif"
            ]
        },
        "PIP5KL1": {
            "prokinoIdentifier": "Human_PIP5KL1",
            "UniProt_ID": "Q5T9C9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q5T9C9_F1_model-v1.cif"
            ]
        },
        "PEAK3": {
            "prokinoIdentifier": "Human_PEAK3",
            "UniProt_ID": "Q6ZS72",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6ZS72_F1_model-v1.cif"
            ]
        },
        "MAST3": {
            "prokinoIdentifier": "Human_MAST3",
            "UniProt_ID": "O60307",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O60307_F1_model-v1.cif"
            ]
        },
        "EPHA10": {
            "prokinoIdentifier": "Human_EPHA10",
            "UniProt_ID": "Q5JZY3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q5JZY3_F1_model-v1.cif"
            ]
        },
        "PIK3CB": {
            "prokinoIdentifier": "Human_PIK3CB",
            "UniProt_ID": "P42338",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42338_F1_model-v1.cif"
            ]
        },
        "NRBP1": {
            "prokinoIdentifier": "Human_NRBP1",
            "UniProt_ID": "Q9UHY1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UHY1_F1_model-v1.cif"
            ]
        },
        "PIP5K1A": {
            "prokinoIdentifier": "Human_PIP5K1A",
            "UniProt_ID": "Q99755",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q99755_F1_model-v1.cif"
            ]
        },
        "MAP3K2": {
            "prokinoIdentifier": "Human_MAP3K2",
            "UniProt_ID": "Q9Y2U5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y2U5_F1_model-v1.cif"
            ]
        },
        "RPS6KA2": {
            "prokinoIdentifier": "Human_RPS6KA2",
            "UniProt_ID": "Q15349",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q15349_F1_model-v1.cif"
            ]
        },
        "TEX14": {
            "prokinoIdentifier": "Human_TEX14",
            "UniProt_ID": "Q8IWB6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IWB6_F1_model-v1.cif"
            ]
        },
        "NPR2": {
            "prokinoIdentifier": "Human_NPR2",
            "UniProt_ID": "P20594",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P20594_F1_model-v1.cif"
            ]
        },
        "PIK3CA": {
            "prokinoIdentifier": "Human_PIK3CA",
            "UniProt_ID": "P42336",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42336_F1_model-v1.cif"
            ]
        },
        "BRSK1": {
            "prokinoIdentifier": "Human_BRSK1",
            "UniProt_ID": "Q8TDC3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TDC3_F1_model-v1.cif"
            ]
        },
        "PKN3": {
            "prokinoIdentifier": "Human_PKN3",
            "UniProt_ID": "Q6P5Z2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6P5Z2_F1_model-v1.cif"
            ]
        },
        "MAP3K4": {
            "prokinoIdentifier": "Human_MAP3K4",
            "UniProt_ID": "Q9Y6R4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y6R4_F1_model-v1.cif"
            ]
        },
        "STK32B": {
            "prokinoIdentifier": "Human_STK32B",
            "UniProt_ID": "Q9NY57",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9NY57_F1_model-v1.cif"
            ]
        },
        "EPHA6": {
            "prokinoIdentifier": "Human_EPHA6",
            "UniProt_ID": "Q9UF33",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UF33_F1_model-v1.cif"
            ]
        },
        "STK35": {
            "prokinoIdentifier": "Human_STK35",
            "UniProt_ID": "Q8TDR2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TDR2_F1_model-v1.cif"
            ]
        },
        "CHKA": {
            "prokinoIdentifier": "Human_CHKA",
            "UniProt_ID": "P35790",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P35790_F1_model-v1.cif"
            ]
        },
        "ACAD10": {
            "prokinoIdentifier": "Human_ACAD10",
            "UniProt_ID": "Q6JQN1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6JQN1_F1_model-v1.cif"
            ]
        },
        "STYK1": {
            "prokinoIdentifier": "Human_STYK1",
            "UniProt_ID": "Q6J9G0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6J9G0_F1_model-v1.cif"
            ]
        },
        "IP6K2": {
            "prokinoIdentifier": "Human_IP6K2",
            "UniProt_ID": "Q9UHH9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UHH9_F1_model-v1.cif"
            ]
        },
        "HIPK3": {
            "prokinoIdentifier": "Human_HIPK3",
            "UniProt_ID": "Q9H422",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H422_F1_model-v1.cif"
            ]
        },
        "BMPR1A": {
            "prokinoIdentifier": "Human_BMPR1A",
            "UniProt_ID": "P36894",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P36894_F1_model-v1.cif"
            ]
        },
        "HUNK": {
            "prokinoIdentifier": "Human_HUNK",
            "UniProt_ID": "P57058",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P57058_F1_model-v1.cif"
            ]
        },
        "SRPK2": {
            "prokinoIdentifier": "Human_SRPK2",
            "UniProt_ID": "P78362",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P78362_F1_model-v1.cif"
            ]
        },
        "PIK3C2B": {
            "prokinoIdentifier": "Human_PIK3C2B",
            "UniProt_ID": "O00750",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O00750_F1_model-v1.cif"
            ]
        },
        "FN3K": {
            "prokinoIdentifier": "Human_FN3K",
            "UniProt_ID": "Q9H479",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H479_F1_model-v1.cif"
            ]
        },
        "LATS1": {
            "prokinoIdentifier": "Human_LATS1",
            "UniProt_ID": "O95835",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O95835_F1_model-v1.cif"
            ]
        },
        "EPHA1": {
            "prokinoIdentifier": "Human_EPHA1",
            "UniProt_ID": "P21709",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P21709_F1_model-v1.cif"
            ]
        },
        "FGR": {
            "prokinoIdentifier": "Human_FGR",
            "UniProt_ID": "P09769",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P09769_F1_model-v1.cif"
            ]
        },
        "NEK3": {
            "prokinoIdentifier": "Human_NEK3",
            "UniProt_ID": "P51956",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P51956_F1_model-v1.cif"
            ]
        },
        "FAM20A": {
            "prokinoIdentifier": "Human_FAM20A",
            "UniProt_ID": "Q96MK3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96MK3_F1_model-v1.cif"
            ]
        },
        "TXK": {
            "prokinoIdentifier": "Human_TXK",
            "UniProt_ID": "P42681",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42681_F1_model-v1.cif"
            ]
        },
        "NEK4": {
            "prokinoIdentifier": "Human_NEK4",
            "UniProt_ID": "P51957",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P51957_F1_model-v1.cif"
            ]
        },
        "PDGFRB": {
            "prokinoIdentifier": "Human_PDGFRB",
            "UniProt_ID": "P09619",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P09619_F1_model-v1.cif"
            ]
        },
        "DYRK4": {
            "prokinoIdentifier": "Human_DYRK4",
            "UniProt_ID": "Q9NR20",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9NR20_F1_model-v1.cif"
            ]
        },
        "AKT3": {
            "prokinoIdentifier": "Human_AKT3",
            "UniProt_ID": "Q9Y243",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y243_F1_model-v1.cif"
            ]
        },
        "IKBKE": {
            "prokinoIdentifier": "Human_IKBKE",
            "UniProt_ID": "Q14164",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q14164_F1_model-v1.cif"
            ]
        },
        "PRKY": {
            "prokinoIdentifier": "Human_PRKY",
            "UniProt_ID": "O43930",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O43930_F1_model-v1.cif"
            ]
        },
        "GUCY2D": {
            "prokinoIdentifier": "Human_GUCY2D",
            "UniProt_ID": "Q02846",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q02846_F1_model-v1.cif"
            ]
        },
        "MAP3K6": {
            "prokinoIdentifier": "Human_MAP3K6",
            "UniProt_ID": "O95382",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O95382_F1_model-v1.cif"
            ]
        },
        "MAK": {
            "prokinoIdentifier": "Human_MAK",
            "UniProt_ID": "P20794",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P20794_F1_model-v1.cif"
            ]
        },
        "MAPKAPK5": {
            "prokinoIdentifier": "Human_MAPKAPK5",
            "UniProt_ID": "Q8IW41",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8IW41_F1_model-v1.cif"
            ]
        },
        "ANKK1": {
            "prokinoIdentifier": "Human_ANKK1",
            "UniProt_ID": "Q8NFD2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NFD2_F1_model-v1.cif"
            ]
        },
        "FAM20B": {
            "prokinoIdentifier": "Human_FAM20B",
            "UniProt_ID": "O75063",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O75063_F1_model-v1.cif"
            ]
        },
        "TRIB2": {
            "prokinoIdentifier": "Human_TRIB2",
            "UniProt_ID": "Q92519",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q92519_F1_model-v1.cif"
            ]
        },
        "ETNK2": {
            "prokinoIdentifier": "Human_ETNK2",
            "UniProt_ID": "Q9NVF9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9NVF9_F1_model-v1.cif"
            ]
        },
        "TEC": {
            "prokinoIdentifier": "Human_TEC",
            "UniProt_ID": "P42680",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42680_F1_model-v1.cif"
            ]
        },
        "MAP3K1": {
            "prokinoIdentifier": "Human_MAP3K1",
            "UniProt_ID": "Q13233",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q13233_F1_model-v1.cif"
            ]
        },
        "PI4K2B": {
            "prokinoIdentifier": "Human_PI4K2B",
            "UniProt_ID": "Q8TCG2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TCG2_F1_model-v1.cif"
            ]
        },
        "SGK2": {
            "prokinoIdentifier": "Human_SGK2",
            "UniProt_ID": "Q9HBY8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9HBY8_F1_model-v1.cif"
            ]
        },
        "NUAK2": {
            "prokinoIdentifier": "Human_NUAK2",
            "UniProt_ID": "Q9H093",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H093_F1_model-v1.cif"
            ]
        },
        "PIK3CD": {
            "prokinoIdentifier": "Human_PIK3CD",
            "UniProt_ID": "O00329",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O00329_F1_model-v1.cif"
            ]
        },
        "SIK1B": {
            "prokinoIdentifier": "Human_SIK1B",
            "UniProt_ID": "A0A0B4J2F2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_A0A0B4J2F2_F1_model-v1.cif"
            ]
        },
        "PLK5": {
            "prokinoIdentifier": "Human_PLK5",
            "UniProt_ID": "Q496M5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q496M5_F1_model-v1.cif"
            ]
        },
        "NLK": {
            "prokinoIdentifier": "Human_NLK",
            "UniProt_ID": "Q9UBE8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UBE8_F1_model-v1.cif"
            ]
        },
        "IP6K3": {
            "prokinoIdentifier": "Human_IP6K3",
            "UniProt_ID": "Q96PC2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96PC2_F1_model-v1.cif"
            ]
        },
        "PAK2": {
            "prokinoIdentifier": "Human_PAK2",
            "UniProt_ID": "Q13177",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q13177_F1_model-v1.cif"
            ]
        },
        "MAST1": {
            "prokinoIdentifier": "Human_MAST1",
            "UniProt_ID": "Q9Y2H9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y2H9_F1_model-v1.cif"
            ]
        },
        "STK24": {
            "prokinoIdentifier": "Human_STK24",
            "UniProt_ID": "Q9Y6E0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y6E0_F1_model-v1.cif"
            ]
        },
        "ETNK1": {
            "prokinoIdentifier": "Human_ETNK1",
            "UniProt_ID": "Q9HBU6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9HBU6_F1_model-v1.cif"
            ]
        },
        "ADCK5": {
            "prokinoIdentifier": "Human_ADCK5",
            "UniProt_ID": "Q3MIX3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q3MIX3_F1_model-v1.cif"
            ]
        },
        "MYLK2": {
            "prokinoIdentifier": "Human_MYLK2",
            "UniProt_ID": "Q9H1R3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H1R3_F1_model-v1.cif"
            ]
        },
        "CDK18": {
            "prokinoIdentifier": "Human_CDK18",
            "UniProt_ID": "Q07002",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q07002_F1_model-v1.cif"
            ]
        },
        "TSSK6": {
            "prokinoIdentifier": "Human_TSSK6",
            "UniProt_ID": "Q9BXA6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BXA6_F1_model-v1.cif"
            ]
        },
        "TAOK1": {
            "prokinoIdentifier": "Human_TAOK1",
            "UniProt_ID": "Q7L7X3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q7L7X3_F1_model-v1.cif"
            ]
        },
        "PI4KB": {
            "prokinoIdentifier": "Human_PI4KB",
            "UniProt_ID": "Q9UBF8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UBF8_F1_model-v1.cif"
            ]
        },
        "WNK4": {
            "prokinoIdentifier": "Human_WNK4",
            "UniProt_ID": "Q96J92",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96J92_F1_model-v1.cif"
            ]
        },
        "ADCK1": {
            "prokinoIdentifier": "Human_ADCK1",
            "UniProt_ID": "Q86TW2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86TW2_F1_model-v1.cif"
            ]
        },
        "CDK11B": {
            "prokinoIdentifier": "Human_CDK11B",
            "UniProt_ID": "P21127",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P21127_F1_model-v1.cif"
            ]
        },
        "SCYL2": {
            "prokinoIdentifier": "Human_SCYL2",
            "UniProt_ID": "Q6P3W7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6P3W7_F1_model-v1.cif"
            ]
        },
        "MAST2": {
            "prokinoIdentifier": "Human_MAST2",
            "UniProt_ID": "Q6P0Q8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6P0Q8_F1_model-v1.cif"
            ]
        },
        "AATK": {
            "prokinoIdentifier": "Human_AATK",
            "UniProt_ID": "Q6ZMQ8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6ZMQ8_F1_model-v1.cif"
            ]
        },
        "MYO3A": {
            "prokinoIdentifier": "Human_MYO3A",
            "UniProt_ID": "Q8NEV4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NEV4_F1_model-v1.cif"
            ]
        },
        "EPHB6": {
            "prokinoIdentifier": "Human_EPHB6",
            "UniProt_ID": "O15197",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O15197_F1_model-v1.cif"
            ]
        },
        "SIK3": {
            "prokinoIdentifier": "Human_SIK3",
            "UniProt_ID": "Q9Y2K2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y2K2_F1_model-v1.cif"
            ]
        },
        "PIK3C3": {
            "prokinoIdentifier": "Human_PIK3C3",
            "UniProt_ID": "Q8NEB9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NEB9_F1_model-v1.cif"
            ]
        },
        "FER": {
            "prokinoIdentifier": "Human_FER",
            "UniProt_ID": "P16591",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P16591_F1_model-v1.cif"
            ]
        },
        "GRK3": {
            "prokinoIdentifier": "Human_GRK3",
            "UniProt_ID": "P35626",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P35626_F1_model-v1.cif"
            ]
        },
        "ALPK3": {
            "prokinoIdentifier": "Human_ALPK3",
            "UniProt_ID": "Q96L96",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96L96_F1_model-v1.cif"
            ]
        },
        "NEK5": {
            "prokinoIdentifier": "Human_NEK5",
            "UniProt_ID": "Q6P3R8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6P3R8_F1_model-v1.cif"
            ]
        },
        "ACAD11": {
            "prokinoIdentifier": "Human_ACAD11",
            "UniProt_ID": "Q709F0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q709F0_F1_model-v1.cif"
            ]
        },
        "PIK3C2G": {
            "prokinoIdentifier": "Human_PIK3C2G",
            "UniProt_ID": "O75747",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O75747_F1_model-v1.cif"
            ]
        },
        "AMHR2": {
            "prokinoIdentifier": "Human_AMHR2",
            "UniProt_ID": "Q16671",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q16671_F1_model-v1.cif"
            ]
        },
        "PIP5K1C": {
            "prokinoIdentifier": "Human_PIP5K1C",
            "UniProt_ID": "O60331",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O60331_F1_model-v1.cif"
            ]
        },
        "PRKCG": {
            "prokinoIdentifier": "Human_PRKCG",
            "UniProt_ID": "P05129",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P05129_F1_model-v1.cif"
            ]
        },
        "LTK": {
            "prokinoIdentifier": "Human_LTK",
            "UniProt_ID": "P29376",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P29376_F1_model-v1.cif"
            ]
        },
        "SIK1": {
            "prokinoIdentifier": "Human_SIK1",
            "UniProt_ID": "P57059",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P57059_F1_model-v1.cif"
            ]
        },
        "MAST4": {
            "prokinoIdentifier": "Human_MAST4",
            "UniProt_ID": "O15021",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O15021_F1_model-v1.cif"
            ]
        },
        "NEK6": {
            "prokinoIdentifier": "Human_NEK6",
            "UniProt_ID": "Q9HC98",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9HC98_F1_model-v1.cif"
            ]
        },
        "MAP3K13": {
            "prokinoIdentifier": "Human_MAP3K13",
            "UniProt_ID": "O43283",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O43283_F1_model-v1.cif"
            ]
        },
        "TIE1": {
            "prokinoIdentifier": "Human_TIE1",
            "UniProt_ID": "P35590",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P35590_F1_model-v1.cif"
            ]
        },
        "ALPK2": {
            "prokinoIdentifier": "Human_ALPK2",
            "UniProt_ID": "Q86TB3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86TB3_F1_model-v1.cif"
            ]
        },
        "WNK2": {
            "prokinoIdentifier": "Human_WNK2",
            "UniProt_ID": "Q9Y3S1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y3S1_F1_model-v1.cif"
            ]
        },
        "PRKD1": {
            "prokinoIdentifier": "Human_PRKD1",
            "UniProt_ID": "Q15139",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q15139_F1_model-v1.cif"
            ]
        },
        "PRKD2": {
            "prokinoIdentifier": "Human_PRKD2",
            "UniProt_ID": "Q9BZL6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BZL6_F1_model-v1.cif"
            ]
        },
        "MYLK3": {
            "prokinoIdentifier": "Human_MYLK3",
            "UniProt_ID": "Q32MK0",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q32MK0_F1_model-v1.cif"
            ]
        },
        "PRKG2": {
            "prokinoIdentifier": "Human_PRKG2",
            "UniProt_ID": "Q13237",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q13237_F1_model-v1.cif"
            ]
        },
        "CDK10": {
            "prokinoIdentifier": "Human_CDK10",
            "UniProt_ID": "Q15131",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q15131_F1_model-v1.cif"
            ]
        },
        "TLK1": {
            "prokinoIdentifier": "Human_TLK1",
            "UniProt_ID": "Q9UKI8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UKI8_F1_model-v1.cif"
            ]
        },
        "PRKCE": {
            "prokinoIdentifier": "Human_PRKCE",
            "UniProt_ID": "Q02156",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q02156_F1_model-v1.cif"
            ]
        },
        "MATK": {
            "prokinoIdentifier": "Human_MATK",
            "UniProt_ID": "P42679",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P42679_F1_model-v1.cif"
            ]
        },
        "MAP3K19": {
            "prokinoIdentifier": "Human_MAP3K19",
            "UniProt_ID": "Q56UN5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q56UN5_F1_model-v1.cif"
            ]
        },
        "ACVR1B": {
            "prokinoIdentifier": "Human_ACVR1B",
            "UniProt_ID": "P36896",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P36896_F1_model-v1.cif"
            ]
        },
        "CILK1": {
            "prokinoIdentifier": "Human_CILK1",
            "UniProt_ID": "Q9UPZ9",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UPZ9_F1_model-v1.cif"
            ]
        },
        "TRPM6": {
            "prokinoIdentifier": "Human_TRPM6",
            "UniProt_ID": "Q9BX84",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BX84_F1_model-v1.cif"
            ]
        },
        "FN3KRP": {
            "prokinoIdentifier": "Human_FN3KRP",
            "UniProt_ID": "Q9HA64",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9HA64_F1_model-v1.cif"
            ]
        },
        "ALPK1": {
            "prokinoIdentifier": "Human_ALPK1",
            "UniProt_ID": "Q96QP1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96QP1_F1_model-v1.cif"
            ]
        },
        "CDK11A": {
            "prokinoIdentifier": "Human_CDK11A",
            "UniProt_ID": "Q9UQ88",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9UQ88_F1_model-v1.cif"
            ]
        },
        "CDC42BPG": {
            "prokinoIdentifier": "Human_CDC42BPG",
            "UniProt_ID": "Q6DT37",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6DT37_F1_model-v1.cif"
            ]
        },
        "UHMK1": {
            "prokinoIdentifier": "Human_UHMK1",
            "UniProt_ID": "Q8TAS1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TAS1_F1_model-v1.cif"
            ]
        },
        "COQ8B": {
            "prokinoIdentifier": "Human_COQ8B",
            "UniProt_ID": "Q96D53",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96D53_F1_model-v1.cif"
            ]
        },
        "ACVR1C": {
            "prokinoIdentifier": "Human_ACVR1C",
            "UniProt_ID": "Q8NER5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8NER5_F1_model-v1.cif"
            ]
        },
        "FLT4": {
            "prokinoIdentifier": "Human_FLT4",
            "UniProt_ID": "P35916",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P35916_F1_model-v1.cif"
            ]
        },
        "NEK10": {
            "prokinoIdentifier": "Human_NEK10",
            "UniProt_ID": "Q6ZWH5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6ZWH5_F1_model-v1.cif"
            ]
        },
        "STK32C": {
            "prokinoIdentifier": "Human_STK32C",
            "UniProt_ID": "Q86UX6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86UX6_F1_model-v1.cif"
            ]
        },
        "SRMS": {
            "prokinoIdentifier": "Human_SRMS",
            "UniProt_ID": "Q9H3Y6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9H3Y6_F1_model-v1.cif"
            ]
        },
        "TSSK4": {
            "prokinoIdentifier": "Human_TSSK4",
            "UniProt_ID": "Q6SA08",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6SA08_F1_model-v1.cif"
            ]
        },
        "STRADB": {
            "prokinoIdentifier": "Human_STRADB",
            "UniProt_ID": "Q9C0K7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9C0K7_F1_model-v1.cif"
            ]
        },
        "PIK3C2A": {
            "prokinoIdentifier": "Human_PIK3C2A",
            "UniProt_ID": "O00443",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O00443_F1_model-v1.cif"
            ]
        },
        "MAP4K5": {
            "prokinoIdentifier": "Human_MAP4K5",
            "UniProt_ID": "Q9Y4K4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y4K4_F1_model-v1.cif"
            ]
        },
        "IRAK2": {
            "prokinoIdentifier": "Human_IRAK2",
            "UniProt_ID": "O43187",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_O43187_F1_model-v1.cif"
            ]
        },
        "PRKCZ": {
            "prokinoIdentifier": "Human_PRKCZ",
            "UniProt_ID": "Q05513",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q05513_F1_model-v1.cif"
            ]
        },
        "SGK3": {
            "prokinoIdentifier": "Human_SGK3",
            "UniProt_ID": "Q96BR1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96BR1_F1_model-v1.cif"
            ]
        },
        "HIPK1": {
            "prokinoIdentifier": "Human_HIPK1",
            "UniProt_ID": "Q86Z02",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q86Z02_F1_model-v1.cif"
            ]
        },
        "PSKH2": {
            "prokinoIdentifier": "Human_PSKH2",
            "UniProt_ID": "Q96QS6",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96QS6_F1_model-v1.cif"
            ]
        },
        "NRK": {
            "prokinoIdentifier": "Human_NRK",
            "UniProt_ID": "Q7Z2Y5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q7Z2Y5_F1_model-v1.cif"
            ]
        },
        "MAPK4": {
            "prokinoIdentifier": "Human_MAPK4",
            "UniProt_ID": "P31152",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P31152_F1_model-v1.cif"
            ]
        },
        "PIK3CG": {
            "prokinoIdentifier": "Human_PIK3CG",
            "UniProt_ID": "P48736",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P48736_F1_model-v1.cif"
            ]
        },
        "PIP4K2B": {
            "prokinoIdentifier": "Human_PIP4K2B",
            "UniProt_ID": "P78356",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P78356_F1_model-v1.cif"
            ]
        },
        "CSNK1A1L": {
            "prokinoIdentifier": "Human_CSNK1A1L",
            "UniProt_ID": "Q8N752",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8N752_F1_model-v1.cif"
            ]
        },
        "MAP3K3": {
            "prokinoIdentifier": "Human_MAP3K3",
            "UniProt_ID": "Q99759",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q99759_F1_model-v1.cif"
            ]
        },
        "PIKFYVE": {
            "prokinoIdentifier": "Human_PIKFYVE",
            "UniProt_ID": "Q9Y2I7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9Y2I7_F1_model-v1.cif"
            ]
        },
        "CDK17": {
            "prokinoIdentifier": "Human_CDK17",
            "UniProt_ID": "Q00537",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q00537_F1_model-v1.cif"
            ]
        },
        "TBCK": {
            "prokinoIdentifier": "Human_TBCK",
            "UniProt_ID": "Q8TEA7",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TEA7_F1_model-v1.cif"
            ]
        },
        "GUCY2C": {
            "prokinoIdentifier": "Human_GUCY2C",
            "UniProt_ID": "P25092",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P25092_F1_model-v1.cif"
            ]
        },
        "EIF2AK1": {
            "prokinoIdentifier": "Human_EIF2AK1",
            "UniProt_ID": "Q9BQI3",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BQI3_F1_model-v1.cif"
            ]
        },
        "STK31": {
            "prokinoIdentifier": "Human_STK31",
            "UniProt_ID": "Q9BXU1",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q9BXU1_F1_model-v1.cif"
            ]
        },
        "INSRR": {
            "prokinoIdentifier": "Human_INSRR",
            "UniProt_ID": "P14616",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_P14616_F1_model-v1.cif"
            ]
        },
        "PDPK2P": {
            "prokinoIdentifier": "Human_PDPK2P",
            "UniProt_ID": "Q6A1A2",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q6A1A2_F1_model-v1.cif"
            ]
        },
        "PRKCD": {
            "prokinoIdentifier": "Human_PRKCD",
            "UniProt_ID": "Q05655",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q05655_F1_model-v1.cif"
            ]
        },
        "TRPM7": {
            "prokinoIdentifier": "Human_TRPM7",
            "UniProt_ID": "Q96QT4",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q96QT4_F1_model-v1.cif"
            ]
        },
        "MINK1": {
            "prokinoIdentifier": "Human_MINK1",
            "UniProt_ID": "Q8N4C8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8N4C8_F1_model-v1.cif"
            ]
        },
        "DCLK2": {
            "prokinoIdentifier": "Human_DCLK2",
            "UniProt_ID": "Q8N568",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8N568_F1_model-v1.cif"
            ]
        },
        "PIP4K2C": {
            "prokinoIdentifier": "Human_PIP4K2C",
            "UniProt_ID": "Q8TBX8",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q8TBX8_F1_model-v1.cif"
            ]
        },
        "ERN2": {
            "prokinoIdentifier": "Human_ERN2",
            "UniProt_ID": "Q76MJ5",
            "organism": "Homo sapiens (Human)",
            "relevantAlphaFoldPredicts": [
                "AF_Q76MJ5_F1_model-v1.cif"
            ]
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
            const currentProtein = filteredArray[0];
            const avSvwr = currentProtein.structureViewerData; //list of Pdbs from structure viewer data
            const alphaFolds = currentProtein.relevantAlphaFoldPredicts;
            avSvwr.forEach(sv => {
                console.log("unpiprotId", sv.unpiprotId)
                sv.relevantPDBs.forEach(pdb => {
                    let relatedFile = cifFilesOnDisk.filter(f => f.name.split("_")[f.name.split("_").length-1] == pdb)
                    let fname = ""
                    if (relatedFile.length>0) //file found
                        fname = relatedFile[0]["name"] + ".cif";
                    cifFileArr.push(
                        {
                            name: "pdb:" + pdb + ", uniprot: " + sv.unpiprotId + ", organism: " + sv.organism,
                            pdbId: pdb,
                            uniprotId: sv.unpiprotId,
                            organismName: sv.organism,
                            filename: fname
                        })

                });
                //Assume we have one alphaFold for each protein
                
     

               // console.log("organism", sv.organism)
            }
            );

            alphaFolds.forEach(af => {
                let relatedFile = cifFilesOnDisk.filter(f => f.name.split("_")[f.name.split("_").length-1] == af)
                let fname = ""
                const uniprotId = currentProtein.UniProt_ID;
                const organism = currentProtein.organism;
                if (relatedFile.length>0) //file found
                    fname = relatedFile[0]["name"] + ".cif";
                cifFileArr.push({
                    name: "AlphaFold:" + af + ", uniprot: " + uniprotId+ ", organism: " + organism,
                    pdbId: af,
                    uniprotId: uniprotId,
                    organismName: organism,
                    filename: fname
                })

            })
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
        relativeDirectory
      }
    }
  }
  `