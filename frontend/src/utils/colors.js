const stringOfColors = '#550943 #1D70C9 #C09C15 #EB0ED7 #199029 #B16E83 #84CE4B #999D2D #E82E54 #EEC99B #22C82C #6FABEC #8FB388 #25D114 #5409DC #B7215B #243545 #677047 #8DBA6A #163341 #75D0D1 #78C945 #AAA8E4 #3C22B9 #FA5EFB #364494 #50300C #F7CA93 #56B957 #E3E1EF #81797F #46AF00 #41DB3E #960D77 #76E613 #8A6C12 #4B5775 #D4C402 #357D06 #3E210F #EDC5C6 #F4B9A8 #39B3AE #FBF368 #56B823 #9380E2 #80CB4D #44988A #79ACB3 #7D1131 #F903B9 #2FA846 #B0812D #6950B7 #634E62 #0D7E0C #DDA0FB #23BC55 #C1A82C #3C7A0D #F4BBA2 #7C01F0 #AD260F #DCE2FE #B5167A #94DF49 #276B2D #A69E70 #35D646 #646CFE #197406 #207494 #15E64C #715E57 #FB01BC #FC6DA6 #D92DC8 #E1140E #DE4D1D #32462A #A949B9 #10C36E #F794A0 #E57EF8 #FCB50D #D5A99D #B23868 #9F893F #36365F #F74027 #76E29F #21C615 #9DEB3C #4E04D7 #05F3AD #CEE45E #0108A2 #7F7E0E #C10ABF #79D88C #0E0054 #796E9A #58DAED #F738BC #606333 #909995 #916650 #01F637 #83F664 #905FBB #542313 #AE4004 #828A84 #12750A #6F09CF #E51E1A #D93070 #29E771 #3C0C09 #1CF477 #36C77A #32A214 #A9B023 #2F0D0E #117EEF #4591EC #669DD7 #49B52F #4B2B3B #A07233 #FA6694 #0DDBAD #8F3C65 #BB3C6D #F5AA22 #611869 #80F67A #1BB457 #9EEC11 #4AE677'

const COLORS = stringOfColors.split(' ')

export const randomColor = () =>
    COLORS[parseInt(Math.random() * COLORS.length)]

export const colors = COLORS