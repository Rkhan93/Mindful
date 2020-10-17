$(document).ready(() => {
    // Getting references to our form and inputs
    const projectForm = $("form.project");
    const projectName = $("input#projectName");
    const projectDescription = $("input#ProjectDescription"); 

    // When the form is submitted, we trim data values
    projectForm.on("submit", event => {
      event.preventDefault();
      const projectData = {
        projectName: projectName.val().trim(),
        projectDescription: projectDescription.val().trim()
      };
  
      if (!projectData.projectName || !projectData.projectDescription) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      createProject(projectData.projectName, projectData.projectDescription);
      projectName.val("");
      projectDescription.val("");
    });
  
    // createProject does a post to our "api/projects" route and if successful, redirects us the the projects page
    function createProject(projectName, projectDescription) {
      $.post("/api/projects", {
        projectName: projectName,
        projectDescription: projectDescription
      })
        .then(() => {
          window.location.replace("/projects");
          // If there's an error, log the error
        })
        .catch(err => {
          console.log(err);
        });
    }
  });
  