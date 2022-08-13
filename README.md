This is my solution for Unit 8: Lab 2 "Chirpus Pizza" in the 2022 C# .NET After-Hours Boot Camp at Grand Circus.

# CHIRPUS PIZZA - INTRO TO ANGULAR
### Objectives: 
Angular Interfaces, Interpolation

### Task: 
Display a menu for Chirpus Pizza, where you’ll find the best wings and decent pizza.

### What will the application do?
- The application will load a list of menu items into an array in TypeScript
- The application will display the menu neatly formatted in the web browser.

### Build Specifications:
- Use the command line and VS Code (do not use Visual Studio).
- Generate a new Angular application called menu; clear out the app.component.html since it’s filled with default HTML that you won’t need.
- Create a new interface called MenuItem. (Notice how the filename ends up different from the type name; this is fine.)
- In your AppComponent’s TypeScript code, create an array of MenuItem instances, and fill the array with several menu items.
- In your AppComponent’s HTML code, loop through the array and list the menu items using whatever HTML you wish (Tables, Divs or whatever else) .

### Hints:
- Remember your import statement to load the MenuItem type into app.component.ts.
- Create whatever items you want, but have at least six items, and at least three categories.

REVISED LAB:
1.  In VS 2022, create an ASP NET Core with Angular project.
2.  In counter.component.ts, create an interface called MenuItem.  It should have the following fields:
	ItemName string
	Category string
	Price Number
3.  In the CounterComponent, create an array of four MenuItems named theMenuItems with the values shown below:

	Chicken Fingers	      dinner		$11.99
  
	Pizza		              dinner		$11.99
  
	Wings		              side		$8.99
  
	Breadsticks	side		$5.99
  
	Caeser Salad	salad		$4.99	
  
	Cinnamon Roll	dessert		$8.99
  
4.  In counter.component.html, add a "Welcome to Chirpus Pizza!" message, then print the menu below it as a table using NgFor.  Remember, table syntax is:
```
   <table>
      <tbody>
         <tr>
            <td>Item Name</td>
            <td>Category</td>
            <td>Price</td>
         </tr>
      </tbody>
   </table>
   ```
   Use *ngFor to repeat the tr element once for each element in theMenuItems.  For example, from class remember:
	<p *ngFor="let currCountry of theCountries" style="color:{{currCountry.theColor}}; font-weight:bold">{{ currCountry.someString }}</p>
5.  Make sure to use | currency when displaying the price so it is displayed correctly.
