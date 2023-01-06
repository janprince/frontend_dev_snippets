/**
 * Keeping track of state across components can become quite a task and this is where React's hooks can help. One key benefit of hooks is that they solve the problem of unnecessary code reuse across components.
 * 
 * Hooks are functions that were introduced in React version 16.8. They let you hook into React state and lifecycle features from components.
 * Specifically, you'll examine an instance of the useState hook as it's the most commonly used one. This hook is used to manage the state within a component and keep track of it and it's built directly into React.
 */

function restaurant() {
    const [showMenu, setShowMenu] = useState(false);  // array destructuring 👇

    /**
     * When you declare a state variable using the useState, it returns a pair which is an array with two items. (the first being a value and the second being a function)
     * Expansion below
    
    var menuState = useState(false);
    var showMenu = menuState[0]
    var setShowMenu = menuState[1]
    
    */
}