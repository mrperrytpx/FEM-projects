export function formatPopulation(population: number): string {
    return new Intl.NumberFormat("en-GB").format(population);
}
