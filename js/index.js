const form=document.getElementById("information_form");
const image_input=document.getElementById("photo-selector");
let uploaded_image= " ";



// adding an event listener to preview the image that is uplaoded 

image_input.addEventListener("change", (e)=> {
     var file  = e.target.files[0];
     var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.addEventListener("load",function (e) {
      uploaded_image=reader.result;
      document.getElementById("display_image").style.display="block"
     document.getElementById("display_image").style.backgroundImage='url('+ uploaded_image +')';

    });
 });

// function that is to be executed when the submit button is clicked

function display(e){

document.getElementById("generated_details").style.display="flex";

let student= document.getElementById("information_form").elements.namedItem("NameOfStudent").value;
document.getElementById("Student_name").innerText=student;

let college= document.getElementById("information_form").elements.namedItem("NameOfCollege").value;
document.getElementById("college_name").innerText=college;

let location= document.getElementById("information_form").elements.namedItem("LocationOfStudent").value;
document.getElementById("location_name").innerText=location;

     
const file=image_input.files[0];
const preview=document.getElementById("image");
const reader=new FileReader();
reader.readAsDataURL(file);
reader.addEventListener("load",()=>{
    preview.src=reader.result;
});
e.preventDefault();
}
//Adding event listener to display the image on the genrated id card





form.addEventListener("submit",display);




