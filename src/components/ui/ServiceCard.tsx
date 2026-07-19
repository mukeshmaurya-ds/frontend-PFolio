import { Service } from "@/types/service";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <div className="glass hover-lift rounded-2xl p-8 transition-all duration-300">
      <div className="mb-6 text-5xl">{service.icon}</div>

      <h3 className="mb-4 text-2xl font-bold">
        {service.title}
      </h3>

      <p className="leading-7 text-slate-400">
        {service.description}
      </p>
    </div>
  );
}