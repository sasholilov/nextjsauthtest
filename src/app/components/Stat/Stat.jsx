import "./stat.css";

export const Stat = ({ title, value, description, icon }) => {
  return (
    <div className="stat">
      <h3>{title}</h3>
      <p className="text-2xl">{value}</p>
      <p className="text-xs">{description}</p>
      <i class={`${icon}`}></i>
    </div>
  );
};
