export interface QRCardProps {
  employeeName: string;
  designation: string;
  qrUrl?: string;
  onDownload?: () => void;
  onEmail?: () => void;
}