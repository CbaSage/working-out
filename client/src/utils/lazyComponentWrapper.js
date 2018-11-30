import React from 'react';

/**
 * Wraps lazily loaded components with React's lazy and Suspense to keep to always return a function
 * to maintain avoid warnings being thrown by react-router-dom's Route
 * @param Comp
 */
const lazyComponentWrapper = Comp => props => (<Comp {...props} />);
export default lazyComponentWrapper;