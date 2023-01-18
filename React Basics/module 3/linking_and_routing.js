/**
 * 
 * 
 * 
 * 
 * 
 * **************************** The Anchor Tag ***********************************************
 * 
 * A single-page application can’t have regular anchor tag elements as a traditional web app can. 
 * The reason for this is that the default behavior of an anchor tag is to load another HTML file from 
 * a server and refresh the page. This page refresh is not possible in a SPA that's powered by a library
 *  such as React because a total page refresh is not the way that a SPA works, as explained earlier in this lesson item. 
 * 
 * Instead, a SPA comes with its own special implementation of anchor tags and links, which only give an 
 * illusion of loading different pages to the end user when in fact, they simply load different components into a 
 * single element of the real DOM into which the virtual DOM tree gets mounted and updated.
 * 
 * That's why navigation in a single-page app is fundamentally different from its counterpart in a multi-page app. 
 * Understanding the concepts outlined in this lesson item will make you a more well-rounded React developer.
 * 
 */