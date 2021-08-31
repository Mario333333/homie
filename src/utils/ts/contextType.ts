import { Language } from "./languages";
export default interface Context {
  labels?: Language;
  currentLanguage?: string;
  setCurrentlanguage?: React.Dispatch<React.SetStateAction<string>>;
  handleChange?: (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => void;
}
