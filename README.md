## Current Progress

![UML_eCom](/ReadMeAssets/projectShowCase.gif)

## app/Services

- this includes codes to talk to the api,
  - to call external api, we will
    1. create a service folder
    2. inside it, run the command `ng g s "service name"`
       - here `g` is for generate, and `s` is for service. angular generate service.

## input and output decorator

### output decorator
```
<app-page-navigation
  (handleUserClick)="onPageNumberChanges($event)"
  [totalRecords]="totalRecords"
></app-page-navigation>

```
- handleUserClick is a custom even made in child component using @outptut decorator to help get data from child2parent.
  - when handleUserClick is triggered, it calls onPageNumberChanges method and passes value from child compoent 2 parent through event -->

## code explanation 
## component: page-navigation
```
<div class="card flex justify-content-center">
  <p-paginator
    (onPageChange)="PageChanged($event)"
    [first]="first"
    [rows]="rows"
    [totalRecords]="totalRecords"
  ></p-paginator>
</div>
```
  [first]="first"
  [rows]="rows"
  - these two are used to set the default values of the paginator set from user side but by click function.
  on the other hand  
  [totalRecords]="totalRecords"
  - this data is sent from database thus used input decorator to catch the data
   