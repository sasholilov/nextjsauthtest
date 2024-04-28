import { ChartComponent } from "../components/Chart/ChartComponent";
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
      <div className="dashboard-first ">
        {data.map((data) => (
          <Stat
            key={data.title}
            title={data.title}
            value={data.value}
            description={data.description}
            icon={data.icon}
          />
        ))}
      </div>
      <div className="dashboard-second">
        <div className="chart-wrapper">
          <ChartComponent />
        </div>
        <div className="recent-container">
          <div>
            <p className="recent-name">Recent Sales</p>
            <p className="text-xs">You made 265 sales this month.</p>
          </div>
          <div className="recent-row">
            <div className="recent-row-left">
              <p className="recent-name">Olivia Martin</p>
              <p className="text-xs">olivia.martin@email.com</p>
            </div>
            <div className="recent-row-right">+$1,999.00</div>
          </div>
          <div className="recent-row">
            <div className="recent-row-left">
              <p className="recent-name">Olivia Martin</p>
              <p className="text-xs">olivia.martin@email.com</p>
            </div>
            <div className="recent-row-right">+$1,999.00</div>
          </div>
          <div className="recent-row">
            <div className="recent-row-left">
              <p className="recent-name">Olivia Martin</p>
              <p className="text-xs">olivia.martin@email.com</p>
            </div>
            <div className="recent-row-right">+$1,999.00</div>
          </div>
          <div className="recent-row">
            <div className="recent-row-left">
              <p className="recent-name">Olivia Martin</p>
              <p className="text-xs">olivia.martin@email.com</p>
            </div>
            <div className="recent-row-right">+$1,999.00</div>
          </div>
          <div className="recent-row">
            <div className="recent-row-left">
              <p className="recent-name">Sofia Davis</p>
              <p className="text-xs">sofia.davis@email.com</p>
            </div>
            <div className="recent-row-right">+$39.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
