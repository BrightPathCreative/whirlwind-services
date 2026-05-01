import Image from "next/image";
import Link from "next/link";

type ServiceCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  image?: string;
};

export function ServiceCard({ title, description, href, icon, image }: ServiceCardProps) {
  return (
    <article className="service-card">
      {image ? (
        <div className="service-card-media">
          <Image alt="" fill sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 20vw" src={image} />
          <Image alt="" className="service-icon service-icon-float" height={58} src={icon} width={58} />
        </div>
      ) : (
        <Image alt="" className="service-icon" height={72} src={icon} width={72} />
      )}
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="learn-link" href={href}>
          Learn more <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}
