const submit = document.getElementById("submit");

submit.addEventListener("click", () => {
  const SuperintendentSignature = document.getElementById(
    "SuperintendentSignature"
  ).value;
  const ExtraSheetsNo = document.getElementById("ExtraSheetsNo").value;
  const AnswerBookNo = document.getElementById("AnswerBookNo").value;
  const Department = document.getElementById("Department").value;
  const SemesterYear = document.getElementById("SemesterYear").value;
  const RegdNo = document.getElementById("RegdNo").value;
  const Name = document.getElementById("Name").value;
  const Subject = document.getElementById("Subject").value;
  const Date = document.getElementById("Date").value;
  const Mark1 = document.getElementById("Mark1").value;
  const Mark2 = document.getElementById("Mark2").value;
  const Mark3 = document.getElementById("Mark3").value;
  const Mark4 = document.getElementById("Mark4").value;
  const Mark5 = document.getElementById("Mark5").value;
  const Mark6 = document.getElementById("Mark6").value;
  const Mark7 = document.getElementById("Mark7").value;
  const Mark8 = document.getElementById("Mark8").value;
  const Mark9 = document.getElementById("Mark9").value;
  const Mark10 = document.getElementById("Mark10").value;
  const CourseTeacher = document.getElementById("CourseTeacher").value;
  const NeutralTeacher = document.getElementById("NeutralTeacher").value;

  const FormData = {
    SuperintendentSignature,
    CourseTeacher,
    NeutralTeacher,
    ExtraSheetsNo,
    AnswerBookNo,
    Department,
    SemesterYear,
    RegdNo,
    Name,
    Subject,
    Date,
    Marks: {
      Mark1,
      Mark2,
      Mark3,
      Mark4,
      Mark5,
      Mark6,
      Mark7,
      Mark8,
      Mark9,
      Mark10,
    },
  };

  // Convert the object to a JSON string
  const formDataJSON = JSON.stringify(FormData);

  // Store the JSON string in local storage
  localStorage.setItem("formData", formDataJSON);
});
