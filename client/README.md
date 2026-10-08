# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.





client/src/
  pages/
    Login.jsx            (done)
    Signup.jsx           (done)
    Dashboard.jsx
    Projects.jsx
    Board.jsx            (Sprint board)
    Backlog.jsx
    Scrum.jsx            (Standup / Retrospective / Review tabs)
    Docs.jsx
    Calendar.jsx
    Reports.jsx
    Team.jsx

  components/
    layout/
      Layout.jsx         (sidebar + top bar + <Outlet />)
      Sidebar.jsx
      Topbar.jsx         (search, AI, alerts, log out)

    common/              (small pieces used on many pages)
      PageHeader.jsx     (the title + subtitle + button row)
      Avatar.jsx
      Tag.jsx            (Bug, Story, Debt labels)
      PriorityDot.jsx
      Chip.jsx
      Tabs.jsx
      FormField.jsx      (label + input/select/textarea)
      Drawer.jsx         (right-side panel shell)
      Modal.jsx          (search popup shell)

    dashboard/
      StatCard.jsx
      InfoList.jsx       (meetings, deadlines, activity)
      BurndownChart.jsx
      VelocityChart.jsx

    board/
      Column.jsx
      TaskCard.jsx
      BoardSummary.jsx
      TaskDrawer.jsx     (the big task detail panel)

    backlog/
      BacklogTable.jsx

    projects/
      ProjectCard.jsx
      NewProjectDrawer.jsx

    reports/
      DonutChart.jsx
      LineChart.jsx
      BarList.jsx

    team/
      MembersTable.jsx
      PermissionsTable.jsx
      InviteDrawer.jsx

    docs/
      DocList.jsx
      DocEditor.jsx

    calendar/
      CalendarGrid.jsx

    global/              (features that float above every page)
      SearchModal.jsx    (Ctrl K)
      NotificationsDrawer.jsx
      AIAssistantDrawer.jsx

  hooks/                 (data access: useDashboard, useTasks, useProjects)
  data/                  (mockData.js, until the backend is ready)
  store/                 (Zustand: tasks, backlog, projects, auth)
  routes/
    ProtectedRoute.jsx   (redirects to /login if not signed in)
  styles/
    agileflow.css        (your colors and shared classes)
  App.jsx                (all routes)
  main.jsx