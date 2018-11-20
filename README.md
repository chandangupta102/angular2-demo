# angular2-demo

## Task1:-  
Create a sample application in angular 2 (details mentioned below). Purpose of this application is to showcase how you utilize the various features offered by angular framework such as (components, services, directives, routing, forms, etc..) and apply best practices during development cycle. Also, if you could add some unit test to the code that will be really helpful.

#### Implement a Form with the following Inputs (and Validators)

##### 1.Mail address (is required and should be an email address)
         
##### 2.A Dropdown which allows the user to select from three different Subscriptions
          ("Basic", "Advanced", "Pro") Set "Advanced" as Default
         
##### 3.A Password field (is required and must be 8 character long with at least one character and one special character)
         
##### 4.A Submit Button and A Clear Button
         
##### ALERT1: 
Display a warning message if the Form is invalid and was touched but only after user has stopped typing. 
##### ALERT2:
Display a warning message below each input if it's invalid and cumulative message at the top of the form with all the errors at the top of the form on submit. 
##### CONFIRM1(Reset):
If form is modified and clear is clicked, prompt user confirming that they are sure to discard the changes.
##### Result(Submit):
Upon submitting the form, you should simply print the Value of the Form in a separate page.
____

#### Build Dependencies

The following tools must exist within your PATH:

* [node](http://nodejs.org/)
* [npm](http://nodejs.org/)

## Steps To Create a Angular 2 Project:

**Install Angular-cli**

```bash
 npm install -g @angular/cli
```

**Create ANGULAR2-DEMO app**

```bash
 ng new ANGULAR2-DEMO
```

```bash
cd ANGULAR2-DEMO
```

**Build Angular App**

```bash
npm install
```

```bash
ng serve --open
```

# Contributed By Chandan Gupta(NITW)

# Angular2Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
