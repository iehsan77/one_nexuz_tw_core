"use client";
import LanguageAwareLink from "./LanguageAwareLink/LanguageAwareLink";

export default function Breadcrumb({ data }) {
  return (
    <section className="pt-8 container">
      <ol className="flex flex-wrap items-center gap-2">
        {data.parents.map((p, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <LanguageAwareLink
              href={p.url || "#"}
              className="hover:underline text-gray-500 font-medium">
              {p.title}
            </LanguageAwareLink>
            <span className="text-gray-500 font-medium">/</span>
          </li>
        ))}
        <li className="font-medium text-primary">{data.current.title}</li>
      </ol>
    </section>
  );
}
