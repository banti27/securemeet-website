# Contributing to SecureMeet Website

Thank you for your interest in contributing to the SecureMeet website! This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Project Structure](#project-structure)

## Code of Conduct

### Our Standards

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect differing viewpoints and experiences
- Accept responsibility and apologize for mistakes

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Fork and Clone

```bash
# Fork the repository on GitHub
# Then clone your fork

git clone https://github.com/YOUR_USERNAME/securemeet-website.git
cd securemeet-website

# Add upstream remote
git remote add upstream https://github.com/banti27/securemeet-website.git
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Visit http://localhost:5173 to see the site.

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
git checkout development
git pull upstream development
git checkout -b feature/your-feature-name
```

Branch naming conventions:
- `feature/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation updates
- `style/` - Code style changes
- `refactor/` - Code refactoring
- `test/` - Adding tests

### 2. Make Changes

- Write clean, readable code
- Follow the coding standards below
- Test your changes thoroughly
- Update documentation if needed

### 3. Test Your Changes

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### 4. Commit Changes

Write clear, descriptive commit messages:

```bash
git add .
git commit -m "feat: add new feature description"
```

Commit message format:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation changes
- `style:` - Code style/formatting
- `refactor:` - Code refactoring
- `test:` - Adding tests
- `chore:` - Maintenance tasks

### 5. Push and Create Pull Request

```bash
# Push to your fork
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub:
1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill in the PR template
4. Submit the pull request

## Coding Standards

### React/JSX

#### Component Structure

```jsx
import PropTypes from 'prop-types';

const MyComponent = ({ title, description }) => {
  return (
    <div className="container">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default MyComponent;
```

#### Naming Conventions

- **Components**: PascalCase (`MyComponent.jsx`)
- **Files**: PascalCase for components, camelCase for utilities
- **Variables/Functions**: camelCase (`myVariable`, `handleClick`)
- **Constants**: UPPER_SNAKE_CASE (`MAX_ITEMS`)

#### Component Guidelines

- Keep components small and focused
- Use functional components with hooks
- Extract reusable logic into custom hooks
- Use meaningful prop names
- Add PropTypes for type checking

### Tailwind CSS

#### Class Organization

```jsx
// Group related classes
<div className="
  flex items-center justify-between
  px-6 py-4
  bg-blue-600 text-white
  rounded-lg shadow-lg
  hover:bg-blue-700 transition-colors
">
```

#### Responsive Design

```jsx
<div className="
  text-sm md:text-base lg:text-lg
  px-4 md:px-6 lg:px-8
">
```

#### Custom Styles

Prefer Tailwind classes over custom CSS. For custom styles:

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#0ea5e9',
      },
    },
  },
}
```

### JavaScript

#### ES6+ Features

```javascript
// Use const/let, not var
const API_URL = 'https://api.example.com';
let counter = 0;

// Arrow functions
const handleClick = () => {
  console.log('Clicked');
};

// Destructuring
const { name, email } = user;

// Spread operator
const newArray = [...oldArray, newItem];

// Template literals
const message = `Hello, ${name}!`;
```

#### Async/Await

```javascript
const fetchData = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};
```

### Code Comments

```javascript
// Good: Explain WHY, not WHAT
// Using debounce to prevent excessive API calls
const debouncedSearch = debounce(handleSearch, 300);

// Bad: States the obvious
// Set counter to 0
const counter = 0;
```

### File Structure

```
src/
├── components/
│   ├── Header.jsx          # Global header
│   ├── Footer.jsx          # Global footer
│   └── CodeBlock.jsx       # Reusable code block
├── hooks/                  # Custom React hooks
├── utils/                  # Utility functions
├── constants/              # Constants and config
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```

## Submitting Changes

### Pull Request Process

1. **Update Documentation**: If you add features, update README.md
2. **Test Thoroughly**: Ensure all changes work as expected
3. **Follow Commit Guidelines**: Use conventional commit messages
4. **Fill PR Template**: Provide clear description of changes
5. **Link Issues**: Reference related issues (e.g., "Fixes #123")

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Code refactoring

## Testing
- [ ] Tested locally
- [ ] Production build works
- [ ] Responsive design checked
- [ ] Browser compatibility verified

## Screenshots (if applicable)
Add screenshots of UI changes

## Related Issues
Fixes #(issue number)
```

### Review Process

1. Maintainer reviews your PR
2. Address any feedback/changes requested
3. Once approved, PR will be merged
4. Your contribution will be deployed

## Project Structure

### Key Files

- `src/App.jsx` - Main application component
- `src/components/` - Reusable components
- `src/index.css` - Tailwind CSS imports
- `vite.config.js` - Vite configuration
- `tailwind.config.js` - Tailwind configuration
- `package.json` - Dependencies and scripts
- `public/CNAME` - Custom domain configuration

### Adding New Components

```bash
# Create component file
touch src/components/MyNewComponent.jsx
```

```jsx
// src/components/MyNewComponent.jsx
const MyNewComponent = () => {
  return (
    <div className="p-4">
      <h2>My New Component</h2>
    </div>
  );
};

export default MyNewComponent;
```

```jsx
// Use in App.jsx
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div>
      <MyNewComponent />
    </div>
  );
}
```

### Adding Code Examples

```jsx
import CodeBlock from './components/CodeBlock';

const myCode = `
function example() {
  console.log("Hello World");
}
`;

<CodeBlock 
  code={myCode} 
  language="javascript" 
  showLineNumbers={true}
/>
```

## Testing

### Manual Testing Checklist

- [ ] UI looks correct on desktop
- [ ] UI looks correct on tablet
- [ ] UI looks correct on mobile
- [ ] All links work
- [ ] Code snippets display properly
- [ ] Syntax highlighting works
- [ ] No console errors
- [ ] Performance is acceptable

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (macOS/iOS)

## Common Tasks

### Adding a New Page Section

1. Create component in `src/components/`
2. Import in `App.jsx`
3. Add to main layout
4. Style with Tailwind CSS
5. Test responsiveness

### Updating Styles

1. Edit Tailwind classes in components
2. For custom colors, update `tailwind.config.js`
3. Rebuild: `npm run dev` (hot reload)

### Adding Dependencies

```bash
# Install new package
npm install package-name

# Or for dev dependencies
npm install --save-dev package-name

# Update package.json and commit
git add package.json package-lock.json
git commit -m "deps: add package-name"
```

## Getting Help

### Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub Pages Docs](https://docs.github.com/pages)

### Questions?

- Open a [GitHub Issue](https://github.com/banti27/securemeet-website/issues)
- Check existing issues and PRs
- Ask in pull request comments

## Recognition

Contributors will be recognized in:
- GitHub contributors page
- Project README (for significant contributions)

Thank you for contributing! 🎉

---

Last updated: February 15, 2026
