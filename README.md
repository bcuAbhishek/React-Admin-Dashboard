# Modern Admin Dashboard

A modern, responsive admin dashboard built with React and Tailwind CSS, featuring real-time analytics, data visualization, and a clean user interface.

## Overview

This admin dashboard provides a comprehensive interface for managing various aspects of a business or application, including:

-   Sales analytics and trends
-   User management and demographics
-   Order tracking and processing
-   Product management
-   Real-time data visualization
-   Customizable settings

## Tech Stack

### Core Technologies

-   **React** (v18.3.1) - Frontend library
-   **Vite** (v5.4.10) - Build tool and development server
-   **Tailwind CSS** (v3.4.15) - Utility-first CSS framework
-   **Framer Motion** (v11.11.17) - Animation library
-   **Recharts** (v2.13.3) - Composable charting library
-   **Lucide React** (v0.460.0) - Icon library
-   **React Router DOM** (v6.28.0) - Routing solution

### Development Tools

-   **ESLint** (v9.13.0) - Code linting
-   **PostCSS** (v8.4.49) - CSS processing
-   **Autoprefixer** (v10.4.20) - CSS vendor prefixing

### Key Features

-   Responsive design
-   Dark/Light mode support
-   Real-time data visualization
-   Animated transitions
-   Interactive charts and graphs
-   Modern UI components
-   Clean and intuitive interface

## Features

### Dashboard Overview

-   Total sales, revenue, and growth metrics
-   User activity tracking
-   Sales by channel analysis
-   Category distribution

### Sales Management

-   Sales trends and forecasts
-   Revenue analytics
-   Channel performance
-   Category-wise sales

### User Management

-   User demographics
-   Activity heatmap
-   Growth trends
-   User listing and filtering

### Order Processing

-   Order tracking
-   Daily order trends
-   Status distribution
-   Order details

### Settings

-   Profile management
-   Customization options
-   System preferences

## Project Structure

```
src/
├── components/
│   ├── analytics/          # Analytics related components
│   │   ├── ChannelPerformance.jsx
│   │   ├── CustomerSegmentation.jsx
│   │   ├── OverviewCards.jsx
│   │   └── RevenueChart.jsx
│   ├── common/            # Shared components
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   └── StatCard.jsx
│   ├── orders/           # Order management components
│   │   ├── DailyOrders.jsx
│   │   ├── OrderDistribution.jsx
│   │   └── OrdersTable.jsx
│   ├── products/         # Product related components
│   │   ├── ProductsTable.jsx
│   │   └── SalesTrendChart.jsx
│   ├── sales/           # Sales analytics components
│   │   ├── SalesOverviewChart.jsx
│   │   ├── SalesByChannelChart.jsx
│   │   ├── SalesByCategoryChart.jsx
│   │   └── DailySalesTrend.jsx
│   ├── settings/        # Settings and profile components
│   │   ├── Profile.jsx
│   │   ├── Security.jsx
│   │   └── Notifications.jsx
│   └── users/          # User management components
│       ├── UserGrowthChart.jsx
│       ├── UserActivityHeatmap.jsx
│       └── UserDemographicsChart.jsx
├── pages/             # Page components
│   ├── AnalyticsPage.jsx
│   ├── OrdersPage.jsx
│   ├── OverviewPage.jsx
│   ├── ProductsPage.jsx
│   ├── SalesPage.jsx
│   ├── SettingsPage.jsx
│   └── UsersPage.jsx
└── App.jsx           # Root component
```

## Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/admin-dashboard.git
```

2. Install dependencies

```bash
cd admin-dashboard
npm install
```

3. Start the development server

```bash
npm run dev
```

## Dependencies

```json
{
    "dependencies": {
        "framer-motion": "^11.11.17",
        "lucide-react": "^0.460.0",
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.28.0",
        "recharts": "^2.13.3"
    },
    "devDependencies": {
        "@vitejs/plugin-react": "^4.3.3",
        "autoprefixer": "^10.4.20",
        "eslint": "^9.13.0",
        "postcss": "^8.4.49",
        "tailwindcss": "^3.4.15",
        "vite": "^5.4.10"
    }
}
```

## Acknowledgments

-   Tailwind CSS for the utility-first CSS framework
-   Recharts for the amazing charting library
-   Framer Motion for smooth animations
-   Lucide React for beautiful icons

## Contact

Abhishek Shrestha - learnobusek@gmail.com

Project Link: [[https://github.com/bcuAbhishek/admin-dashboard](https://github.com/yourusername/admin-dashboard)](https://bcuabhishek.github.io/React-Admin-Dashboard/)
