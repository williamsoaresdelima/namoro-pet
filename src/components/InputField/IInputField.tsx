interface IInputField {
  type: string;
  label: string; 
  placeholder?: string;
  pattern?: string;
  callBackFunction?: () => void;
}

export default IInputField;