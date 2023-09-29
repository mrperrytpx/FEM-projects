import { Link, useNavigate, useParams } from "react-router-dom";
import { VscArrowLeft } from "react-icons/vsc";

import data from "../../data.json";
import { formatPopulation } from "../utils/formatPopulation";

export const CountryPage = () => {
    const navigate = useNavigate();
    const params = useParams();

    const country = data.find(
        (country) =>
            country.alpha3Code.toLowerCase() === params.id?.toLowerCase()
    );

    if (!country) return null;

    return (
        <div className="p-8 mb-8 max-w-screen-xl mx-auto flex flex-col items-start w-full gap-10">
            <button
                className="p-2 bg-white dark:bg-dark-mode-elem flex mt-4 md:mt-12 items-center justify-center gap-1 rounded-sm shadow-lg min-w-[140px] text-center"
                onClick={() => navigate(-1)}
            >
                <VscArrowLeft size={24} />{" "}
                <span className="font-light dark:opacity-80">Back</span>
            </button>
            <div className="flex w-full flex-col lg:flex-row  gap-28">
                <div className="mt-6 mb-4 flex-1">
                    <img
                        className="object-fill aspect-[4/3]"
                        src={country.flag}
                        alt={`Flag of ${country.name}`}
                    />
                </div>
                <div className="flex text-xl flex-col flex-1 lg:justify-center gap-10">
                    <p className="text-2xl lg:text-4xl font-extrabold">
                        {country.name}
                    </p>
                    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                        <div className="flex flex-col items-start gap-2 ">
                            <p className="font-semibold">
                                Native Name:{" "}
                                <span className="font-light dark:opacity-80">
                                    {country.nativeName}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Population:{" "}
                                <span className="font-light dark:opacity-80">
                                    {formatPopulation(country.population)}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Region:{" "}
                                <span className="font-light dark:opacity-80">
                                    {country.region}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Sub Region:{" "}
                                <span className="font-light dark:opacity-80">
                                    {country.subregion}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Capital:{" "}
                                <span className="font-light dark:opacity-80">
                                    {country.capital}
                                </span>
                            </p>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <p className="font-semibold">
                                Top Level Domain:{" "}
                                <span className="font-light dark:opacity-80">
                                    {country.topLevelDomain}
                                </span>
                            </p>
                            <p className="font-semibold">
                                Currencies:{" "}
                                {country.currencies?.map((currency, idx) => (
                                    <span
                                        className="font-light dark:opacity-80"
                                        key={currency.code}
                                    >
                                        {(idx ? ", " : "") + currency.name}
                                    </span>
                                ))}
                            </p>
                            <p className="font-semibold">
                                Languages:{" "}
                                {country.languages.map((lang, idx) => (
                                    <span
                                        className="font-light dark:opacity-80"
                                        key={lang.iso639_1}
                                    >
                                        {(idx ? ", " : "") + lang.name}
                                    </span>
                                ))}
                            </p>
                        </div>
                    </div>
                    {country.borders?.length ? (
                        <div className="flex gap-4 flex-col lg:flex-row items-start">
                            <p className="text-lg lg:whitespace-nowrap lg:font-semibold lg:text-xl">
                                Border Countries:
                            </p>
                            <div className="flex items-center  gap-2 flex-wrap">
                                {country.borders.map((border) => (
                                    <Link
                                        className="p-2 bg-white dark:bg-dark-mode-elem rounded-sm shadow-lg min-w-[100px] text-center"
                                        key={border}
                                        to={`/${border.toLowerCase()}`}
                                    >
                                        <span className="font-light dark:opacity-80">
                                            {
                                                data.find(
                                                    (neighbour) =>
                                                        neighbour.alpha3Code ===
                                                        border
                                                )?.name
                                            }
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
