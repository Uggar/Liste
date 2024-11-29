# Ma Liste Vue.js Application

This is a simple Vue.js application that allows users to add and remove names from a list. It includes a form with fields for entering a first name and last name, and dynamically updates the list based on the input.

## Features

- **Add Names**: Users can add a first name and last name to a list.
- **Remove Names**: Users can remove the last name added to the list.
- **Error Handling**: Displays error messages if the user hasn't entered both a first name and last name.
- **Visibility Toggle**: The form can be hidden or shown by clicking the title.

## Project Structure

The project consists of three main files:

- **index.html**: The HTML file that contains the structure of the form and the list.
- **config.js**: The JavaScript file where the Vue app is initialized and methods are defined.
- **styles.css**: The CSS file that defines the styling for the app.

### 1. `index.html`
The HTML file contains the app's layout and binds Vue.js features, such as data binding with `v-model` and event handling with `@click`.

### 2. `config.js`
This JavaScript file contains the Vue instance with data properties, methods for adding/removing names, and logic for toggling form visibility.

### 3. `styles.css`
CSS file to style the app with a modern and clean interface, including form elements, buttons, and error message styling.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/ma-liste-vue.git
