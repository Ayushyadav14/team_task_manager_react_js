# Team Task Manager

## Introduction
Team Task Manager is a modern, responsive web application built to streamline project and task management for teams. It provides a clean, card-based interface where users can easily track their upcoming tasks, manage cross-functional projects, and oversee team workloads, all within a sleek dashboard environment.

## Features
- **Role-Based Dashboards:** Customized experiences and permissions for Admins and standard Members.
- **Comprehensive Task Tracking:** Manage the full lifecycle of tasks (To-Do, In Progress, In Review, Done) with assigned priorities and due dates.
- **Project Management:** Create new projects, manage team members, and handle pending requests to join projects.
- **Interactive Minimalist UI:** A highly polished, responsive interface featuring dynamic hover states, colored status chips, and intuitive navigation.
- **Secure Authentication:** Integrated JWT-based login and session management.

## Folder Structure
The application follows a modular, feature-based architecture:

```text
src/
├── components/       # Reusable, application-wide UI components (Layout, Sidebar, etc.)
├── features/         # Domain-driven feature modules containing their own pages, components, and state
│   ├── auth/         # Authentication, login forms, and auth state management
│   ├── dashboard/    # Analytics, recent activity, and personalized widgets
│   ├── projects/     # Project creation, details, and membership management
│   ├── settings/     # User profile configuration and security settings
│   ├── tasks/        # Task creation, lists, Kanban boards, and forms
│   └── team/         # Team management and role assignments
├── routes/           # Application routing and protected route logic
├── store/            # Global state configuration (Redux Toolkit)
└── utils/            # Helper functions and shared utilities
```
