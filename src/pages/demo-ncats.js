import React from "react"
import { Link, withPrefix } from "gatsby"

import Layout from "../components/Layout"
import { Helmet } from 'react-helmet'

const DemoNcatsProtvistaviewer = () => (

  <Layout>
    <Helmet>
      <script src={withPrefix('js/ncats-protvista-viewer-bundle.js')} type="text/javascript" />
    </Helmet>
    <div className="silo">
      <ncats-protvista-legend></ncats-protvista-legend>
    </div>
    <div class="silo">
      <ncats-protvista-viewer
        annotations='[{"startResidue": 4, "endResidue": 12, "type": "beta-strand", "name": "beta1 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 4, "endResidue": 25, "type": "Subdomain", "name": "subdomain I", "__typename": "SeqAnnotationInfo" }, { "startResidue": 4, "endResidue": 81, "type": "N-Lobe", "name": "N-lobe", "__typename": "SeqAnnotationInfo" }, { "startResidue": 9, "endResidue": 9, "type": "KeyAA", "name": "beta1-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 11, "endResidue": 16, "type": "Glycine Loop", "name": "glycine-rich loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 17, "endResidue": 17, "type": "KeyAA", "name": "beta2-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 17, "endResidue": 23, "type": "beta-strand", "name": "beta2 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 18, "endResidue": 18, "type": "C-Spine", "name": "C-spine C8", "__typename": "SeqAnnotationInfo" }, { "startResidue": 26, "endResidue": 39, "type": "Subdomain", "name": "subdomain II", "__typename": "SeqAnnotationInfo" }, { "startResidue": 28, "endResidue": 36, "type": "beta-strand", "name": "beta3 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 31, "endResidue": 31, "type": "C-Spine", "name": "C-spine C7", "__typename": "SeqAnnotationInfo" }, { "startResidue": 33, "endResidue": 33, "type": "KeyAA", "name": "beta3-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 40, "endResidue": 52, "type": "alpha-helix", "name": "C-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 40, "endResidue": 54, "type": "Subdomain", "name": "subdomain III", "__typename": "SeqAnnotationInfo" }, { "startResidue": 46, "endResidue": 46, "type": "KeyAA", "name": "alphaC-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 50, "endResidue": 50, "type": "R-Spine", "name": "R-spine R4", "__typename": "SeqAnnotationInfo" }, { "startResidue": 53, "endResidue": 60, "type": "alphaC-beta4 Loop", "name": "alphaC-beta4 loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 55, "endResidue": 57, "type": "Motif", "name": "HxN Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 55, "endResidue": 69, "type": "Subdomain", "name": "subdomain IV", "__typename": "SeqAnnotationInfo" }, { "startResidue": 59, "endResidue": 59, "type": "R-Spine Shell", "name": "R-spine Shell Sh1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 60, "endResidue": 60, "type": "KeyAA", "name": "beta4-arginine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 61, "endResidue": 61, "type": "R-Spine", "name": "R-spine R3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 61, "endResidue": 66, "type": "beta-strand", "name": "beta4 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 70, "endResidue": 75, "type": "beta-strand", "name": "beta5 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 70, "endResidue": 92, "type": "Subdomain", "name": "subdomain V", "__typename": "SeqAnnotationInfo" }, { "startResidue": 73, "endResidue": 73, "type": "R-Spine Shell", "name": "R-spine Shell Sh3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 75, "endResidue": 75, "type": "Gatekeeper", "name": "gatekeeper", "__typename": "SeqAnnotationInfo" }, { "startResidue": 75, "endResidue": 82, "type": "Linker", "name": "linker", "__typename": "SeqAnnotationInfo" }, { "startResidue": 76, "endResidue": 76, "type": "KeyAA", "name": "beta5-glutamate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 83, "type": "C-Spine", "name": "C-spine C6", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 90, "type": "alpha-helix", "name": "D-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 83, "endResidue": 280, "type": "C-Lobe", "name": "C-lobe", "__typename": "SeqAnnotationInfo" }, { "startResidue": 93, "endResidue": 115, "type": "Subdomain", "name": "subdomain VIa", "__typename": "SeqAnnotationInfo" }, { "startResidue": 95, "endResidue": 114, "type": "alpha-helix", "name": "E-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 116, "endResidue": 131, "type": "Subdomain", "name": "subdomain VIb", "__typename": "SeqAnnotationInfo" }, { "startResidue": 117, "endResidue": 118, "type": "beta-strand", "name": "beta6 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 119, "type": "R-Spine", "name": "R-spine R2", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 121, "type": "Motif", "name": "HRD Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 119, "endResidue": 126, "type": "Catalytic Loop", "name": "catalytic loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 127, "endResidue": 127, "type": "C-Spine", "name": "C-spine C5", "__typename": "SeqAnnotationInfo" }, { "startResidue": 127, "endResidue": 129, "type": "beta-strand", "name": "beta7 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 128, "endResidue": 128, "type": "C-Spine", "name": "C-spine C4", "__typename": "SeqAnnotationInfo" }, { "startResidue": 129, "endResidue": 129, "type": "C-Spine", "name": "C-spine C3", "__typename": "SeqAnnotationInfo" }, { "startResidue": 133, "endResidue": 148, "type": "Subdomain", "name": "subdomain VII", "__typename": "SeqAnnotationInfo" }, { "startResidue": 135, "endResidue": 137, "type": "beta-strand", "name": "beta8 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 136, "endResidue": 136, "type": "KeyAA", "name": "beta8-lysine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 139, "endResidue": 141, "type": "Motif", "name": "DFG Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 139, "endResidue": 189, "type": "Activation Segment", "name": "activation segment", "__typename": "SeqAnnotationInfo" }, { "startResidue": 140, "endResidue": 140, "type": "R-Spine", "name": "R-spine R1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 142, "endResidue": 186, "type": "Activation Loop", "name": "activation loop", "__typename": "SeqAnnotationInfo" }, { "startResidue": 144, "endResidue": 145, "type": "beta-strand", "name": "beta9 strand", "__typename": "SeqAnnotationInfo" }, { "startResidue": 149, "endResidue": 193, "type": "Subdomain", "name": "subdomain VIII", "__typename": "SeqAnnotationInfo" }, { "startResidue": 187, "endResidue": 189, "type": "Motif", "name": "APE Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 194, "endResidue": 221, "type": "Subdomain", "name": "subdomain IX", "__typename": "SeqAnnotationInfo" }, { "startResidue": 199, "endResidue": 214, "type": "alpha-helix", "name": "F-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 201, "type": "KeyAA", "name": "alphaF-aspartate", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 201, "type": "R-Spine", "name": "R-spine R0", "__typename": "SeqAnnotationInfo" }, { "startResidue": 201, "endResidue": 203, "type": "Motif", "name": "DxW Motif", "__typename": "SeqAnnotationInfo" }, { "startResidue": 208, "endResidue": 208, "type": "C-Spine", "name": "C-spine C2", "__typename": "SeqAnnotationInfo" }, { "startResidue": 212, "endResidue": 212, "type": "C-Spine", "name": "C-spine C1", "__typename": "SeqAnnotationInfo" }, { "startResidue": 222, "endResidue": 248, "type": "Subdomain", "name": "subdomain X", "__typename": "SeqAnnotationInfo" }, { "startResidue": 224, "endResidue": 233, "type": "alpha-helix", "name": "G-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 233, "endResidue": 247, "type": "CMGC Insert", "name": "CMGC insert", "__typename": "SeqAnnotationInfo" }, { "startResidue": 249, "endResidue": 280, "type": "Subdomain", "name": "subdomain XI", "__typename": "SeqAnnotationInfo" }, { "startResidue": 251, "endResidue": 260, "type": "alpha-helix", "name": "H-helix", "__typename": "SeqAnnotationInfo" }, { "startResidue": 268, "endResidue": 268, "type": "KeyAA", "name": "alphaHI-arginine", "__typename": "SeqAnnotationInfo" }, { "startResidue": 272, "endResidue": 275, "type": "alpha-helix", "name": "I-helix", "__typename": "SeqAnnotationInfo" } ]'
        sequence='[
          [
              {
                  "aa": "L",
                  "bits": 2.89973
              },
              {
                  "aa": "V",
                  "bits": 0.01874
              },
              {
                  "aa": "I",
                  "bits": 0.011
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 0.31413
              },
              {
                  "aa": "V",
                  "bits": 0.31265
              },
              {
                  "aa": "K",
                  "bits": 0.16569
              },
              {
                  "aa": "R",
                  "bits": 0.11965
              },
              {
                  "aa": "S",
                  "bits": 0.05565
              },
              {
                  "aa": "E",
                  "bits": 0.04506
              },
              {
                  "aa": "Q",
                  "bits": 0.04137
              },
              {
                  "aa": "H",
                  "bits": 0.0362
              },
              {
                  "aa": "I",
                  "bits": 0.01675
              },
              {
                  "aa": "C",
                  "bits": 0.00543
              },
              {
                  "aa": "A",
                  "bits": 0.00444
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.18502
              },
              {
                  "aa": "F",
                  "bits": 0.34768
              },
              {
                  "aa": "I",
                  "bits": 0.00787
              },
              {
                  "aa": "M",
                  "bits": 0.00451
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.89421
              },
              {
                  "aa": "E",
                  "bits": 0.01282
              },
              {
                  "aa": "S",
                  "bits": 0.00387
              },
              {
                  "aa": "L",
                  "bits": 0.00323
              },
              {
                  "aa": "K",
                  "bits": 0.00323
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 1.72617
              },
              {
                  "aa": "R",
                  "bits": 0.27891
              },
              {
                  "aa": "Q",
                  "bits": 0.05333
              },
              {
                  "aa": "E",
                  "bits": 0.03048
              },
              {
                  "aa": "D",
                  "bits": 0.0243
              },
              {
                  "aa": "A",
                  "bits": 0.01668
              },
              {
                  "aa": "N",
                  "bits": 0.01335
              },
              {
                  "aa": "P",
                  "bits": 0.00669
              },
              {
                  "aa": "V",
                  "bits": 0.00526
              },
              {
                  "aa": "M",
                  "bits": 0.00526
              },
              {
                  "aa": "I",
                  "bits": 0.00526
              },
              {
                  "aa": "G",
                  "bits": 0.00526
              },
              {
                  "aa": "T",
                  "bits": 0.00336
              },
              {
                  "aa": "H",
                  "bits": 0.00288
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 0.69905
              },
              {
                  "aa": "T",
                  "bits": 0.34904
              },
              {
                  "aa": "V",
                  "bits": 0.1888
              },
              {
                  "aa": "I",
                  "bits": 0.11355
              },
              {
                  "aa": "Q",
                  "bits": 0.05224
              },
              {
                  "aa": "S",
                  "bits": 0.04932
              },
              {
                  "aa": "E",
                  "bits": 0.01429
              },
              {
                  "aa": "A",
                  "bits": 0.00748
              },
              {
                  "aa": "L",
                  "bits": 0.0065
              },
              {
                  "aa": "R",
                  "bits": 0.00229
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.95119
              },
              {
                  "aa": "I",
                  "bits": 0.00714
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.97986
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.72753
              },
              {
                  "aa": "S",
                  "bits": 0.29478
              },
              {
                  "aa": "A",
                  "bits": 0.18873
              },
              {
                  "aa": "R",
                  "bits": 0.13208
              },
              {
                  "aa": "H",
                  "bits": 0.13175
              },
              {
                  "aa": "Y",
                  "bits": 0.01286
              },
              {
                  "aa": "Q",
                  "bits": 0.0066
              },
              {
                  "aa": "T",
                  "bits": 0.00562
              },
              {
                  "aa": "V",
                  "bits": 0.00232
              },
              {
                  "aa": "K",
                  "bits": 0.00232
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.98987
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 1.08018
              },
              {
                  "aa": "C",
                  "bits": 0.87305
              },
              {
                  "aa": "E",
                  "bits": 0.10813
              },
              {
                  "aa": "M",
                  "bits": 0.00638
              },
              {
                  "aa": "P",
                  "bits": 0.00547
              },
              {
                  "aa": "V",
                  "bits": 0.00229
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 2.97282
              },
              {
                  "aa": "Y",
                  "bits": 0.00328
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.99253
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 0.95241
              },
              {
                  "aa": "K",
                  "bits": 0.82543
              },
              {
                  "aa": "R",
                  "bits": 0.08908
              },
              {
                  "aa": "V",
                  "bits": 0.05457
              },
              {
                  "aa": "M",
                  "bits": 0.01664
              },
              {
                  "aa": "L",
                  "bits": 0.00428
              },
              {
                  "aa": "C",
                  "bits": 0.00386
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 2.98081
              },
              {
                  "aa": "I",
                  "bits": 0.00329
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 2.09522
              },
              {
                  "aa": "M",
                  "bits": 0.13465
              },
              {
                  "aa": "I",
                  "bits": 0.12723
              },
              {
                  "aa": "L",
                  "bits": 0.06204
              },
              {
                  "aa": "Y",
                  "bits": 0.00268
              },
              {
                  "aa": "F",
                  "bits": 0.00268
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.50318
              },
              {
                  "aa": "M",
                  "bits": 0.36295
              },
              {
                  "aa": "K",
                  "bits": 0.12099
              },
              {
                  "aa": "L",
                  "bits": 0.10835
              },
              {
                  "aa": "R",
                  "bits": 0.09513
              },
              {
                  "aa": "Q",
                  "bits": 0.073
              },
              {
                  "aa": "N",
                  "bits": 0.03622
              },
              {
                  "aa": "C",
                  "bits": 0.00749
              },
              {
                  "aa": "A",
                  "bits": 0.0049
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.40992
              },
              {
                  "aa": "G",
                  "bits": 0.2579
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.74413
              },
              {
                  "aa": "T",
                  "bits": 0.56046
              },
              {
                  "aa": "S",
                  "bits": 0.21154
              },
              {
                  "aa": "D",
                  "bits": 0.06185
              },
              {
                  "aa": "A",
                  "bits": 0.04485
              },
              {
                  "aa": "H",
                  "bits": 0.0087
              },
              {
                  "aa": "Q",
                  "bits": 0.00689
              },
              {
                  "aa": "K",
                  "bits": 0.00508
              },
              {
                  "aa": "N",
                  "bits": 0.00363
              },
              {
                  "aa": "C",
                  "bits": 0.00291
              },
              {
                  "aa": "I",
                  "bits": 0.00255
              },
              {
                  "aa": "V",
                  "bits": 0.00219
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.65333
              },
              {
                  "aa": "V",
                  "bits": 0.04911
              },
              {
                  "aa": "I",
                  "bits": 0.04426
              },
              {
                  "aa": "G",
                  "bits": 0.00851
              },
              {
                  "aa": "C",
                  "bits": 0.00488
              },
              {
                  "aa": "F",
                  "bits": 0.00306
              },
              {
                  "aa": "T",
                  "bits": 0.00245
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 0.30962
              },
              {
                  "aa": "Y",
                  "bits": 0.30393
              },
              {
                  "aa": "V",
                  "bits": 0.16743
              },
              {
                  "aa": "I",
                  "bits": 0.16421
              },
              {
                  "aa": "L",
                  "bits": 0.0789
              },
              {
                  "aa": "H",
                  "bits": 0.04403
              },
              {
                  "aa": "S",
                  "bits": 0.01089
              },
              {
                  "aa": "K",
                  "bits": 0.0099
              },
              {
                  "aa": "E",
                  "bits": 0.00916
              },
              {
                  "aa": "M",
                  "bits": 0.00644
              },
              {
                  "aa": "A",
                  "bits": 0.00595
              },
              {
                  "aa": "T",
                  "bits": 0.00471
              },
              {
                  "aa": "Q",
                  "bits": 0.00372
              },
              {
                  "aa": "R",
                  "bits": 0.00273
              },
              {
                  "aa": "N",
                  "bits": 0.00249
              },
              {
                  "aa": "C",
                  "bits": 0.00249
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.58951
              },
              {
                  "aa": "R",
                  "bits": 0.13527
              },
              {
                  "aa": "S",
                  "bits": 0.00664
              },
              {
                  "aa": "N",
                  "bits": 0.00484
              },
              {
                  "aa": "D",
                  "bits": 0.00304
              },
              {
                  "aa": "Q",
                  "bits": 0.00243
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 1.06576
              },
              {
                  "aa": "L",
                  "bits": 0.82183
              },
              {
                  "aa": "M",
                  "bits": 0.10691
              },
              {
                  "aa": "V",
                  "bits": 0.0222
              },
              {
                  "aa": "T",
                  "bits": 0.00534
              },
              {
                  "aa": "N",
                  "bits": 0.00534
              },
              {
                  "aa": "S",
                  "bits": 0.00224
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.50323
              },
              {
                  "aa": "S",
                  "bits": 0.15948
              },
              {
                  "aa": "K",
                  "bits": 0.08571
              },
              {
                  "aa": "G",
                  "bits": 0.08332
              },
              {
                  "aa": "N",
                  "bits": 0.07497
              },
              {
                  "aa": "I",
                  "bits": 0.04441
              },
              {
                  "aa": "E",
                  "bits": 0.03439
              },
              {
                  "aa": "R",
                  "bits": 0.0203
              },
              {
                  "aa": "C",
                  "bits": 0.01792
              },
              {
                  "aa": "H",
                  "bits": 0.01648
              },
              {
                  "aa": "T",
                  "bits": 0.01553
              },
              {
                  "aa": "F",
                  "bits": 0.01099
              },
              {
                  "aa": "V",
                  "bits": 0.01004
              },
              {
                  "aa": "L",
                  "bits": 0.00741
              },
              {
                  "aa": "M",
                  "bits": 0.00407
              },
              {
                  "aa": "A",
                  "bits": 0.00335
              },
              {
                  "aa": "P",
                  "bits": 0.0024
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.14585
              },
              {
                  "aa": "N",
                  "bits": 0.13177
              },
              {
                  "aa": "K",
                  "bits": 0.12261
              },
              {
                  "aa": "A",
                  "bits": 0.09311
              },
              {
                  "aa": "Q",
                  "bits": 0.07344
              },
              {
                  "aa": "S",
                  "bits": 0.06801
              },
              {
                  "aa": "E",
                  "bits": 0.0385
              },
              {
                  "aa": "G",
                  "bits": 0.03816
              },
              {
                  "aa": "T",
                  "bits": 0.02901
              },
              {
                  "aa": "P",
                  "bits": 0.02324
              },
              {
                  "aa": "H",
                  "bits": 0.00764
              },
              {
                  "aa": "R",
                  "bits": 0.00204
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.09442
              },
              {
                  "aa": "T",
                  "bits": 0.08563
              },
              {
                  "aa": "S",
                  "bits": 0.07884
              },
              {
                  "aa": "R",
                  "bits": 0.07431
              },
              {
                  "aa": "K",
                  "bits": 0.06392
              },
              {
                  "aa": "A",
                  "bits": 0.05127
              },
              {
                  "aa": "P",
                  "bits": 0.03916
              },
              {
                  "aa": "G",
                  "bits": 0.03449
              },
              {
                  "aa": "Q",
                  "bits": 0.02597
              },
              {
                  "aa": "N",
                  "bits": 0.02065
              },
              {
                  "aa": "V",
                  "bits": 0.02025
              },
              {
                  "aa": "D",
                  "bits": 0.01026
              },
              {
                  "aa": "I",
                  "bits": 0.00267
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 0.24605
              },
              {
                  "aa": "V",
                  "bits": 0.22719
              },
              {
                  "aa": "C",
                  "bits": 0.15992
              },
              {
                  "aa": "P",
                  "bits": 0.0874
              },
              {
                  "aa": "S",
                  "bits": 0.06142
              },
              {
                  "aa": "T",
                  "bits": 0.04905
              },
              {
                  "aa": "Y",
                  "bits": 0.04675
              },
              {
                  "aa": "L",
                  "bits": 0.02914
              },
              {
                  "aa": "I",
                  "bits": 0.02139
              },
              {
                  "aa": "E",
                  "bits": 0.00797
              },
              {
                  "aa": "M",
                  "bits": 0.00651
              },
              {
                  "aa": "R",
                  "bits": 0.00546
              },
              {
                  "aa": "K",
                  "bits": 0.00232
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 0.25929
              },
              {
                  "aa": "V",
                  "bits": 0.19383
              },
              {
                  "aa": "M",
                  "bits": 0.14106
              },
              {
                  "aa": "K",
                  "bits": 0.05813
              },
              {
                  "aa": "L",
                  "bits": 0.05199
              },
              {
                  "aa": "S",
                  "bits": 0.04703
              },
              {
                  "aa": "I",
                  "bits": 0.04326
              },
              {
                  "aa": "R",
                  "bits": 0.03988
              },
              {
                  "aa": "D",
                  "bits": 0.03473
              },
              {
                  "aa": "E",
                  "bits": 0.01171
              },
              {
                  "aa": "A",
                  "bits": 0.00795
              },
              {
                  "aa": "Q",
                  "bits": 0.00616
              },
              {
                  "aa": "N",
                  "bits": 0.00537
              },
              {
                  "aa": "G",
                  "bits": 0.00418
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.22405
              },
              {
                  "aa": "K",
                  "bits": 0.47289
              },
              {
                  "aa": "Q",
                  "bits": 0.07786
              },
              {
                  "aa": "R",
                  "bits": 0.06907
              },
              {
                  "aa": "V",
                  "bits": 0.03099
              },
              {
                  "aa": "I",
                  "bits": 0.02136
              },
              {
                  "aa": "H",
                  "bits": 0.00421
              },
              {
                  "aa": "P",
                  "bits": 0.00379
              },
              {
                  "aa": "S",
                  "bits": 0.00211
              },
              {
                  "aa": "L",
                  "bits": 0.00211
              },
              {
                  "aa": "E",
                  "bits": 0.00211
              },
              {
                  "aa": "D",
                  "bits": 0.00211
              },
              {
                  "aa": "A",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 2.91587
              },
              {
                  "aa": "A",
                  "bits": 0.01734
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.9649
              },
              {
                  "aa": "V",
                  "bits": 0.00263
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 2.89842
              },
              {
                  "aa": "I",
                  "bits": 0.01279
              },
              {
                  "aa": "L",
                  "bits": 0.00832
              },
              {
                  "aa": "A",
                  "bits": 0.00513
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 2.97712
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 2.912
              },
              {
                  "aa": "S",
                  "bits": 0.0045
              },
              {
                  "aa": "I",
                  "bits": 0.0045
              },
              {
                  "aa": "K",
                  "bits": 0.00387
              },
              {
                  "aa": "T",
                  "bits": 0.00259
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.65113
              },
              {
                  "aa": "V",
                  "bits": 0.11138
              },
              {
                  "aa": "M",
                  "bits": 0.00608
              },
              {
                  "aa": "R",
                  "bits": 0.00245
              },
              {
                  "aa": "I",
                  "bits": 0.00245
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 2.89023
              },
              {
                  "aa": "R",
                  "bits": 0.02614
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.4102
              },
              {
                  "aa": "E",
                  "bits": 0.31486
              },
              {
                  "aa": "S",
                  "bits": 0.22811
              },
              {
                  "aa": "P",
                  "bits": 0.17656
              },
              {
                  "aa": "A",
                  "bits": 0.06265
              },
              {
                  "aa": "R",
                  "bits": 0.02579
              },
              {
                  "aa": "G",
                  "bits": 0.02468
              },
              {
                  "aa": "K",
                  "bits": 0.00944
              },
              {
                  "aa": "T",
                  "bits": 0.00639
              },
              {
                  "aa": "V",
                  "bits": 0.00611
              },
              {
                  "aa": "Q",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.47735
              },
              {
                  "aa": "G",
                  "bits": 0.23438
              },
              {
                  "aa": "T",
                  "bits": 0.16585
              },
              {
                  "aa": "S",
                  "bits": 0.13386
              },
              {
                  "aa": "N",
                  "bits": 0.12607
              },
              {
                  "aa": "K",
                  "bits": 0.05081
              },
              {
                  "aa": "C",
                  "bits": 0.01587
              },
              {
                  "aa": "R",
                  "bits": 0.01453
              },
              {
                  "aa": "Q",
                  "bits": 0.00996
              },
              {
                  "aa": "H",
                  "bits": 0.00351
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.43221
              },
              {
                  "aa": "H",
                  "bits": 0.05896
              },
              {
                  "aa": "T",
                  "bits": 0.0363
              },
              {
                  "aa": "S",
                  "bits": 0.02836
              },
              {
                  "aa": "G",
                  "bits": 0.02043
              },
              {
                  "aa": "P",
                  "bits": 0.0142
              },
              {
                  "aa": "R",
                  "bits": 0.00683
              },
              {
                  "aa": "Y",
                  "bits": 0.0057
              },
              {
                  "aa": "I",
                  "bits": 0.0023
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 0.95375
              },
              {
                  "aa": "H",
                  "bits": 0.22264
              },
              {
                  "aa": "R",
                  "bits": 0.16327
              },
              {
                  "aa": "S",
                  "bits": 0.135
              },
              {
                  "aa": "D",
                  "bits": 0.10179
              },
              {
                  "aa": "N",
                  "bits": 0.0191
              },
              {
                  "aa": "Q",
                  "bits": 0.01168
              },
              {
                  "aa": "E",
                  "bits": 0.00638
              },
              {
                  "aa": "G",
                  "bits": 0.00496
              },
              {
                  "aa": "L",
                  "bits": 0.0032
              },
              {
                  "aa": "M",
                  "bits": 0.00214
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.26366
              },
              {
                  "aa": "S",
                  "bits": 0.19062
              },
              {
                  "aa": "D",
                  "bits": 0.15941
              },
              {
                  "aa": "A",
                  "bits": 0.14193
              },
              {
                  "aa": "H",
                  "bits": 0.041
              },
              {
                  "aa": "L",
                  "bits": 0.03976
              },
              {
                  "aa": "T",
                  "bits": 0.03497
              },
              {
                  "aa": "P",
                  "bits": 0.02436
              },
              {
                  "aa": "N",
                  "bits": 0.02082
              },
              {
                  "aa": "R",
                  "bits": 0.01603
              },
              {
                  "aa": "Q",
                  "bits": 0.01395
              },
              {
                  "aa": "V",
                  "bits": 0.00355
              },
              {
                  "aa": "G",
                  "bits": 0.00334
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.60393
              },
              {
                  "aa": "S",
                  "bits": 0.4743
              },
              {
                  "aa": "T",
                  "bits": 0.1284
              },
              {
                  "aa": "D",
                  "bits": 0.07566
              },
              {
                  "aa": "E",
                  "bits": 0.05871
              },
              {
                  "aa": "N",
                  "bits": 0.04835
              },
              {
                  "aa": "A",
                  "bits": 0.02105
              },
              {
                  "aa": "V",
                  "bits": 0.01853
              },
              {
                  "aa": "R",
                  "bits": 0.00504
              },
              {
                  "aa": "G",
                  "bits": 0.00347
              },
              {
                  "aa": "M",
                  "bits": 0.00315
              },
              {
                  "aa": "C",
                  "bits": 0.00284
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 1.11894
              },
              {
                  "aa": "D",
                  "bits": 0.89132
              },
              {
                  "aa": "V",
                  "bits": 0.0407
              },
              {
                  "aa": "Y",
                  "bits": 0.01236
              },
              {
                  "aa": "A",
                  "bits": 0.01099
              },
              {
                  "aa": "Q",
                  "bits": 0.01008
              },
              {
                  "aa": "G",
                  "bits": 0.00277
              },
              {
                  "aa": "P",
                  "bits": 0.00231
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 0.62219
              },
              {
                  "aa": "K",
                  "bits": 0.2134
              },
              {
                  "aa": "R",
                  "bits": 0.14579
              },
              {
                  "aa": "H",
                  "bits": 0.13495
              },
              {
                  "aa": "Y",
                  "bits": 0.06506
              },
              {
                  "aa": "M",
                  "bits": 0.02797
              },
              {
                  "aa": "V",
                  "bits": 0.02769
              },
              {
                  "aa": "T",
                  "bits": 0.01998
              },
              {
                  "aa": "C",
                  "bits": 0.01742
              },
              {
                  "aa": "Q",
                  "bits": 0.01513
              },
              {
                  "aa": "I",
                  "bits": 0.00686
              },
              {
                  "aa": "F",
                  "bits": 0.00258
              },
              {
                  "aa": "W",
                  "bits": 0.0023
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 0.43956
              },
              {
                  "aa": "E",
                  "bits": 0.2182
              },
              {
                  "aa": "R",
                  "bits": 0.18302
              },
              {
                  "aa": "K",
                  "bits": 0.13833
              },
              {
                  "aa": "Q",
                  "bits": 0.12749
              },
              {
                  "aa": "A",
                  "bits": 0.07327
              },
              {
                  "aa": "D",
                  "bits": 0.01482
              },
              {
                  "aa": "M",
                  "bits": 0.0098
              },
              {
                  "aa": "T",
                  "bits": 0.00345
              },
              {
                  "aa": "N",
                  "bits": 0.00345
              },
              {
                  "aa": "V",
                  "bits": 0.00239
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 1.13057
              },
              {
                  "aa": "D",
                  "bits": 1.07969
              },
              {
                  "aa": "S",
                  "bits": 0.02425
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.98462
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 0.84566
              },
              {
                  "aa": "V",
                  "bits": 0.53023
              },
              {
                  "aa": "I",
                  "bits": 0.29655
              },
              {
                  "aa": "L",
                  "bits": 0.09064
              },
              {
                  "aa": "A",
                  "bits": 0.01506
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 2.57136
              },
              {
                  "aa": "T",
                  "bits": 0.11511
              },
              {
                  "aa": "A",
                  "bits": 0.0136
              },
              {
                  "aa": "C",
                  "bits": 0.01183
              },
              {
                  "aa": "Q",
                  "bits": 0.00534
              },
              {
                  "aa": "R",
                  "bits": 0.00416
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 2.97985
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.10535
              },
              {
                  "aa": "M",
                  "bits": 0.93063
              },
              {
                  "aa": "F",
                  "bits": 0.10106
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 1.0724
              },
              {
                  "aa": "E",
                  "bits": 0.90307
              },
              {
                  "aa": "N",
                  "bits": 0.06459
              },
              {
                  "aa": "T",
                  "bits": 0.03524
              },
              {
                  "aa": "D",
                  "bits": 0.00273
              },
              {
                  "aa": "R",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 0.73716
              },
              {
                  "aa": "I",
                  "bits": 0.6972
              },
              {
                  "aa": "V",
                  "bits": 0.21457
              },
              {
                  "aa": "L",
                  "bits": 0.1362
              },
              {
                  "aa": "T",
                  "bits": 0.0039
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 1.43255
              },
              {
                  "aa": "L",
                  "bits": 0.88011
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.75981
              },
              {
                  "aa": "S",
                  "bits": 0.3025
              },
              {
                  "aa": "I",
                  "bits": 0.26251
              },
              {
                  "aa": "T",
                  "bits": 0.17296
              },
              {
                  "aa": "V",
                  "bits": 0.0506
              },
              {
                  "aa": "N",
                  "bits": 0.01916
              },
              {
                  "aa": "G",
                  "bits": 0.0048
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 0.63501
              },
              {
                  "aa": "M",
                  "bits": 0.49415
              },
              {
                  "aa": "Y",
                  "bits": 0.12526
              },
              {
                  "aa": "Q",
                  "bits": 0.08264
              },
              {
                  "aa": "I",
                  "bits": 0.05337
              },
              {
                  "aa": "L",
                  "bits": 0.05206
              },
              {
                  "aa": "V",
                  "bits": 0.04621
              },
              {
                  "aa": "G",
                  "bits": 0.00392
              },
              {
                  "aa": "E",
                  "bits": 0.00262
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 1.23629
              },
              {
                  "aa": "L",
                  "bits": 0.62392
              },
              {
                  "aa": "V",
                  "bits": 0.10511
              },
              {
                  "aa": "M",
                  "bits": 0.07895
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.48711
              },
              {
                  "aa": "N",
                  "bits": 0.23708
              },
              {
                  "aa": "H",
                  "bits": 0.18632
              },
              {
                  "aa": "P",
                  "bits": 0.13367
              },
              {
                  "aa": "Q",
                  "bits": 0.06887
              },
              {
                  "aa": "R",
                  "bits": 0.06509
              },
              {
                  "aa": "S",
                  "bits": 0.03782
              },
              {
                  "aa": "Y",
                  "bits": 0.01459
              },
              {
                  "aa": "A",
                  "bits": 0.00541
              },
              {
                  "aa": "C",
                  "bits": 0.00406
              },
              {
                  "aa": "T",
                  "bits": 0.00244
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 2.96051
              },
              {
                  "aa": "N",
                  "bits": 0.00584
              },
              {
                  "aa": "Y",
                  "bits": 0.00261
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.64757
              },
              {
                  "aa": "L",
                  "bits": 0.47567
              },
              {
                  "aa": "E",
                  "bits": 0.08168
              },
              {
                  "aa": "P",
                  "bits": 0.07087
              },
              {
                  "aa": "M",
                  "bits": 0.05816
              },
              {
                  "aa": "V",
                  "bits": 0.04069
              },
              {
                  "aa": "I",
                  "bits": 0.03687
              },
              {
                  "aa": "D",
                  "bits": 0.02353
              },
              {
                  "aa": "A",
                  "bits": 0.00923
              },
              {
                  "aa": "Q",
                  "bits": 0.00542
              },
              {
                  "aa": "N",
                  "bits": 0.00415
              },
              {
                  "aa": "T",
                  "bits": 0.00351
              },
              {
                  "aa": "R",
                  "bits": 0.00256
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 2.63975
              },
              {
                  "aa": "H",
                  "bits": 0.12864
              },
              {
                  "aa": "Q",
                  "bits": 0.01029
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 1.7109
              },
              {
                  "aa": "V",
                  "bits": 0.6769
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.17176
              },
              {
                  "aa": "I",
                  "bits": 1.0976
              },
              {
                  "aa": "L",
                  "bits": 0.00596
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 2.64652
              },
              {
                  "aa": "K",
                  "bits": 0.13057
              },
              {
                  "aa": "S",
                  "bits": 0.00245
              },
              {
                  "aa": "R",
                  "bits": 0.00245
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.79926
              },
              {
                  "aa": "M",
                  "bits": 0.05102
              },
              {
                  "aa": "F",
                  "bits": 0.00501
              },
              {
                  "aa": "V",
                  "bits": 0.00376
              },
              {
                  "aa": "C",
                  "bits": 0.00252
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.57996
              },
              {
                  "aa": "Y",
                  "bits": 0.11978
              },
              {
                  "aa": "M",
                  "bits": 0.00714
              },
              {
                  "aa": "V",
                  "bits": 0.00655
              },
              {
                  "aa": "I",
                  "bits": 0.00655
              },
              {
                  "aa": "H",
                  "bits": 0.00596
              },
              {
                  "aa": "F",
                  "bits": 0.00418
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.95127
              },
              {
                  "aa": "A",
                  "bits": 0.01032
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.47132
              },
              {
                  "aa": "V",
                  "bits": 0.16684
              },
              {
                  "aa": "C",
                  "bits": 0.032
              },
              {
                  "aa": "T",
                  "bits": 0.00352
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 2.78088
              },
              {
                  "aa": "V",
                  "bits": 0.06892
              },
              {
                  "aa": "S",
                  "bits": 0.00375
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 2.61851
              },
              {
                  "aa": "S",
                  "bits": 0.12741
              },
              {
                  "aa": "C",
                  "bits": 0.01145
              },
              {
                  "aa": "L",
                  "bits": 0.00243
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 0.77478
              },
              {
                  "aa": "K",
                  "bits": 0.49676
              },
              {
                  "aa": "V",
                  "bits": 0.08621
              },
              {
                  "aa": "I",
                  "bits": 0.04533
              },
              {
                  "aa": "H",
                  "bits": 0.0392
              },
              {
                  "aa": "L",
                  "bits": 0.03477
              },
              {
                  "aa": "Y",
                  "bits": 0.0283
              },
              {
                  "aa": "R",
                  "bits": 0.02318
              },
              {
                  "aa": "E",
                  "bits": 0.0099
              },
              {
                  "aa": "S",
                  "bits": 0.00479
              },
              {
                  "aa": "G",
                  "bits": 0.00479
              },
              {
                  "aa": "D",
                  "bits": 0.00445
              },
              {
                  "aa": "C",
                  "bits": 0.00411
              },
              {
                  "aa": "T",
                  "bits": 0.00376
              },
              {
                  "aa": "N",
                  "bits": 0.00308
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.54657
              },
              {
                  "aa": "G",
                  "bits": 0.49521
              },
              {
                  "aa": "S",
                  "bits": 0.11782
              },
              {
                  "aa": "N",
                  "bits": 0.07937
              },
              {
                  "aa": "E",
                  "bits": 0.05968
              },
              {
                  "aa": "K",
                  "bits": 0.05692
              },
              {
                  "aa": "H",
                  "bits": 0.01324
              },
              {
                  "aa": "Q",
                  "bits": 0.0114
              },
              {
                  "aa": "A",
                  "bits": 0.01109
              },
              {
                  "aa": "T",
                  "bits": 0.00893
              },
              {
                  "aa": "R",
                  "bits": 0.00678
              },
              {
                  "aa": "P",
                  "bits": 0.00278
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.71219
              },
              {
                  "aa": "R",
                  "bits": 0.07277
              },
              {
                  "aa": "S",
                  "bits": 0.00859
              },
              {
                  "aa": "K",
                  "bits": 0.0037
              },
              {
                  "aa": "V",
                  "bits": 0.00309
              },
              {
                  "aa": "M",
                  "bits": 0.00248
              },
              {
                  "aa": "E",
                  "bits": 0.00248
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.60254
              },
              {
                  "aa": "E",
                  "bits": 0.10182
              },
              {
                  "aa": "T",
                  "bits": 0.00658
              },
              {
                  "aa": "A",
                  "bits": 0.00598
              },
              {
                  "aa": "L",
                  "bits": 0.00479
              },
              {
                  "aa": "D",
                  "bits": 0.0042
              },
              {
                  "aa": "K",
                  "bits": 0.00301
              },
              {
                  "aa": "R",
                  "bits": 0.00241
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.43477
              },
              {
                  "aa": "I",
                  "bits": 0.26403
              },
              {
                  "aa": "T",
                  "bits": 0.14231
              },
              {
                  "aa": "V",
                  "bits": 0.11867
              },
              {
                  "aa": "M",
                  "bits": 0.03986
              },
              {
                  "aa": "F",
                  "bits": 0.00571
              },
              {
                  "aa": "P",
                  "bits": 0.00309
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 1.15211
              },
              {
                  "aa": "M",
                  "bits": 0.39608
              },
              {
                  "aa": "L",
                  "bits": 0.32979
              },
              {
                  "aa": "F",
                  "bits": 0.03023
              },
              {
                  "aa": "H",
                  "bits": 0.00925
              },
              {
                  "aa": "W",
                  "bits": 0.00422
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.67606
              },
              {
                  "aa": "L",
                  "bits": 0.24785
              },
              {
                  "aa": "I",
                  "bits": 0.19628
              },
              {
                  "aa": "M",
                  "bits": 0.06687
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 2.04384
              },
              {
                  "aa": "L",
                  "bits": 0.27239
              },
              {
                  "aa": "V",
                  "bits": 0.10813
              },
              {
                  "aa": "M",
                  "bits": 0.00586
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.55908
              },
              {
                  "aa": "T",
                  "bits": 0.56295
              },
              {
                  "aa": "F",
                  "bits": 0.08763
              },
              {
                  "aa": "M",
                  "bits": 0.00486
              },
              {
                  "aa": "I",
                  "bits": 0.00341
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 2.85456
              },
              {
                  "aa": "Q",
                  "bits": 0.03029
              },
              {
                  "aa": "D",
                  "bits": 0.00255
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 2.13646
              },
              {
                  "aa": "F",
                  "bits": 0.27629
              },
              {
                  "aa": "C",
                  "bits": 0.06557
              },
              {
                  "aa": "L",
                  "bits": 0.0049
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 1.16243
              },
              {
                  "aa": "A",
                  "bits": 1.09585
              },
              {
                  "aa": "S",
                  "bits": 0.00348
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 0.46886
              },
              {
                  "aa": "K",
                  "bits": 0.27994
              },
              {
                  "aa": "C",
                  "bits": 0.17928
              },
              {
                  "aa": "R",
                  "bits": 0.1255
              },
              {
                  "aa": "A",
                  "bits": 0.10619
              },
              {
                  "aa": "F",
                  "bits": 0.064
              },
              {
                  "aa": "P",
                  "bits": 0.02594
              },
              {
                  "aa": "H",
                  "bits": 0.00774
              },
              {
                  "aa": "T",
                  "bits": 0.0025
              },
              {
                  "aa": "I",
                  "bits": 0.0025
              },
              {
                  "aa": "L",
                  "bits": 0.00222
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.67049
              },
              {
                  "aa": "Y",
                  "bits": 0.66033
              },
              {
                  "aa": "F",
                  "bits": 0.14079
              },
              {
                  "aa": "H",
                  "bits": 0.13099
              },
              {
                  "aa": "Q",
                  "bits": 0.02904
              },
              {
                  "aa": "L",
                  "bits": 0.02034
              },
              {
                  "aa": "N",
                  "bits": 0.0138
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.95035
              },
              {
                  "aa": "K",
                  "bits": 0.00518
              },
              {
                  "aa": "S",
                  "bits": 0.00389
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 1.35265
              },
              {
                  "aa": "D",
                  "bits": 0.61704
              },
              {
                  "aa": "S",
                  "bits": 0.15752
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.75932
              },
              {
                  "aa": "V",
                  "bits": 0.04006
              },
              {
                  "aa": "I",
                  "bits": 0.02959
              },
              {
                  "aa": "M",
                  "bits": 0.00249
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 0.77079
              },
              {
                  "aa": "L",
                  "bits": 0.30142
              },
              {
                  "aa": "S",
                  "bits": 0.28932
              },
              {
                  "aa": "V",
                  "bits": 0.16178
              },
              {
                  "aa": "Q",
                  "bits": 0.04115
              },
              {
                  "aa": "H",
                  "bits": 0.01073
              },
              {
                  "aa": "K",
                  "bits": 0.00693
              },
              {
                  "aa": "A",
                  "bits": 0.00382
              },
              {
                  "aa": "I",
                  "bits": 0.00313
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.68702
              },
              {
                  "aa": "N",
                  "bits": 0.68557
              },
              {
                  "aa": "D",
                  "bits": 0.10285
              },
              {
                  "aa": "S",
                  "bits": 0.061
              },
              {
                  "aa": "T",
                  "bits": 0.04945
              },
              {
                  "aa": "G",
                  "bits": 0.03285
              },
              {
                  "aa": "A",
                  "bits": 0.02455
              },
              {
                  "aa": "Q",
                  "bits": 0.01265
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 1.50204
              },
              {
                  "aa": "F",
                  "bits": 0.76919
              },
              {
                  "aa": "L",
                  "bits": 0.00749
              },
              {
                  "aa": "C",
                  "bits": 0.00301
              },
              {
                  "aa": "H",
                  "bits": 0.00201
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.91616
              },
              {
                  "aa": "M",
                  "bits": 0.01278
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 1.37223
              },
              {
                  "aa": "H",
                  "bits": 0.19251
              },
              {
                  "aa": "K",
                  "bits": 0.1509
              },
              {
                  "aa": "Q",
                  "bits": 0.14039
              },
              {
                  "aa": "L",
                  "bits": 0.04751
              },
              {
                  "aa": "M",
                  "bits": 0.01095
              },
              {
                  "aa": "I",
                  "bits": 0.00969
              },
              {
                  "aa": "G",
                  "bits": 0.0038
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 0.55127
              },
              {
                  "aa": "R",
                  "bits": 0.20842
              },
              {
                  "aa": "S",
                  "bits": 0.15744
              },
              {
                  "aa": "K",
                  "bits": 0.09299
              },
              {
                  "aa": "E",
                  "bits": 0.05892
              },
              {
                  "aa": "N",
                  "bits": 0.03303
              },
              {
                  "aa": "G",
                  "bits": 0.03277
              },
              {
                  "aa": "T",
                  "bits": 0.02563
              },
              {
                  "aa": "Q",
                  "bits": 0.01692
              },
              {
                  "aa": "V",
                  "bits": 0.01005
              },
              {
                  "aa": "D",
                  "bits": 0.00979
              },
              {
                  "aa": "H",
                  "bits": 0.0082
              },
              {
                  "aa": "C",
                  "bits": 0.00635
              },
              {
                  "aa": "L",
                  "bits": 0.00424
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 0.70188
              },
              {
                  "aa": "K",
                  "bits": 0.55153
              },
              {
                  "aa": "N",
                  "bits": 0.22162
              },
              {
                  "aa": "S",
                  "bits": 0.08481
              },
              {
                  "aa": "H",
                  "bits": 0.06593
              },
              {
                  "aa": "Q",
                  "bits": 0.00358
              },
              {
                  "aa": "T",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.0673
              },
              {
                  "aa": "A",
                  "bits": 0.14062
              },
              {
                  "aa": "K",
                  "bits": 0.13854
              },
              {
                  "aa": "Q",
                  "bits": 0.01304
              },
              {
                  "aa": "T",
                  "bits": 0.01252
              },
              {
                  "aa": "S",
                  "bits": 0.00888
              },
              {
                  "aa": "G",
                  "bits": 0.00523
              },
              {
                  "aa": "F",
                  "bits": 0.00315
              },
              {
                  "aa": "V",
                  "bits": 0.00263
              },
              {
                  "aa": "H",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 0.53714
              },
              {
                  "aa": "E",
                  "bits": 0.23113
              },
              {
                  "aa": "D",
                  "bits": 0.16934
              },
              {
                  "aa": "K",
                  "bits": 0.08481
              },
              {
                  "aa": "H",
                  "bits": 0.06341
              },
              {
                  "aa": "G",
                  "bits": 0.04361
              },
              {
                  "aa": "N",
                  "bits": 0.04201
              },
              {
                  "aa": "Q",
                  "bits": 0.01847
              },
              {
                  "aa": "S",
                  "bits": 0.01553
              },
              {
                  "aa": "A",
                  "bits": 0.01152
              },
              {
                  "aa": "F",
                  "bits": 0.00376
              },
              {
                  "aa": "R",
                  "bits": 0.00296
              },
              {
                  "aa": "M",
                  "bits": 0.00269
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.34652
              },
              {
                  "aa": "K",
                  "bits": 0.10835
              },
              {
                  "aa": "D",
                  "bits": 0.10035
              },
              {
                  "aa": "S",
                  "bits": 0.09586
              },
              {
                  "aa": "L",
                  "bits": 0.07322
              },
              {
                  "aa": "G",
                  "bits": 0.03085
              },
              {
                  "aa": "N",
                  "bits": 0.02402
              },
              {
                  "aa": "V",
                  "bits": 0.02265
              },
              {
                  "aa": "A",
                  "bits": 0.02187
              },
              {
                  "aa": "Q",
                  "bits": 0.01524
              },
              {
                  "aa": "T",
                  "bits": 0.01465
              },
              {
                  "aa": "I",
                  "bits": 0.01172
              },
              {
                  "aa": "F",
                  "bits": 0.01016
              },
              {
                  "aa": "R",
                  "bits": 0.00587
              },
              {
                  "aa": "M",
                  "bits": 0.00411
              },
              {
                  "aa": "H",
                  "bits": 0.00391
              },
              {
                  "aa": "C",
                  "bits": 0.00391
              },
              {
                  "aa": "W",
                  "bits": 0.00352
              },
              {
                  "aa": "P",
                  "bits": 0.00274
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.39942
              },
              {
                  "aa": "R",
                  "bits": 0.10428
              },
              {
                  "aa": "L",
                  "bits": 0.07977
              },
              {
                  "aa": "S",
                  "bits": 0.05184
              },
              {
                  "aa": "P",
                  "bits": 0.04903
              },
              {
                  "aa": "N",
                  "bits": 0.04682
              },
              {
                  "aa": "D",
                  "bits": 0.03979
              },
              {
                  "aa": "G",
                  "bits": 0.03658
              },
              {
                  "aa": "Q",
                  "bits": 0.02492
              },
              {
                  "aa": "W",
                  "bits": 0.02131
              },
              {
                  "aa": "K",
                  "bits": 0.0197
              },
              {
                  "aa": "T",
                  "bits": 0.0195
              },
              {
                  "aa": "M",
                  "bits": 0.01789
              },
              {
                  "aa": "A",
                  "bits": 0.00463
              },
              {
                  "aa": "H",
                  "bits": 0.00363
              },
              {
                  "aa": "V",
                  "bits": 0.00242
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 0.29657
              },
              {
                  "aa": "P",
                  "bits": 0.19393
              },
              {
                  "aa": "A",
                  "bits": 0.09647
              },
              {
                  "aa": "V",
                  "bits": 0.06598
              },
              {
                  "aa": "S",
                  "bits": 0.06458
              },
              {
                  "aa": "G",
                  "bits": 0.04844
              },
              {
                  "aa": "T",
                  "bits": 0.04425
              },
              {
                  "aa": "N",
                  "bits": 0.02572
              },
              {
                  "aa": "L",
                  "bits": 0.02393
              },
              {
                  "aa": "F",
                  "bits": 0.01994
              },
              {
                  "aa": "H",
                  "bits": 0.01815
              },
              {
                  "aa": "I",
                  "bits": 0.01137
              },
              {
                  "aa": "E",
                  "bits": 0.002
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.76579
              },
              {
                  "aa": "M",
                  "bits": 0.30894
              },
              {
                  "aa": "I",
                  "bits": 0.08773
              },
              {
                  "aa": "V",
                  "bits": 0.06142
              },
              {
                  "aa": "F",
                  "bits": 0.00928
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.03354
              },
              {
                  "aa": "S",
                  "bits": 0.36435
              },
              {
                  "aa": "D",
                  "bits": 0.18557
              },
              {
                  "aa": "E",
                  "bits": 0.064
              },
              {
                  "aa": "C",
                  "bits": 0.0211
              },
              {
                  "aa": "A",
                  "bits": 0.01959
              },
              {
                  "aa": "N",
                  "bits": 0.01771
              },
              {
                  "aa": "F",
                  "bits": 0.01244
              },
              {
                  "aa": "Y",
                  "bits": 0.00341
              },
              {
                  "aa": "L",
                  "bits": 0.00341
              },
              {
                  "aa": "Q",
                  "bits": 0.00228
              },
              {
                  "aa": "G",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 0.33018
              },
              {
                  "aa": "M",
                  "bits": 0.16391
              },
              {
                  "aa": "L",
                  "bits": 0.16002
              },
              {
                  "aa": "T",
                  "bits": 0.08012
              },
              {
                  "aa": "I",
                  "bits": 0.0717
              },
              {
                  "aa": "S",
                  "bits": 0.06112
              },
              {
                  "aa": "Y",
                  "bits": 0.05097
              },
              {
                  "aa": "V",
                  "bits": 0.03305
              },
              {
                  "aa": "C",
                  "bits": 0.01405
              },
              {
                  "aa": "Q",
                  "bits": 0.01254
              },
              {
                  "aa": "A",
                  "bits": 0.01016
              },
              {
                  "aa": "N",
                  "bits": 0.00303
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.44472
              },
              {
                  "aa": "E",
                  "bits": 0.33373
              },
              {
                  "aa": "G",
                  "bits": 0.05748
              },
              {
                  "aa": "T",
                  "bits": 0.05674
              },
              {
                  "aa": "D",
                  "bits": 0.04515
              },
              {
                  "aa": "R",
                  "bits": 0.04318
              },
              {
                  "aa": "L",
                  "bits": 0.03479
              },
              {
                  "aa": "P",
                  "bits": 0.02862
              },
              {
                  "aa": "M",
                  "bits": 0.0269
              },
              {
                  "aa": "S",
                  "bits": 0.01456
              },
              {
                  "aa": "Q",
                  "bits": 0.01012
              },
              {
                  "aa": "V",
                  "bits": 0.00815
              },
              {
                  "aa": "C",
                  "bits": 0.00717
              },
              {
                  "aa": "H",
                  "bits": 0.00544
              },
              {
                  "aa": "N",
                  "bits": 0.00495
              },
              {
                  "aa": "W",
                  "bits": 0.0047
              },
              {
                  "aa": "A",
                  "bits": 0.00445
              },
              {
                  "aa": "Y",
                  "bits": 0.00322
              },
              {
                  "aa": "I",
                  "bits": 0.00223
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 2.39464
              },
              {
                  "aa": "H",
                  "bits": 0.0545
              },
              {
                  "aa": "E",
                  "bits": 0.05169
              },
              {
                  "aa": "A",
                  "bits": 0.04046
              },
              {
                  "aa": "V",
                  "bits": 0.02979
              },
              {
                  "aa": "N",
                  "bits": 0.00508
              },
              {
                  "aa": "R",
                  "bits": 0.0034
              },
              {
                  "aa": "T",
                  "bits": 0.00284
              },
              {
                  "aa": "L",
                  "bits": 0.00227
              },
              {
                  "aa": "G",
                  "bits": 0.00227
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.90699
              },
              {
                  "aa": "G",
                  "bits": 0.00829
              },
              {
                  "aa": "F",
                  "bits": 0.00384
              },
              {
                  "aa": "S",
                  "bits": 0.00257
              },
              {
                  "aa": "I",
                  "bits": 0.00257
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 0.8748
              },
              {
                  "aa": "L",
                  "bits": 0.49366
              },
              {
                  "aa": "I",
                  "bits": 0.44361
              },
              {
                  "aa": "M",
                  "bits": 0.02164
              },
              {
                  "aa": "F",
                  "bits": 0.00402
              },
              {
                  "aa": "D",
                  "bits": 0.00322
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 1.40849
              },
              {
                  "aa": "C",
                  "bits": 0.31406
              },
              {
                  "aa": "G",
                  "bits": 0.09286
              },
              {
                  "aa": "R",
                  "bits": 0.07019
              },
              {
                  "aa": "H",
                  "bits": 0.03468
              },
              {
                  "aa": "Q",
                  "bits": 0.01414
              },
              {
                  "aa": "A",
                  "bits": 0.00815
              },
              {
                  "aa": "N",
                  "bits": 0.00729
              },
              {
                  "aa": "M",
                  "bits": 0.00729
              },
              {
                  "aa": "E",
                  "bits": 0.00344
              },
              {
                  "aa": "I",
                  "bits": 0.00302
              },
              {
                  "aa": "L",
                  "bits": 0.00216
              },
              {
                  "aa": "K",
                  "bits": 0.00216
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 0.66737
              },
              {
                  "aa": "F",
                  "bits": 0.62327
              },
              {
                  "aa": "Y",
                  "bits": 0.29731
              },
              {
                  "aa": "W",
                  "bits": 0.05698
              },
              {
                  "aa": "A",
                  "bits": 0.02721
              },
              {
                  "aa": "V",
                  "bits": 0.00553
              },
              {
                  "aa": "S",
                  "bits": 0.0048
              },
              {
                  "aa": "I",
                  "bits": 0.0048
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 0.75184
              },
              {
                  "aa": "A",
                  "bits": 0.68785
              },
              {
                  "aa": "T",
                  "bits": 0.37393
              },
              {
                  "aa": "V",
                  "bits": 0.01082
              },
              {
                  "aa": "L",
                  "bits": 0.00522
              },
              {
                  "aa": "G",
                  "bits": 0.00522
              },
              {
                  "aa": "C",
                  "bits": 0.00322
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 1.31995
              },
              {
                  "aa": "F",
                  "bits": 0.49483
              },
              {
                  "aa": "W",
                  "bits": 0.09776
              },
              {
                  "aa": "S",
                  "bits": 0.0598
              },
              {
                  "aa": "L",
                  "bits": 0.01311
              },
              {
                  "aa": "H",
                  "bits": 0.00657
              },
              {
                  "aa": "N",
                  "bits": 0.00569
              },
              {
                  "aa": "A",
                  "bits": 0.00482
              },
              {
                  "aa": "C",
                  "bits": 0.00308
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 2.88187
              },
              {
                  "aa": "H",
                  "bits": 0.01015
              },
              {
                  "aa": "L",
                  "bits": 0.00572
              },
              {
                  "aa": "S",
                  "bits": 0.00509
              },
              {
                  "aa": "D",
                  "bits": 0.00256
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.90882
              },
              {
                  "aa": "L",
                  "bits": 0.24723
              },
              {
                  "aa": "I",
                  "bits": 0.17485
              },
              {
                  "aa": "W",
                  "bits": 0.0041
              },
              {
                  "aa": "T",
                  "bits": 0.00257
              },
              {
                  "aa": "R",
                  "bits": 0.00257
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.51607
              },
              {
                  "aa": "S",
                  "bits": 0.16968
              },
              {
                  "aa": "C",
                  "bits": 0.00649
              },
              {
                  "aa": "K",
                  "bits": 0.00355
              },
              {
                  "aa": "V",
                  "bits": 0.00238
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 1.29705
              },
              {
                  "aa": "K",
                  "bits": 0.40871
              },
              {
                  "aa": "Q",
                  "bits": 0.16461
              },
              {
                  "aa": "N",
                  "bits": 0.06244
              },
              {
                  "aa": "C",
                  "bits": 0.01798
              },
              {
                  "aa": "S",
                  "bits": 0.00515
              },
              {
                  "aa": "F",
                  "bits": 0.0043
              },
              {
                  "aa": "T",
                  "bits": 0.00259
              },
              {
                  "aa": "A",
                  "bits": 0.00216
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.86313
              },
              {
                  "aa": "A",
                  "bits": 0.02715
              },
              {
                  "aa": "E",
                  "bits": 0.00571
              },
              {
                  "aa": "I",
                  "bits": 0.00318
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 2.69937
              },
              {
                  "aa": "L",
                  "bits": 0.09277
              },
              {
                  "aa": "I",
                  "bits": 0.00552
              },
              {
                  "aa": "H",
                  "bits": 0.00308
              },
              {
                  "aa": "P",
                  "bits": 0.00247
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 1.50839
              },
              {
                  "aa": "D",
                  "bits": 0.1557
              },
              {
                  "aa": "A",
                  "bits": 0.14338
              },
              {
                  "aa": "Q",
                  "bits": 0.13679
              },
              {
                  "aa": "S",
                  "bits": 0.03916
              },
              {
                  "aa": "N",
                  "bits": 0.01585
              },
              {
                  "aa": "R",
                  "bits": 0.01058
              },
              {
                  "aa": "Y",
                  "bits": 0.00354
              },
              {
                  "aa": "H",
                  "bits": 0.00354
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 1.20551
              },
              {
                  "aa": "F",
                  "bits": 1.04793
              },
              {
                  "aa": "H",
                  "bits": 0.00889
              },
              {
                  "aa": "D",
                  "bits": 0.00249
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.85383
              },
              {
                  "aa": "I",
                  "bits": 0.03217
              },
              {
                  "aa": "M",
                  "bits": 0.00696
              },
              {
                  "aa": "V",
                  "bits": 0.00318
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 1.75989
              },
              {
                  "aa": "S",
                  "bits": 0.26621
              },
              {
                  "aa": "E",
                  "bits": 0.14769
              },
              {
                  "aa": "T",
                  "bits": 0.03791
              },
              {
                  "aa": "V",
                  "bits": 0.0078
              },
              {
                  "aa": "C",
                  "bits": 0.00682
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 2.13526
              },
              {
                  "aa": "E",
                  "bits": 0.11701
              },
              {
                  "aa": "A",
                  "bits": 0.0522
              },
              {
                  "aa": "F",
                  "bits": 0.04903
              },
              {
                  "aa": "T",
                  "bits": 0.019
              },
              {
                  "aa": "L",
                  "bits": 0.01373
              },
              {
                  "aa": "Q",
                  "bits": 0.01267
              },
              {
                  "aa": "R",
                  "bits": 0.00688
              },
              {
                  "aa": "K",
                  "bits": 0.00319
              },
              {
                  "aa": "D",
                  "bits": 0.00319
              },
              {
                  "aa": "C",
                  "bits": 0.00266
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.79691
              },
              {
                  "aa": "R",
                  "bits": 0.45363
              },
              {
                  "aa": "Q",
                  "bits": 0.42133
              },
              {
                  "aa": "M",
                  "bits": 0.08536
              },
              {
                  "aa": "N",
                  "bits": 0.00233
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 1.35944
              },
              {
                  "aa": "N",
                  "bits": 0.52989
              },
              {
                  "aa": "R",
                  "bits": 0.09841
              },
              {
                  "aa": "S",
                  "bits": 0.0596
              },
              {
                  "aa": "Q",
                  "bits": 0.0077
              },
              {
                  "aa": "L",
                  "bits": 0.00408
              },
              {
                  "aa": "H",
                  "bits": 0.00318
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 2.38076
              },
              {
                  "aa": "L",
                  "bits": 0.12886
              },
              {
                  "aa": "V",
                  "bits": 0.08763
              },
              {
                  "aa": "Y",
                  "bits": 0.00518
              },
              {
                  "aa": "I",
                  "bits": 0.00404
              },
              {
                  "aa": "F",
                  "bits": 0.00232
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 1.85793
              },
              {
                  "aa": "V",
                  "bits": 0.41571
              },
              {
                  "aa": "L",
                  "bits": 0.08026
              },
              {
                  "aa": "M",
                  "bits": 0.0021
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 2.95979
              },
              {
                  "aa": "S",
                  "bits": 0.00264
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.7249
              },
              {
                  "aa": "G",
                  "bits": 0.09549
              },
              {
                  "aa": "E",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 2.96403
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.56868
              },
              {
                  "aa": "V",
                  "bits": 0.16983
              },
              {
                  "aa": "I",
                  "bits": 0.00244
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.96937
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.939
              },
              {
                  "aa": "P",
                  "bits": 0.00391
              },
              {
                  "aa": "T",
                  "bits": 0.00327
              },
              {
                  "aa": "L",
                  "bits": 0.00262
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.9549
              },
              {
                  "aa": "A",
                  "bits": 0.00328
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 2.9768
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.6486
              },
              {
                  "aa": "I",
                  "bits": 0.70148
              },
              {
                  "aa": "K",
                  "bits": 0.0026
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.98186
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.16335
              },
              {
                  "aa": "L",
                  "bits": 0.86458
              },
              {
                  "aa": "I",
                  "bits": 0.10693
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.10573
              },
              {
                  "aa": "S",
                  "bits": 0.40997
              },
              {
                  "aa": "A",
                  "bits": 0.20132
              },
              {
                  "aa": "C",
                  "bits": 0.13844
              },
              {
                  "aa": "G",
                  "bits": 0.00696
              },
              {
                  "aa": "L",
                  "bits": 0.00288
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 1.30317
              },
              {
                  "aa": "D",
                  "bits": 0.17437
              },
              {
                  "aa": "H",
                  "bits": 0.16128
              },
              {
                  "aa": "Q",
                  "bits": 0.12731
              },
              {
                  "aa": "S",
                  "bits": 0.03276
              },
              {
                  "aa": "N",
                  "bits": 0.03235
              },
              {
                  "aa": "K",
                  "bits": 0.01598
              },
              {
                  "aa": "A",
                  "bits": 0.01107
              },
              {
                  "aa": "Y",
                  "bits": 0.00452
              },
              {
                  "aa": "R",
                  "bits": 0.00207
              },
              {
                  "aa": "C",
                  "bits": 0.00207
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 0.43282
              },
              {
                  "aa": "D",
                  "bits": 0.42689
              },
              {
                  "aa": "N",
                  "bits": 0.36386
              },
              {
                  "aa": "S",
                  "bits": 0.10455
              },
              {
                  "aa": "K",
                  "bits": 0.02997
              },
              {
                  "aa": "R",
                  "bits": 0.02872
              },
              {
                  "aa": "E",
                  "bits": 0.01843
              },
              {
                  "aa": "H",
                  "bits": 0.00844
              },
              {
                  "aa": "C",
                  "bits": 0.00657
              },
              {
                  "aa": "Q",
                  "bits": 0.00282
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 0.96448
              },
              {
                  "aa": "R",
                  "bits": 0.29781
              },
              {
                  "aa": "K",
                  "bits": 0.24022
              },
              {
                  "aa": "D",
                  "bits": 0.04777
              },
              {
                  "aa": "H",
                  "bits": 0.03465
              },
              {
                  "aa": "S",
                  "bits": 0.02371
              },
              {
                  "aa": "Y",
                  "bits": 0.02225
              },
              {
                  "aa": "G",
                  "bits": 0.01387
              },
              {
                  "aa": "C",
                  "bits": 0.00621
              },
              {
                  "aa": "F",
                  "bits": 0.00549
              },
              {
                  "aa": "Q",
                  "bits": 0.00366
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.46943
              },
              {
                  "aa": "I",
                  "bits": 0.27076
              },
              {
                  "aa": "L",
                  "bits": 0.12987
              },
              {
                  "aa": "K",
                  "bits": 0.08968
              },
              {
                  "aa": "E",
                  "bits": 0.02211
              },
              {
                  "aa": "F",
                  "bits": 0.01857
              },
              {
                  "aa": "R",
                  "bits": 0.00665
              },
              {
                  "aa": "M",
                  "bits": 0.00356
              },
              {
                  "aa": "A",
                  "bits": 0.00267
              },
              {
                  "aa": "T",
                  "bits": 0.00223
              },
              {
                  "aa": "Q",
                  "bits": 0.00223
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 0.85141
              },
              {
                  "aa": "V",
                  "bits": 0.643
              },
              {
                  "aa": "A",
                  "bits": 0.19701
              },
              {
                  "aa": "T",
                  "bits": 0.07645
              },
              {
                  "aa": "L",
                  "bits": 0.02563
              },
              {
                  "aa": "I",
                  "bits": 0.00711
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 2.972
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 2.87825
              },
              {
                  "aa": "V",
                  "bits": 0.03318
              },
              {
                  "aa": "L",
                  "bits": 0.00386
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 0.95389
              },
              {
                  "aa": "A",
                  "bits": 0.89615
              },
              {
                  "aa": "S",
                  "bits": 0.10052
              },
              {
                  "aa": "G",
                  "bits": 0.06438
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 2.97679
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 2.98452
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.97706
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.92474
              },
              {
                  "aa": "M",
                  "bits": 0.01549
              },
              {
                  "aa": "F",
                  "bits": 0.00261
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.58642
              },
              {
                  "aa": "S",
                  "bits": 0.14292
              },
              {
                  "aa": "T",
                  "bits": 0.01324
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.82433
              },
              {
                  "aa": "K",
                  "bits": 0.04473
              },
              {
                  "aa": "T",
                  "bits": 0.00759
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 2.28612
              },
              {
                  "aa": "G",
                  "bits": 0.14475
              },
              {
                  "aa": "S",
                  "bits": 0.05437
              },
              {
                  "aa": "N",
                  "bits": 0.02054
              },
              {
                  "aa": "T",
                  "bits": 0.01167
              },
              {
                  "aa": "K",
                  "bits": 0.01001
              },
              {
                  "aa": "H",
                  "bits": 0.00335
              },
              {
                  "aa": "E",
                  "bits": 0.0028
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 1.47742
              },
              {
                  "aa": "V",
                  "bits": 0.59861
              },
              {
                  "aa": "M",
                  "bits": 0.06246
              },
              {
                  "aa": "L",
                  "bits": 0.03815
              },
              {
                  "aa": "C",
                  "bits": 0.00431
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 0.38937
              },
              {
                  "aa": "Y",
                  "bits": 0.32571
              },
              {
                  "aa": "M",
                  "bits": 0.20526
              },
              {
                  "aa": "N",
                  "bits": 0.1342
              },
              {
                  "aa": "T",
                  "bits": 0.03832
              },
              {
                  "aa": "K",
                  "bits": 0.03779
              },
              {
                  "aa": "R",
                  "bits": 0.02907
              },
              {
                  "aa": "E",
                  "bits": 0.01216
              },
              {
                  "aa": "Q",
                  "bits": 0.00926
              },
              {
                  "aa": "D",
                  "bits": 0.00794
              },
              {
                  "aa": "L",
                  "bits": 0.00688
              },
              {
                  "aa": "V",
                  "bits": 0.00582
              },
              {
                  "aa": "S",
                  "bits": 0.00371
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 0.46948
              },
              {
                  "aa": "K",
                  "bits": 0.26365
              },
              {
                  "aa": "H",
                  "bits": 0.26065
              },
              {
                  "aa": "E",
                  "bits": 0.06054
              },
              {
                  "aa": "R",
                  "bits": 0.0559
              },
              {
                  "aa": "T",
                  "bits": 0.03682
              },
              {
                  "aa": "Q",
                  "bits": 0.03437
              },
              {
                  "aa": "S",
                  "bits": 0.03137
              },
              {
                  "aa": "D",
                  "bits": 0.0191
              },
              {
                  "aa": "Y",
                  "bits": 0.00792
              },
              {
                  "aa": "C",
                  "bits": 0.0041
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.73772
              },
              {
                  "aa": "I",
                  "bits": 0.61691
              },
              {
                  "aa": "E",
                  "bits": 0.08294
              },
              {
                  "aa": "L",
                  "bits": 0.06793
              },
              {
                  "aa": "N",
                  "bits": 0.05935
              },
              {
                  "aa": "G",
                  "bits": 0.01932
              },
              {
                  "aa": "S",
                  "bits": 0.01896
              },
              {
                  "aa": "Q",
                  "bits": 0.00788
              },
              {
                  "aa": "H",
                  "bits": 0.00752
              },
              {
                  "aa": "A",
                  "bits": 0.00538
              },
              {
                  "aa": "Y",
                  "bits": 0.00466
              },
              {
                  "aa": "F",
                  "bits": 0.00216
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.86763
              },
              {
                  "aa": "S",
                  "bits": 0.39929
              },
              {
                  "aa": "P",
                  "bits": 0.31212
              },
              {
                  "aa": "N",
                  "bits": 0.03548
              },
              {
                  "aa": "E",
                  "bits": 0.01959
              },
              {
                  "aa": "A",
                  "bits": 0.01849
              },
              {
                  "aa": "Q",
                  "bits": 0.01295
              },
              {
                  "aa": "G",
                  "bits": 0.01036
              },
              {
                  "aa": "T",
                  "bits": 0.00519
              },
              {
                  "aa": "L",
                  "bits": 0.00408
              },
              {
                  "aa": "C",
                  "bits": 0.00297
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 0.73809
              },
              {
                  "aa": "N",
                  "bits": 0.4933
              },
              {
                  "aa": "D",
                  "bits": 0.32394
              },
              {
                  "aa": "S",
                  "bits": 0.12131
              },
              {
                  "aa": "E",
                  "bits": 0.00446
              },
              {
                  "aa": "Q",
                  "bits": 0.00372
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 2.93096
              },
              {
                  "aa": "S",
                  "bits": 0.00711
              },
              {
                  "aa": "C",
                  "bits": 0.00325
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.83887
              },
              {
                  "aa": "V",
                  "bits": 0.82442
              },
              {
                  "aa": "I",
                  "bits": 0.16721
              },
              {
                  "aa": "R",
                  "bits": 0.03511
              },
              {
                  "aa": "Q",
                  "bits": 0.00539
              },
              {
                  "aa": "E",
                  "bits": 0.00456
              },
              {
                  "aa": "G",
                  "bits": 0.00415
              },
              {
                  "aa": "L",
                  "bits": 0.00332
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.84749
              },
              {
                  "aa": "R",
                  "bits": 0.30021
              },
              {
                  "aa": "V",
                  "bits": 0.25993
              },
              {
                  "aa": "S",
                  "bits": 0.16081
              },
              {
                  "aa": "L",
                  "bits": 0.02497
              },
              {
                  "aa": "I",
                  "bits": 0.02177
              },
              {
                  "aa": "A",
                  "bits": 0.01036
              },
              {
                  "aa": "Q",
                  "bits": 0.00287
              },
              {
                  "aa": "T",
                  "bits": 0.00216
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 0.8003
              },
              {
                  "aa": "K",
                  "bits": 0.77609
              },
              {
                  "aa": "R",
                  "bits": 0.20059
              },
              {
                  "aa": "Q",
                  "bits": 0.03513
              },
              {
                  "aa": "S",
                  "bits": 0.02343
              },
              {
                  "aa": "V",
                  "bits": 0.00446
              },
              {
                  "aa": "N",
                  "bits": 0.00285
              },
              {
                  "aa": "H",
                  "bits": 0.00204
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 0.96375
              },
              {
                  "aa": "T",
                  "bits": 0.78203
              },
              {
                  "aa": "S",
                  "bits": 0.17318
              },
              {
                  "aa": "E",
                  "bits": 0.02268
              },
              {
                  "aa": "V",
                  "bits": 0.00601
              },
              {
                  "aa": "R",
                  "bits": 0.00301
              },
              {
                  "aa": "L",
                  "bits": 0.00259
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 1.18905
              },
              {
                  "aa": "D",
                  "bits": 0.27275
              },
              {
                  "aa": "S",
                  "bits": 0.27235
              },
              {
                  "aa": "K",
                  "bits": 0.0912
              },
              {
                  "aa": "E",
                  "bits": 0.01549
              },
              {
                  "aa": "Q",
                  "bits": 0.01183
              },
              {
                  "aa": "T",
                  "bits": 0.0102
              },
              {
                  "aa": "G",
                  "bits": 0.00206
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 0.93073
              },
              {
                  "aa": "A",
                  "bits": 0.64407
              },
              {
                  "aa": "T",
                  "bits": 0.22284
              },
              {
                  "aa": "V",
                  "bits": 0.02848
              },
              {
                  "aa": "S",
                  "bits": 0.01913
              },
              {
                  "aa": "D",
                  "bits": 0.00327
              },
              {
                  "aa": "E",
                  "bits": 0.00246
              },
              {
                  "aa": "P",
                  "bits": 0.00205
              },
              {
                  "aa": "K",
                  "bits": 0.00205
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.02357
              },
              {
                  "aa": "F",
                  "bits": 0.25199
              },
              {
                  "aa": "P",
                  "bits": 0.04969
              },
              {
                  "aa": "K",
                  "bits": 0.03348
              },
              {
                  "aa": "L",
                  "bits": 0.01728
              },
              {
                  "aa": "S",
                  "bits": 0.00264
              },
              {
                  "aa": "W",
                  "bits": 0.00212
              },
              {
                  "aa": "T",
                  "bits": 0.00212
              },
              {
                  "aa": "A",
                  "bits": 0.00212
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.54756
              },
              {
                  "aa": "I",
                  "bits": 0.13086
              },
              {
                  "aa": "M",
                  "bits": 0.0149
              },
              {
                  "aa": "V",
                  "bits": 0.01133
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.95199
              },
              {
                  "aa": "G",
                  "bits": 0.00263
              },
              {
                  "aa": "A",
                  "bits": 0.00263
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.63768
              },
              {
                  "aa": "L",
                  "bits": 0.53898
              },
              {
                  "aa": "I",
                  "bits": 0.06684
              },
              {
                  "aa": "F",
                  "bits": 0.00943
              },
              {
                  "aa": "G",
                  "bits": 0.0025
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 2.85467
              },
              {
                  "aa": "R",
                  "bits": 0.02599
              },
              {
                  "aa": "V",
                  "bits": 0.0032
              },
              {
                  "aa": "P",
                  "bits": 0.0032
              },
              {
                  "aa": "N",
                  "bits": 0.00256
              }
          ],
          [
              {
                  "aa": "W",
                  "bits": 2.92981
              },
              {
                  "aa": "T",
                  "bits": 0.00583
              },
              {
                  "aa": "H",
                  "bits": 0.0039
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 2.74362
              },
              {
                  "aa": "L",
                  "bits": 0.07116
              },
              {
                  "aa": "S",
                  "bits": 0.00312
              },
              {
                  "aa": "V",
                  "bits": 0.0025
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 2.56581
              },
              {
                  "aa": "S",
                  "bits": 0.15539
              },
              {
                  "aa": "Y",
                  "bits": 0.00302
              },
              {
                  "aa": "G",
                  "bits": 0.00242
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.35648
              },
              {
                  "aa": "I",
                  "bits": 0.16818
              },
              {
                  "aa": "L",
                  "bits": 0.05968
              },
              {
                  "aa": "V",
                  "bits": 0.00514
              },
              {
                  "aa": "F",
                  "bits": 0.00401
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 2.91212
              },
              {
                  "aa": "V",
                  "bits": 0.00388
              },
              {
                  "aa": "H",
                  "bits": 0.00324
              },
              {
                  "aa": "L",
                  "bits": 0.0026
              },
              {
                  "aa": "K",
                  "bits": 0.0026
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 1.00148
              },
              {
                  "aa": "A",
                  "bits": 0.93779
              },
              {
                  "aa": "T",
                  "bits": 0.10798
              },
              {
                  "aa": "C",
                  "bits": 0.00996
              },
              {
                  "aa": "G",
                  "bits": 0.00273
              },
              {
                  "aa": "F",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.20303
              },
              {
                  "aa": "I",
                  "bits": 1.01803
              },
              {
                  "aa": "M",
                  "bits": 0.00492
              },
              {
                  "aa": "V",
                  "bits": 0.00296
              },
              {
                  "aa": "C",
                  "bits": 0.00247
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 2.54351
              },
              {
                  "aa": "S",
                  "bits": 0.04973
              },
              {
                  "aa": "R",
                  "bits": 0.02049
              },
              {
                  "aa": "T",
                  "bits": 0.01932
              },
              {
                  "aa": "E",
                  "bits": 0.01055
              },
              {
                  "aa": "Y",
                  "bits": 0.00763
              },
              {
                  "aa": "I",
                  "bits": 0.00763
              },
              {
                  "aa": "G",
                  "bits": 0.00529
              },
              {
                  "aa": "V",
                  "bits": 0.00471
              },
              {
                  "aa": "C",
                  "bits": 0.00354
              },
              {
                  "aa": "L",
                  "bits": 0.00295
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 1.7371
              },
              {
                  "aa": "N",
                  "bits": 0.15794
              },
              {
                  "aa": "E",
                  "bits": 0.12617
              },
              {
                  "aa": "H",
                  "bits": 0.06167
              },
              {
                  "aa": "Q",
                  "bits": 0.06025
              },
              {
                  "aa": "S",
                  "bits": 0.00714
              },
              {
                  "aa": "A",
                  "bits": 0.00666
              },
              {
                  "aa": "K",
                  "bits": 0.00619
              },
              {
                  "aa": "G",
                  "bits": 0.00334
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 0.70177
              },
              {
                  "aa": "K",
                  "bits": 0.20873
              },
              {
                  "aa": "C",
                  "bits": 0.20873
              },
              {
                  "aa": "N",
                  "bits": 0.12593
              },
              {
                  "aa": "H",
                  "bits": 0.09094
              },
              {
                  "aa": "G",
                  "bits": 0.05063
              },
              {
                  "aa": "S",
                  "bits": 0.03282
              },
              {
                  "aa": "Q",
                  "bits": 0.00408
              },
              {
                  "aa": "Y",
                  "bits": 0.00283
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.10882
              },
              {
                  "aa": "I",
                  "bits": 0.54107
              },
              {
                  "aa": "L",
                  "bits": 0.20484
              },
              {
                  "aa": "M",
                  "bits": 0.02213
              },
              {
                  "aa": "T",
                  "bits": 0.01003
              },
              {
                  "aa": "F",
                  "bits": 0.00628
              },
              {
                  "aa": "K",
                  "bits": 0.00419
              },
              {
                  "aa": "N",
                  "bits": 0.00336
              },
              {
                  "aa": "S",
                  "bits": 0.00294
              },
              {
                  "aa": "P",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 2.56228
              },
              {
                  "aa": "F",
                  "bits": 0.14508
              },
              {
                  "aa": "V",
                  "bits": 0.00241
              },
              {
                  "aa": "S",
                  "bits": 0.00241
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 2.41069
              },
              {
                  "aa": "S",
                  "bits": 0.17074
              },
              {
                  "aa": "N",
                  "bits": 0.02474
              },
              {
                  "aa": "D",
                  "bits": 0.0098
              },
              {
                  "aa": "G",
                  "bits": 0.00348
              },
              {
                  "aa": "A",
                  "bits": 0.00348
              },
              {
                  "aa": "R",
                  "bits": 0.0029
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 0.59304
              },
              {
                  "aa": "T",
                  "bits": 0.46052
              },
              {
                  "aa": "F",
                  "bits": 0.10767
              },
              {
                  "aa": "V",
                  "bits": 0.09791
              },
              {
                  "aa": "I",
                  "bits": 0.08186
              },
              {
                  "aa": "S",
                  "bits": 0.05919
              },
              {
                  "aa": "M",
                  "bits": 0.01985
              },
              {
                  "aa": "L",
                  "bits": 0.006
              },
              {
                  "aa": "C",
                  "bits": 0.00348
              },
              {
                  "aa": "P",
                  "bits": 0.00285
              },
              {
                  "aa": "A",
                  "bits": 0.00222
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 1.42892
              },
              {
                  "aa": "L",
                  "bits": 0.19335
              },
              {
                  "aa": "E",
                  "bits": 0.1612
              },
              {
                  "aa": "K",
                  "bits": 0.14686
              },
              {
                  "aa": "Y",
                  "bits": 0.03869
              },
              {
                  "aa": "H",
                  "bits": 0.00437
              },
              {
                  "aa": "G",
                  "bits": 0.00306
              },
              {
                  "aa": "R",
                  "bits": 0.00263
              },
              {
                  "aa": "P",
                  "bits": 0.00219
              },
              {
                  "aa": "I",
                  "bits": 0.00219
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 2.84803
              },
              {
                  "aa": "T",
                  "bits": 0.02722
              },
              {
                  "aa": "N",
                  "bits": 0.00383
              },
              {
                  "aa": "A",
                  "bits": 0.00383
              },
              {
                  "aa": "Y",
                  "bits": 0.00319
              },
              {
                  "aa": "P",
                  "bits": 0.00256
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 2.91994
              },
              {
                  "aa": "L",
                  "bits": 0.0026
              },
              {
                  "aa": "F",
                  "bits": 0.0026
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 2.85392
              },
              {
                  "aa": "I",
                  "bits": 0.02476
              },
              {
                  "aa": "L",
                  "bits": 0.00637
              }
          ],
          [
              {
                  "aa": "W",
                  "bits": 2.9518
              },
              {
                  "aa": "K",
                  "bits": 0.00263
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 2.82735
              },
              {
                  "aa": "A",
                  "bits": 0.04682
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 1.50802
              },
              {
                  "aa": "Y",
                  "bits": 0.79793
              },
              {
                  "aa": "L",
                  "bits": 0.00206
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.92636
              },
              {
                  "aa": "A",
                  "bits": 0.0052
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.48613
              },
              {
                  "aa": "I",
                  "bits": 0.80241
              },
              {
                  "aa": "L",
                  "bits": 0.0076
              },
              {
                  "aa": "A",
                  "bits": 0.00255
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.4443
              },
              {
                  "aa": "F",
                  "bits": 0.09154
              },
              {
                  "aa": "V",
                  "bits": 0.08633
              },
              {
                  "aa": "M",
                  "bits": 0.00814
              },
              {
                  "aa": "T",
                  "bits": 0.00466
              },
              {
                  "aa": "D",
                  "bits": 0.00235
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.8896
              },
              {
                  "aa": "M",
                  "bits": 0.49781
              },
              {
                  "aa": "T",
                  "bits": 0.00637
              },
              {
                  "aa": "I",
                  "bits": 0.00479
              },
              {
                  "aa": "V",
                  "bits": 0.0032
              },
              {
                  "aa": "S",
                  "bits": 0.0032
              }
          ],
          [
              {
                  "aa": "W",
                  "bits": 2.92989
              },
              {
                  "aa": "S",
                  "bits": 0.00262
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 2.92875
              },
              {
                  "aa": "G",
                  "bits": 0.00715
              },
              {
                  "aa": "L",
                  "bits": 0.00327
              },
              {
                  "aa": "C",
                  "bits": 0.00262
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 2.3363
              },
              {
                  "aa": "L",
                  "bits": 0.1539
              },
              {
                  "aa": "F",
                  "bits": 0.02539
              },
              {
                  "aa": "M",
                  "bits": 0.01806
              },
              {
                  "aa": "T",
                  "bits": 0.01637
              },
              {
                  "aa": "V",
                  "bits": 0.01074
              },
              {
                  "aa": "P",
                  "bits": 0.00623
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 2.47187
              },
              {
                  "aa": "V",
                  "bits": 0.13194
              },
              {
                  "aa": "M",
                  "bits": 0.04147
              },
              {
                  "aa": "L",
                  "bits": 0.00703
              },
              {
                  "aa": "Y",
                  "bits": 0.00236
              },
              {
                  "aa": "A",
                  "bits": 0.00236
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.19623
              },
              {
                  "aa": "S",
                  "bits": 1.02324
              },
              {
                  "aa": "H",
                  "bits": 0.00492
              },
              {
                  "aa": "I",
                  "bits": 0.00394
              },
              {
                  "aa": "C",
                  "bits": 0.00345
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 2.90108
              },
              {
                  "aa": "A",
                  "bits": 0.00772
              },
              {
                  "aa": "F",
                  "bits": 0.00388
              },
              {
                  "aa": "S",
                  "bits": 0.00324
              },
              {
                  "aa": "T",
                  "bits": 0.00259
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.73364
              },
              {
                  "aa": "A",
                  "bits": 0.05998
              },
              {
                  "aa": "S",
                  "bits": 0.0093
              },
              {
                  "aa": "L",
                  "bits": 0.00312
              },
              {
                  "aa": "C",
                  "bits": 0.00312
              },
              {
                  "aa": "W",
                  "bits": 0.0025
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 0.96023
              },
              {
                  "aa": "A",
                  "bits": 0.25945
              },
              {
                  "aa": "K",
                  "bits": 0.10791
              },
              {
                  "aa": "S",
                  "bits": 0.0894
              },
              {
                  "aa": "V",
                  "bits": 0.06077
              },
              {
                  "aa": "N",
                  "bits": 0.03668
              },
              {
                  "aa": "L",
                  "bits": 0.0297
              },
              {
                  "aa": "E",
                  "bits": 0.01049
              },
              {
                  "aa": "R",
                  "bits": 0.00979
              },
              {
                  "aa": "Q",
                  "bits": 0.007
              },
              {
                  "aa": "M",
                  "bits": 0.00595
              },
              {
                  "aa": "C",
                  "bits": 0.00456
              },
              {
                  "aa": "T",
                  "bits": 0.00316
              },
              {
                  "aa": "H",
                  "bits": 0.00316
              },
              {
                  "aa": "I",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 1.52057
              },
              {
                  "aa": "T",
                  "bits": 0.26854
              },
              {
                  "aa": "N",
                  "bits": 0.21822
              },
              {
                  "aa": "V",
                  "bits": 0.04851
              },
              {
                  "aa": "L",
                  "bits": 0.00688
              },
              {
                  "aa": "A",
                  "bits": 0.00551
              },
              {
                  "aa": "Y",
                  "bits": 0.00277
              },
              {
                  "aa": "G",
                  "bits": 0.00277
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.9114
              },
              {
                  "aa": "S",
                  "bits": 0.00582
              },
              {
                  "aa": "L",
                  "bits": 0.00389
              },
              {
                  "aa": "A",
                  "bits": 0.00389
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 2.88326
              },
              {
                  "aa": "V",
                  "bits": 0.00834
              },
              {
                  "aa": "I",
                  "bits": 0.00514
              },
              {
                  "aa": "L",
                  "bits": 0.0045
              },
              {
                  "aa": "C",
                  "bits": 0.00259
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.89168
              },
              {
                  "aa": "A",
                  "bits": 0.00707
              },
              {
                  "aa": "G",
                  "bits": 0.00387
              },
              {
                  "aa": "T",
                  "bits": 0.00323
              },
              {
                  "aa": "L",
                  "bits": 0.00323
              },
              {
                  "aa": "K",
                  "bits": 0.00323
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.06319
              },
              {
                  "aa": "E",
                  "bits": 0.089
              },
              {
                  "aa": "S",
                  "bits": 0.07704
              },
              {
                  "aa": "N",
                  "bits": 0.05778
              },
              {
                  "aa": "D",
                  "bits": 0.05726
              },
              {
                  "aa": "R",
                  "bits": 0.01199
              },
              {
                  "aa": "T",
                  "bits": 0.00627
              },
              {
                  "aa": "P",
                  "bits": 0.00263
              },
              {
                  "aa": "L",
                  "bits": 0.00263
              },
              {
                  "aa": "F",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 0.77333
              },
              {
                  "aa": "V",
                  "bits": 0.53539
              },
              {
                  "aa": "M",
                  "bits": 0.26281
              },
              {
                  "aa": "L",
                  "bits": 0.12878
              },
              {
                  "aa": "H",
                  "bits": 0.00378
              },
              {
                  "aa": "F",
                  "bits": 0.00303
              },
              {
                  "aa": "T",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 0.85845
              },
              {
                  "aa": "Q",
                  "bits": 0.21542
              },
              {
                  "aa": "A",
                  "bits": 0.07658
              },
              {
                  "aa": "K",
                  "bits": 0.05561
              },
              {
                  "aa": "L",
                  "bits": 0.04608
              },
              {
                  "aa": "V",
                  "bits": 0.04386
              },
              {
                  "aa": "M",
                  "bits": 0.04259
              },
              {
                  "aa": "D",
                  "bits": 0.02861
              },
              {
                  "aa": "E",
                  "bits": 0.02067
              },
              {
                  "aa": "C",
                  "bits": 0.01844
              },
              {
                  "aa": "H",
                  "bits": 0.0159
              },
              {
                  "aa": "N",
                  "bits": 0.00828
              },
              {
                  "aa": "I",
                  "bits": 0.00542
              },
              {
                  "aa": "S",
                  "bits": 0.00478
              },
              {
                  "aa": "G",
                  "bits": 0.00478
              },
              {
                  "aa": "R",
                  "bits": 0.00319
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.19527
              },
              {
                  "aa": "I",
                  "bits": 0.30667
              },
              {
                  "aa": "M",
                  "bits": 0.13586
              },
              {
                  "aa": "P",
                  "bits": 0.11416
              },
              {
                  "aa": "A",
                  "bits": 0.03579
              },
              {
                  "aa": "L",
                  "bits": 0.00926
              },
              {
                  "aa": "T",
                  "bits": 0.00766
              },
              {
                  "aa": "W",
                  "bits": 0.00605
              },
              {
                  "aa": "G",
                  "bits": 0.00484
              },
              {
                  "aa": "F",
                  "bits": 0.00364
              },
              {
                  "aa": "C",
                  "bits": 0.00364
              },
              {
                  "aa": "E",
                  "bits": 0.00203
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.85602
              },
              {
                  "aa": "D",
                  "bits": 0.62235
              },
              {
                  "aa": "N",
                  "bits": 0.25475
              },
              {
                  "aa": "G",
                  "bits": 0.02982
              },
              {
                  "aa": "T",
                  "bits": 0.01671
              },
              {
                  "aa": "K",
                  "bits": 0.00439
              },
              {
                  "aa": "Q",
                  "bits": 0.00399
              },
              {
                  "aa": "L",
                  "bits": 0.0024
              },
              {
                  "aa": "F",
                  "bits": 0.00201
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.90678
              },
              {
                  "aa": "K",
                  "bits": 0.10646
              },
              {
                  "aa": "S",
                  "bits": 0.10516
              },
              {
                  "aa": "Q",
                  "bits": 0.08883
              },
              {
                  "aa": "T",
                  "bits": 0.08426
              },
              {
                  "aa": "R",
                  "bits": 0.07838
              },
              {
                  "aa": "N",
                  "bits": 0.05716
              },
              {
                  "aa": "L",
                  "bits": 0.02059
              },
              {
                  "aa": "A",
                  "bits": 0.0134
              },
              {
                  "aa": "H",
                  "bits": 0.00851
              },
              {
                  "aa": "G",
                  "bits": 0.00622
              },
              {
                  "aa": "I",
                  "bits": 0.00426
              },
              {
                  "aa": "Y",
                  "bits": 0.00328
              },
              {
                  "aa": "D",
                  "bits": 0.0023
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.11678
              },
              {
                  "aa": "F",
                  "bits": 1.05839
              },
              {
                  "aa": "Q",
                  "bits": 0.00726
              },
              {
                  "aa": "M",
                  "bits": 0.00678
              },
              {
                  "aa": "A",
                  "bits": 0.00533
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 0.88779
              },
              {
                  "aa": "Y",
                  "bits": 0.56128
              },
              {
                  "aa": "C",
                  "bits": 0.33574
              },
              {
                  "aa": "L",
                  "bits": 0.02005
              },
              {
                  "aa": "I",
                  "bits": 0.00803
              },
              {
                  "aa": "V",
                  "bits": 0.00603
              },
              {
                  "aa": "S",
                  "bits": 0.00322
              },
              {
                  "aa": "G",
                  "bits": 0.00202
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.81463
              },
              {
                  "aa": "N",
                  "bits": 0.22967
              },
              {
                  "aa": "S",
                  "bits": 0.12599
              },
              {
                  "aa": "R",
                  "bits": 0.11953
              },
              {
                  "aa": "Q",
                  "bits": 0.08755
              },
              {
                  "aa": "C",
                  "bits": 0.02715
              },
              {
                  "aa": "H",
                  "bits": 0.01778
              },
              {
                  "aa": "L",
                  "bits": 0.01294
              },
              {
                  "aa": "E",
                  "bits": 0.01261
              },
              {
                  "aa": "D",
                  "bits": 0.00841
              },
              {
                  "aa": "T",
                  "bits": 0.00518
              },
              {
                  "aa": "A",
                  "bits": 0.00389
              },
              {
                  "aa": "I",
                  "bits": 0.0026
              },
              {
                  "aa": "V",
                  "bits": 0.00228
              },
              {
                  "aa": "M",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 0.81848
              },
              {
                  "aa": "R",
                  "bits": 0.26699
              },
              {
                  "aa": "M",
                  "bits": 0.18497
              },
              {
                  "aa": "K",
                  "bits": 0.13367
              },
              {
                  "aa": "A",
                  "bits": 0.08811
              },
              {
                  "aa": "Q",
                  "bits": 0.01352
              },
              {
                  "aa": "H",
                  "bits": 0.00812
              },
              {
                  "aa": "E",
                  "bits": 0.00542
              },
              {
                  "aa": "S",
                  "bits": 0.00407
              },
              {
                  "aa": "I",
                  "bits": 0.00339
              },
              {
                  "aa": "Y",
                  "bits": 0.00305
              },
              {
                  "aa": "D",
                  "bits": 0.00238
              },
              {
                  "aa": "V",
                  "bits": 0.00204
              },
              {
                  "aa": "F",
                  "bits": 0.00204
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.61501
              },
              {
                  "aa": "I",
                  "bits": 0.51957
              },
              {
                  "aa": "V",
                  "bits": 0.08531
              },
              {
                  "aa": "A",
                  "bits": 0.00591
              },
              {
                  "aa": "P",
                  "bits": 0.00297
              },
              {
                  "aa": "Y",
                  "bits": 0.00248
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 1.89592
              },
              {
                  "aa": "R",
                  "bits": 0.16601
              },
              {
                  "aa": "Q",
                  "bits": 0.09345
              },
              {
                  "aa": "E",
                  "bits": 0.0368
              },
              {
                  "aa": "N",
                  "bits": 0.02835
              },
              {
                  "aa": "S",
                  "bits": 0.01046
              },
              {
                  "aa": "I",
                  "bits": 0.00897
              },
              {
                  "aa": "V",
                  "bits": 0.00798
              },
              {
                  "aa": "L",
                  "bits": 0.00599
              },
              {
                  "aa": "A",
                  "bits": 0.00301
              },
              {
                  "aa": "M",
                  "bits": 0.00251
              },
              {
                  "aa": "T",
                  "bits": 0.00201
              },
              {
                  "aa": "F",
                  "bits": 0.00201
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.94554
              },
              {
                  "aa": "D",
                  "bits": 0.18385
              },
              {
                  "aa": "S",
                  "bits": 0.13764
              },
              {
                  "aa": "R",
                  "bits": 0.1147
              },
              {
                  "aa": "T",
                  "bits": 0.08047
              },
              {
                  "aa": "N",
                  "bits": 0.02398
              },
              {
                  "aa": "Q",
                  "bits": 0.0144
              },
              {
                  "aa": "K",
                  "bits": 0.0144
              },
              {
                  "aa": "G",
                  "bits": 0.0144
              },
              {
                  "aa": "C",
                  "bits": 0.0096
              },
              {
                  "aa": "A",
                  "bits": 0.00892
              },
              {
                  "aa": "H",
                  "bits": 0.00515
              },
              {
                  "aa": "L",
                  "bits": 0.00378
              },
              {
                  "aa": "P",
                  "bits": 0.00241
              }
          ],
          [
              {
                  "aa": "G",
                  "bits": 2.89331
              },
              {
                  "aa": "S",
                  "bits": 0.00514
              },
              {
                  "aa": "T",
                  "bits": 0.00386
              },
              {
                  "aa": "L",
                  "bits": 0.00386
              },
              {
                  "aa": "F",
                  "bits": 0.00322
              },
              {
                  "aa": "A",
                  "bits": 0.00322
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 0.66647
              },
              {
                  "aa": "Y",
                  "bits": 0.39457
              },
              {
                  "aa": "T",
                  "bits": 0.21871
              },
              {
                  "aa": "F",
                  "bits": 0.10806
              },
              {
                  "aa": "M",
                  "bits": 0.02727
              },
              {
                  "aa": "V",
                  "bits": 0.01819
              },
              {
                  "aa": "R",
                  "bits": 0.01105
              },
              {
                  "aa": "K",
                  "bits": 0.00748
              },
              {
                  "aa": "C",
                  "bits": 0.00748
              },
              {
                  "aa": "N",
                  "bits": 0.00521
              },
              {
                  "aa": "G",
                  "bits": 0.00488
              },
              {
                  "aa": "S",
                  "bits": 0.00391
              },
              {
                  "aa": "L",
                  "bits": 0.00326
              },
              {
                  "aa": "P",
                  "bits": 0.00294
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.1705
              },
              {
                  "aa": "Q",
                  "bits": 0.12318
              },
              {
                  "aa": "K",
                  "bits": 0.09468
              },
              {
                  "aa": "H",
                  "bits": 0.04628
              },
              {
                  "aa": "P",
                  "bits": 0.00648
              },
              {
                  "aa": "Y",
                  "bits": 0.00594
              },
              {
                  "aa": "L",
                  "bits": 0.00487
              },
              {
                  "aa": "S",
                  "bits": 0.00272
              },
              {
                  "aa": "I",
                  "bits": 0.00218
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 2.84256
              },
              {
                  "aa": "L",
                  "bits": 0.01326
              },
              {
                  "aa": "H",
                  "bits": 0.00444
              },
              {
                  "aa": "S",
                  "bits": 0.00381
              },
              {
                  "aa": "Q",
                  "bits": 0.00318
              },
              {
                  "aa": "K",
                  "bits": 0.00318
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.59307
              },
              {
                  "aa": "R",
                  "bits": 0.22647
              },
              {
                  "aa": "E",
                  "bits": 0.15455
              },
              {
                  "aa": "A",
                  "bits": 0.1272
              },
              {
                  "aa": "S",
                  "bits": 0.07503
              },
              {
                  "aa": "L",
                  "bits": 0.04344
              },
              {
                  "aa": "T",
                  "bits": 0.01496
              },
              {
                  "aa": "F",
                  "bits": 0.01327
              },
              {
                  "aa": "N",
                  "bits": 0.00819
              },
              {
                  "aa": "K",
                  "bits": 0.00819
              },
              {
                  "aa": "G",
                  "bits": 0.00819
              },
              {
                  "aa": "P",
                  "bits": 0.00594
              },
              {
                  "aa": "M",
                  "bits": 0.00368
              },
              {
                  "aa": "C",
                  "bits": 0.0034
              },
              {
                  "aa": "Q",
                  "bits": 0.00283
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.70802
              },
              {
                  "aa": "A",
                  "bits": 0.23717
              },
              {
                  "aa": "R",
                  "bits": 0.18836
              },
              {
                  "aa": "Q",
                  "bits": 0.15182
              },
              {
                  "aa": "S",
                  "bits": 0.08757
              },
              {
                  "aa": "P",
                  "bits": 0.02836
              },
              {
                  "aa": "C",
                  "bits": 0.01639
              },
              {
                  "aa": "T",
                  "bits": 0.00474
              },
              {
                  "aa": "M",
                  "bits": 0.00348
              },
              {
                  "aa": "V",
                  "bits": 0.00317
              },
              {
                  "aa": "E",
                  "bits": 0.00317
              },
              {
                  "aa": "N",
                  "bits": 0.00285
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.87918
              },
              {
                  "aa": "A",
                  "bits": 0.00703
              },
              {
                  "aa": "L",
                  "bits": 0.0064
              },
              {
                  "aa": "C",
                  "bits": 0.00449
              },
              {
                  "aa": "R",
                  "bits": 0.00321
              },
              {
                  "aa": "S",
                  "bits": 0.00258
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 0.27862
              },
              {
                  "aa": "A",
                  "bits": 0.24664
              },
              {
                  "aa": "D",
                  "bits": 0.15184
              },
              {
                  "aa": "S",
                  "bits": 0.15072
              },
              {
                  "aa": "P",
                  "bits": 0.05457
              },
              {
                  "aa": "G",
                  "bits": 0.03847
              },
              {
                  "aa": "T",
                  "bits": 0.02595
              },
              {
                  "aa": "F",
                  "bits": 0.02371
              },
              {
                  "aa": "Y",
                  "bits": 0.01633
              },
              {
                  "aa": "Q",
                  "bits": 0.01097
              },
              {
                  "aa": "V",
                  "bits": 0.00627
              },
              {
                  "aa": "K",
                  "bits": 0.0056
              },
              {
                  "aa": "N",
                  "bits": 0.00381
              },
              {
                  "aa": "R",
                  "bits": 0.00247
              },
              {
                  "aa": "L",
                  "bits": 0.00225
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 0.49476
              },
              {
                  "aa": "Y",
                  "bits": 0.24752
              },
              {
                  "aa": "H",
                  "bits": 0.18814
              },
              {
                  "aa": "F",
                  "bits": 0.12471
              },
              {
                  "aa": "T",
                  "bits": 0.05777
              },
              {
                  "aa": "L",
                  "bits": 0.04374
              },
              {
                  "aa": "C",
                  "bits": 0.02485
              },
              {
                  "aa": "A",
                  "bits": 0.02026
              },
              {
                  "aa": "Q",
                  "bits": 0.01162
              },
              {
                  "aa": "S",
                  "bits": 0.00757
              },
              {
                  "aa": "K",
                  "bits": 0.00541
              },
              {
                  "aa": "I",
                  "bits": 0.00271
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 0.93564
              },
              {
                  "aa": "A",
                  "bits": 0.83467
              },
              {
                  "aa": "S",
                  "bits": 0.10313
              },
              {
                  "aa": "T",
                  "bits": 0.05839
              },
              {
                  "aa": "L",
                  "bits": 0.00471
              },
              {
                  "aa": "G",
                  "bits": 0.00428
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.12156
              },
              {
                  "aa": "P",
                  "bits": 0.38471
              },
              {
                  "aa": "S",
                  "bits": 0.27166
              },
              {
                  "aa": "N",
                  "bits": 0.04557
              },
              {
                  "aa": "L",
                  "bits": 0.00531
              },
              {
                  "aa": "I",
                  "bits": 0.00531
              },
              {
                  "aa": "A",
                  "bits": 0.00531
              },
              {
                  "aa": "H",
                  "bits": 0.0049
              },
              {
                  "aa": "D",
                  "bits": 0.00449
              },
              {
                  "aa": "E",
                  "bits": 0.00246
              },
              {
                  "aa": "K",
                  "bits": 0.00205
              },
              {
                  "aa": "C",
                  "bits": 0.00205
              }
          ],
          [
              {
                  "aa": "N",
                  "bits": 0.17656
              },
              {
                  "aa": "P",
                  "bits": 0.13731
              },
              {
                  "aa": "H",
                  "bits": 0.1176
              },
              {
                  "aa": "E",
                  "bits": 0.07145
              },
              {
                  "aa": "S",
                  "bits": 0.05536
              },
              {
                  "aa": "A",
                  "bits": 0.04419
              },
              {
                  "aa": "D",
                  "bits": 0.04337
              },
              {
                  "aa": "Q",
                  "bits": 0.02678
              },
              {
                  "aa": "L",
                  "bits": 0.01758
              },
              {
                  "aa": "K",
                  "bits": 0.01758
              },
              {
                  "aa": "T",
                  "bits": 0.01643
              },
              {
                  "aa": "I",
                  "bits": 0.01249
              },
              {
                  "aa": "V",
                  "bits": 0.00707
              },
              {
                  "aa": "R",
                  "bits": 0.00329
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 1.70475
              },
              {
                  "aa": "D",
                  "bits": 0.24403
              },
              {
                  "aa": "A",
                  "bits": 0.06619
              },
              {
                  "aa": "N",
                  "bits": 0.04507
              },
              {
                  "aa": "S",
                  "bits": 0.02771
              },
              {
                  "aa": "Q",
                  "bits": 0.00894
              },
              {
                  "aa": "R",
                  "bits": 0.008
              },
              {
                  "aa": "K",
                  "bits": 0.00612
              },
              {
                  "aa": "Y",
                  "bits": 0.00565
              },
              {
                  "aa": "T",
                  "bits": 0.00519
              },
              {
                  "aa": "G",
                  "bits": 0.00425
              },
              {
                  "aa": "F",
                  "bits": 0.00425
              },
              {
                  "aa": "L",
                  "bits": 0.00378
              },
              {
                  "aa": "V",
                  "bits": 0.00331
              },
              {
                  "aa": "P",
                  "bits": 0.00284
              },
              {
                  "aa": "I",
                  "bits": 0.00284
              },
              {
                  "aa": "H",
                  "bits": 0.00284
              },
              {
                  "aa": "C",
                  "bits": 0.00237
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 0.71443
              },
              {
                  "aa": "I",
                  "bits": 0.45869
              },
              {
                  "aa": "M",
                  "bits": 0.3093
              },
              {
                  "aa": "V",
                  "bits": 0.14833
              },
              {
                  "aa": "F",
                  "bits": 0.00581
              },
              {
                  "aa": "P",
                  "bits": 0.00472
              },
              {
                  "aa": "T",
                  "bits": 0.00327
              },
              {
                  "aa": "R",
                  "bits": 0.00219
              }
          ],
          [
              {
                  "aa": "Y",
                  "bits": 2.54446
              },
              {
                  "aa": "R",
                  "bits": 0.07523
              },
              {
                  "aa": "G",
                  "bits": 0.01472
              },
              {
                  "aa": "F",
                  "bits": 0.01119
              },
              {
                  "aa": "H",
                  "bits": 0.00767
              },
              {
                  "aa": "V",
                  "bits": 0.0059
              },
              {
                  "aa": "S",
                  "bits": 0.0059
              },
              {
                  "aa": "A",
                  "bits": 0.00532
              },
              {
                  "aa": "W",
                  "bits": 0.00297
              },
              {
                  "aa": "L",
                  "bits": 0.00297
              },
              {
                  "aa": "C",
                  "bits": 0.00297
              },
              {
                  "aa": "P",
                  "bits": 0.00238
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 0.33106
              },
              {
                  "aa": "Q",
                  "bits": 0.10762
              },
              {
                  "aa": "E",
                  "bits": 0.10627
              },
              {
                  "aa": "D",
                  "bits": 0.07392
              },
              {
                  "aa": "G",
                  "bits": 0.04826
              },
              {
                  "aa": "S",
                  "bits": 0.04577
              },
              {
                  "aa": "R",
                  "bits": 0.04041
              },
              {
                  "aa": "N",
                  "bits": 0.03141
              },
              {
                  "aa": "T",
                  "bits": 0.01954
              },
              {
                  "aa": "L",
                  "bits": 0.01686
              },
              {
                  "aa": "F",
                  "bits": 0.01514
              },
              {
                  "aa": "H",
                  "bits": 0.01111
              },
              {
                  "aa": "I",
                  "bits": 0.00748
              },
              {
                  "aa": "K",
                  "bits": 0.00709
              },
              {
                  "aa": "V",
                  "bits": 0.00422
              },
              {
                  "aa": "A",
                  "bits": 0.00365
              },
              {
                  "aa": "C",
                  "bits": 0.00288
              }
          ],
          [
              {
                  "aa": "I",
                  "bits": 0.6127
              },
              {
                  "aa": "M",
                  "bits": 0.46002
              },
              {
                  "aa": "L",
                  "bits": 0.18586
              },
              {
                  "aa": "T",
                  "bits": 0.14284
              },
              {
                  "aa": "V",
                  "bits": 0.05945
              },
              {
                  "aa": "K",
                  "bits": 0.01479
              },
              {
                  "aa": "F",
                  "bits": 0.00658
              },
              {
                  "aa": "D",
                  "bits": 0.0056
              },
              {
                  "aa": "C",
                  "bits": 0.00231
              }
          ],
          [
              {
                  "aa": "M",
                  "bits": 2.77404
              },
              {
                  "aa": "T",
                  "bits": 0.00995
              },
              {
                  "aa": "I",
                  "bits": 0.00933
              },
              {
                  "aa": "H",
                  "bits": 0.00933
              },
              {
                  "aa": "L",
                  "bits": 0.00623
              },
              {
                  "aa": "Q",
                  "bits": 0.00313
              },
              {
                  "aa": "G",
                  "bits": 0.00313
              },
              {
                  "aa": "A",
                  "bits": 0.00313
              },
              {
                  "aa": "W",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 0.54418
              },
              {
                  "aa": "L",
                  "bits": 0.35945
              },
              {
                  "aa": "K",
                  "bits": 0.18592
              },
              {
                  "aa": "Q",
                  "bits": 0.12493
              },
              {
                  "aa": "V",
                  "bits": 0.04273
              },
              {
                  "aa": "M",
                  "bits": 0.02624
              },
              {
                  "aa": "T",
                  "bits": 0.01592
              },
              {
                  "aa": "C",
                  "bits": 0.01504
              },
              {
                  "aa": "S",
                  "bits": 0.00709
              },
              {
                  "aa": "A",
                  "bits": 0.00709
              },
              {
                  "aa": "H",
                  "bits": 0.00355
              },
              {
                  "aa": "N",
                  "bits": 0.00326
              },
              {
                  "aa": "F",
                  "bits": 0.00296
              },
              {
                  "aa": "I",
                  "bits": 0.00237
              },
              {
                  "aa": "G",
                  "bits": 0.00208
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.37955
              },
              {
                  "aa": "E",
                  "bits": 0.17427
              },
              {
                  "aa": "S",
                  "bits": 0.10135
              },
              {
                  "aa": "K",
                  "bits": 0.09896
              },
              {
                  "aa": "A",
                  "bits": 0.05643
              },
              {
                  "aa": "T",
                  "bits": 0.03517
              },
              {
                  "aa": "R",
                  "bits": 0.03517
              },
              {
                  "aa": "Q",
                  "bits": 0.03234
              },
              {
                  "aa": "M",
                  "bits": 0.02735
              },
              {
                  "aa": "N",
                  "bits": 0.01564
              },
              {
                  "aa": "L",
                  "bits": 0.01303
              },
              {
                  "aa": "G",
                  "bits": 0.00695
              },
              {
                  "aa": "C",
                  "bits": 0.00587
              },
              {
                  "aa": "I",
                  "bits": 0.00283
              },
              {
                  "aa": "V",
                  "bits": 0.0024
              },
              {
                  "aa": "H",
                  "bits": 0.00218
              }
          ],
          [
              {
                  "aa": "C",
                  "bits": 2.79904
              },
              {
                  "aa": "S",
                  "bits": 0.00938
              },
              {
                  "aa": "T",
                  "bits": 0.00814
              },
              {
                  "aa": "V",
                  "bits": 0.00751
              },
              {
                  "aa": "K",
                  "bits": 0.00439
              },
              {
                  "aa": "H",
                  "bits": 0.00439
              },
              {
                  "aa": "L",
                  "bits": 0.00377
              },
              {
                  "aa": "R",
                  "bits": 0.00252
              },
              {
                  "aa": "P",
                  "bits": 0.00252
              }
          ],
          [
              {
                  "aa": "W",
                  "bits": 2.81568
              },
              {
                  "aa": "L",
                  "bits": 0.01067
              },
              {
                  "aa": "T",
                  "bits": 0.00629
              },
              {
                  "aa": "P",
                  "bits": 0.00504
              },
              {
                  "aa": "S",
                  "bits": 0.00441
              },
              {
                  "aa": "Y",
                  "bits": 0.00316
              },
              {
                  "aa": "H",
                  "bits": 0.00316
              },
              {
                  "aa": "V",
                  "bits": 0.00253
              },
              {
                  "aa": "E",
                  "bits": 0.00253
              }
          ],
          [
              {
                  "aa": "H",
                  "bits": 0.58524
              },
              {
                  "aa": "N",
                  "bits": 0.11381
              },
              {
                  "aa": "D",
                  "bits": 0.09962
              },
              {
                  "aa": "S",
                  "bits": 0.07278
              },
              {
                  "aa": "K",
                  "bits": 0.06968
              },
              {
                  "aa": "A",
                  "bits": 0.06633
              },
              {
                  "aa": "E",
                  "bits": 0.06246
              },
              {
                  "aa": "Q",
                  "bits": 0.05007
              },
              {
                  "aa": "R",
                  "bits": 0.02349
              },
              {
                  "aa": "L",
                  "bits": 0.0173
              },
              {
                  "aa": "M",
                  "bits": 0.00595
              },
              {
                  "aa": "C",
                  "bits": 0.00492
              },
              {
                  "aa": "T",
                  "bits": 0.00311
              }
          ],
          [
              {
                  "aa": "A",
                  "bits": 0.52444
              },
              {
                  "aa": "G",
                  "bits": 0.12691
              },
              {
                  "aa": "L",
                  "bits": 0.08872
              },
              {
                  "aa": "S",
                  "bits": 0.07093
              },
              {
                  "aa": "E",
                  "bits": 0.06856
              },
              {
                  "aa": "Q",
                  "bits": 0.0548
              },
              {
                  "aa": "K",
                  "bits": 0.02966
              },
              {
                  "aa": "F",
                  "bits": 0.02587
              },
              {
                  "aa": "D",
                  "bits": 0.02373
              },
              {
                  "aa": "H",
                  "bits": 0.01353
              },
              {
                  "aa": "T",
                  "bits": 0.01329
              },
              {
                  "aa": "Y",
                  "bits": 0.01116
              },
              {
                  "aa": "R",
                  "bits": 0.00903
              },
              {
                  "aa": "V",
                  "bits": 0.0076
              },
              {
                  "aa": "P",
                  "bits": 0.0057
              },
              {
                  "aa": "M",
                  "bits": 0.00547
              },
              {
                  "aa": "N",
                  "bits": 0.00428
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 0.33567
              },
              {
                  "aa": "E",
                  "bits": 0.239
              },
              {
                  "aa": "D",
                  "bits": 0.20639
              },
              {
                  "aa": "K",
                  "bits": 0.06849
              },
              {
                  "aa": "I",
                  "bits": 0.05825
              },
              {
                  "aa": "A",
                  "bits": 0.05079
              },
              {
                  "aa": "N",
                  "bits": 0.04054
              },
              {
                  "aa": "R",
                  "bits": 0.01935
              },
              {
                  "aa": "S",
                  "bits": 0.01445
              },
              {
                  "aa": "Q",
                  "bits": 0.01352
              },
              {
                  "aa": "T",
                  "bits": 0.00537
              },
              {
                  "aa": "M",
                  "bits": 0.00397
              },
              {
                  "aa": "H",
                  "bits": 0.00327
              },
              {
                  "aa": "C",
                  "bits": 0.00257
              },
              {
                  "aa": "L",
                  "bits": 0.00211
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 1.89268
              },
              {
                  "aa": "S",
                  "bits": 0.17955
              },
              {
                  "aa": "F",
                  "bits": 0.09597
              },
              {
                  "aa": "A",
                  "bits": 0.0292
              },
              {
                  "aa": "Y",
                  "bits": 0.01338
              },
              {
                  "aa": "Q",
                  "bits": 0.00992
              },
              {
                  "aa": "C",
                  "bits": 0.00893
              },
              {
                  "aa": "H",
                  "bits": 0.00645
              },
              {
                  "aa": "L",
                  "bits": 0.00546
              },
              {
                  "aa": "T",
                  "bits": 0.00497
              },
              {
                  "aa": "E",
                  "bits": 0.00448
              },
              {
                  "aa": "G",
                  "bits": 0.00398
              },
              {
                  "aa": "K",
                  "bits": 0.00299
              },
              {
                  "aa": "V",
                  "bits": 0.0025
              },
              {
                  "aa": "R",
                  "bits": 0.0025
              },
              {
                  "aa": "I",
                  "bits": 0.002
              },
              {
                  "aa": "D",
                  "bits": 0.002
              }
          ],
          [
              {
                  "aa": "S",
                  "bits": 0.38959
              },
              {
                  "aa": "E",
                  "bits": 0.11891
              },
              {
                  "aa": "T",
                  "bits": 0.11678
              },
              {
                  "aa": "K",
                  "bits": 0.09757
              },
              {
                  "aa": "L",
                  "bits": 0.06704
              },
              {
                  "aa": "D",
                  "bits": 0.05018
              },
              {
                  "aa": "R",
                  "bits": 0.03609
              },
              {
                  "aa": "N",
                  "bits": 0.03054
              },
              {
                  "aa": "Q",
                  "bits": 0.01709
              },
              {
                  "aa": "F",
                  "bits": 0.01495
              },
              {
                  "aa": "A",
                  "bits": 0.01218
              },
              {
                  "aa": "G",
                  "bits": 0.00919
              },
              {
                  "aa": "V",
                  "bits": 0.00492
              },
              {
                  "aa": "I",
                  "bits": 0.00471
              },
              {
                  "aa": "M",
                  "bits": 0.003
              },
              {
                  "aa": "C",
                  "bits": 0.00279
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 0.49635
              },
              {
                  "aa": "K",
                  "bits": 0.23409
              },
              {
                  "aa": "E",
                  "bits": 0.14701
              },
              {
                  "aa": "D",
                  "bits": 0.06551
              },
              {
                  "aa": "H",
                  "bits": 0.0551
              },
              {
                  "aa": "R",
                  "bits": 0.03479
              },
              {
                  "aa": "S",
                  "bits": 0.032
              },
              {
                  "aa": "I",
                  "bits": 0.032
              },
              {
                  "aa": "A",
                  "bits": 0.0221
              },
              {
                  "aa": "N",
                  "bits": 0.01499
              },
              {
                  "aa": "L",
                  "bits": 0.01017
              },
              {
                  "aa": "T",
                  "bits": 0.00687
              },
              {
                  "aa": "V",
                  "bits": 0.00509
              },
              {
                  "aa": "G",
                  "bits": 0.00331
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 2.78751
              },
              {
                  "aa": "T",
                  "bits": 0.00871
              },
              {
                  "aa": "L",
                  "bits": 0.00747
              },
              {
                  "aa": "S",
                  "bits": 0.00685
              },
              {
                  "aa": "E",
                  "bits": 0.00623
              },
              {
                  "aa": "P",
                  "bits": 0.00375
              },
              {
                  "aa": "K",
                  "bits": 0.00375
              },
              {
                  "aa": "D",
                  "bits": 0.00313
              },
              {
                  "aa": "Q",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "P",
                  "bits": 2.75573
              },
              {
                  "aa": "A",
                  "bits": 0.0111
              },
              {
                  "aa": "Q",
                  "bits": 0.01049
              },
              {
                  "aa": "V",
                  "bits": 0.00803
              },
              {
                  "aa": "H",
                  "bits": 0.00495
              },
              {
                  "aa": "S",
                  "bits": 0.00434
              },
              {
                  "aa": "R",
                  "bits": 0.00434
              },
              {
                  "aa": "L",
                  "bits": 0.00434
              },
              {
                  "aa": "N",
                  "bits": 0.00311
              },
              {
                  "aa": "K",
                  "bits": 0.00311
              },
              {
                  "aa": "T",
                  "bits": 0.00249
              },
              {
                  "aa": "G",
                  "bits": 0.00249
              },
              {
                  "aa": "D",
                  "bits": 0.00249
              }
          ],
          [
              {
                  "aa": "T",
                  "bits": 1.17069
              },
              {
                  "aa": "S",
                  "bits": 0.22106
              },
              {
                  "aa": "P",
                  "bits": 0.06996
              },
              {
                  "aa": "A",
                  "bits": 0.05537
              },
              {
                  "aa": "R",
                  "bits": 0.0449
              },
              {
                  "aa": "V",
                  "bits": 0.04004
              },
              {
                  "aa": "L",
                  "bits": 0.03106
              },
              {
                  "aa": "E",
                  "bits": 0.02246
              },
              {
                  "aa": "N",
                  "bits": 0.01087
              },
              {
                  "aa": "I",
                  "bits": 0.00825
              },
              {
                  "aa": "D",
                  "bits": 0.0075
              },
              {
                  "aa": "H",
                  "bits": 0.00638
              },
              {
                  "aa": "M",
                  "bits": 0.006
              },
              {
                  "aa": "K",
                  "bits": 0.00488
              },
              {
                  "aa": "C",
                  "bits": 0.00488
              },
              {
                  "aa": "Q",
                  "bits": 0.00376
              },
              {
                  "aa": "G",
                  "bits": 0.00376
              },
              {
                  "aa": "F",
                  "bits": 0.00376
              }
          ],
          [
              {
                  "aa": "F",
                  "bits": 2.78083
              },
              {
                  "aa": "S",
                  "bits": 0.01117
              },
              {
                  "aa": "L",
                  "bits": 0.01055
              },
              {
                  "aa": "H",
                  "bits": 0.00684
              },
              {
                  "aa": "A",
                  "bits": 0.00622
              },
              {
                  "aa": "G",
                  "bits": 0.00374
              },
              {
                  "aa": "E",
                  "bits": 0.00313
              },
              {
                  "aa": "C",
                  "bits": 0.00313
              },
              {
                  "aa": "Y",
                  "bits": 0.00251
              },
              {
                  "aa": "V",
                  "bits": 0.00251
              }
          ],
          [
              {
                  "aa": "K",
                  "bits": 0.45928
              },
              {
                  "aa": "S",
                  "bits": 0.2223
              },
              {
                  "aa": "A",
                  "bits": 0.07185
              },
              {
                  "aa": "T",
                  "bits": 0.06835
              },
              {
                  "aa": "R",
                  "bits": 0.05133
              },
              {
                  "aa": "P",
                  "bits": 0.04503
              },
              {
                  "aa": "Q",
                  "bits": 0.0385
              },
              {
                  "aa": "Y",
                  "bits": 0.028
              },
              {
                  "aa": "N",
                  "bits": 0.01681
              },
              {
                  "aa": "L",
                  "bits": 0.01377
              },
              {
                  "aa": "D",
                  "bits": 0.01027
              },
              {
                  "aa": "G",
                  "bits": 0.00934
              },
              {
                  "aa": "V",
                  "bits": 0.00864
              },
              {
                  "aa": "H",
                  "bits": 0.00794
              },
              {
                  "aa": "M",
                  "bits": 0.00421
              },
              {
                  "aa": "F",
                  "bits": 0.00421
              },
              {
                  "aa": "E",
                  "bits": 0.00421
              },
              {
                  "aa": "I",
                  "bits": 0.00374
              }
          ],
          [
              {
                  "aa": "Q",
                  "bits": 0.66611
              },
              {
                  "aa": "E",
                  "bits": 0.2164
              },
              {
                  "aa": "D",
                  "bits": 0.09045
              },
              {
                  "aa": "K",
                  "bits": 0.07769
              },
              {
                  "aa": "H",
                  "bits": 0.04523
              },
              {
                  "aa": "N",
                  "bits": 0.03164
              },
              {
                  "aa": "A",
                  "bits": 0.02831
              },
              {
                  "aa": "S",
                  "bits": 0.02387
              },
              {
                  "aa": "T",
                  "bits": 0.0186
              },
              {
                  "aa": "G",
                  "bits": 0.01832
              },
              {
                  "aa": "V",
                  "bits": 0.01333
              },
              {
                  "aa": "F",
                  "bits": 0.01305
              },
              {
                  "aa": "L",
                  "bits": 0.00612
              },
              {
                  "aa": "M",
                  "bits": 0.00528
              },
              {
                  "aa": "R",
                  "bits": 0.00501
              },
              {
                  "aa": "C",
                  "bits": 0.00473
              },
              {
                  "aa": "Y",
                  "bits": 0.00418
              },
              {
                  "aa": "W",
                  "bits": 0.00307
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.82565
              },
              {
                  "aa": "I",
                  "bits": 0.37477
              },
              {
                  "aa": "V",
                  "bits": 0.04912
              },
              {
                  "aa": "A",
                  "bits": 0.01455
              },
              {
                  "aa": "M",
                  "bits": 0.00904
              },
              {
                  "aa": "T",
                  "bits": 0.00403
              },
              {
                  "aa": "S",
                  "bits": 0.00303
              },
              {
                  "aa": "P",
                  "bits": 0.00303
              },
              {
                  "aa": "K",
                  "bits": 0.00303
              },
              {
                  "aa": "F",
                  "bits": 0.00303
              },
              {
                  "aa": "G",
                  "bits": 0.00203
              },
              {
                  "aa": "C",
                  "bits": 0.00203
              }
          ],
          [
              {
                  "aa": "V",
                  "bits": 1.49153
              },
              {
                  "aa": "S",
                  "bits": 0.22422
              },
              {
                  "aa": "C",
                  "bits": 0.05295
              },
              {
                  "aa": "G",
                  "bits": 0.04779
              },
              {
                  "aa": "T",
                  "bits": 0.0465
              },
              {
                  "aa": "E",
                  "bits": 0.031
              },
              {
                  "aa": "A",
                  "bits": 0.02111
              },
              {
                  "aa": "K",
                  "bits": 0.01853
              },
              {
                  "aa": "L",
                  "bits": 0.01207
              },
              {
                  "aa": "R",
                  "bits": 0.00734
              },
              {
                  "aa": "I",
                  "bits": 0.00691
              },
              {
                  "aa": "P",
                  "bits": 0.00432
              },
              {
                  "aa": "Q",
                  "bits": 0.00389
              },
              {
                  "aa": "D",
                  "bits": 0.00303
              }
          ],
          [
              {
                  "aa": "E",
                  "bits": 1.06026
              },
              {
                  "aa": "Q",
                  "bits": 0.16073
              },
              {
                  "aa": "K",
                  "bits": 0.10891
              },
              {
                  "aa": "S",
                  "bits": 0.08615
              },
              {
                  "aa": "L",
                  "bits": 0.03608
              },
              {
                  "aa": "H",
                  "bits": 0.02838
              },
              {
                  "aa": "V",
                  "bits": 0.02418
              },
              {
                  "aa": "D",
                  "bits": 0.02383
              },
              {
                  "aa": "A",
                  "bits": 0.01507
              },
              {
                  "aa": "T",
                  "bits": 0.01332
              },
              {
                  "aa": "R",
                  "bits": 0.00982
              },
              {
                  "aa": "G",
                  "bits": 0.00982
              },
              {
                  "aa": "C",
                  "bits": 0.00842
              },
              {
                  "aa": "F",
                  "bits": 0.00632
              },
              {
                  "aa": "I",
                  "bits": 0.00597
              },
              {
                  "aa": "N",
                  "bits": 0.00387
              },
              {
                  "aa": "P",
                  "bits": 0.00247
              },
              {
                  "aa": "Y",
                  "bits": 0.00212
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.29851
              },
              {
                  "aa": "L",
                  "bits": 0.09852
              },
              {
                  "aa": "I",
                  "bits": 0.07498
              },
              {
                  "aa": "R",
                  "bits": 0.05668
              },
              {
                  "aa": "E",
                  "bits": 0.04831
              },
              {
                  "aa": "H",
                  "bits": 0.04621
              },
              {
                  "aa": "F",
                  "bits": 0.03
              },
              {
                  "aa": "K",
                  "bits": 0.02669
              },
              {
                  "aa": "A",
                  "bits": 0.02581
              },
              {
                  "aa": "T",
                  "bits": 0.02564
              },
              {
                  "aa": "S",
                  "bits": 0.02215
              },
              {
                  "aa": "M",
                  "bits": 0.01954
              },
              {
                  "aa": "N",
                  "bits": 0.0082
              },
              {
                  "aa": "G",
                  "bits": 0.00751
              },
              {
                  "aa": "Q",
                  "bits": 0.00489
              },
              {
                  "aa": "Y",
                  "bits": 0.00262
              },
              {
                  "aa": "V",
                  "bits": 0.00228
              }
          ],
          [
              {
                  "aa": "L",
                  "bits": 1.35417
              },
              {
                  "aa": "I",
                  "bits": 0.22957
              },
              {
                  "aa": "V",
                  "bits": 0.12553
              },
              {
                  "aa": "M",
                  "bits": 0.05287
              },
              {
                  "aa": "F",
                  "bits": 0.04213
              },
              {
                  "aa": "T",
                  "bits": 0.03222
              },
              {
                  "aa": "H",
                  "bits": 0.03016
              },
              {
                  "aa": "P",
                  "bits": 0.00745
              },
              {
                  "aa": "A",
                  "bits": 0.00332
              },
              {
                  "aa": "S",
                  "bits": 0.00291
              },
              {
                  "aa": "N",
                  "bits": 0.00291
              },
              {
                  "aa": "E",
                  "bits": 0.00291
              },
              {
                  "aa": "Q",
                  "bits": 0.0025
              },
              {
                  "aa": "K",
                  "bits": 0.00208
              },
              {
                  "aa": "C",
                  "bits": 0.00208
              }
          ],
          [
              {
                  "aa": "D",
                  "bits": 0.63246
              },
              {
                  "aa": "G",
                  "bits": 0.3757
              },
              {
                  "aa": "E",
                  "bits": 0.28434
              },
              {
                  "aa": "A",
                  "bits": 0.05836
              },
              {
                  "aa": "Q",
                  "bits": 0.05034
              },
              {
                  "aa": "S",
                  "bits": 0.01733
              },
              {
                  "aa": "N",
                  "bits": 0.01733
              },
              {
                  "aa": "C",
                  "bits": 0.00963
              },
              {
                  "aa": "L",
                  "bits": 0.00482
              },
              {
                  "aa": "R",
                  "bits": 0.00386
              },
              {
                  "aa": "P",
                  "bits": 0.00354
              },
              {
                  "aa": "Y",
                  "bits": 0.0029
              },
              {
                  "aa": "V",
                  "bits": 0.00258
              },
              {
                  "aa": "H",
                  "bits": 0.00258
              }
          ],
          [
              {
                  "aa": "R",
                  "bits": 0.4797
              },
              {
                  "aa": "K",
                  "bits": 0.15358
              },
              {
                  "aa": "D",
                  "bits": 0.14725
              },
              {
                  "aa": "N",
                  "bits": 0.13338
              },
              {
                  "aa": "S",
                  "bits": 0.03749
              },
              {
                  "aa": "Q",
                  "bits": 0.037
              },
              {
                  "aa": "C",
                  "bits": 0.03238
              },
              {
                  "aa": "E",
                  "bits": 0.03165
              },
              {
                  "aa": "L",
                  "bits": 0.01802
              },
              {
                  "aa": "T",
                  "bits": 0.01194
              },
              {
                  "aa": "A",
                  "bits": 0.00877
              },
              {
                  "aa": "G",
                  "bits": 0.00853
              },
              {
                  "aa": "P",
                  "bits": 0.00366
              },
              {
                  "aa": "Y",
                  "bits": 0.00342
              },
              {
                  "aa": "H",
                  "bits": 0.00342
              },
              {
                  "aa": "M",
                  "bits": 0.00293
              },
              {
                  "aa": "V",
                  "bits": 0.0022
              }
          ]
      ]'></ncats-protvista-viewer>
    </div>

    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DemoNcatsProtvistaviewer
