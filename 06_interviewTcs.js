

var tcsInterview = function eligiblity(gradScroe,hscScore,sscScore,candidateName){

        if (gradScroe>=70 || hscScore>=80 || sscScore>90) {
            console.log("You Are Eligible for  TCS Interview",candidateName);
        } else {
            console.log("Sorry You Are Not Eligible for TCS Interview ",candidateName);
        }
}
tcsInterview(80,86,90,"vaibhav");
tcsInterview(70,65,55,"haidar");
tcsInterview(60,79,90,"Gavaa");
