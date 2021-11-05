import {casestudy} from "./CaseStudyData"



export function getCasestudy () {
     const casestudyList = casestudy;
     return  casestudyList;
}


export function filtercasestudy(casestudyType){
    let filteredCaseStudy = getCasestudy().filter(type => type.type === casestudyType );
    return filteredCaseStudy;
}