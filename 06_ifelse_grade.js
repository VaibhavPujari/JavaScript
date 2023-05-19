
function voteEligiblity(age){
    if(age>18 && age<120){
        console.log("You are Elogible for Voting ",age);
    }
    else if(age == 0 || age > 120 || age == undefined || age == null){
        console.log("Invalid data",age);
    }
    else if(age < 18 && age >=0 ){
        console.log("not eligible for vote",age);
    }
}

voteEligiblity(45);
voteEligiblity(17);
voteEligiblity(8);
voteEligiblity(20);
voteEligiblity(-10);
voteEligiblity(200);
voteEligiblity(0);
voteEligiblity(undefined);
voteEligiblity(null);