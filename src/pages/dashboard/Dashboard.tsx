import { useState } from "react";
import {
  ArrowRight,
  ChevronRight,
  Filter,
  Search,
  Users,
  UserRoundCheck,
  ChartColumnBig,
} from "lucide-react";

import AdminShell from "../../components/AdminShell";
import PageHeader from "../../components/PageHeader/PageHeader";

type TabKey = "verification" | "updates" | "employees";

const statCards = [
    {
        key: "verification" as TabKey,
        label: "Pending Verification",
        value: "12",
        helper: "New applications to review",
        icon: UserRoundCheck,
        accent: "bg-blue-50 text-blue-600",
    },
    {
        key: "updates" as TabKey,
        label: "Pending Updates",
        value: "05",
        helper: "Update requests to review",
        icon: ChartColumnBig,
        accent: "bg-orange-50 text-orange-600",
    },
    {
        key: "employees" as TabKey,
        label: "Employees",
        value: "428",
        helper: "Total employees",
        icon: Users,
        accent: "bg-emerald-50 text-emerald-600",
    },
];

const tabs: { key: TabKey; label: string }[] = [
    { key: "verification", label: "Pending Verification" },
    { key: "updates", label: "Pending Updates" },
    { key: "employees", label: "Employees" },
];

const tabRows: Record<TabKey, Array<{ name: string; id: string; role: string; appliedOn: string }>> = {
    verification: [
        { name: "Mohammed Fayiz T", id: "EMP024", role: "Software Engineer", appliedOn: "May 27, 2025 • 2:30 PM" },
        { name: "Ananya Nair", id: "EMP025", role: "UI/UX Designer", appliedOn: "May 27, 2025 • 11:15 AM" },
        { name: "Arjun Ramesh", id: "EMP026", role: "Product Analyst", appliedOn: "May 26, 2025 • 8:45 PM" },
        { name: "Sneha P", id: "EMP027", role: "HR Executive", appliedOn: "May 26, 2025 • 3:20 PM" },
        { name: "Vishnu S", id: "EMP028", role: "DevOps Engineer", appliedOn: "May 26, 2025 • 10:05 AM" },
    ],
    updates: [
        { name: "Priya Menon", id: "EMP031", role: "Senior Designer", appliedOn: "Updated on May 27, 2025" },
        { name: "Rahul Das", id: "EMP044", role: "Data Analyst", appliedOn: "Updated on May 26, 2025" },
        { name: "Aisha Khan", id: "EMP052", role: "Customer Success", appliedOn: "Updated on May 25, 2025" },
        { name: "Deepak N", id: "EMP060", role: "Backend Engineer", appliedOn: "Updated on May 24, 2025" },
    ],
    employees: [
        { name: "Mohammed Fayiz T", id: "EMP024", role: "Software Engineer", appliedOn: "Active" },
        { name: "Ananya Nair", id: "EMP025", role: "UI/UX Designer", appliedOn: "Active" },
        { name: "Arjun Ramesh", id: "EMP026", role: "Product Analyst", appliedOn: "Active" },
        { name: "Sneha P", id: "EMP027", role: "HR Executive", appliedOn: "Active" },
        { name: "Vishnu S", id: "EMP028", role: "DevOps Engineer", appliedOn: "Active" },
    ],
};

function Dashboard() {
  const [activeTab, setActiveTab] = useState<TabKey>("verification");
  const [searchTerm, setSearchTerm] = useState("");

  const normalizedSearch = searchTerm.trim().toLowerCase();
  const visibleRows = tabRows[activeTab].filter((row) => {
    if (!normalizedSearch) return true;
    return [row.name, row.id, row.role, row.appliedOn]
      .join(" ")
      .toLowerCase()
      .includes(normalizedSearch);
  });

  return (
    
      <div className="w-full space-y-6">
        <PageHeader title="Dashboard" subtitle="Review employees, updates and verification requests." />

        <section className="grid gap-6 lg:grid-cols-3">
          {statCards.map((card) => {
            const Icon = card.icon;

            return (
              <button
                key={card.label}
                type="button"
                onClick={() => setActiveTab(card.key)}
                aria-pressed={activeTab === card.key}
                className={`card p-6 text-left transition hover:shadow-hover ${activeTab === card.key ? "ring-2 ring-primary/20" : "hover:-translate-y-0.5"}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-text-secondary">{card.label}</p>
                    <p className="mt-2 text-4xl font-bold text-primary">{card.value}</p>
                    <p className="mt-2 text-xs text-text-secondary">{card.helper}</p>
                  </div>

                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${card.accent}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
              </button>
            );
          })}
        </section>

        <section className="card overflow-hidden">
          <div className="border-b border-border-light px-6 pt-6">
            <div className="flex flex-wrap items-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeTab === tab.key ? "bg-primary/10 text-primary" : "text-text-secondary hover:bg-surface-container hover:text-text"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3 pb-6">
              <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-border bg-surface-container px-4 py-3">
                <Search className="h-4 w-4 text-text-secondary" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by name, employee ID or email..."
                  className="w-full bg-transparent text-sm text-text outline-none placeholder:text-text-secondary"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-3 text-sm font-medium text-text-secondary transition hover:bg-surface-container"
              >
                <Filter className="h-4 w-4" />
                Newest First
                <ArrowRight className="h-4 w-4 rotate-90" />
              </button>
            </div>
          </div>

          <div className="p-4 sm:p-5">
            <div className="space-y-2">
              {visibleRows.map((row, index) => (
                <div key={`${row.id}-${row.name}`} className="flex flex-wrap items-center gap-4 rounded-xl px-3 py-4 transition hover:bg-surface-container">
                  <div className="flex min-w-[240px] flex-1 items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {row.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-text">{row.name}</p>
                      <p className="text-xs text-text-secondary">{row.id}</p>
                      <p className="text-xs text-text-secondary">{row.role}</p>
                    </div>
                  </div>

                  <div className="min-w-[210px] text-right text-xs text-text-secondary sm:text-sm">
                    <div className="mb-1">Applied on</div>
                    <div className="font-medium text-text">{row.appliedOn}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button type="button" className="btn-primary px-4 py-2 text-sm">
                      {activeTab === "employees" ? "View" : "Review"}
                    </button>
                    <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full text-text-secondary transition hover:bg-surface-container hover:text-text">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>

                  {index < visibleRows.length - 1 ? <div className="h-px w-full bg-slate-100" /> : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    
  );
}

export default Dashboard;
