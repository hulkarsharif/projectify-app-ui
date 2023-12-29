export const trimWhiteSpaces = (str: string) => {
    return str
        .split(" ")
        .filter((item) => item !== "")
        .join(" ");
};

export function getInitials(fullName: string): string {
    const names = fullName.split(" ");
    const initials = names.map((name) => name.charAt(0).toUpperCase()).join("");
    return initials;
}
