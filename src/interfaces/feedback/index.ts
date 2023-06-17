import { UserInterface } from 'interfaces/user';
import { BusinessApplicationInterface } from 'interfaces/business-application';
import { GetQueryInterface } from 'interfaces';

export interface FeedbackInterface {
  id?: string;
  content: string;
  user_id?: string;
  business_application_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  business_application?: BusinessApplicationInterface;
  _count?: {};
}

export interface FeedbackGetQueryInterface extends GetQueryInterface {
  id?: string;
  content?: string;
  user_id?: string;
  business_application_id?: string;
}
