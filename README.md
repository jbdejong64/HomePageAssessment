# HomePageAssessment
 
## Running the asessment

### Clone the repo

cd Into your git folder:

```shell
git clone https://github.com/jbdejong64/HomePageAssessment
cd HomePageAssessment
```

### Install npm packages

```shell
npm install
```

### Run project

```shell
npm start
```

Or if you have node:

```shell
ng serve
```
## Asessment content

### Loading State

* check-box-filter.component
* order-history-table.component
* overview-card.component
* pending-orders-card.component

All have loading state inputs set up. At the moment, given the data is being collected from within the application via a json file, each boolean state is paired with a setTimeOut function set with different times.

### Minor extra functionallity

1. Both the order-history-table and pending-orders-card are set up with a view all button.
   * If the number of element is less than, 3 for the pending-orders-card or 10 for the order-history-table, the view all button will not display.
   * If the number of element is more than, 3 for the pending-orders-card or 10 for the order-history-table, the view all button will be visable along with the number of elements in each component next the the component's title.
   * When clicking the view all button a model window will appear containing a bigger version of the component with scrolling (and for the table's case a paginator with table sorting). Clicking off the the model will close the pop-up window.
 2. The check-box-filter.component can filter checkboxes using the "Search" input based on concurrent chars (ie: "at" = {"Bat", "Cats", "Rat"}, "ats" = {"Cats"} ).
 3. The check-box-filter.component can display all selected checkboxes via Toaster Alert once "Apply" is clicked.
 4. Clicking on the side and header dropdown buttons will cause the main content to display a different page.
 5. Clicking on the double chevron will toggle the sidenav menu along with animating the icon to rotate 180 degrees.

### Json File

The Json input file can be found at: HomePageAssessment\src\app\assests\testInput.ts

### HTML, CSS, + JS Components Used

* - [x] Toaster Alert:
  * app.component
  * check-box-filter.component
* - [x] Table:
  * order-history-table.component
  * order-history-table-full.component
* - [x] List:
  * pending-orders-card.component
  * pending-orders-card.component
* - [x] Google Map embed:
  * map-card.component
* - [x] Left Side Menu:
  * app.component
* - [x] Drop Shadows:
  * check-box-filter.component
  * map-card.component
  * order-history-table.component
  * order-history-table-full.component
  * overview-card.component
  * pending-orders-card.component
  * pending-orders-card-full.component
* - [x] Gradient:
  * overview-card.component
* - [x] Inputs:
  * check-box-filter.component
  * home-page-header.component
  * map-card.component
  * order-history-table.component
  * order-history-table-full.component
  * overview-card.component
  * pending-orders-card.component
  * pending-orders-card-full.component
  * pending-orders-items.component
* - [x] Buttons:
  * app.component
  * check-box-filter.component
  * home-page-header.component
  * order-history-table.component
  * order-history-table-full.component
  * pending-orders-card.component
  * pending-orders-card-full.component
