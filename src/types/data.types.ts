export type allLecturersType = {
    id: number;
    name: string;
    bio:string | null;
    profile_url:string | null;
    organizations: {
        id: number;
        name: string;
    } | null;
    themes: {
        id: number;
        name: string;
    }[];
}