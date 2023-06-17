import { FeedbackInterface } from 'interfaces/feedback';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface BusinessApplicationInterface {
  id?: string;
  name: string;
  configuration: string;
  organization_id?: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  organization?: OrganizationInterface;
  _count?: {
    feedback?: number;
  };
}

export interface BusinessApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  configuration?: string;
  organization_id?: string;
}
