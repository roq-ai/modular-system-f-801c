const mapping: Record<string, string> = {
  'business-applications': 'business_application',
  feedbacks: 'feedback',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
