//Завдання 1
function delayedLog(text, milliseconds) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(text);
        resolve();
      }, milliseconds);
    });
  }
  
  delayedLog("Привіт, світ!", 2000); 

//Завдання 2
//Функція для отримання об'єкта todo
function fetchTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching todo:', error);
        throw error;
      });
  }
  
  // Функція для отримання об'єкта `user`
  function fetchUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        throw error;
      });
  }
  
  // Використання Promise.all
  Promise.all([fetchTodo(), fetchUser()])
    .then(results => {
      const [todo, user] = results;
      console.log('Promise.all results:');
      console.log('Todo:', todo);
      console.log('User:', user);
    })
    .catch(error => {
      console.error('Error with Promise.all:', error);
    });
  
  // Використання Promise.race
  Promise.race([fetchTodo(), fetchUser()])
    .then(result => {
      console.log('Promise.race result:', result);
    })
    .catch(error => {
      console.error('Error with Promise.race:', error);
    });

    //Завдання 3
    //todo
    async function fetchTodo() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return await response.json();
        } catch (error) {
          console.error('Error fetching todo:', error);
          throw error;
        }
      }
      //user
      async function fetchUser() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return await response.json();
        } catch (error) {
          console.error('Error fetching user:', error);
          throw error;
        }
      }
      //Promise.all та Promise.race з async/await
      async function fetchAll() {
        try {
          const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
          console.log('Promise.all results:');
          console.log('Todo:', todo);
          console.log('User:', user);
        } catch (error) {
          console.error('Error with Promise.all:', error);
        }
      }
      
      async function fetchRace() {
        try {
          const result = await Promise.race([fetchTodo(), fetchUser()]);
          console.log('Promise.race result:', result);
        } catch (error) {
          console.error('Error with Promise.race:', error);
        }
      }
      
      fetchAll();
      fetchRace();