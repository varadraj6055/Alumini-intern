// Sample alumni data
const alumniData = [
  {
    id: 1,
    name: "John Doe",
    graduationYear: 2010,
    occupation: "Software Engineer",
  },
  {
    id: 2,
    name: "Jane Smith",
    graduationYear: 2012,
    occupation: "Marketing Specialist",
  },
  {
    id: 3,
    name: "Bob Johnson",
    graduationYear: 2015,
    occupation: "Data Analyst",
  },
];

// Function to display alumni list
function displayAlumniList() {
  const alumniListContainer = document.getElementById("alumni-list");

  // Clear previous content
  alumniListContainer.innerHTML = "";

  // Create a list element for each alumni
  alumniData.forEach((alumnus) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${alumnus.name} - Class of ${alumnus.graduationYear} - ${alumnus.occupation}`;
    alumniListContainer.appendChild(listItem);
  });
}

// Function to add a new alumni
function addAlumni() {
  const name = prompt("Enter the name of the new alumnus:");
  const graduationYear = prompt("Enter the graduation year:");
  const occupation = prompt("Enter the occupation:");

  const newAlumnus = {
    id: alumniData.length + 1,
    name,
    graduationYear,
    occupation,
  };

  // Add the new alumnus to the data array
  alumniData.push(newAlumnus);

  // Display the updated alumni list
  displayAlumniList();
}

// Initial display
displayAlumniList();
