let students = [];
let modal = new bootstrap.Modal(document.getElementById("studentModal"));

function openAddModal() {
  document.getElementById("modalTitle").innerText = "Add Student";
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("course").value = "";
  document.getElementById("editIndex").value = "";
  modal.show();
}

function saveStudent() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let course = document.getElementById("course").value;
  let editIndex = document.getElementById("editIndex").value;

  if (name === "" || age === "" || course === "") {
    alert("Please fill all fields!");
    return;
  }

  let student = { name, age, course };

  if (editIndex === "") {
    students.push(student);   // CREATE
  } else {
    students[editIndex] = student;  // UPDATE
  }

  modal.hide();
  displayStudents();
}

function displayStudents() {
  let table = document.getElementById("studentTable");
  table.innerHTML = "";

  students.forEach((s, index) => {
    table.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.course}</td>
        <td>
          <button class="btn btn-warning btn-sm me-1" onclick="editStudent(${index})">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteStudent(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

function editStudent(index) {
  document.getElementById("modalTitle").innerText = "Edit Student";
  document.getElementById("name").value = students[index].name;
  document.getElementById("age").value = students[index].age;
  document.getElementById("course").value = students[index].course;
  document.getElementById("editIndex").value = index;

  modal.show();
}

function deleteStudent(index) {
  if (confirm("Are you sure you want to delete this student?")) {
    students.splice(index, 1);  // DELETE
    displayStudents();
  }
}
