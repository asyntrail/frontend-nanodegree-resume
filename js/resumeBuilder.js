/*
This is empty on purpose! Your code to build the resume will go here.
 */

//  var name="Vasiliy";
//  var formattedName = HTMLheaderName.replace("%data%", name);
//  var role = "Web Developer";
//  var formattedRole = HTMLheaderRole.replace("%data%", role);
//  $("#header").prepend(formattedRole);
//  $("#header").prepend(formattedName);

//  var s_prim = 'foo';
// var s_obj = new String(s_prim);

// console.log(typeof s_prim); // Logs "string"
// console.log(typeof s_obj);  // Logs "object"

var skills=["awesome ","programing "];
// $("#main").append(skills);
// $("#main").append(skills);

// var skills =
// ["awesome","programing","aprograming","bprograming"];
// // $("#main").append(skills);
// $("#main").append(skills.lenght);

var bio = {
    "name" : "Vasiliy",
    "age" : 32,
    "skills" : skills
};
// $("#main").append(bio.name);
bio["city"]="Mountain View"
$("#main").append(bio["city"]);