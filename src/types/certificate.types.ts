export type StatusCertificate = 'active' | 'pending' | 'withdrawn' | 'conducted' | 'canceled' | 'suspended';

export interface CertificateItem {
  slug: string;
  scheme: string;
  clientName: string;
  certificateNumber: string;
  scope: string;
  image: string;
  initialCertDate: string;
  endCertDate: string;
  surv1Date: string;
  surv2Date: string;
  locationNumber: number;
  category: StatusCertificate;
}
