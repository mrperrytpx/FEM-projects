import { Link } from "react-router-dom";
import { TCountry } from "../pages/HomePage";
import { formatPopulation } from "../utils/formatPopulation";

type TCountryCardProps = {
    country: TCountry;
};

export const CountryCard = ({ country }: TCountryCardProps) => {
    return (
        <Link
            to={`/${country.alpha3Code.toLowerCase()}`}
            className="flex max-w-[20rem] flex-col shadow bg-white dark:bg-dark-mode-elem rounded-md"
        >
            <img
                className="flex-1 aspect-video object-fill rounded-t-md"
                src={country.flags.png}
                alt={`Flag of ${country.name}`}
            />
            <div className="flex-1 p-8 pb-12 flex flex-col gap-4">
                <p className="text-2xl font-extrabold">{country.name}</p>
                <div>
                    <p className="font-semibold">
                        Population:{" "}
                        <span className="font-light dark:opacity-90">
                            {formatPopulation(country.population)}
                        </span>
                    </p>
                    <p className="font-semibold">
                        Region:{" "}
                        <span className="font-light dark:opacity-90">
                            {country.region}
                        </span>
                    </p>
                    <p className="font-semibold">
                        Capital:{" "}
                        <span className="font-light dark:opacity-90">
                            {country.capital}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
};
