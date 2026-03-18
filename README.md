# Campus Connect

Campus Connect is a professional, responsive, higher education web platform built with semantic HTML5, CSS3, and vanilla JavaScript.

The website is designed for prospective and current students who need quick access to academic program information, campus support resources, and admissions contact details.

This project demonstrates industry-level front-end practices in:

- semantic HTML structure
- responsive design
- accessibility-first development
- CSS Grid and Flexbox layouts
- client-side interactivity
- progressive enhancement
- performance optimization
- professional project documentation

---

## Project Description

Campus Connect is a multi-page higher education website that simulates a realistic university resource platform.

The website helps users:

- explore academic programs
- find student support resources
- understand the purpose of the platform
- contact admissions or student services

The project was built to meet course requirements for a professional responsive web platform and focuses strongly on usability, accessibility, and responsive behavior across multiple devices.

---

## Pages Included

- Home
- About
- Programs
- Resources
- Contact

---

## Features Implemented

### Responsive Layout
- mobile-first structure
- 3 responsive breakpoints
- CSS Grid and Flexbox for layout
- scalable cards, forms, and content sections

### Accessibility Features
- semantic HTML5 landmarks
- skip-to-content link
- visible keyboard focus states
- clear navigation labels
- breadcrumb navigation on inner pages
- accessible form labels
- `aria-live` for status updates
- keyboard-accessible accordion
- keyboard-accessible modal

### Interactivity
- searchable and filterable program list
- debounced search
- modal detail view for program information
- resource accordion sections
- client-side contact form validation

### Performance
- responsive images using `picture` and `srcset`
- lazy loading on non-critical images
- minimal JavaScript
- separated CSS and JS assets
- print stylesheet for clean print output

### Progressive Enhancement
- content remains available without JavaScript where reasonable
- `noscript` messaging supports graceful degradation
- semantic page structure works independently of scripting enhancements

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6)

---

## File Structure

```text
campus-connect/
│
├── index.html
├── about.html
├── programs.html
├── resources.html
├── contact.html
│
├── css/
│   ├── styles.css
│   └── print.css
│
├── js/
│   └── app.js
│
└── images/
    ├── campus-hero-small.jpg
    ├── campus-hero-large.jpg
    ├── library-small.jpg
    └── library-large.jpg
