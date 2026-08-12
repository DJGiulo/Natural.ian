# Copilot Instructions for Natural.ian

## Project Overview

Natural.ian is a React + Vite single-page application (SPA) for an e-commerce wellness/spirituality product store. The site uses a client-side page navigation system (home vs products catalog) with shopping cart functionality.

## Build, Test, and Lint Commands

```bash
# Development server (HMR enabled on http://localhost:5173)
npm run dev

# Production build (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Lint code with ESLint
npm run lint
```

## Technology Stack

- **Runtime**: React 19.2.8 with Vite 8.2.0 (ES modules)
- **Styling**: Tailwind CSS 4.3.3 + Bootstrap 5.3.8 + Bootswatch themes
- **Code Quality**: ESLint with React Hooks and React Refresh plugins
- **Package Manager**: npm (node_modules committed pattern)

## Architecture

### Page Structure
- **App.jsx**: Root component managing page state (`currentPage: 'home' | 'productos'`) and global state (cart, menu, subscription)
- **pages/home.jsx**: Landing page with Hero, Benefits, About, Ritual, Instagram, and Contact sections
- **pages/productos.jsx**: Product catalog with category filtering

### Component Organization
- `components/layout/`: Layout wrappers (Navbar, Footer, Container)
- `components/products/`: Product display components (ProductCard, ProductGrid)
- `components/`: Page sections (Hero, About, Benefits, Ritual, Instagram, Contacto, Categories)

### Data Structure
- `data/products.js`: Array of product objects (id, name, price, category, image, description)
- `data/categories.js`: Array of category strings
- `utils/categoryId.js`: Helper to convert category names to DOM ID selectors

### State Management
- Global state in App.jsx using `useState` hooks:
  - `cart`: Array of product objects
  - `currentPage`: String tracking active page
  - `menuOpen`: Boolean for mobile menu visibility
  - `isSubscribed`: Boolean for subscription status
- Navigation triggered via callback functions passed to child components

### Navigation Pattern
- No external router library used
- **Within home page**: Smooth scroll to section anchors (IDs like `#inicio`, `#nosotros`)
- **Between pages**: Set `currentPage` state, then scroll to target section ID
- Helper function `scrollToCatalog(category)` handles category-filtered navigation to products page
- Category-specific anchors use `categoryId()` utility to convert category name to safe ID

## Key Conventions

### Component Conventions
- Component files use `.jsx` extension; data/utils files use `.js`
- Props passed as spread objects for complex data
- Callback functions passed as props for navigation and cart actions (no context API)
- Components generally accept container classNames or inline styling via CSS module imports

### Styling Conventions
- Utility-first Tailwind classes primary approach
- Bootstrap utility classes used as fallback (e.g., sticky-top, fixed positioning)
- Custom CSS in `styles/` directory organized by feature
- CSS modules pattern: Import CSS files directly in components (e.g., `import './Component.css'`)

### Data Conventions
- Products stored as JavaScript objects with properties: `id`, `name`, `price`, `category`, `image`, `description`
- Product images imported at top of products.js file
- Category filtering uses exact string matching against product.category field
- No API calls; all data is static/hardcoded

### File Naming
- Page components: lowercase with .jsx (e.g., home.jsx, productos.jsx)
- Feature components: PascalCase with .jsx (e.g., Navbar.jsx, ProductCard.jsx)
- Directories use lowercase (e.g., components/layout/, components/products/)
- Spanish language used throughout UI and variable names

### Event Handling
- Navigation uses `window.setTimeout(..., 0)` to defer scroll until DOM updates
- Mobile menu closed after navigation via `closeMenu()` callback
- Cart operations pass entire product object; no ID-based filtering used yet
- Subscription state toggled with simple boolean flag

### ESLint Configuration
- Uses Flat config format (eslint.config.js)
- Enforces React Hooks rules and React Refresh plugin compatibility
- Browser globals enabled (window, document, etc.)
- JSX syntax enabled in all .js and .jsx files
- dist/ directory ignored from linting

## Common Workflows

### Adding a Product
1. Add image import to top of `src/data/products.js`
2. Create product object with id (incremental), name, price, category, image, description
3. Add to products array in products.js
4. Category must already exist in `src/data/categories.js` or add it

### Adding a Page Section
1. Create new component file in `src/components/`
2. Import and include in appropriate page (home.jsx or productos.jsx)
3. Add section anchor ID for smooth scroll navigation
4. Update navigation callbacks if new top-level page needed (modify App.jsx page state)

### Modifying Navigation
1. Update callback functions in App.jsx for new routes
2. Ensure target IDs exist in DOM for smooth scroll
3. Use `categoryId()` utility for category-based anchors
4. Remember to close menu after navigation on mobile

### Styling Changes
1. Prefer Tailwind utility classes
2. Add custom CSS in `src/styles/` if utilities insufficient
3. Import CSS directly in component files
4. Test responsive behavior (mobile menu behavior at breakpoints)

## Important Notes

- No TypeScript; project uses plain JavaScript + JSX
- No external router (React Router) - custom page state management only
- No API integration; products/categories are static data
- Cart does not persist (state lost on refresh)
- No build step required for CSS with Tailwind + @tailwindcss/vite plugin
