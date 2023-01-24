/**
 * 
 *      useRef is a React Hook that lets you reference a value that’s not needed for rendering.
 * 
 * The main difference between both is :
 * 
 *  useState causes re-render, useRef does not.
 * 
 *  The common between them is, both useState and useRef can remember their data after re-renders. 
 *  So if your variable is something that decides a view layer render, go with useState. Else use useRef
 * 
 * useRef is useful when you want to track value change, but don't want to trigger re-render or useEffect by it.
 * 
 * 
 */