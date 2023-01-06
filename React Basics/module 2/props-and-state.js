/**
 * In React, data flow is a one-way street. Sometimes it's said that the data flow is unidirectional. 
 * Put differently, the data in React flows from a parent component to a child component. The data flow starts at the root and can 
 * flow to multiple levels of nesting, from the root component (parent component) to the child component, then the grandchild component, 
 * and further down the hierarchy.
 * 
 * A React app consists of many components, organized as a component tree. The data flows from the root component to all the  components 
 * in the tree structure that require this data, using props.
 * 
 * 
 * However, there's another way to work with data in React components, and that data is referred to as state. 
 * All the data in React can be divided into props data and states data. 
 * 
 * Props data is data outside the components that it receives and works with but cannot mutate (immutable). 
 * State data is data inside the components that it controls and can mutate. 
 * 
 * It also helps to think of it like this:
 *  The props data belongs to the parent that renders the components. 
 *  The state data belongs to the component itself.
 * 
 * 
 * It helps to think of State as a component's internal data that determines the current behavior of a component. 
 * It's often used to store data that affects the behavior of a component. 
 * States is important because it allows components to stay in sync with each other and ensure that your app behaves as intended for example, 
 * if one component updates its State, all other components that depend on that State will automatically update too. 
 * 
 * This means that a component sends its State to its children by using props. 
 * If the child components have their own grandchild components, then the child components might have some States that they send us props to those grandchild components.
 * 
 * 
 * Stateful and Stateless components in way 
 */