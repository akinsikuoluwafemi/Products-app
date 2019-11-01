import React from 'react';
// import Header from './Header/Header';
import ReactDOM from 'react-dom';
// import Person from './Person/Person';
import { Component } from 'react';
import './App.css';
import Clock from './Clock';
import MyApp from './MyApp';
import MyInfo from './MyInfo/MyInfo';
import Navbar from './Webpage/Navbar';
import Footer from './Webpage/Footer';
import MainContent from './Webpage/MainContent';
import TodoItem from './Webpage/Todo-item';
import CotactCard from '../src/ContactCard';
import ContactCard from '../src/ContactCard';
import Joke from './Joke';
import JokesData from '../src/JokesData';
import products from './ProductsData';
import Products from './Products';
import todosData from './todosData';
import Purchase from './Purchase';
import Person from './Person/Person';
import Conditional from './Conditional';


// function App() {
//   let switchHandler = () => {
//     console.log('I was clicked');
//   }


//   return (
//     <div className="App">
//       <h1>The boy is good</h1>
//       <p>My name is tola</p>
//       <button onClick={switchHandler}>Click Me</button>
//       <Person name="femi" event="tech-summit"/>
//       <Person name="toju" event="concatenate"/>
//     </div>
//   );
// }



// class App extends Component {
//     constructor(){
//         super(); 
        
//          this.state = {
//         persons: [
//             { name: 'femi', event: 'tech-summit' },
//             { name: 'toju', event: 'concatenate' }

//              ],
//              otherState: 'some other value',
//              showPersons: false
//     }
//         // this.switchHandler = this.switchHandler.bind(this);    
//         // if you use arrow function keyword, you dont need to bind;
// }

//     deletePersonHandler = (personIndex) => {
//         const persons = this.state.persons;
//         persons.splice(personIndex, 1);
//         this.setState({ persons: persons });
//     }

   
  
//      togglePersonsHandler =()=>{
//          const doesShow = this.state.showPersons;  
//          this.setState({ showPersons: !doesShow });
//      }
    
//     nameChangedHandler = (e) => {
//           this.setState({ persons: [
//             { name: e.target.value, event: 'Devc' },
//             { name: 'navas', event: 'Egghead' }

//          ]
//           })
//     }
   
//   render() {
//       const style = {
//           backgroundColor: 'white',
//           font: 'inherit',
//           border: '1px solid blue',
//           padding: '8px',
//           cursor: 'pointer'
//       };

//       let persons = null;

//       if(this.state.showPersons) {
//           persons = (
//               <div>
//                   {this.state.persons.map((person,index) => {
//                       return <Person
//                           name={person.name}
//                           event={person.event}
//                           click={() => this.deletePersonHandler(index)}/>
//                   })}
//             </div>
            
//           );
//       }
    
//     return (
//         <div className={style}>
//             <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
//             {persons}
           
              
            
//       </div>
//     )
//   }
// }

// export default App;
// function App () {
//     const date = new Date();
//     const hours = date.getHours()
//     let timeOfDay;
//     const styles = {
//         color: '#eea',
//         fontFamily: 'lato',
//         // backgroundColor: 'maroon',
//         fontSize: '20px'
//     }

//     if(hours < 12) {
//         timeOfDay = 'morning'
//         styles.color = "#293462"
//     } else if(hours >= 12 && hours < 17){
//         timeOfDay = 'afternoon';
//         styles.color = '#00818a';
//     } else {
//         timeOfDay = 'night';
//         styles.color = "#ec9b3b";
//     }
    

//     return (
//         <div>
//             <h1 style={styles}>Good {timeOfDay} guys!</h1>
//         </div>
//     )
// }

// export default App; 



// class App extends React.Component{
//     render() {
//         return (
//             <div className='App'>
//                 <Navbar />
//                 <MainContent />
//                 <Footer/>
//             </div>
//         )
//     }
// }

// export default App; 


// function App() {
    // const jokeComponent = JokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />) 
    // const productComponent = products.map(product => <Products key={product.id} name={product.name} price={product.price} description={product.description} />)
    // let switchHandler =() =>{
    //     console.log('item Selected');
    // }
    // return (
    //     <div >
    //         {productComponent}
    //         <button onClick={switchHandler}>View Products</button>
    //     </div>
    // ) 
    // return (
    //     <div className="Joke">
    //         <Joke
    //             question= 'Knock Knock, whose there ?'
    //             punchLine= 'Owen, Owen who, Owen the saint, go mathcing in'/>
            
    //         <Joke 
    //             question= 'Why don’t you ever see hippopotamus hiding in trees?'
    //             punchLine= 'Because they’re really good at it'
    //          />
            
    //         <Joke
    //             question= 'How does NASA organize their company parties?'
    //             punchLine= 'They planet.'
    //          />
            
    //         <Joke
    //             question= 'Why can’t you hear a pterodactyl go to the bathroom?'
    //             // punchline: 'Because the “P” is silent.'
    //          />
            
    //         <Joke
    //             question= 'Why does Snoop Dogg carry an umbrella?'
    //             punchLine= 'Fo’ drizzle.'
    //         /> 
    //     </div>
    // )
