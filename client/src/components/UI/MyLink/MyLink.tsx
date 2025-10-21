import Link from "next/link";
import { ReactNode } from "react";
import "./MyLink.sass";

interface Props {
  children: ReactNode;
  href: string
}

export default function MyLink({ children, href }: Props) {
  return (
    <>
      {typeof children === "string" ? (
        <Link className="custom-link" href={href}>{children}</Link>
      ) : (
        <p style={{ color: "red" }}>Передаваемый контент должен быть строкой</p>
      )}
    </>
  );
}
