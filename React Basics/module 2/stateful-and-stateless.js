/**
 * The distinction between stateful and stateless components is that 
 * 
 * A stateful component holds states as internal data and its state changes based on the way that the app is built; often as a result of user actions.
 * 
 * A stateless component however, doesn't store states and any changes must be inherited through props.
 *  
 * When deciding if a component should be stateless or stateful, you can refer to the following rules. 
 * Use stateless components when your component doesn't need to maintain its own state in order to work. 
 * Use stateful components when your component does need to maintain its own state in order to work. 
 * 
 * 
 * A common approach for organizing components in React is to have a stateful component as the parent which then sends its states down to several 
 * stateless components that then receive the state and render it on the screen. 
 * The children components are stateless because they don't have their own state and only receive their parent state when passed down by using props.
 */