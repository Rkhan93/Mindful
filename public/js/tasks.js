$(document).ready(() => {
    // Getting references to our form and inputs
    const taskForm = $("form.task");
    const taskName = $("input#taskName");
    const taskOwner = $("input#taskOwner");
    const taskID = $("input#taskID"); 

    // When the form is submitted, we trim data values
    taskForm.on("submit", event => {
      event.preventDefault();
      const taskData = {
        taskName: taskName.val().trim(),
        taskOwner: taskOwner.val().trim(),
        taskID: taskID.val().trim()
      };
  
      if (!taskData.taskName || !taskData.taskOwner || !taskData.taskID) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      createTask(taskData.taskName, taskData.taskOwner, taskData.taskID);
      taskName.val("");
      taskOwner.val("");
      taskID.val("");
    });
  
    // createProject does a post to our "api/projects" route and if successful, redirects us the the projects page
    function createTask(taskName, taskOwner, taskID) {
      $.post("/api/tasks", {
        taskName: taskName,
        taskOwner: taskOwner,
        taskID: taskID
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
  