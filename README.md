# Cloning and Pushing to Your Own Repository

1. Fork this repository by clicking the "Fork" button in the top right corner of this page. This will create a copy of this repository in your GitHub account.
2. Clone your forked repository to your local machine using the following command in your terminal:
    - `git clone https://github.com/your-username/javascript-functions-2-assignment.git`
    - Replace `your-username` with your GitHub username.
3. Make changes to the files in your local repository as directed in the exercises.
4. After making changes, add, commit and push your changes to your remote repository using the following commands in your terminal:

```
git add .
git commit -m "Add changes as directed in the exercises"
git push origin main
```

Replace `main` with the name of the branch you want

# Your Task:
Inside of `script.js` will find a (lengthy) array of objects containing information on popular books

Your job is to write the function `filterByGenre()` that:
 - Takes this array of books and a genre (as a string) as parameters
 - Then uses the .filter() method to return a ***filtered array*** of books containing that genre.