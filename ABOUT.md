## About
I've created a React App using Typescript an SCSS.

It is designed thinking Mobile first, so it is using a responsive and adaptive layout and also media queries: using flex, wifths and heights in relation to viewHeight or viewWidth, mediaqueries on footer buttons to display labels or not...

Main screen loads the stocks list, and renders it on the screen. It has also has links to notifications, Wallet, Transactions and Settings pages.

If you click on Refresh, it simulates a new API call where items had change, so it recalculate totals and re-render the list of stocks.

On the Settings page, I've added a "Name" input where you can change the name that is shown on the Header dinamically.

On App.scss you can find all variables relating colors, text-sizes and border-radius.

It is using Redux to control the state. Reducers are available under the CriptoList folder on cryptoSlice.

I have also added some testing, for the reducers to check if they work as expected, for components to check if updating values they show correctly on the screen, and to see if components have their propper elements ready.