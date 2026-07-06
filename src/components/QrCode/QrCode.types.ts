export interface QRCardProps {
  employeeName: string;
  designation: string;
  onDownload?: () => void;
  onEmail?: () => void;
}