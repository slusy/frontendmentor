export interface DateState {
  day: number | null;
  month: number | null;
  year: number | null;
}

export interface InputSectionProps {
  date: DateState;
  setDate: React.Dispatch<React.SetStateAction<DateState>>;
  error: ErrorState;
}

export const INPUT_KEY = ["day", "month", "year"] as const;

export interface DividerProps {
  handleSubmit: (
    date: DateState,
    setError: React.Dispatch<React.SetStateAction<ErrorState>>,
    setCalculatedDate: React.Dispatch<React.SetStateAction<DateState>>
  ) => Promise<void>;
  date: DateState;
  setError: React.Dispatch<React.SetStateAction<ErrorState>>;
  setCalculatedDate: React.Dispatch<React.SetStateAction<DateState>>;
}

export interface OutputSectionProps {
  calculatedDate: DateState;
}

interface IndividualErrorType {
  error: boolean;
  message?: string;
}

export interface ErrorState {
  day?: IndividualErrorType;
  month?: IndividualErrorType;
  year?: IndividualErrorType;
  common?: IndividualErrorType;
}
