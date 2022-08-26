export function getTasks(req,res) {
  res.send('TASKS');
}

export function createTask(req,res) {
  const newTask = req.body;
  res.status(201).send('Task Added');
}

export function updateTask(req,res) {
  const taskUpdate = req.body;
  const { taskId } = rep.params;
  res.status(201).send('Task Updated');
}

export function deleteTask(req,res) {  
  const { taskId } = rep.params;
  res.status(201).send('Task Deleted');
}