import type { Country } from "@/app/page"; 
import Image from "next/image";
import Link from "next/link";

async function getCountryByName(name: string): Promise<Country> {
  const response = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

  const data = await response.json();
  return data[0];
}

export default async function CountryPage({ params: { name } }: { params: { name: string } }) {
  const country = await getCountryByName(name);

  const formatter = Intl.NumberFormat("en", { notation: "compact" });

  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl font-bold text-gray-800 my-16 text-center">
        {country.translations.por.common}
      </h1>
      <Link href="/" className="flex gap-1 text-xl mb-2 hover:text-gray-700 transition-color">
        <Image src="/arrow-back.svg" alt="Seta de voltar" width={24} height={24} />
        Voltar
      </Link>
      <article className="flex justify-between items-center min-w-full p-10 bg-white rounded-xl">
        <section className="flex flex-col gap-3">
          {country.capital && (
            <h2 className="text-xl text-gray-800">
              <b>🌁Capital:</b> {country.capital}
            </h2>
          )}
          <h2 className="text-xl text-gray-800">
            <b>🗺️Continente:</b> {country.region} {country.subregion && `- ${country.subregion}`}
          </h2>
          <h2 className="text-xl text-gray-800">
            <b>👨‍👩‍👧‍👧População:</b> {formatter.format(country.population)}
          </h2>
          {country.timezones && (
            <h2 className="text-xl text-gray-800">
              <b className="inline-block mr-2">Fuso horário:</b>
              {Object.values(country.timezones).map((timezone) => (
                <span
                  key={timezone}
                  className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm font-bold rounded-full"
                >
                  {timezone}
                </span>
              ))}
            </h2>
          )}
          {country.languages && (
            <h2 className="text-xl text-gray-800">
              <b>🗣️Línguas faladas:</b>
              <br />
              {Object.values(country.languages).map((language) => (
                <span
                  key={language}
                  className="inline-block px-2 bg-indigo-700 mr-2 text-white text-sm font-bold rounded-full"
                >
                  {language}
                </span>
              ))}
            </h2>
          )}
        </section>
        <div className="relative h-56 w-96 shadow-xl">
          <Image src={country.flags.svg} alt={country.flags.alt} fill className="object-cover rounded-xl" />
        </div>
      </article>
    </section>
  );
}
