# Moaz Ahmed's Portfolio

A personal portfolio website showcasing Moaz Ahmed's skills, experience, projects, and contact information.

## Deployment to GitHub Pages

### Option 1: Manual Deployment

1. **Create a new repository on GitHub**
   - Go to [GitHub](https://github.com) and log in to your account
   - Click the "+" icon in the top right and select "New repository"
   - Name the repository: `moazahmed.github.io` (replace 'moazahmed' with your GitHub username)
   - Make it public
   - Click "Create repository"

2. **Upload the files to your repository**
   - Clone the repository to your local machine:
     ```
     git clone https://github.com/yourusername/yourusername.github.io.git
     ```
   - Copy all files from the `static-portfolio` folder into the cloned repository
   - Add, commit, and push the files:
     ```
     git add .
     git commit -m "Initial commit"
     git push -u origin main
     ```

3. **Access your published site**
   - Your site will be available at `https://yourusername.github.io`
   - It may take a few minutes to build and publish

### Option 2: Using GitHub Actions (Automated Deployment)

1. **Create a repository**
   - Create a repository with any name (e.g., `portfolio`)

2. **Upload the files**
   - Upload all the files from the `static-portfolio` folder to your repository

3. **Set up GitHub Pages**
   - Go to your repository settings
   - Navigate to "Pages" in the sidebar
   - Under "Source", select "GitHub Actions"
   - GitHub will automatically detect the static HTML content and offer a "Static HTML" workflow
   - Click "Configure" on this workflow

4. **Access your published site**
   - Your site will be published at `https://yourusername.github.io/portfolio` (if your repository is named 'portfolio')

## Customization

Feel free to modify the content to better reflect your personal information:

- Update the information in `index.html` to match your personal details
- Customize colors and styling in `styles.css`
- Replace project descriptions and links with your own projects
- Add or remove sections as needed

## Credits

- Icons: [Feather Icons](https://feathericons.com/)
- CSS Framework: [Tailwind CSS](https://tailwindcss.com/)

## License

This project is open source and available under the [MIT License](LICENSE).