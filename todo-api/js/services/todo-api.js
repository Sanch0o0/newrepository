const createTodo = async (todo) => {
  return apiRequest('/todos/create', 'POST', todo);
};

const updateTodo = async (id, todoUpdateBody) => {
  return apiRequest(`/todos/${id}`, 'PUT', todoUpdateBody);
};

const deleteTodo = async (id) => {
  return apiRequest(`/todos/${id}`, 'DELETE');
};

const getTodos = async (id) => {
  return apiRequest(`/todos`, 'GET');
};
