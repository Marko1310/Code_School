export type LecturerType = {
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

export type WorkshopType = {
    id: number;
    title: string;
    description: string | null;
    themes: {
        id: number;
        name: string;
    }[];
    lecturers: {
        id: number;
        name: string;
    }[];
    difficulties: {
        id: number;
        level: string;
    } | null;
}
