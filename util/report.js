const form = document.getElementById("data_form");
const inputs = document.querySelectorAll("input");
const selectElements = document.querySelectorAll("select_els");
// const selectElContainer_2 = document.getElementById("sub_1_8");
// const hideContainer_2 = document.getElementById("hide_two_container")
// const hideContainer_3 = document.getElementById("unhide_two_container")

// selectElContainer_2.addEventListener("input",function(){
//     valueOne = $("#sub_1_8").val()
//     if($("#yes_two").val() === valueOne){
//       hideContainer_2.style.display = "block";
//       hideContainer_3.style.display = "none"
//     }else{
//       hideContainer_3.style.display = "block";
//       hideContainer_2.style.display = "none";
//     }
//     },false);

form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    const project = "KONYAGI";
    const formData_one = new FormData(form);
    nameEl = $("#ba_name").val();
    PhoneEl = $("#ba_phone").val();
    locationsEl = $("#ba_region").val();


    const sub_1_1 = formData_one.get("sub_1_1");
    const sub_1_2 = formData_one.get("sub_1_2")
    const sub_1_3 = formData_one.get("sub_1_3");
    const sub_1_4 = formData_one.get("sub_1_4");
    const sub_1_6 = formData_one.get("sub_1_6");

    if(sub_1_1 === "" || sub_1_2 === "" || sub_1_3 === "" || sub_1_4 === "" || sub_1_6 === "" ){
        appNotifier("Please fill in all the required fields!")
    }else{

        //  appending to the formData object created above
    formData_one.append("ba_name", nameEl);
    formData_one.append("ba_phone", PhoneEl);
    formData_one.append("ba_region", locationsEl);
    formData_one.append("project", project);

   console.log(formData_one);


    setTimeout(() => {
      fetch("https://iguru.co.ke/konyagi/scripts/BM.php", {
      method: "POST",
      body: formData_one,
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {

          workingNotifier(" Details Submitted Successfully!");
          shouldProceed = false;
        } else {
        }
      })
      .catch((err) => {
        if (err.message === "Failed to fetch") {
          appNotifier("Network error, Please try again!");
          shouldProceed = false;

        }else{
          appNotifier("Operation has not been completed!")
        }
      });
    }, 0)
    inputs.forEach((input) => {
      input.value = "";
    });
     selectElements.forEach((selectItems) => {
      selectItems.value = "";
     })

    }



  },
  false
);



function validationForm(input_test) {
  var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  return re.test(input_test);
}




const workingNotifier = (message) => {
  new swal({
    title: message,
    text: "",
    icon: "success",
  }).then((result) => {
    if(result.isConfirmed){
      location.reload();
    }
  });
};

function appNotifier(message) {
  new swal({
    title: message,
    text: "",
    icon: "warning",
  });
}
