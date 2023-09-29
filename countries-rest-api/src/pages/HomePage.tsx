import { useState, useMemo } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import data from "../../data.json";
import { CountryCard } from "../components/CountryCard";

export type TCountry = (typeof data)[number];

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

export const HomePage = () => {
    const [text, setText] = useState("");
    const [selectedRegion, setSelectedRegion] = useState("");
    const [toggle, setToggle] = useState(false);

    const handleRegionChange = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        setSelectedRegion(event.currentTarget.textContent as string);
        setToggle(false);
    };

    const filteredCountries = useMemo(() => {
        const filteredByText = data.filter((country) =>
            country.name.toLowerCase().includes(text.toLowerCase())
        );
        const filteredByRegion = selectedRegion
            ? filteredByText.filter(
                  (country) =>
                      country.region.toLowerCase() ===
                      selectedRegion.toLowerCase()
              )
            : filteredByText;
        return filteredByRegion;
    }, [text, selectedRegion]);

    return (
        <div className="max-w-screen-2xl pb-20 mx-auto p-4 flex flex-col gap-12">
            <div className="max-w-screen-xl md:mt-8 mx-auto w-full flex flex-col md:flex-row gap-8 md:justify-between items-center">
                <div className="flex rounded-lg  w-full md:max-w-lg items-center py-2 justify-between px-12 gap-8 dark:bg-dark-mode-elem bg-white shadow-md">
                    <GoSearch size={28} className="opacity-50" />
                    <input
                        className="p-2 w-full h-full dark:bg-dark-mode-elem"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        type="text"
                        placeholder="Search for a country..."
                    />
                </div>

                <div className="relative self-start md:self-baseline w-full max-w-[16rem] font-semibold ">
                    <div
                        className="w-full cursor-pointer bg-white dark:bg-dark-mode-elem rounded-md py-4 px-8 shadow-md flex items-center justify-between"
                        onClick={() => setToggle(!toggle)}
                    >
                        <p>
                            {selectedRegion
                                ? selectedRegion
                                : "Filter by region"}
                        </p>
                        <AiOutlineDown
                            className={`duration-100 ${toggle && "rotate-180"}`}
                        />
                    </div>
                    {toggle && (
                        <div className="bg-white shadow-md rounded-md px-1 py-4 dark:bg-dark-mode-elem left-0 top-16 absolute w-full flex-col gap-1">
                            {regions.map((reg) => (
                                <div
                                    onClick={handleRegionChange}
                                    className="w-full  hover:bg-light-mode-background hover:dark:bg-dark-mode-bg rounded-md bg-white dark:bg-dark-mode-elem cursor-pointer px-8  p-1"
                                    key={reg}
                                >
                                    {reg}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap gap-16 justify-center">
                {filteredCountries.slice(0, 30).map((country) => (
                    <CountryCard key={country.alpha2Code} country={country} />
                ))}
            </div>
        </div>
    );
};
