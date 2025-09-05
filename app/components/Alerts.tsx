import { AlertCircleIcon, CheckCircle2Icon, InfoIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
export interface AlertsProps {
  type: string;
  title: string;
  message?: string;
}

export default function Alerts({ type, title, message }: AlertsProps) {
  let Icon;
  switch (type) {
    case "success":
      Icon = CheckCircle2Icon;
      break;
    case "error":
      Icon = AlertCircleIcon;
      break;
    default:
      Icon = InfoIcon;
      break;
  }

  return (
    <Alert variant={type === "error" ? "destructive" : type === "success" ? "success" : "default"}>
      {Icon && <Icon />}
      <AlertTitle>{title}</AlertTitle>
      {message && (
        <AlertDescription>
          {message}
        </AlertDescription>
      )}
    </Alert>
  );
}