// }

// export default App;

// function App () {
//     return (
//         <div className="contacts">
//             <ContactCard className="contact-card"
//                 contact={{
//                     name: "Mr. Whiskerson", src:"http://placekitten.com/300/200",
//                     phone:"Phone: (212) 555-1234", email:"Email: mr.whiskaz@catnap.meow"
//                 }}   
//             />

            

//             <ContactCard className="contact-card"
//                 contact={{
//                     name: "Fluffykins", src: "http://placekitten.com/400/200",
//                     phone: "Phone: (212) 555-2345", email:"Email: fluff@me.com"
//                 }}    
//             />

//             <ContactCard className="contact-card"
//                 contact={{
//                     src:"http://placekitten.com/400/300",
//                     name:"Destroyer",
//                     phone:"Phone: (212) 555-3456",
//                     email:"Email: ofworlds@yahoo.com"

//                 }}
//             />
            

//             <ContactCard className="contact-card"
//                 contact ={{
//                     src:"http://placekitten.com/200/100",
//                     name:"Felix",
//                     phone:"Phone: (212) 555-4567",
//                     email:"Email: thecat@hotmail.com"

//                 }}
//             />
//         </div>
//     )
// }

// export default App;
// class App extends React.Component{
//     constructor() {
//         super();
//         this.state = {
//             isLoading: true
//         }
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({
//                 isLoading: false
//             })
//         }, 1500)
//     }
    

//     render() {
//         console.log(this.state)
        
//         return (
//             <div>
//                 {this.state.isLoading ? <h1>Loading...</h1> : 
//                     <Conditional/>}
//             </div>
           
//         )
//     }
// }

// export default App;

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             unreadMessages: [
//                 'Call your mom!',
//                 'New spam email available.All links are definately safe to click.'
//             ]
//         }
//     }

//     render() {
//         const result = false && 'hELLO'
//         console.log(result)
//         return (
//             <div>
//                 {
//                 this.state.unreadMessages.length > 0 && 
//                     <h1>You have {this.state.unreadMessages.length} unread messages !</h1>
//                     }
//             </div>
//         )
//     }
// }

// export default App;

// function App () {
//     let UserStatus = 'green';
    
//     let login = () => {
//         console.log('You are logged in');
//         UserStatus = 'green'
       
//     }

//     let logout = () => {
//         console.log('You are logged out');
//         UserStatus = 'red'

//     }
//     return (
//         <div>
//             {UserStatus === 'green' ? <h1>You are currently logged in</h1>: <h1>You are currently logged out</h1>}
//             <button onClick={login}>Log in</button>
//             <button onClick={logout}>Log Out</button>
//         </div>
//     )
// }

// export default App;

// class App extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             loggedin: 'in'
            
            
//         }
//         this.logOut = this.logOut.bind(this);
//     }
//       logOut () {
//         this.setState(prevState => {
//             if(this.state.loggedin === 'in') {
//                 return {
//                     loggedin: prevState.loggedin = 'out'
//                 }
//             }
//             return {
//                 loggedin : prevState.loggedin = 'in'
//             }

//         })
//       }
    
//     render() {
        
       
//         return (
//             <div>
//                 <h1>You are currently logged {this.state.loggedin}</h1>
//                 <button onClick={this.logOut}>Click to log {this.state.loggedin}.</button>
//             </div>
//         )
//     }
// }

// export default App;

// class App extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             isLoggedIn: false
//         }
//         this.handleClick = this.handleClick.bind(this)
//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 isLoggedIn: !prevState.isLoggedIn
//             }
//         })
//     }


//     render () {
//         let buttontText = this.state.isLoggedIn ? 'LOG OUT' : 'LOG IN'
//         let displayText = this.state.isLoggedIn ? 'Logged in' : 'logged out'

//         return (
//             <div>
//                 <button onClick={this.handleClick}>{buttontText}</button>
//                 <h1>{displayText}</h1>
//             </div>
//         )
//     }
// }

// export default App;




// lifecycle
// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {}
//     }

//     static getDerivedStateFromProps(props,state) {
//         // return the new updated state based upon the state
//     }

//     getSnapshotBeforeUpdate() {
//         // create a backup of the current way things are

//     }
//     // deprecated
//     // componentWillMount() {
        
//     // }

//     componentDidMount () {
        
//     }

//     // deprecated
//     // componentWillReceiveProps (nextProps) {
//     //     // componentWillReceiveProps is fired any time a props
//     //     // is passed to a child component 
//     //     if(nextProps.whatever !== this.props.whatever){
//     //         // do something
//     //     }
//     // }

//     shouldComponentUpdate (nextProps,nextState) {
//         // return true if you want it to update
//         // return false if you dont wnt it to update
        
//     }

//     // deprecated
//     // componentWillUnmount () {
//     //     // death of a component
//     //     // remove the event listenner
//     //     // tear dow and click up your code before your component dissapear
//     // }

//     render () {
//         return (
//             <div>
//                 <h1>Your code goes here</h1>
//             </div>
//         )
//     }
// }

// export default App;


// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             loading: false,
//             character: {}
//         }
//     }

//     componentDidMount () {
//         this.setState({loading: true})
//         fetch('https://swapi.co/api/people/1')
//             .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 loading: false,
//                 character: data
//             })
            
//         })
//     }
    
//     render() {
//         return (
//             <div>
//                 {this.state.loading ? <h1>Loading...</h1> : <h1>{this.state.character.name}</h1>}
                
//             </div>
//         )
        
//     }
// }

// export default App;

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             users : {}
//         }
//     }
//     componentDidMount () {
//         fetch('https://swapi.co/api/people/1')
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 users : data
//             })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.users.name}</h1>
//             </div>
//         )
//     }
// }
// export default App;


// class App extends React.Component {
//     constructor(){
//         super();
//         this.state ={
//             firstName: '',
//             lastName: '',
//             isFriendly : true
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange (e) {
//         const {name,value, type,checked} = e.target;
//         type === 'checkbox' ? this.setState({ [ name ]: checked}) : this.setState({ [ name ]: value})
//     }

    
//     render() {
//         return(
//             <form>
//                 <input
//                     name="firstName"
//                     type="text" 
//                     value ={this.state.firstName} 
//                     placeholder="first name" 
//                     onChange={this.handleChange}
//                 />
//                 <br/>
//                 <input
//                     name="lastName" 
//                     type="text" 
//                     value={this.state.lastName} 
//                     placeholder="last name" 
//                     onChange={this.handleChange}
//                  />




//                 <h1>{this.state.firstName} {this.state.lastName}</h1>
//             <textarea
//                  value={'some default value'} 
//                  onChange ={this.handleChange}
//              />

//             <br/>
//             <label>
//                 <input
//                     type="checkbox"
//                     name="isFriendly"
//                     checked={this.state.isFriendly}
//                     onChange ={this.handleChange}
//                 /> Is Friendly ?
//             </label>
                

//             </form>
//         )
//     }
// }

// export default App;


// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             users : []
//         }
//     }
//     componentDidMount () {
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => {
//             this.setState({
//                 users: data
//             })
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.users.name}</h1>
//             </div>
//         )
//     }
// }
// export default App;









// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             todos: todosData
//         }
//         this.handleChange = this.handleChange.bind(this)
//     }
    
//     handleChange (id){
//         // Update state so that the item with the given id flips `completed` from false to true (or vise versa)
//         // Remember not to modify prevState directly, but instead to return a new version of state with the change you want included in that update. (Think how you might use the `.map` method to do this)
//         this.setState(prevState => {
//             const updateTodos = prevState.todos.map(todo => {
//                 console.log(todo.completed);
                
//                 if(todo.id === id){
//                     todo.completed = !todo.completed

//                 }
//                 return todo;
//             })
//             return {
//                 todos: updateTodos
//             }
//         })
    
//     }
    
//     render() {
//         const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        
//         return (
//             <div className="todo-list">
//                 {todoItems}
//             </div>
//         )    
//     }
// }

// export default App

// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             count: 0
//         }
//         this.handleClick = this.handleClick.bind(this);
//         this.doubleNum = this.doubleNum.bind(this);
//     }
//     doubleNum () {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count * 2
//             }
//         })
//         console.log(this.state.count)

//     }

//     handleClick() {
//         this.setState(prevState => {
//             return {
//                 count: prevState.count + 1
//             }
//         })
//         // this.setState({ count: this.state.count + 1 })
//         console.log(this.state.count)

//     }
//     render() {
//         return (
//             <div style={{textAlign:"center"}}>
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.handleClick}>Change</button>
//                 <button onClick={this.doubleNum}>Double</button>

//             </div>
//         )
//     }
// }

// export default App;


// class App extends React.Component{
//     constructor () {
//         super();
//         this.state = {
//             answer : "yes"
//         }
//     }
//     render() {
//         // console.log(this.state = 'yes') 
//         // console.log(this.state)
//         return(
//             <div>
//                 <h1>Is state important to know ? answer:{this.state.answer}</h1>
//             </div>   
//         )
//     }
// }

// export default App;




// class App extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'femi',
//             age: 24
//         }
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h3>{this.state.age} years old</h3>
//             </div>
//         )
//     }
// }
// export default App




// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.


// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             isLoggedIn: false
//         }
//     }
//     render() {
//         let word;
//         if(this.state.isLoggedIn){ 
//             word = 'in';
//         } else {
//             word = 'out';   
//         }
//         return (
//             <div>
//                 <h1>You are currently logged ({word})</h1>
//             </div>
//         )
//     }
// }


// export default App;


// class App extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Header username="femi"/>
//                 <Greeting />
//             </div>
//         )
//     }
// }

// export default App;



// class Header extends React.Component {
//     render(){
//         return (
//             <header>
//                 <p>Welcome,{this.props.username}!</p>
//             </header>
//         )
//     }
// }

// export default Header;



// class Greeting extends React.Component {
//     render(){
//         const date = new Date()
//         const hours = date.getHours()
//         let timeOfDay;

//         if (hours < 12) {
//             timeOfDay = "morning"
//         } else if (hours >= 12 && hours < 17) {
//             timeOfDay = "afternoon"
//         } else {
//             timeOfDay = "night"
//         }
//         return (
//             <h1>Good {timeOfDay} to you, sir or madam!</h1>
//         )
//     }
// }

// export default Greeting;



// class App extends React.Component {
//     constructor () {
//         super();
//         this.state = {
//             count: 0
//         } 
//         // set the changeCount function to its binded self, so you can maintain the same scope of the this, which is the App class
//         this.changeCount = this.changeCount.bind(this);
//     }

//       changeCount() {
//           this.setState(prevState => {
//               console.log(prevState)
//               return { count: prevState.count + 1 };
//           });
//         }
        
//     render(){
//         return (
//             <div className="App-header">
//                 <h1>{this.state.count}</h1>
//                 <button onClick={this.changeCount}>Change</button>
//                 <Purchase count={this.state.count}/>
//             </div>
//         )
//     }
// }

// export default App;


// an example of 2 way binding, you are setting the state to the value that you are inputing
// class App extends React.Component{
//     constructor(){
//         super();
//         this.state = {
//             value: ''
//         }
//         this.changeName = this.changeName.bind(this);
//     }

//     changeName(e) {
//         this.setState({ value: e.target.value })
//         console.log(this.state);
//     }
//     render(){
//         return (
//             <div>
//                 <input type="text" value={this.state.value} onChange={this.changeName}/>
//             </div>
//         )
//     }
// }

// export default App;


// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             great: true
//         }
//     }
//     render(){
//         reurn(
//             <div>
//                 { this.great ?
//                     <div>
//                         <h1>I am a boy</h1>

//                     </div> :null
//                 }
                
//             </div>
//         )
//     }
// }

// export default App;





// function App () {
//     let styles = {
//         fontFamily: 'cursive',
//         fontSize: '1.6rem',
//         textAlign: 'center',
//         border: '1px solid eee'
//     }

//     return (
//         <div>
//             <form style={styles} method="POST">
//                 <label style={{ paddingRight:'1rem'}}for="name">Name:</label>
//                 <input id="password" type="text" placeholder="Your Name" />
//                 <br />
                
//                 <label style={{ paddingRight: '1rem' }}for="password">Password:</label>
//                 <input id="password" type="text" placeholder="Your Password" />
//                 <br />

//                 <label style={{ paddingRight: '1rem' }} for="confirm">Password:</label>
//                 <input id="confirm" type="text" placeholder="Confirm" />
//                 <br />

//                 <label style={{ paddingRight: '1rem' }} for="phone">Phone:</label>
//                 <input id="phone" type="text" placeholder="Phone Number" />
//                 <br />
                
//                 <input type="submit"/>

//             </form>
//         </div>
//     )
// }

// export default App;





// import React from 'react';
// import { Component } from 'react';


// if all you are going to be doing is just to return something to the UI, then you can 
// stick with functional components 
// function App () {
    
//     return (
//         <div>
//             <h1>Femi is very empathetic</h1>
//         </div>
//     )
// }
// export default App;


// when you want to handle state changes(if you are going to alter the behaviour of the ui),
// its advicable to use 
// class Component
// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             name: 'Femi'
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.name} is very empathetic</h1>
//             </div>
//         )
//     }
// }

// export default App;
