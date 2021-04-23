# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

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

primero se creo un servicio para consumir la api

## car edit
En el componente de car edit se puede acceder a la información de un carro y editarla, tambien se podrá modificar un car, agregar el dni de un owner y eliminarlos.

## owner edit
En este componente se podra modificar la información del propietario del carro. para guardar se trabajo sobre el metodo save que trabaja con un parametro href actualizando el owner y para eliminar el owner setrabaja con un parametro href.

## car list
En este componente se muestra la lista de los carros disponibles, además podra acceder al boton para poder editar los carros y eliminarlos.

## owner list
En este componente el usuario tendrá acceso a todos los propietarios, de igual manera tendrá acceso al botón para editarlos, podra crear uno nuevo y eliminar el que desee. Para realizar esto, se utilizó el modelo y el servicio del owner.

