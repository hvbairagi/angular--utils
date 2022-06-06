var vCardsJS = require("vcards-js");

//create a new vCard
var vCard = vCardsJS();

//set properties
vCard.firstName = "Harsh";
vCard.middleName = "Vardhan";
vCard.lastName = "Bairagi";
vCard.organization = "Appsierra";
vCard.photo.attachFromUrl(
  "https://avatars2.githubusercontent.com/u/5659221?v=3&s=460",
  "JPEG"
);
vCard.workPhone = "7896132528";
vCard.birthday = new Date(1998, 6, 11);
vCard.title = "Software Developer";
vCard.url = "https://github.com/enesser";
vCard.note = "Notes on Harsh";
vCard.newInfo = "new Info";

//save to file
vCard.saveToFile(
  `../files/${vCard.firstName}-${vCard.middleName}-${vCard.lastName}.vcf`
);

//get as formatted string
console.log(vCard.getFormattedString());
