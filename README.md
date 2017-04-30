# Holiday Helper

A tongue-in-cheek store for services to reduce stress for busy or overworked parents around the holidays.  
Let us take things off your overly full holiday plate!

[holidayhelper.herokuapp.com](holidayhelper.herokuapp.com)  
Powered by React, Redux, Sequelize, Node, Bootstrap, and Express  
Created by @thefishter, @keziyah, @rachelfreya, and @katecald   

## A functional e-commerce website with the following features

- Site visitors can browse products, add items to a `Cart`, and checkout seamlessly
- Current number of items in cart is displayed in navbar
- All completed orders are confirmed by email, with order summary and shipping info
- Users may sign up for and log into an account, enabling them to view order history in `My Account`

## Known issues
- [ ] #84 Upon logout, the page should refresh automatically, so the navbar updates with the appropriate links (`Log In` and `Sign Up` rather than `My Account` and `Log Out`), and the number on the cart icon resets to zero.
- [ ] #70 Quantity dropdowns on main products homepage currently update state on general `App Container`. Therefore, if a user switches to a single product detail page and adds one item from there, since the quantity dropdown on that page is not changed, the previous quantity set on state by the dropdown on the homepage will override the default quantity of one requested on the single product page, causing the wrong quantity of items to be added to the cart.
