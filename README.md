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
> [first]="first"
> [rows]="rows"
- these two are used to set the default values of the paginator set from user side but by click function.
on the other hand  
> [totalRecords]="totalRecords"
- this data is sent from database thus used input decorator to catch the data
   

## Dependency Injections
there are three different ways to register and provide services using dependency injection: 
1. Singleton
   to make a service file as singleton mention the following in the file
   ```
   @Injectable({ 
   providedIn: 'root',
   })
   ```
  > setting this property to 'root' level, makes it a singleton to be shared across the entire application.
2. Transient
   When a service is registered as transient, a new instance of the service is created every time it is requested.
   ```
   @Injectable({
   providedIn: 'any',
   })
   ```
3. Scoped
   Use when a single instance of a service for each lazy-loaded module needs to be created.
   ```
   @Injectable({
   providedIn: 'any',
   })
   ``` 




