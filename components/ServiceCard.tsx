import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
};

export function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <article className="service-card">
      <Image alt="" className="service-icon" height={72} src={icon} width={72} />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="learn-link" href={href}>
        Learn more <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
