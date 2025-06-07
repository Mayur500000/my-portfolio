import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow p-4 text-center">
        <h1 className="text-3xl font-bold">Mayur Rajbhar</h1>
        <p className="text-gray-500">Java Backend Developer | DevOps Enthusiast</p>
      </header>

      {/* Main content */}
      <main className="p-6 max-w-4xl mx-auto">
        {/* About Me */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            I’m a backend developer experienced in Java, Spring Boot, Docker, and AWS. 
            I enjoy solving problems and building scalable systems.
          </p>
        </section>

        {/* Tech Stack */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-2">Tech Stack</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Java, Spring Boot, SQL</li>
            <li>Docker, Kubernetes, AWS</li>
            <li>DSA, OS, Networking, DBMS</li>
            <li>System Design (LLD, HLD)</li>
          </ul>
        </section>

        {/* Projects */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Project 1 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">Inventory Management System</h3>
              <p className="text-gray-600 text-sm mb-2">Spring Boot + Oracle DB</p>
              <p>
                Built a system to manage product stock, reprint restrictions, maker-checker workflow, and reports.
              </p>
            </div>

            {/* Project 2 */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-xl font-bold">BG Text Editor</h3>
              <p className="text-gray-600 text-sm mb-2">Spring Boot + Thymeleaf</p>
              <p>
                Designed a tool for editable BG templates with preview, version control, and audit tracking.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
