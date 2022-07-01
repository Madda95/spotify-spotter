export interface IMessage {
    message: string;
    type: "success" | "warning" | "error" | null;
}

export interface INorificationState extends IMessage {}

export const initialState: INorificationState = {
    message: "",
    type: null,
};
