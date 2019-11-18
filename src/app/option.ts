
export interface Jobs {
    title: string;
}

export declare type Options = Jobs[];

export interface JobResponse {
    incomplete_results: boolean;
    options: Jobs;
}