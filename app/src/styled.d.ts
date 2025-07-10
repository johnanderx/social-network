import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    background: string;
    text: string;
    input: string;
    placeholder: string;
    button: string;
  }
}
