import { Tables } from "./database.types";

export type LecturerType = {
    id: number;
    name: string;
    bio:string;
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
    name: string;
    description: string;
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
        name: string;
    } | null;
}

export type ThemeType = Tables<'themes'>
export type OrganizationType = Tables<'organizations'>
export type DifficultyType = Tables<'difficulties'>

export type Filters = {
    difficulties?: number[];
    themes?: number[];
    organizations?: number[];
  };