var interviewTcs = function (gradeScore, hscScore, sscScore, candidateName) {
  if (gradeScore >= 70 || hscScore >= 80 || sscScore >= 90) {
    console.log(`Congrates ${candidateName} You are eligible for interview`);
  } else {
    console.log(`Unfortunately ${candidateName} You are not eligible for interview`);
  }
};
interviewTcs(80, 86, 90, "Vaibhav");
interviewTcs(70, 65, 55, "Abhi");
interviewTcs(60, 79, 88, "Jay");
