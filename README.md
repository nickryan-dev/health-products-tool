# Health Products Tool

## Project Overview

Welcome to the **Health Products Tool** take-home project. This application allows users to view and compare different health products. You'll build a React application using **TypeScript** that fetches product data from a provided `db.json` file using [json-server](https://github.com/typicode/json-server). Your task is to implement features that display product information, enable users to select products for comparison, and present the selected products side by side for easy evaluation.

## Objective

- Develop a React application in **TypeScript** that allows users to:
  - View a list of health products.
  - Select products to compare.
  - Compare selected products side by side.
  - Filter and sort products to enhance usability.

## Time Limit

- You are given **2 days** to complete this task. Focus on the **essential requirements**.

## Data Structure

The `db.json` file contains an array of health products with the following fields:

- **id**: _string_
- **name**: _string_
- **description**: _string_
- **price**: _number_
- **category**: _string_ (e.g., Supplements, Personal Care, Equipment)
- **features**: _array of strings_
- **image**: _string_ (path to a local image file)

## Project Assets

- **Images**: All product images are provided in the `public/images` directory.
- **Note**: The `image` field in `db.json` corresponds to the relative path of the image file within the `public` directory.

## Instructions

### Project Requirements Summary

1. **Core Requirements** (Complete these within the time limit):

   - Fetch products from `db.json`.
   - Display a product listing with essential details (name, description, price, category, features, and image).
   - Implement sorting by price and filtering by category.
   - Add basic comparison functionality for selected products.

2. **Optional Enhancements** (Tackle only if core requirements are completed and time permits):
   - Showcase the created React components in Storybook.
   - Search functionality, detailed product view, and local storage persistence.
   - Accessibility improvements for keyboard navigation.
   - Unit tests for key components and logic.

**Note**: Ensure to handle errors gracefully throughout the application to enhance user experience.

---

### Getting Started

1. Please fork this repo to create your own.
2. Create a branch named `yourname-take-home-submission` and make your changes there.

#### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start the application:**

   ```bash
   npm start
   ```

   - This command starts both the React application and the `json-server`.
   - The React app runs on `http://localhost:3000`.
   - The `json-server` API runs on `http://localhost:3001`.

### Fetching Products from the JSON Server

1. To fetch the list of products, make a `GET` request to the following endpoint:

   ```
   http://localhost:3001/products
   ```

2. You can also fetch a single product by its ID by making a GET request to:

   ```
   http://localhost:3001/products/{id}
   ```

## Evaluation Criteria

Your submission will be evaluated based on the following:

- **Functionality**: The application meets the essential requirements.
- **Code Quality**: Code is clean, well-organized, and follows best practices.
- **Technical Skill**:
  - **React Proficiency**: Effective use of React components, state, and lifecycle methods/hooks.
  - **TypeScript Proficiency**: Correct and efficient use of TypeScript.
- **User Experience**: The app is intuitive, responsive, and user-friendly.
- **Problem-Solving**: Effective decision-making and handling of edge cases and errors.
- **Documentation**: Clarity and helpfulness of code comments.

## Submission Instructions

1. **Source Code**: Create a Pull Request from this branch into your forked repo's master branch.
   - Ensure the repository is accessible (public link or provide access).
2. **Notification**: Please notify your interviewer once you've done so with a link to your Pull Request.

## Additional Notes

- **Data and Assets**:

  - Use the provided `db.json` and images without modifying their structure or content.

- **Libraries and Tools**:

  - You may use additional libraries to aid development (e.g., Material-UI, Axios, etc.).

- **Time Management**:

  - Prioritize essential features before optional enhancements.

## Final Reminders

- **Focus on Essential Requirements**: Ensure the main features work correctly before polishing the UI or adding enhancements.

- **TypeScript Usage**: Make effective use of TypeScript features to demonstrate your proficiency.

- **Testing**: If time permits, test your application thoroughly to catch any bugs or edge cases.

- **Documentation**: Provide clear comments to explain your code and decisions.

## Good Luck!

We appreciate your effort and look forward to reviewing your submission.

**Best Regards,**

_Lively_
