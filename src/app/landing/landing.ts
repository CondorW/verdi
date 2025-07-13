import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing', // The selector for this component
  standalone: true, // Using standalone components
  imports: [RouterLink], // Import RouterLink for navigation
  templateUrl: './landing.html', // Link to the HTML file
  })

export class Landing {
  // The component class is currently empty as all logic is handled by the template.
  // You can add properties and methods here if needed in the future.
}

