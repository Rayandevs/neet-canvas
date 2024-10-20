export * from "./Canvas/Builder";

export * from "./types/_string";

/**
 * The current version that you are currently using.
 *
 * Note to developers: This needs to explicitly be `string` so it is not typed as a "const string" that gets injected by esbuild
 */
// eslint-disable-next-line @typescript-eslint/no-inferrable-types
export const version: string = "[VI]{{inject}}[/VI]";
