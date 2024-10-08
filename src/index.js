import store from "./store/configStore";
import { addActions, removeActions, completedAction, fetchTodo } from "./store/tasks";

const unsubscribe = store.subscribe(()=>{
    console.log('Update: ', store.getState());
})
store.dispatch(addActions('first task'))

store.dispatch(completedAction(1))

store.dispatch(removeActions(1))

store.dispatch(fetchTodo())




 




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