import { Stat } from "../components/Stat/Stat";

const data = [
  {
    title: "Total Revenue",
    description: "+20.1% from last month",
    value: "$45,231.89",
    icon: "fas fa-dollar-sign",
  },
  {
    title: "Subscriptions",
    description: "+180.1% from last month",
    value: "+2350",
    icon: "fas fa-users",
  },
  {
    title: "Sales",
    description: "+19% from last month",
    value: "+12,234",
    icon: "fas fa-credit-card",
  },
  {
    title: "Active Now",
    description: "+201 since last hour",
    value: "+573",
    icon: "fas fa-chart-line",
  },
];

const DashboardPage = async () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard">
        {data.map((data) => (
          <Stat
            title={data.title}
            value={data.value}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
