var student={Name:"Riya",Age:12,Grade:7,Hobbies:"drawing",fav_sport:"cricket"};
var color=["white","black","red","green","blue"]
document.write("Student name is :" +student.Name,"<br>","Student favorite sport is :" +student.fav_sport
);
document.write("Before Popping the colors are:" + color.join("^"),"<br>"
);
document.write("My favorite color is:" + color[3],("<br>")
);
color.pop()
document.write("After Popping the colors are:" +color.join("*")
);