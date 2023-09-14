# React Native | React Query | TypeScript

### The Solar Charging Network

In an ongoing push to make the world greener, it is worth investing in a mobile application that provides all electric vehicle drivers with information about their cars. The Product Owner has passed you some stories and is expecting you to come up with a great solution.

### Backend service

This project contains a default backend service that provides a vehicle list and vehicle detail information. You can run the service in a Docker container from the root of this project by running:

```
docker-compose up -d
```

The following endpoints are available to use:

* http://localhost:8485/api/vehicles/
* http://localhost:8485/api/vehicles/$id/

## The Stories

* Vehicle list screen: a screen that **lists** all known vehicles so we can provide our customers with an overview to help them find their vehicle
* Vehicle detail screen: a **detailed** view of vehicle information so we can provide our customers with specific vehicle details
* Navigation: we want the customer to be able to seamlessly **navigate** between the list and detail view so we minimize the effort to find a vehicle

Use **React query** for the data handling and use a **readme** in the project.

### FAST-1: Vehicle list screen

A full screen that renders a **flatlist**. Vehicle **Brand**, **Model**, and **Version** should be rendered as an item inside the flatlist. Users should be **navigated** to the vehicle details screen with **on select** event.

### FAST-2: Vehicle detail screen

A full screen that renders the selected **vehicle details**. All information should be rendered inside a scrollable content. This screen should have a **Go Back** button on the vehicle list screen. This detail screen should show the following data:

* Photo
* Brand, Model, and Version
* Connector Type
* Recommended Charger
* A link to the external help screen of the selected vehicle on remote website

## Bonus

* Search feature in the vehicle list
* Maestro tests

## Requirements
### Technology Stack
The application should be built using the following:
- React Native (version 0.70.0 or higher)
- React Query (version 4.0.0 or higher) for data fetching
- Typescript (version 5.0.0 or higher)
 
The choice of any additional libraries or tools is left to your discretion, but please be prepared to explain your decision for choosing them.

### Code Quality
The code should be clean, efficient, and easy to read. Make use of comments where necessary to explain your coding decisions. The usage of Typescript should enhance the readability and maintainability of the code.

### Performance
The application should run smoothly and load data efficiently. This would typically involve minimizing re-renders and efficiently managing the state.

### Testing (optional)
We would like to see some integration tests using Maestro.
