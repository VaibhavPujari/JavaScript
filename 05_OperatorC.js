function maleMarrigeEligibility(gender,age,boyname){
   var result= gender == 'Male' && age >= 21 ? 'Hey '+ boyname +' you are eligible for marriage' : "Not Eligible for Marriige";
        console.log(result);
    }
    maleMarrigeEligibility("Male",25,"Billgates");
    maleMarrigeEligibility("Male",17,"stew Jobs");

    console.log("----------------------------------------------------------------");

    function femaleMarrigeEligibility(gender,age,girlname){
        var result= gender == 'female' && age > 18 ? 'Hey '+ girlname +' you are eligible for marriage' : "Not Eligible for Marriige";
             console.log(result);
         }
         femaleMarrigeEligibility("female",16,"Jenifer");
         femaleMarrigeEligibility("female",27,"Malinda Gates");