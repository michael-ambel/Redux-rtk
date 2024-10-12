import store from "./store/configStore";
import { addNewTask, loadTask, completUpdater, taskDeleter } from "./store/tasks";




store.dispatch(loadTask())
store.dispatch(addNewTask({task:'Custom API with RT'}))
store.dispatch(completUpdater({id:5 , completed: true}))
store.dispatch(taskDeleter({id: 3}))









// async by createAsyncThunk

// store.dispatch(fetchTasks())


// async by normal function metchod
// const getResponse = async () => {

//     const res = await axios.get('http://localhost:3000/api/tasks')
//     console.log(res);

//     store.dispatch(getTask({tasks: res.data}))
// }

// getResponse()

// const unsubscribe = store.subscribe(()=>{
//     console.log('Update: ', store.getState());
// })

// //task dispach
// store.dispatch(addTask({task: 'first task'}))
// store.dispatch(addTask({task: 'second task'}))
// store.dispatch(taskCompleted({id: 1}))
// store.dispatch(removeTask({id: 2}))

// //employee dispach
// store.dispatch(addEmp({name: 'Nino'}))



// const book = {
//     author: 'Robert kiyosaki',
//     book: {
//         name: 'Rich Dad Poor Dad',
//         price: '$8',
//         rating: 4.7
//     },    
// }

// const newBook = {...book, book:{...book.book, price:'$10', rating: 4.8}}
// console.log(book);
// console.log(newBook);

// const arrayOfBooks = ['Book1', 'Book2', 'Book3']
// const newArrayOfBooks = arrayOfBooks.map(b=> b==='Book2'? 'Book4': b)
// console.log(arrayOfBooks);
// console.log(newArrayOfBooks);


