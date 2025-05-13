
# 🌐 FrontEnd - Buildini

This repository contains the frontend application for **Buildini**, a construction and project management platform designed to help project managers oversee operations, generate reports, and leverage AI-powered insights for better decision-making. The frontend is built using modern web development technologies to deliver an intuitive and responsive user experience.

---

## 📌 Features

- 🔍 Visualize project metrics with interactive charts
- 📑 View project details including budget, team, tasks, and risk levels
- ✍️ Create and sign reports digitally
- 📈 AI-powered insights: budget variance prediction and risk analysis
- ☁️ Cloud-based storage of signed and rated project reports
- 🧑‍💼 User-specific views for project managers and stakeholders

---

## 🧰 Technologies Used

### Frontend Stack

- **HTML5 / CSS3** – Markup and styling
- **JavaScript (ES6)** – Core scripting
- **Chart Library** – For dynamic graphs (e.g., ApexCharts or Chart.js)
- **Material Design Principles** – Layout and components (potentially using Angular Material)
- **REST API Integration** – Communication with Buildini backend
- **Cloud Integration** – Stores finalized reports

---

## 🗂️ Project Structure

```
FrontEnd/
├── css/              # Stylesheets
├── icons/            # Interface icons
├── img/              # Image assets
├── js/               # JavaScript files for interactions
├── dashboard.html    # Main dashboard page
├── index.html        # Homepage/login screen
├── reports.html      # Report generation and insights
├── signin.html       # User authentication view
└── README.md         # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge)
- Optional: Local server for testing static files (e.g., VS Code Live Server or Python HTTP server)

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/DevDevahmed/FrontEnd.git
   cd FrontEnd
   ```

2. **Run Locally**:
   - Open `index.html` or `dashboard.html` directly in your browser
   - Or, use a local server:
     ```bash
     python -m http.server 8080
     ```

3. **Access in Browser**:
   ```
   http://localhost:8080
   ```

---

## 🔌 Integration with Backend

This frontend connects to the [Buildini Backend](https://github.com/DevDevahmed/Buildini), which provides REST APIs for:

- User authentication
- Project data
- AI predictions (budget variance, risk assessment)

**Note:** Ensure the backend is running at `http://localhost:8080`, or update API URLs in the JS files accordingly. Enable CORS on the backend to allow frontend communication.

---

## 📡 API Interaction (Assumed Endpoints)

- `POST /auth/login` → Authenticate user and return JWT
- `GET /projects` → Retrieve all project summaries
- `GET /projects/{id}` → Fetch detailed data for a specific project
- `POST /reports` → Submit signed/rated project reports
- `GET /ai/predict-budget-variance` → Predict budget variance
- `GET /ai/risk-assessment` → Analyze risk levels

---

## 🛠️ Development Notes

- The project is written in **Vanilla JavaScript** (no framework yet).
- No build system or package manager is required.
- AI interaction and API calls are handled through plain `fetch()` requests.
- Always validate and sanitize user input before submission.

---

## 🚢 Deployment

To deploy on static hosting services (like GitHub Pages, Netlify, or Vercel):

1. Push the project to the `main` branch.
2. Configure the service to serve either `index.html` or `dashboard.html`.
3. Ensure API endpoints are accessible (use CORS or proxying if needed).

---

## 🤝 Contributing

Contributions are welcome! 🚀

1. **Fork** this repository
2. **Create a branch**:
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push and open a Pull Request**:
   ```bash
   git push origin feature/your-feature
   ```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🌐 Social Media

- 💼 LinkedIn: [Buildini – ConstructionTech Innovation](https://www.linkedin.com/posts/ahmed-jaouadi-330522246_constructiontech-innovation-buildini-activity-7328166806127325184-4LVO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADiajrQBzc6TN2x3HCHS7-t7wujnjEgsVDg)

---
